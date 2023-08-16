import { ObjectId } from 'mongodb'
import { InventarioModel } from '../models/inventario.js'

export class InventarioController {
  static async addInventario (req, res) {
    try {
      const { id_producto, id_bodega, cantidad } = req.body
      const idProducto = new ObjectId(id_producto)
      const idBodega = new ObjectId(id_bodega)
      const inventario = { id_producto: idProducto, id_bodega: idBodega, cantidad }
      const newMovie = await InventarioModel.addInventario({ object: inventario })
      res.status(201).json(newMovie)
    } catch (error) {
      console.log('Error en el controlador: ' + error.message)
      res.status(500).json({ error: 'Error al traer los datos' })
    }
  }
}
