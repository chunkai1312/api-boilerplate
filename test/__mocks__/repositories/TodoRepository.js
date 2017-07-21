import Todo from '../../../src/models/Todo'

function TodoRepository (dependencies = { model: Todo }) {
  const { model: Model } = dependencies

  const repository = {}

  repository.find = (conditions) => {
    return []
  }

  repository.findById = (id) => {
    return new Model({ id })
  }

  repository.create = (doc) => {
    return new Model(doc)
  }

  repository.update = (id, update) => {
    return new Model(update)
  }

  repository.delete = (id) => {
    return new Model({ id, deleted: true })
  }

  repository.save = (doc) => {
    return doc
  }

  return repository
}

export default TodoRepository
