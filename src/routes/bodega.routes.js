import { Router } from 'express'
import { BodegaController } from '../controllers/bodega.js'

const appBodegas = Router()

appBodegas.get('/getBodegas', BodegaController.getBodegas)
appBodegas.post('/addBodegas', BodegaController.addBodegas)

export default appBodegas
