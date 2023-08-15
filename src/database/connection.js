import dotenv from 'dotenv'
import { MongoClient, ServerApiVersion } from 'mongodb'
dotenv.config()
const uri = `mongodb+srv://${process.env.ATLAS_USER}:${process.env.ATLAS_PASSWORD}@clusterauthenticacion.lobajpy.mongodb.net/`

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export async function connect () {
  try {
    await client.connect()
    const database = client.db('db_bodegas_campus')
    return database // Retorna el objeto de la base de datos
  } catch (error) {
    console.error('Error connecting to the database')
    console.error(error.message)
    throw error // Lanza el error para manejarlo en el código que llama a esta función
  }
}

export async function closeConnection () {
  try {
    await client.close()
    console.log('Database connection closed')
  } catch (error) {
    console.error('Error closing the database connection')
    console.error(error)
  }
}
