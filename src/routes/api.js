import { Router } from 'express'
import wrap from 'co-express'
import { thing } from '../controllers'

const router = Router()

router.get('/things', wrap(thing.index))
router.post('/things', wrap(thing.create))
router.get('/things/:thingId', wrap(thing.show))
router.put('/things/:thingId', wrap(thing.update))
router.delete('/things/:thingId', wrap(thing.destroy))

export default () => router
