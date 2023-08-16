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
    const session = client.startSession()
    try {
      session.startTransaction()
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

        await session.commitTransaction()
        session.endSession()

        return result
      } else {
        await session.abortTransaction()
        session.endSession()

        return 'No se pudo hacer correctamente la transaccion, verifique el stock'
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
