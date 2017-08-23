import httpMocks from 'node-mocks-http'
import error from 'http-errors'
import app from '../../mocks/app'

jest.mock('../../../src/app/repositories/todo')

describe('app.controllers.todo', () => {
  const todoController = app.controllers.todo

  describe('#index()', () => {
    it('should respond 200 with todos', async () => {
      const req = httpMocks.createRequest({ method: 'GET', url: '/api/todos' })
      const res = httpMocks.createResponse()

      await todoController.index(req, res)

      expect(res._getStatusCode()).toBe(200)
      expect(res._isJSON()).toBe(true)
    })
  })

  describe('#create()', () => {
    it('should respond 200 with created todo', async () => {
      const req = httpMocks.createRequest({
        method: 'POST',
        url: '/api/todos',
        body: {
          text: 'test'
        }
      })
      const res = httpMocks.createResponse()

      await todoController.create(req, res)

      expect(res._getStatusCode()).toBe(201)
      expect(res._isJSON()).toBe(true)

      const data = JSON.parse(res._getData())
      expect(data.text).toBe('test')
    })
  })

  describe('#show()', () => {
    it('should respond 200 with requested todo', async () => {
      const req = httpMocks.createRequest({ method: 'GET', url: '/api/todos/1' })
      const res = httpMocks.createResponse()

      await todoController.show(req, res)

      expect(res._getStatusCode()).toBe(200)
      expect(res._isJSON()).toBe(true)
    })

    it('should throw 404 if not found', async () => {
      app.services.todo.getTodoById = jest.fn(() => Promise.resolve(null))

      const req = httpMocks.createRequest({ method: 'GET', url: '/api/todos/1' })
      const res = httpMocks.createResponse()

      await expect(todoController.show(req, res)).rejects.toEqual(error(404))
    })
  })

  describe('#update()', () => {
    it('should respond 200 with updated todo', async () => {
      const req = httpMocks.createRequest({
        method: 'PUT',
        url: '/api/todos/1',
        body: {
          text: 'modified'
        }
      })
      const res = httpMocks.createResponse()

      await todoController.update(req, res)

      expect(res._getStatusCode()).toBe(200)
      expect(res._isJSON()).toBe(true)

      const data = JSON.parse(res._getData())
      expect(data.text).toBe('modified')
    })

    it('should throw 404 if not found', async () => {
      app.services.todo.updateTodo = jest.fn(() => Promise.resolve(null))

      const req = httpMocks.createRequest({
        method: 'PUT',
        url: '/api/todos/1',
        body: {
          text: 'modified'
        }
      })
      const res = httpMocks.createResponse()

      await expect(todoController.update(req, res)).rejects.toEqual(error(404))
    })
  })

  describe('#destroy()', () => {
    it('should respond 200 with deleted todo', async () => {
      const req = httpMocks.createRequest({ method: 'DELETE', url: '/api/todos/1' })
      const res = httpMocks.createResponse()

      await todoController.destroy(req, res)

      expect(res._getStatusCode()).toBe(200)
      expect(res._isJSON()).toBe(true)

      const data = JSON.parse(res._getData())
      expect(data.deleted).toBe(true)
    })

    it('should throw 404 if not found', async () => {
      app.services.todo.deleteTodo = jest.fn(() => Promise.resolve(null))

      const req = httpMocks.createRequest({ method: 'DELETE', url: '/api/todos/1' })
      const res = httpMocks.createResponse()

      await expect(todoController.destroy(req, res)).rejects.toEqual(error(404))
    })
  })
})
