import { Router } from 'express'
import { InventarioController } from '../controllers/inventario.js'

const appInventario = Router()

appInventario.post('/addInventario', InventarioController.addInventario)

export default appInventario
