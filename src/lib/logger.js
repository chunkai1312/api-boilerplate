import path from 'path'
import winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import config from '../config'

const logger = new winston.Logger({
  level: 'debug',
  transports: [
    new winston.transports.Console({ colorize: true })
  ]
})

const accessLogger = new winston.Logger({
  level: 'info',
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    }),
    new DailyRotateFile({
      json: true,
      filename: path.join(config.path.root, 'logs', 'access'),
      datePattern: '-yyyyMMdd.log'
    })
  ]
})

const errorLogger = new winston.Logger({
  level: 'error',
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    }),
    new DailyRotateFile({
      json: true,
      filename: path.join(config.path.root, 'logs', 'error'),
      datePattern: '-yyyyMMdd.log'
    })
  ]
})

export default logger
export { accessLogger, errorLogger }
