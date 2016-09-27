'use strict'

const path = require('path')

module.exports = {
  env: process.env.NODE_ENV || 'development',  // environment variable, default = development
  port: process.env.PORT || 8080,              // server port
  root: path.normalize(`${__dirname}/..`)      // root path
}
