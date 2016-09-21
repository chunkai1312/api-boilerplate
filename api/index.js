'use strict'

const express = require('express')
const thing = require('./routes/thing')
const router = express.Router()

router.use('/things', thing)

module.exports = router
