import mongoose from 'mongoose'
import mongooseHidden from 'mongoose-hidden'
import mongooseDelete from 'mongoose-delete'

export default app => {
  const Schema = mongoose.Schema

  /**
   * Schema definition.
   */
  const TodoSchema = new Schema({
    text: { type: String },
    completed: { type: Boolean, default: false }
  }, { timestamps: true })

  TodoSchema.set('toJSON', { getters: true, virtuals: true })
  TodoSchema.set('toObject', { getters: true, virtuals: true })

  /**
   * Schema static methods.
   */
  TodoSchema.statics = {}

  /**
   * Document instance methods.
   */
  TodoSchema.methods = {}

  /**
   * Mongoose Delete Plugin
   *
   * @see https://github.com/dsanel/mongoose-delete
   */
  TodoSchema.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true
  })

  /**
   * Mongoose Hidden Plugin
   *
   * @see https://github.com/mblarsen/mongoose-hidden
   */
  TodoSchema.plugin(mongooseHidden(), {
    hidden: {
      createdAt: true,
      updatedAt: true
    }
  })

  return mongoose.model('Todo', TodoSchema)
}
