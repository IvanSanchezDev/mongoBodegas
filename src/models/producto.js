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
}
