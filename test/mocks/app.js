import express, { Router } from 'express'
import consign from 'consign'
import config from '../../src/config'

const app = express()

app.routes = Router()
app.config = config

consign({ cwd: config.path.app, verbose: false })
  .then('models')
  .then('repositories')
  .then('services')
  .then('middlewares')
  .then('controllers')
  .into(app)

export default app
