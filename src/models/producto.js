import { connect, closeConnection, client } from '../database/connection.js'

export class ProductoModel {
  static async getProductos () {
    try {
      const db = await connect()
      const productos = db.collection('inventarios')
      const result = productos.aggregate([
        {
          $lookup: {
            from: 'productos',
            localField: 'id_producto',
            foreignField: 'id',
            as: 'producto'
          }
        },
        {
          $unwind: '$producto'
        },
        {
          $group: {
            _id: {
              id: '$producto.id',
              nombre: '$producto.nombre'
            },
            total: { $sum: '$cantidad' }
          }
        },
        {
          $project: {
            _id: 0,
            id: '$_id.id',
            nombre: '$_id.nombre',
            total: { $toDouble: '$total' }
          }
        },
        {
          $sort: { total: -1 }
        }
      ]).toArray()
      return result
    } catch (error) {
      console.log('error al traer el total')
    }
  }

  static async transladoProductos ({ object, object2 }) {
    const db = await connect()
    const session = client.startSession() // inicia una nueva sesion en la bd
    try {
      session.startTransaction() // inicia una transaccion en la sesion

      // A partir de este punto, todas las operaciones dentro de este bloque formarán parte de la misma transacción.
      const inventarios = db.collection('inventarios')
      const historiales = db.collection('historiales')

      const inventarioOrigen = await inventarios.findOneAndUpdate(
        { id_producto: object.idProducto, id_bodega: object.idBodegaOrigen, cantidad: { $gte: object.cantidad } },
        { $inc: { cantidad: -object.cantidad } },
        { session, returnOriginal: false }
      )

      if (inventarioOrigen.value) {
        await inventarios.findOneAndUpdate(
          {
            id_producto: object.idProducto,
            id_bodega: object.idBodegaDestino
          },
          { $inc: { cantidad: object.cantidad } },
          { session, returnOriginal: false }
        )

        const historial = {
          id_bodega_origen: object2.idBodegaOrigen,
          id_bodega_destino: object2.idBodegaDestino,
          cantidad: object2.cantidad,
          id_inventario: inventarioOrigen.value._id
        }

        const result = await historiales.insertOne(historial, { session })

        await session.commitTransaction() // Confirma la transacción.
        session.endSession() // cierra la sesion

        return result
      } else {
        await session.abortTransaction() // Revoca la transacción en caso de algún error.
        session.endSession() // Finaliza la sesión en caso de error.

        return 'No se pudo hacer correctamente la transaccion, verifique la informacion'
      }
    } catch (error) {
      await session.abortTransaction()
      session.endSession()
      console.log(error.message)
    } finally {
      await closeConnection()
    }
  }
}
