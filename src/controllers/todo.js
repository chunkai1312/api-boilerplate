import error from 'http-errors'
import TodoService from '../services'

function TodoController (dependencies = { todoService: TodoService() }) {
  const { todoService } = dependencies

  const todoController = {}

  /**
   * GET /api/todos
   * Find all todo.
   */
  todoController.index = async (req, res) => {
    const todos = await todoService.getTodos()
    res.status(200).json(todos)
  }

  /**
   * POST /api/todos
   * Create a new todo.
   */
  todoController.create = async (req, res) => {
    const todo = await todoService.createTodo(res.body)
    res.status(201).json(todo)
  }

  /**
   * GET /api/todos/:id
   * Find one todo by ID.
   */
  todoController.show = async (req, res) => {
    const todo = await todoService.getTodoById(req.params.id)
    if (!todo) throw error(404)
    res.status(200).json(todo)
  }

  /**
   * PUT /api/todos/:id
   * Update an existing todo by ID.
   */
  todoController.update = async (req, res) => {
    const todo = await todoService.updateTodo(req.params.id, req.body)
    if (!todo) throw error(404)
    res.status(200).json(todo)
  }

  /**
   * DELETE /api/todos/:id
   * Destroy an existing todo by ID.
   */
  todoController.destroy = async (req, res) => {
    const todo = await todoService.deleteToto(req.params.id)
    if (!todo) throw error(404)
    res.status(204).end()
  }

  return todoController
}

export default TodoController