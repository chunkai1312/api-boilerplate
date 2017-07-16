import Todo from '../models/todo'

function TodoRepository (dependencies = { Todo }) {
  const todoRepository = {}

  todoRepository.createClient = (todo) => {
    return Todo.create(todo)
  }

  todoRepository.getTodos = (query) => {
    return Todo.find(query)
  }

  todoRepository.getTodoById = (id) => {
    return Todo.findById(id)
  }

  todoRepository.updateTodo = (id, doc) => {
    return Todo.findByIdAndUpdate(id, doc, { new: true })
  }

  todoRepository.deleteToto = (id) => {
    return Todo.findById(id)
      .then(todo => todo ? todo.delete() : null)
  }

  todoRepository.save = (todo) => {
    return todo.save()
  }

  return todoRepository
}

export default TodoRepository
