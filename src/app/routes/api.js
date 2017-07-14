import { Router } from 'express'
// import wrap from 'co-express'
import TodoController from '../controllers/todo'

const todo = TodoController()

const router = Router()

router.get('/todos', todo.index)
router.post('/todos', todo.create)
router.get('/todos/:id', todo.show)
router.put('/todos/:id', todo.update)
router.delete('/todos/:id', todo.destroy)

export default () => router
