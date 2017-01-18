'use strict'

const http = require('http')
const env = process.env.NODE_ENV || 'development'
const port = process.env.PORT || 8080

const app = (env === 'development')
  ? require('babel-register') && require('./src/app').default
  : require('./dist/app').default

http.createServer(app).listen(port, () => {
  console.log('Express server listening on %d, in %s mode', port, env)
})
