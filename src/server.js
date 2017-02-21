import express from 'express'
import http from 'http'
import path from 'path'

const app = express()
const port = 3000

app.use(express.static(path.resolve('public')))
app.get('*', (req, res) => { res.sendFile(path.resolve('public/index.html')) })

const server = http.createServer(app)

server.listen(port, () => {
  console.info(`Listening on ${port}`)
})
