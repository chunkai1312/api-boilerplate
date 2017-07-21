import TodoRepository from '../repositories/TodoRepository'

function TodoService (dependencies = { todoRepo: TodoRepository() }) {
  const { todoRepo } = dependencies

  const service = {}

  /**
   * Get todos.
   */
  service.getTodos = async (conditions) => {
    const todo = await todoRepo.find(conditions)
    return todo
  }

  /**
   * Get a todo by id.
   */
  service.getTodoById = async (id) => {
    const todo = await todoRepo.findById(id)
    return todo
  }

  /**
   * Create a todo.
   */
  service.createTodo = async (doc) => {
    const todo = await todoRepo.create(doc)
    return todo
  }

  /**
   * Update a todo by id.
   */
  service.updateTodo = async (id, update) => {
    const todo = await todoRepo.update(id, update)
    return todo
  }

  /**
   * Delete a todo by id.
   */
  service.deleteTodo = async (id) => {
    const todo = await todoRepo.delete(id)
    return todo
  }

  return service
}

export default TodoService
