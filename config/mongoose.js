'use strict'

const mongoose = require('mongoose')
const logger = require('./logger.js')
const config = require('../config')
mongoose.Promise = global.Promise

module.exports = function () {
  mongoose.connect(config.mongoDB.uri, config.mongoDB.options)
  mongoose.connection.on('error', (err) => {
    logger.error(`MongoDB connection error: ${err}`)
  })
}
