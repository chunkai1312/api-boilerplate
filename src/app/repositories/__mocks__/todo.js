export default app => {
  const { Todo: Model } = app.models

  const repository = {}

  /**
   * Find documents.
   */
  repository.find = (conditions) => {
    return []
  }

  /**
   * Find a document by id.
   */
  repository.findById = (id) => {
    return new Model({ _id: id })
  }

  /**
   * Save one or more documents.
   */
  repository.create = (doc) => {
    return new Model(doc)
  }

  /**
   * Update a document by id.
   */
  repository.update = (id, update) => {
    return new Model(update)
  }

  /**
   * Delete a document by id.
   */
  repository.delete = (id) => {
    return new Model({ _id: id, deleted: true })
  }

  /**
   * Save the document.
   */
  repository.save = (doc) => {
    return new Model(doc)
  }

  return repository
}
