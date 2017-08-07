import mongoose from 'mongoose'
import logger from '../lib/logger'
import config from '../config'

// mongoose.set('debug', true)

mongoose.Promise = global.Promise

mongoose.connection
  .on('connected', () => logger.verbose(`Mongoose default connection open to ${config.mongoDB.uri}`))
  .on('disconnected', () => logger.verbose('Mongoose default connection disconnected'))
  .on('error', (err) => logger.verbose(`Mongoose default connection error: ${err}`))

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    logger.verbose('Mongoose connection disconnected through app termination')
    process.exit(0)
  })
})

export default {
  connect: (cb) => {
    mongoose.connect(config.mongoDB.uri, config.mongoDB.options, cb)
  }
}
