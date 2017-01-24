import { expect } from 'chai'
import request from 'supertest'
import app from '../src/app'

describe('Todo API:', () => {
  let todo

  describe('GET /api/todos', () => {
    it('should respond with JSON array', () => {
      return request(app)
        .get('/api/todos')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => expect(res.body).to.be.an('array'))
    })
  })

  describe('POST /api/todos', () => {
    it('should respond with the newly created todo', () => {
      return request(app)
        .post('/api/todos')
        .send({
          title: 'New Todo'
        })
        .expect('Content-Type', /json/)
        .expect(201)
        .then(res => {
          expect(res.body.id).to.exist
          expect(res.body.title).to.equal('New Todo')
          expect(res.body.completed).to.be.false
          todo = res.body
        })
    })
  })

  describe('GET /api/todos/:id', () => {
    it('should respond with the requested todo', () => {
      return request(app)
        .get(`/api/todos/${todo.id}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
          expect(res.body.id).to.equal(todo.id)
          expect(res.body.title).to.equal(todo.title)
          expect(res.body.completed).to.be.false
        })
    })
  })

  describe('PUT /api/todos/:id', () => {
    it('should respond with the updated todo', () => {
      return request(app)
        .put(`/api/todos/${todo.id}`)
        .send({
          title: 'Updated Todo',
          completed: true
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
          expect(res.body.id).to.equal(todo.id)
          expect(res.body.title).to.equal('Updated Todo')
          expect(res.body.completed).to.be.true
        })
    })
  })

  describe('DELETE /api/todos/:id', () => {
    it('should respond with 204 on successful removal', () => {
      return request(app)
        .delete(`/api/todos/${todo.id}`)
        .expect(204)
    })

    it('should respond with 404 when todo does not exist', () => {
      return request(app)
        .delete(`/api/todos/${todo.id}`)
        .expect(404)
    })
  })
})
