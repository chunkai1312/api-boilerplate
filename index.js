// 'use strict'

// const env = process.env.NODE_ENV || 'development'
// const port = process.env.PORT || 4000
// const src = (env === 'production') ? './build/app' : './src/app'

// require('babel-polyfill')
// if (env === 'development') {
//   require('babel-register')
// }

// const app = require(src).default
// app.listen(port, () => console.log('server started 4000'))

require('babel-polyfill')
require('babel-register')
require('./src/app')
