import { expect } from 'chai'
import request from 'supertest'
import app from '../src/app'

describe('Misc', () => {
  describe('GET /404', () => {
    it('should respond 404 ststus', () => {
      return request(app)
        .get('/404')
        .expect('Content-Type', /json/)
        .expect(404)
        .then(res => {
          expect(res.body.status).to.be.equal(404)
          expect(res.body.message).to.be.equal('Not Found')
        })
    })
  })
})
