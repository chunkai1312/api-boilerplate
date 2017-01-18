'use strict'

const http = require('http')
const config = require('./config')
const logger = require('./config/logger')

const app = (config.env === 'production')
  ? require('./dist/app').default
  : require('babel-register') && require('./src/app').default

http.createServer(app).listen(config.port, () => {
  logger.verbose('Express server listening on %d, in %s mode', config.port, config.env)
})
