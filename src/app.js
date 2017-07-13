import express from 'express'
import middlewares, { errorHandler } from './middlewares'
import routes from './routes'
import connectMongoDB from './config/mongoose'

connectMongoDB()

const app = express()
  .use(middlewares())
  .use(routes())
  .use(errorHandler())

export default app
