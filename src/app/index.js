import express from 'express'
import middlewares, { errorHandler } from './middlewares'
import routes from './routes'

const app = express()
  .use(middlewares())
  .use(routes())
  .use(errorHandler())

export default app
