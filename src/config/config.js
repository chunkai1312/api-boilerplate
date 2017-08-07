import path from 'path'

export default {
  env: process.env.NODE_ENV,

  path: {
    root: path.resolve(__dirname, '../..'),
    app: path.resolve(__dirname, '../app')
  },

  server: {
    host: process.env.HOST,
    port: process.env.PORT
  },

  mongoDB: {
    uri: process.env.MONGODB_URI,
    options: {
      // useMongoClient: true
    }
  },

  autoload: [
    'models',
    'repositories',
    'services',
    'middlewares',
    'controllers',
    'routes',
    'index.js'
  ]
}
