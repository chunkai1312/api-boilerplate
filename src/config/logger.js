import path from 'path'
import winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import config from '../config'

const logger = new winston.Logger({
  transports: (config.env === 'development')
    ? [
      new winston.transports.Console({
        level: 'debug',
        colorize: true,
        prettyPrint: true,
        handleExceptions: true
      })
    ]
    : [
      new winston.transports.Console({
        level: 'verbose',
        colorize: true,
        prettyPrint: true,
        handleExceptions: true
      }),
      new DailyRotateFile({
        name: 'log-file',
        level: 'info',
        json: true,
        filename: path.join(config.root, 'logs', 'log'),
        datePattern: '-yyyyMMdd.log'
      }),
      new DailyRotateFile({
        name: 'error-file',
        level: 'error',
        json: true,
        handleExceptions: true,
        filename: path.join(config.root, 'logs', 'error'),
        datePattern: '-yyyyMMdd.log'
      })
    ],
  exitOnError: false
})

export default logger
