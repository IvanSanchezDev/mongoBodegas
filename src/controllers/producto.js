import { ObjectId } from 'mongodb'
import { ProductoModel } from '../models/producto.js'

export class ProductoController {
  static async getProductos (req, res) {
    try {
      const data = await ProductoModel.getProductos()
      res.json(data)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async transladoProductos (req, res) {
    try {
      const { id_producto, id_bodega_origen, id_bodega_destino, cantidad } = req.body
      const idProducto = new ObjectId(id_producto)
      const idBodegaOrigen = new ObjectId(id_bodega_origen)
      const idBodegaDestino = new ObjectId(id_bodega_destino)
      const translado = { idProducto, idBodegaOrigen, idBodegaDestino, cantidad }
      const historial = { idBodegaOrigen, idBodegaDestino, cantidad }
      const result = await ProductoModel.transladoProductos({ object: translado, object2: historial })
      if (typeof result === 'object') {
        res.status(201).json(result)
      } else {
        res.status(406).json({ message: result })
      }
    } catch (error) {
      console.log(error.message)
    }
  }
}
