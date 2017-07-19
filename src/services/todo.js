import TodoRepository from '../repositories/todo'

function TodoService (dependencies = { todoRepo: TodoRepository() }) {
  const { todoRepo } = dependencies

  const todoService = {}

  todoService.getTodos = async (query) => {
    const todo = await todoRepo.getTodos(query)
    return todo
  }

  todoService.getTodoById = async (id) => {
    const todo = await todoRepo.getTodoById(id)
    return todo
  }

  todoService.createTodo = async (data) => {
    const todo = await todoRepo.createTodo(data)
    return todo
  }

  todoService.updateTodo = async (id, doc) => {
    const todo = await todoRepo.updateTodo(id, doc)
    return todo
  }

  todoService.deleteTodo = async (id) => {
    const todo = await todoRepo.deleteTodo(id)
    return todo
  }

  return todoService
}

export default TodoService
