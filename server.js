'use strict'

const http = require('http')
const env = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 8080
const dir = (env === 'development') ? require('babel-register') && './src' : './dist'
const app = require(`${dir}/app`)
const logger = require(`${dir}/config/logger`)

http.createServer(app).listen(port, () => {
  logger.verbose('Express server listening on %d, in %s mode', port, env)
})
