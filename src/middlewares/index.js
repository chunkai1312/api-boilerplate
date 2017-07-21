import morgan from 'morgan'
import compression from 'compression'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import methodOverride from 'method-override'
import addRequestId from 'express-request-id'
import { compose } from 'compose-middleware'
import expressWinston from 'express-winston'
import config from '../config'
import { accessLogger as winstonInstance } from '../config/winston'
import errorHandler from './errorhandler'

const logger = (config.env === 'production')
  ? () => expressWinston.logger({ winstonInstance, dynamicMeta: (req, res) => ({ requestId: req.id }) })
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

export default () => compose(middlewares)
export { errorHandler }
