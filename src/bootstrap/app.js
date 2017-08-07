import express, { Router } from 'express'
import load from './autoload'
import logger from '../lib/logger'
import config from '../config'

const app = express()

app.routes = Router()
app.logger = logger
app.config = config

export default load(app)
