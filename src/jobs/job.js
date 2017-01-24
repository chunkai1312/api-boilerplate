import Queue from 'bull'
import config from '../config'
import logger from '../config/logger'

const queue = Queue('job', config.redis.port, config.redis.host)

queue.process((job, done) => {
  logger.verbose('data:', job.data)
  logger.verbose('jobId:', job.jobId)

  done()
})

export default queue
