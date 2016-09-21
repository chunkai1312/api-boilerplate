'use strict'

const express = require('express')
const thing = require('../controllers/thing')
const router = express.Router()

router.get('/', thing.index)
router.post('/', thing.create)
router.get('/:thingId', thing.show)
router.put('/:thingId', thing.update)
router.delete('/:thingId', thing.destroy)

module.exports = router
