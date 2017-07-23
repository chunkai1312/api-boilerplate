import mongoose from 'mongoose'
import glob from 'glob'
import config from '../config'

// mongoose.set('debug', true)

mongoose.Promise = global.Promise

mongoose.connect(config.mongoDB.uri, config.mongoDB.options)

mongoose.connection
  .on('connected', () => console.log(`Mongoose default connection open to ${config.mongoDB.uri}`))
  .on('disconnected', () => console.log('Mongoose default connection disconnected'))
  .on('error', (err) => console.error(`Mongoose default connection error: ${err}`))

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection disconnected through app termination')
    process.exit(0)
  })
})

const models = glob.sync(`${config.path.context}/models/*.js`)
models.forEach(model => require(model))
