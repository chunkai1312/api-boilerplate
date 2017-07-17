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
import winstonInstance from '../config/logger'

const logger = (config.env === 'development')
  ? () => morgan('dev')
  : () => expressWinston.logger({ winstonInstance })

const middlewares = [
  logger(),
  compression(),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  cookieParser(),
  cors(),
  helmet(),
  methodOverride()
]

if (config.env === 'test') middlewares.shift()

export errorHandler from './errorhandler'
export default () => compose(middlewares)
