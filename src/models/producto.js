import { connect, closeConnection } from '../database/connection.js'

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
    try {
      const db = await connect()
      const inventarios = db.collection('inventarios')
      const historiales = db.collection('historiales')

      const inventarioOrigen = await inventarios.findOne({ id_producto: object.idProducto, id_bodega: object.idBodegaOrigen })
      if (inventarioOrigen && inventarioOrigen.cantidad > object.cantidad) {
        const updateBodegaOrigen = await inventarios.updateOne(
          {
            id_producto: object.idProducto,
            id_bodega: object.idBodegaOrigen
          },
          {
            $inc: {
              cantidad: -object.cantidad
            }
          })

        if (updateBodegaOrigen.modifiedCount > 0) {
          const updateBodegaDestino = await inventarios.updateOne(
            {
              id_producto: object.idProducto,
              id_bodega: object.idBodegaDestino
            },
            {
              $inc: {
                cantidad: +object.cantidad
              }
            }
          )

          if (updateBodegaDestino.modifiedCount > 0) {
            console.log(object2)
            const result = await historiales.insertOne(
              {
                id_bodega_origen: object2.idBodegaOrigen,
                id_bodega_destino: object2.idBodegaDestino,
                cantidad: object2.cantidad,
                id_inventario: inventarioOrigen._id
              })
            return result
          } else {
            return 'No se puede actualizar inventario destino'
          }
        } else {
          return 'No se puede actualizar inventario origen'
        }
      } else {
        return 'No se puede, la cantidad de productos es menor'
      }
    } catch (error) {
      console.log(error.message)
    }
  }
}
