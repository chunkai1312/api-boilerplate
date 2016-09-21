'use strict'

const path = require('path')
const winston = require('winston')
const DailyRotateFile = require('winston-daily-rotate-file')
const config = require('../config')

const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
      prettyPrint: true
    }),
    new DailyRotateFile({
      name: 'log-file',
      level: 'info',
      handleExceptions: true,
      json: true,
      colorize: false,
      filename: path.join(config.root, 'logs', 'log'),
      datePattern: '_yyyyMMdd.json'
    }),
    new DailyRotateFile({
      name: 'error-file',
      level: 'error',
      handleExceptions: true,
      json: true,
      colorize: false,
      filename: path.join(config.root, 'logs', 'error'),
      datePattern: '_yyyyMMdd.json'
    })
  ],
  exitOnError: false
})

module.exports = logger
