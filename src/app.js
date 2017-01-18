import 'babel-polyfill'

import express from 'express'
import middlewares, { errorHandler } from './middlewares'
import routes from './routes'
import connectMongoDB from './config/mongoose'

const app = express()

app.use(middlewares())
app.use(routes())
app.use(errorHandler())

connectMongoDB()

export default app
