import Koa from 'koa'
import mongoose from 'mongoose'
import middlewares from './api/middlewares'
import routes from './api/routes'
import config from './config'

//
// Database connection
// -----------------------------------------------------------------------------
mongoose.Promise = global.Promise
mongoose.connect(config.mongoDB.uri, config.mongoDB.options)
mongoose.connection
  .on('connected', () => console.log(`Mongoose connection open to ${config.mongoDB.uri}`))
  .on('disconnected', () => console.log('Mongoose connection disconnected'))
  .on('error', (err) => console.log(`Mongoose connection error: ${err}`))

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection disconnected through app termination')
    process.exit(0)
  })
})

//
// Koa server settings
// -----------------------------------------------------------------------------
const app = new Koa()

app.use(middlewares())
app.use(routes())

app.listen(config.port, () => {
  console.log('Koa server listening on %d, in %s mode', config.port, app.env)
})

export default app
