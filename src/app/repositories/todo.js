export default app => {
  const { Todo: Model } = app.models

  const repository = {}

  /**
   * Find documents.
   */
  repository.find = (conditions) => {
    return Model.findAll(conditions)
  }

  /**
   * Find a document by id.
   */
  repository.findById = (id) => {
    return Model.findById(id)
  }

  /**
   * Save one or more documents.
   */
  repository.create = (doc) => {
    return Model.create(doc)
  }

  /**
   * Update a document by id.
   */
  repository.update = (id, update) => {
    return Model.findById(id)
      .then(doc => doc ? doc.update(update) : null)
  }

  /**
   * Delete a document by id.
   */
  repository.delete = (id) => {
    return Model.findById(id)
      .then(doc => doc ? doc.destroy() : null)
  }

  /**
   * Save the document.
   */
  repository.save = (doc) => {
    return doc.save()
  }

  return repository
}
