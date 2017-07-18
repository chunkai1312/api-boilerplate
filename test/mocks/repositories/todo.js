import Todo from '../../../src/models/todo'

function TodoRepository (dependencies = { Todo }) {
  const todoRepository = {}

  todoRepository.getTodos = (query) => {
    return []
  }

  todoRepository.getTodoById = (id) => {
    return new Todo({ id })
  }

  todoRepository.createTodo = (todo) => {
    return new Todo(todo)
  }

  todoRepository.updateTodo = (id, doc) => {
    return new Todo(doc)
  }

  todoRepository.deleteTodo = (id) => {
    return new Todo({ id, deleted: true })
  }

  todoRepository.save = (todo) => {
    return todo
  }

  return todoRepository
}

export default TodoRepository
