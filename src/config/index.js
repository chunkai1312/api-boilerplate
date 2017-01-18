import path from 'path'
import { merge } from 'lodash'
import development from './env/development'
import test from './env/test'
import staging from './env/staging'
import production from './env/production'

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  root: path.normalize(`${__dirname}/../..`)
}

export default {
  development: merge({}, config, development),
  test: merge({}, config, test),
  staging: merge({}, config, staging),
  production: merge({}, config, production)
}[process.env.NODE_ENV || 'development']
