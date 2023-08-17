import { Router } from 'express'
import { ProductoController } from '../controllers/producto.js'
import { middlewareVerify } from '../middlewares/verifyCollection.js'

const appProductos = Router()

appProductos.get('/getTotalProductos', middlewareVerify, ProductoController.getProductos)
appProductos.post('/transladoProductos', middlewareVerify, ProductoController.transladoProductos)

export default appProductos
