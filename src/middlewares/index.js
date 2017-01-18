import morgan from 'morgan'
import compression from 'compression'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import methodOverride from 'method-override'
import { compose } from 'compose-middleware'
import expressWinston from 'express-winston'
import winstonInstance from '../../config/logger'

const logger = (process.env.NODE_ENV === 'production')
  ? () => expressWinston.logger({ winstonInstance })
  : () => morgan('dev')

const middlewares = () => compose([
  logger(),
  compression(),
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  cookieParser(),
  cors(),
  helmet(),
  methodOverride()
])

export errorhandler from 'api-error-handler'
export notfound from './notfound'
export default middlewares
