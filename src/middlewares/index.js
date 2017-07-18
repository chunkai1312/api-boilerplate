import morgan from 'morgan'
import compression from 'compression'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import methodOverride from 'method-override'
import { compose } from 'compose-middleware'
import expressWinston from 'express-winston'
import config from '../config'
import { accessLogger as winstonInstance } from '../config/logger'
import addRequestId from 'express-request-id'

const logger = (config.env === 'production')
  ? () => expressWinston.logger({ winstonInstance })
  : () => morgan('dev')

const middlewares = [
  logger(),
  compression(),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  cookieParser(),
  cors(),
  helmet(),
  methodOverride(),
  addRequestId()
]

if (config.env === 'test') middlewares.shift()

export errorHandler from './errorhandler'
export default () => compose(middlewares)
