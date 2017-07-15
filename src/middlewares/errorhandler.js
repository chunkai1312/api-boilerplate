import apiErrorHandler from 'api-error-handler'
import expressWinston from 'express-winston'
import { errors } from 'compose-middleware'
import config from '../config'
import winstonInstance from '../config/logger'

const errorLogger = (config.env === 'development')
  ? () => (err, req, res, next) => winstonInstance.error(err) || next(err)
  : () => expressWinston.errorLogger({ winstonInstance })

const handlers = [
  errorLogger(),
  apiErrorHandler()
]

if (config.env === 'test') handlers.shift()

export default () => errors(handlers)
