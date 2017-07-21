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

      const req = httpMocks.createRequest({
        method: 'GET',
        url: '/api/todos'
      })
      const res = httpMocks.createResponse()

      const todoController = TodoController({ todoService })
      await todoController.index(req, res)

      expect(res._getStatusCode()).toBe(200)
      expect(res._isJSON()).toBe(true)
    })
  })

  describe('#create()', () => {
    it('should respond 201 with created todo', async () => {
      const { todoService } = setup()

      const req = httpMocks.createRequest({
        method: 'POST',
        url: '/api/todos'
      })
      const res = httpMocks.createResponse()

      const todoController = TodoController({ todoService })
      await todoController.create(req, res)

      expect(res._getStatusCode()).toBe(201)
      expect(res._isJSON()).toBe(true)
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

      expect(todoService.getTodoById).toHaveBeenCalledWith('123')
      expect(res._getStatusCode()).toBe(200)
      expect(res._isJSON()).toBe(true)
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

      expect(todoService.updateTodo).toHaveBeenCalledWith('123', req.body)
      expect(res._getStatusCode()).toBe(200)
      expect(res._isJSON()).toBe(true)
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

      expect(todoService.deleteTodo).toHaveBeenCalledWith('123')
      expect(res._getStatusCode()).toBe(200)
      expect(res._isJSON()).toBe(true)
    })
  })
})
