import logger from 'koa-logger'
import helmet from 'koa-helmet'
import cors from 'kcors'
import compress from 'koa-compress'
import bodyParser from 'koa-bodyparser'
import compose from 'koa-compose'

export default () => compose([
  logger(),
  helmet(),
  cors(),
  compress(),
  bodyParser()
])
