import httpMocks from 'node-mocks-http'
import TodoService from '../../src/services/TodoService'
import TodoController from '../../src/controllers/TodoController'

jest.mock('../../src/repositories/TodoRepository', () => require('../__mocks__/repositories/TodoRepository'))

function setup () {
  const todoService = TodoService()
  return { todoService }
}

describe('TodoController', () => {
  describe('#TodoController()', () => {
    it('should create a TodoController', () => {
      const todoController = TodoController()
      expect(todoController).toBeInstanceOf(Object)
    })
  })

  describe('#index()', () => {
    it('should respond 200 with todos', async () => {
      const { todoService } = setup()
      jest.spyOn(todoService, 'getTodos')

      const req = httpMocks.createRequest({
        method: 'GET',
        url: '/api/todos'
      })
      const res = httpMocks.createResponse()

      const todoController = TodoController({ todoService })
      await todoController.index(req, res)

      expect(todoService.getTodos).toHaveBeenCalled()
      expect(res.statusCode).toBe(200)
      expect(res._isEndCalled()).toBe(true)
      expect(res._isJSON()).toBe(true)
      expect(res._isUTF8()).toBe(true)
    })
  })

  describe('#create()', () => {
    it('should respond 201 with created todo', async () => {
      const { todoService } = setup()
      jest.spyOn(todoService, 'createTodo')

      const req = httpMocks.createRequest({
        method: 'POST',
        url: '/api/todos',
        body: { title: 'test' }
      })
      const res = httpMocks.createResponse()

      const todoController = TodoController({ todoService })
      await todoController.create(req, res)

      expect(todoService.createTodo).toHaveBeenCalledWith(req.body)
      expect(res.statusCode).toBe(201)
      expect(res._isEndCalled()).toBe(true)
      expect(res._isJSON()).toBe(true)
      expect(res._isUTF8()).toBe(true)
    })
  })

  describe('#show()', () => {
    it('should respond 200 with requested todo', async () => {
      const { todoService } = setup()
      jest.spyOn(todoService, 'getTodoById')

      const req = httpMocks.createRequest({
        method: 'GET',
        url: '/api/todos/123',
        params: { id: '123' }
      })
      const res = httpMocks.createResponse()

      const todoController = TodoController({ todoService })
      await todoController.show(req, res)

      expect(todoService.getTodoById).toHaveBeenCalledWith(req.params.id)
      expect(res.statusCode).toBe(200)
      expect(res._isEndCalled()).toBe(true)
      expect(res._isJSON()).toBe(true)
      expect(res._isUTF8()).toBe(true)
    })
  })

  describe('#update()', () => {
    it('should respond 200 with updated todo', async () => {
      const { todoService } = setup()
      jest.spyOn(todoService, 'updateTodo')

      const req = httpMocks.createRequest({
        method: 'PUT',
        url: '/api/todos/123',
        params: { id: '123' },
        body: { completed: true }
      })
      const res = httpMocks.createResponse()

      const todoController = TodoController({ todoService })
      await todoController.update(req, res)

      expect(todoService.updateTodo).toHaveBeenCalledWith(req.params.id, req.body)
      expect(res.statusCode).toBe(200)
      expect(res._isEndCalled()).toBe(true)
      expect(res._isJSON()).toBe(true)
      expect(res._isUTF8()).toBe(true)
    })
  })

  describe('#destroy()', () => {
    it('should respond 200 with deleted todo', async () => {
      const { todoService } = setup()
      jest.spyOn(todoService, 'deleteTodo')

      const req = httpMocks.createRequest({
        method: 'DELETE',
        url: '/api/todos/123',
        params: { id: '123' }
      })
      const res = httpMocks.createResponse()

      const todoController = TodoController({ todoService })
      await todoController.destroy(req, res)

      expect(todoService.deleteTodo).toHaveBeenCalledWith(req.params.id)
      expect(res.statusCode).toBe(200)
      expect(res._isEndCalled()).toBe(true)
      expect(res._isJSON()).toBe(true)
      expect(res._isUTF8()).toBe(true)
    })
  })
})
