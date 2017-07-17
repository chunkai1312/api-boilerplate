import TodoRepository from '../repositories/todo'

function TodoService (dependencies = { todoRepo: TodoRepository() }) {
  const { todoRepo } = dependencies

  const todoService = {}

  todoService.getTodos = async (query) => {
    const clients = await todoRepo.getTodos(query)
    return clients
  }

  todoService.getTodoById = async (id) => {
    const client = await todoRepo.getTodoById(id)
    return client
  }

  todoService.createTodo = async (data) => {
    const todo = await todoRepo.createTodo(data)
    return todo
  }

  todoService.updateTodo = async (id, doc) => {
    const client = await todoRepo.updateTodo(id, doc)
    return client
  }

  todoService.deleteTodo = async (id) => {
    const client = await todoRepo.deleteTodo(id)
    return client
  }

  return TodoService
}

export default TodoService
