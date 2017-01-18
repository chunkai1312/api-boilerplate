import mongoose from 'mongoose'
import logger from './logger'
import config from '../config'

mongoose.Promise = global.Promise

export default function connectMongoDB () {
  mongoose.connect(config.mongoDB.uri, config.mongoDB.options)

  mongoose.connection
    .on('connected', () => logger.verbose(`Mongoose connection open to ${config.mongoDB.uri}`))
    .on('disconnected', () => logger.verbose('Mongoose connection disconnected'))
    .on('error', (err) => logger.error(`Mongoose connection error: ${err}`))

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      logger.verbose('Mongoose connection disconnected through app termination')
      process.exit(0)
    })
  })
}
