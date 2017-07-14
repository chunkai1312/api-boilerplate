import { Router } from 'express'
import TodoController from './controllers/todo'

const todoController = TodoController()

const router = Router()

  .get('/api/todos', todoController.index)
  .post('/api/todos', todoController.create)
  .get('/api/todos/:id', todoController.show)
  .put('/api/todos/:id', todoController.update)
  .delete('/api/todos/:id', todoController.destroy)

export default () => router
