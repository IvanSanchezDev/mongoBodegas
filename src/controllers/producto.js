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
}
