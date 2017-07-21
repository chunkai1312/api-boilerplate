import { Router } from 'express'
import TodoController from '../controllers/TodoController'
import wrap from '../helpers/wrap'

const todoController = TodoController()

const router = Router()

router.get('/api/todos', wrap(todoController.index))
router.post('/api/todos', wrap(todoController.create))
router.get('/api/todos/:id', wrap(todoController.show))
router.put('/api/todos/:id', wrap(todoController.update))
router.delete('/api/todos/:id', wrap(todoController.destroy))

export default () => router
