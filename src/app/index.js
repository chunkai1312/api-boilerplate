import express from 'express'
import middlewares, { errorHandler } from './middlewares'
import routes from './routes'

const app = express()

app.use(middlewares())
app.use(routes())
app.use(errorHandler())

export default app
