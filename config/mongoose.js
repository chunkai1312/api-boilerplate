'use strict'

const mongoose = require('mongoose')
const logger = require('./logger')
const config = require('../config')
mongoose.Promise = global.Promise

module.exports = function () {
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
