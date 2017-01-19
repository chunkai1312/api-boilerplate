import { merge } from 'lodash'
import config from './config'
import development from './env/development'
import test from './env/test'
import staging from './env/staging'
import production from './env/production'

export default {
  development: merge({}, config, development),
  test: merge({}, config, test),
  staging: merge({}, config, staging),
  production: merge({}, config, production)
}[process.env.NODE_ENV || 'development']
