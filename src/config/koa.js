import logger from 'koa-logger'
import helmet from 'koa-helmet'
import cors from 'kcors'
import compress from 'koa-compress'
import bodyParser from 'koa-bodyparser'
import routes from '../api/routes'

function configure (app) {
  app.use(logger())
  app.use(helmet())
  app.use(cors())
  app.use(compress())
  app.use(bodyParser())
  app.use(routes())
}

export default configure
