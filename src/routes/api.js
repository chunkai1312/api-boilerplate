import { Router } from 'express'
import wrap from 'co-express'
import { todo } from '../controllers'

const router = Router()

router.get('/todos', wrap(todo.index))
router.post('/todos', wrap(todo.create))
router.get('/todos/:id', wrap(todo.show))
router.put('/todos/:id', wrap(todo.update))
router.delete('/todos/:id', wrap(todo.destroy))

export default () => router
