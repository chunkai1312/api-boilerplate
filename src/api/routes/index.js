import Router from 'koa-router'
import compose from 'koa-compose'
import { todo } from '../controllers'

const router = new Router({ prefix: '/api' })

router.get('/todos', todo.index)
router.post('/todos', todo.create)
router.get('/todos/:id', todo.show)
router.put('/todos/:id', todo.update)
router.delete('/todos/:id', todo.destroy)

export default () => compose([ router.routes(), router.allowedMethods() ])
