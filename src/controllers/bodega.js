import { ObjectId } from 'mongodb'
import { BodegaModel } from '../models/bodega.js'

export class BodegaController {
  static async getBodegas (req, res) {
    try {
      const data = await BodegaModel.getBodegas()
      res.status(200).json(data)
    } catch (error) {
      console.log('Error en el controlador: ' + error.message)
      res.status(500).json({ error: 'Error al traer los datos' })
    }
  }

  static async addBodegas (req, res) {
    try {
      const { id, nombre, id_responsable, estado } = req.body
      // const objectId = new ObjectId(id_responsable)
      const bodega = { id, nombre, id_responsable, estado }
      const newBodega = await BodegaModel.addBodegas({ object: bodega })
      res.status(201).json(newBodega)
    } catch (error) {
      console.log('Error en el controlador: ' + error.message)
      res.status(500).json({ error: 'Error en el servidor' })
    }
  }
}
