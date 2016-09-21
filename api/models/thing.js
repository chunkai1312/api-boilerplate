'use strict'

const mongoose = require('mongoose')

const ThingSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
}, { timestamps: true })

ThingSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
    delete ret.createdAt
    delete ret.updatedAt
  }
})

module.exports = mongoose.model('Thing', ThingSchema)
