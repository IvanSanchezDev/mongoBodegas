import { Router } from 'express'
import { BodegaController } from '../controllers/bodega.js'
import { middlewareVerify, DTOData } from '../middlewares/verifyCollection.js'

const appBodegas = Router()

appBodegas.get('/getBodegas', middlewareVerify, BodegaController.getBodegas)
appBodegas.post('/addBodegas', middlewareVerify, DTOData, BodegaController.addBodegas)

export default appBodegas
