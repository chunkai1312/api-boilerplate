import path from 'path'

export default {
  env: process.env.NODE_ENV,
  host: process.env.HOST,
  port: process.env.PORT,

  root: path.normalize(`${__dirname}/../..`),
  context: path.normalize(`${__dirname}/..`),

  mongoDB: {
    uri: process.env.MONGODB_URI,
    options: {}
  }
}
