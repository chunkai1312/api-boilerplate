import expressWinston from 'express-winston'
import httpErrors from 'http-errors-express'
import { errors } from 'compose-middleware'
import { errorLogger as winstonInstance } from '../config/logger'
import config from '../config'

const errorLogger = (config.env === 'production')
  ? () => expressWinston.errorLogger({ winstonInstance })
  : () => (err, req, res, next) => winstonInstance.error(err) || next(err)

const handlers = [
  errorLogger(),
  httpErrors({
    /* eslint handle-callback-err: 0 */
    before: (err, req, isExposed, cb) => cb()
  })
]

export default () => errors(handlers)
