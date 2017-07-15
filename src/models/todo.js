import mongoose, { Schema } from 'mongoose'
import mongooseHidden from 'mongoose-hidden'
import mongooseDelete from 'mongoose-delete'

const TodoSchema = new Schema({
  text: { type: String },
  completed: { type: Boolean, default: false }
}, { timestamps: true })

TodoSchema.set('toJSON', { getters: true, virtuals: true })
TodoSchema.set('toObject', { getters: true, virtuals: true })

/**
 * Schema static methods.
 */
TodoSchema.statics = {

  /**
   * Get todos.
   *
   * @param  {Object} conditions - The conditions for querying.
   * @return {Promise}
   */
  get (query) {
    return this.find(query)
  },

  /**
   * Get a todo by id.
   *
   * @param  {String} id - The todo id.
   * @return {Promise}
   */
  getById (id) {
    return this.findById(id)
  },

  /**
   * Update a todo by id.
   *
   * @param  {String} id - The todo id.
   * @param  {String} doc - The update command.
   * @return {Promise}
   */
  updateById (id, doc) {
    return this.findByIdAndUpdate(id, doc, { new: true })
  },

  /**
   * Delete a todo by id.
   *
   * @param  {String} id - The todo id.
   * @return {Promise}
   */
  deleteById (id) {
    return this.findById(id)
      .then(doc => doc.delete())
      .then(doc => ({ id: doc.id, deleted: true }))
      .catch(() => null)
  }

}

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

export default mongoose.model('Todo', TodoSchema)
