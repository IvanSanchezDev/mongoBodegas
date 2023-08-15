import { connect } from '../database/connection.js'

export class InventarioModel {
  static async addInventario ({ object }) {
    try {
      const { id_producto, id_bodega, cantidad } = object
      const db = await connect()
      const inventarios = db.collection('inventarios')
      const result = await inventarios.findOne({ id_producto, id_bodega })
      if (result !== null) {
        const result2 = inventarios.updateOne(
          {
            id_producto,
            id_bodega
          }, {
            $inc: {
              cantidad
            }
          }
        )
        return result2
      } else {
        console.log(object)
        const { insertedId } = await inventarios.insertOne({ object })
        return {
          id: insertedId,
          ...object
        }
      }
    } catch (error) {
      console.log('erorr modeloo')
      console.log(error.errInfo.details.schemaRulesNotSatisfied[0].specifiedAs)
    }
  }
}
