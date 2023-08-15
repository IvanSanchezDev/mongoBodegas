import { connect, closeConnection } from '../database/connection.js'

export class BodegaModel {
  static async getBodegas () {
    try {
      const db = await connect()
      const bodegas = db.collection('bodegas')
      const result = await bodegas.find({}).sort({ nombre: 1 }).toArray()
      await closeConnection()
      return result
    } catch (error) {
      console.error('Error al traer las bodegas')
      console.error(error.message)
    }
  }
}
