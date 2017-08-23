import httpMocks from 'node-mocks-http'
import app from '../../mocks/app'

describe('app.controllers.api.token', () => {
  const homeController = app.controllers.home

  describe('#index()', () => {
    it('should respond 200', async () => {
      const req = httpMocks.createRequest({ method: 'GET', url: '/' })
      const res = httpMocks.createResponse()

      await homeController.index(req, res)

      expect(res._getStatusCode()).toBe(200)
    })
  })
})
