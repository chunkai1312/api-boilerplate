'use strict'

const wrap = require('co-express')
const error = require('http-errors')
const Thing = require('../models/thing')

module.exports = {

  /**
   * Responds to requests to GET /api/things
   */
  index: wrap(function * (req, res) {
    const things = yield Thing.find()
    res.status(200).json(things)
  }),

  /**
   * Responds to requests to POST /api/things
   */
  create: wrap(function * (req, res) {
    const thing = yield Thing.create(req.body)
    res.status(201).json(thing)
  }),

  /**
   * Responds to requests to GET /api/things/:id
   */
  show: wrap(function * (req, res) {
    const thing = yield Thing.findById(req.params.thingId)
    if (!thing) throw error(404)
    res.status(200).json(thing)
  }),

  /**
   * Responds to requests to PUT /api/things/:id
   */
  update: wrap(function * (req, res) {
    const thing = yield Thing.findByIdAndUpdate(req.params.thingId, req.body, { new: true })
    if (!thing) throw error(404)
    res.status(200).json(thing)
  }),

  /**
   * Responds to requests to DELETE /api/things/:id
   */
  destroy: wrap(function * (req, res) {
    const thing = yield Thing.findByIdAndRemove(req.params.thingId)
    if (!thing) throw error(404)
    res.status(204).end()
  })

}
