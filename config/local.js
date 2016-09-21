'use strict'

const path = require('path')

module.exports = {

  // Environment Variable, default = development
  env: process.env.NODE_ENV || 'development',

  // Server Port
  port: process.env.PORT || 8080,

  // Server IP
  ip: process.env.IP || '127.0.0.1',

  // Root path of server
  root: path.normalize(`${__dirname}/..`)

}
