'use strict'

module.exports = {
  mongoDB: {
    uri: 'mongodb://localhost:27017/api-seed-staging',
    options: {
      server: { socketOptions: { keepAlive: 1 } }
    }
  }
}
