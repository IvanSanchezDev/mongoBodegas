import { Router } from 'express'
import { InventarioController } from '../controllers/inventario.js'
import { middlewareVerify, DTOData } from '../middlewares/verifyCollection.js'

const appInventario = Router()

appInventario.post('/addInventario', middlewareVerify, DTOData, InventarioController.addInventario)

export default appInventario
