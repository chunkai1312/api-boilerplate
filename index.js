'use strict'

const http = require('http')
const config = require('./config')
const logger = require('./config/logger')

const app = (config.env === 'development')
  ? require('babel-register') && require('./src/app').default
  : require('./dist/app').default

http.createServer(app).listen(config.port, () => {
  logger.verbose('Express server listening on %d, in %s mode', config.port, config.env)
})
