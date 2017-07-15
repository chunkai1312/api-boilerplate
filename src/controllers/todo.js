import error from 'http-errors'
import Todo from '../models/todo'

function TodoController (dependencies = {}) {
  const todoController = {}

  /**
   * GET /api/todos
   * Find all todo.
   */
  todoController.index = async (req, res) => {
    const todos = await Todo.find()
    res.status(200).json(todos)
  }

  /**
   * POST /api/todos
   * Create a new todo.
   */
  todoController.create = async (req, res) => {
    const todo = await Todo.create(req.body)
    res.status(201).json(todo)
  }

  /**
   * GET /api/todos/:id
   * Find one todo by ID.
   */
  todoController.show = async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    if (!todo) throw error(404)
    res.status(200).json(todo)
  }

  /**
   * PUT /api/todos/:id
   * Update an existing todo by ID.
   */
  todoController.update = async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!todo) throw error(404)
    res.status(200).json(todo)
  }

  /**
   * DELETE /api/todos/:id
   * Destroy an existing todo by ID.
   */
  todoController.destroy = async (req, res) => {
    const todo = await Todo.findByIdAndRemove(req.params.id)
    if (!todo) throw error(404)
    res.status(204).end()
  }

  return todoController
}

export default TodoController
