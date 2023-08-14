import express from 'express'
import appBodegas from './routes/bodega.routes'
import appProductos from './routes/producto.routes'
import appInventario from './routes/inventario.routes'

const app = express()
app.use(express.json())

app.use('/api/bodega', appBodegas)
app.use('/api/producto', appProductos)
app.use('/api/inventario', appInventario)

app.use((req, res) => {
  res.send('404 not found')
})

const port = process.env.PORT ?? 1234

app.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`)
})
