import { Router } from 'express'
import TodoController from '../controllers/todo'

const wrap = fn => (...args) => fn(...args).catch(args[2])
const todoController = TodoController()

const router = Router()

  .get('/api/todos', wrap(todoController.index))
  .post('/api/todos', wrap(todoController.create))
  .get('/api/todos/:id', wrap(todoController.show))
  .put('/api/todos/:id', wrap(todoController.update))
  .delete('/api/todos/:id', wrap(todoController.destroy))

export default () => router
