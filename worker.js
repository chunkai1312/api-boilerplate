'use strict'

const path = require('path')
const env = process.env.NODE_ENV || 'development'
const dir = (env === 'development') ? require('babel-register') && './src' : './dist'
const config = require(`${dir}/config`)
const logger = require(`${dir}/config/logger`)
const jobsPath = path.join(config.root, 'src', 'jobs')

process.argv.forEach((worker, index) => {
  if (index < 2) return
  const jobPath = path.join(jobsPath, worker)

  try {
    const queue = require(jobPath)
    queue.on('ready', function () {
      logger.verbose(`Worker '${worker}' is ready for processing`)
    })
  } catch (err) {
    (err.message === `Cannot find module '${jobPath}'`)
      ? logger.verbose(`Cannot find worker '${worker}'`)
      : logger.error(err)
  }
})
