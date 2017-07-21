#!/usr/bin/env node

require('dotenv').config()

var env = process.env.NODE_ENV || 'development'
var host = process.env.HOST || '0.0.0.0'
var port = process.env.PORT || 8080

var server = (env === 'development')
  ? require('babel-register') && require('../src/app').default
  : require('../dist/app').default

server.listen(port, host, function () {
  console.log('Server is running on %s:%d, in %s mode', host, port, env)
})
