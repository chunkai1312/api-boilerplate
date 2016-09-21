'use strict'

const path = require('path')
const express = require('express')
const compression = require('compression')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const expressWinston = require('express-winston')
const errorhandler = require('errorhandler')
const logger = require('./logger')
const api = require('../api')
const config = require('../config')

module.exports = function (app) {
  // middlewares
  app.use(compression())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(cookieParser())
  app.use(methodOverride())
  app.use(helmet())
  app.use(cors())
  app.use(express.static(path.join(config.root, 'public')))

  // logger
  app.get('env') === 'development'
    ? app.use(morgan('dev'))
    : app.use(expressWinston.logger({ winstonInstance: logger }))

  // routes
  app.use('/api', api)
  app.use('/*', (req, res, next) => res.status(404).end('Not Found'))

  // error handler
  app.get('env') === 'development'
    ? app.use(errorhandler())
    : app.use(expressWinston.errorLogger({ winstonInstance: logger }))
}
