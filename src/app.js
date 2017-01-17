import Koa from 'koa'
import configureServer from './config/koa'
import connectDatabase from './config/mongoose'
import config from './config'

const app = new Koa()

configureServer(app)

connectDatabase(config, () => {
  app.listen(config.port, () => console.log('Koa server listening on %d, in %s mode', config.port, app.env))
})

export default app
