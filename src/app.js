import 'babel-polyfill'

import express from 'express'
import middlewares, { errorhandler } from './middlewares'
import routes from './routes'

require('../config/mongoose')()

const app = express()

app.use(middlewares())
app.use(routes())
app.use(errorhandler())

export default app
