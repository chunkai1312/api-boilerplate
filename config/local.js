'use strict'

const path = require('path')

module.exports = {
  env: process.env.NODE_ENV || 'development',  // environment variable, default = development
  port: process.env.PORT || 8080,              // server port
  ip: process.env.IP || '127.0.0.1',           // server ip
  root: path.normalize(`${__dirname}/..`)      // root path
}
