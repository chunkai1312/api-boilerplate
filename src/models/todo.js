import mongoose, { Schema } from 'mongoose'

const TodoSchema = new Schema({
  title: { type: String },
  completed: { type: Boolean, default: false }
}, { timestamps: true })

TodoSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    ret.id = ret._id
    delete ret._id
    delete ret.__v
    delete ret.createdAt
    delete ret.updatedAt
  }
})

export default mongoose.model('Todo', TodoSchema)
