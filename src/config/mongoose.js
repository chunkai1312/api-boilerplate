import mongoose from 'mongoose'

function connect (config, callback) {
  mongoose.Promise = global.Promise
  mongoose.connection
    .once('open', callback)
    .on('connected', () => console.log(`Mongoose connection open to ${config.mongoDB.uri}`))
    .on('disconnected', () => console.log('Mongoose connection disconnected'))
    .on('error', (err) => console.log(`Mongoose connection error: ${err}`))

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongoose connection disconnected through app termination')
      process.exit(0)
    })
  })

  return mongoose.connect(config.mongoDB.uri, config.mongoDB.options)
}

export default connect
