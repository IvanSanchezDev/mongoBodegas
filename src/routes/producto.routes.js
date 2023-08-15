import { Router } from 'express'
import { ProductoController } from '../controllers/producto.js'

const appProductos = Router()

appProductos.get('/getTotalProductos', ProductoController.getProductos)

export default appProductos
