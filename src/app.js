import express from 'express'

const app = express()
app.use(express.json())

app.use((req, res) => {
  res.send('404 not found')
})

const port = 1234

app.listen(port, () => {
  console.log(`server listening on port http://localhost:${port}`)
})
