import path from 'path'

export default {
  env: process.env.NODE_ENV,

  path: {
    root: path.normalize(`${__dirname}/../..`),
    context: path.normalize(`${__dirname}/..`)
  },

  server: {
    host: process.env.HOST,
    port: process.env.PORT
  },

  mongoDB: {
    uri: process.env.MONGODB_URI,
    options: {}
  }
}
