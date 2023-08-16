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
      const { nombre, id_responsable, estado } = req.body
      const objectId = new ObjectId(id_responsable)
      const bodega = { nombre, id_responsable: objectId, estado }
      const newMovie = await BodegaModel.addBodegas({ object: bodega })
      res.status(201).json(newMovie)
    } catch (error) {
      console.log('Error en el controlador: ' + error.message)
      res.status(500).json({ error: 'Error en el servidor' })
    }
  }
}
