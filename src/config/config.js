import path from 'path'

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  root: path.normalize(`${__dirname}/../..`)
}
