'use strict'

const http = require('http')
const config = require('./config')

const app = (config.env === 'production')
  ? require('./dist/app').default
  : require('babel-register') && require('./src/app').default

http.createServer(app).listen(config.port, () => {
  console.log('Express server listening on %d, in %s mode', config.port, config.env)
})

// require('babel-polyfill')
// if (env === 'development') {
//   require('babel-register')
//   require('./src/app')
// } else {
//   require('./dist/app')
// }
