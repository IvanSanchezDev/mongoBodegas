import { Router } from 'express'
import { BodegaController } from '../controllers/bodega.js'

const appBodegas = Router()

appBodegas.get('/getBodegas', BodegaController.getBodegas)

export default appBodegas
