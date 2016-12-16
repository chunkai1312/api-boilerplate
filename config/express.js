'use strict'

const compression = require('compression')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const expressWinston = require('express-winston')
const errorHandler = require('api-error-handler')
const logger = require('./logger')
const api = require('../api/routes')

module.exports = function (app) {
  /* middlewares */
  app.use(compression())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
  app.use(cookieParser())
  app.use(methodOverride())
  app.use(helmet())
  app.use(cors())

  /* logger */
  app.get('env') === 'development'
    ? app.use(morgan('dev'))
    : app.use(expressWinston.logger({ winstonInstance: logger }))

  /* routes */
  app.use('/api', api)
  app.use('/*', (req, res) => res.status(404).end('Not Found'))

  /* error handlers */
  app.get('env') === 'development'
    ? app.use((err, req, res, next) => logger.error(err) || next(err))
    : app.use(expressWinston.errorLogger({ winstonInstance: logger }))

  app.use(errorHandler())
}
