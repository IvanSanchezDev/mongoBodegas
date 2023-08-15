import { BodegaModel } from '../models/bodega.js'

export class BodegaController {
  static async getBodegas (req, res) {
    const data = await BodegaModel.getBodegas()
    res.json(data)
  }
}
