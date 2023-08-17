import { connect, closeConnection } from '../database/connection.js'

export class BodegaModel {
  static async getBodegas () {
    try {
      const db = await connect()
      const bodegas = db.collection('bodegas')
      const result = await bodegas.find({}).sort({ nombre: -1 }).toArray()

      return result
    } catch (error) {
      console.error('Error al traer las bodegas')
      console.error(error.message)
    } finally {
      await closeConnection()
    }
  }

  static async addBodegas ({ object }) {
    try {
      const db = await connect()
      const bodegas = db.collection('bodegas')
      console.log(object)
      const { insertedId } = await bodegas.insertOne(object)
      return {
        id: insertedId,
        ...object
      }
    } catch (error) {
      console.error('Error al guardar la bodegas')
      console.error(error.message)
    } finally {
      await closeConnection()
    }
  };
}
