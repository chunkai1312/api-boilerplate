import Todo from '../../../src/models/Todo'

function TodoRepository (dependencies = { Todo }) {
  const todoRepository = {}

  todoRepository.find = (query) => {
    return []
  }

  todoRepository.findById = (id) => {
    return new Todo({ id })
  }

  todoRepository.create = (todo) => {
    return new Todo(todo)
  }

  todoRepository.update = (id, doc) => {
    return new Todo(doc)
  }

  todoRepository.delete = (id) => {
    return new Todo({ id, deleted: true })
  }

  todoRepository.save = (todo) => {
    return todo
  }

  return todoRepository
}

export default TodoRepository
