import { merge } from 'lodash'
import local from './local'
import * as env from './env'

export default merge(local, env[local.env])
