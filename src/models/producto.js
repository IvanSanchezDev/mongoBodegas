import { connect, closeConnection, client } from '../database/connection.js'

export class ProductoModel {
  static async getProductos () {
    try {
      const db = await connect()
      const inventarios = db.collection('inventarios')
      const result = inventarios.aggregate([
        {
          $lookup: {
            from: 'bodegas',
            let: {
              id_bodega: '$id_bodega'
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ['$id', '$$id_bodega']
                  }
                }
              }
            ],
            as: 't2'
          }
        },
        {
          $unwind: {
            path: '$t2',
            preserveNullAndEmptyArrays: false
          }
        },
        {
          $lookup: {
            from: 'productos',
            let: {
              id_producto: '$id_producto'
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ['$id', '$$id_producto']
                  }
                }
              }
            ],
            as: 't3'
          }
        },
        {
          $unwind: {
            path: '$t3',
            preserveNullAndEmptyArrays: false
          }
        },
        {
          $group: {
            _id: {
              t2_nombre: '$t2.nombre',
              t3_nombre: '$t3.nombre'
            },
            total: {
              $sum: '$cantidad'
            }
          }
        },
        {
          $sort: {
            '_id.total': -1
          }
        },
        {
          $project: {
            bodega: '$_id.t2_nombre',
            producto: '$_id.t3_nombre',
            total: 1,
            _id: 0
          }
        }
      ]).toArray()
      return result
    } catch (error) {
      console.log('error al traer el total')
    }
  }

  static async transladoProductos ({ object }) {
    const db = await connect()
    const session = client.startSession() // inicia una nueva sesion en la bd
    try {
      session.startTransaction() // inicia una transaccion en la sesion

      // A partir de este punto, todas las operaciones dentro de este bloque formarán parte de la misma transacción.
      const inventarios = db.collection('inventarios')
      const historiales = db.collection('historiales')

      const { id, id_producto, id_bodega_origen, id_bodega_destino, cantidad } = object

      const inventarioOrigen = await inventarios.findOneAndUpdate(
        { id_producto, id_bodega: id_bodega_origen, cantidad: { $gte: cantidad } },
        { $inc: { cantidad: -cantidad } },
        { session, returnOriginal: false }
      )

      if (inventarioOrigen.value) {
        const inventarioDestino = await inventarios.findOneAndUpdate(
          {
            id_producto,
            id_bodega: id_bodega_destino
          },
          { $inc: { cantidad } },
          { session, returnOriginal: false }
        )

        if (inventarioDestino.value) {
          const historial = {
            id,
            id_bodega_origen,
            id_bodega_destino,
            cantidad,
            id_inventario: inventarioOrigen.value.id
          }

          const result = await historiales.insertOne(historial, { session })

          await session.commitTransaction() // Confirma la transacción.
          session.endSession() // cierra la sesion

          const { insertedId } = result

          return { insertedId, message: 'Transaccion exitosa' }
        } else {
          await session.abortTransaction()
          session.endSession()

          return 'No se pudo actualizar inventario destino'
        }
      } else {
        await session.abortTransaction() // Revoca la transacción en caso de algún error.
        session.endSession() // Finaliza la sesión en caso de error.

        return 'No se pudo actualizar inventario origen o no hay suficiente stock'
      }
    } catch (error) {
      await session.abortTransaction()
      session.endSession()
      return 'Error durante la transacción'
    } finally {
      await closeConnection()
    }
  }
}
