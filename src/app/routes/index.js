import { Router } from 'express'
import { notFound } from '../middlewares'
import api from './api'

const router = Router()

router.use('/api', api())
router.use('/*', notFound())

export default () => router
