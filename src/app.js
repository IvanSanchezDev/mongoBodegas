import express from 'express'
import appBodegas from './routes/bodega.routes.js'
import appProductos from './routes/producto.routes.js'
import appInventario from './routes/inventario.routes.js'
import { appToken, appVerify } from './helpers/jwt.js'

const app = express()
app.use(express.json())

app.use('/api/:collection', (req, res, next) => {
  const collection = req.params.collection
  req.collection = collection
  next()
})

app.use('/api/bodega', appVerify, appBodegas)
app.use('/api/producto', appVerify, appProductos)
app.use('/api/inventario', appVerify, appInventario)
app.use('/api/token', appToken)

app.use((req, res) => {
  res.send('404 not found')
})

const port = process.env.PORT ?? 1234

app.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`)
})
