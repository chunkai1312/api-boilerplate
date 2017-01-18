import { Router } from 'express'
import { notfound } from '../middlewares'
import api from './api'

const router = Router()

router.use('/api', api())
router.use('*', notfound())

export default () => router
