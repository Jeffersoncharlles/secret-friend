import { env } from './env/env'
import cors from 'cors'
import express from 'express'
// import https from 'https'
import http from 'http'
import { routes } from './routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

const runServer = (port: number, server: http.Server) => {
  server.listen(port, () => {
    console.log(`🚀 http Server Running! ${port}`)
  })
}

const regularServer = http.createServer(app)

if (env.NODE_ENV === 'production') {
  // TODO: configurar SSL
  // TODO: rodar server na 80 e na 443
} else {
  const serverPort: number = env.PORT ?? 3333
  runServer(serverPort, regularServer)
}
