import mongoose, { Schema } from 'mongoose'

const ThingSchema = new Schema({
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

export default mongoose.model('Thing', ThingSchema)
