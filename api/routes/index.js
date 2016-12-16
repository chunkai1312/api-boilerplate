'use strict'

const express = require('express')
const thing = require('./thing')
const router = express.Router()

router.use('/things', thing)

module.exports = router
