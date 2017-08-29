import express, { Router } from 'express'
import load from './autoload'
import logger from '../lib/logger'
import config from '../config'
import db from '../database'

const app = express()

app.routes = Router()
app.models = db.models
app.logger = logger
app.config = config

export default load(app)
