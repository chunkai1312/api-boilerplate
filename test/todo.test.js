import { expect } from 'chai'
import supertest from 'supertest'
import app from '../src/app'

const request = supertest.agent(app.listen())

describe('Todo API:', () => {
  let todo

  describe('GET /todos', () => {
    it('should respond with JSON array', () => {
      return request
        .get('/api/todos')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => expect(res.body).to.be.an('array'))
    })
  })

  describe('POST /api/todos', () => {
    it('should respond with the newly created todo', () => {
      return request
        .post('/api/todos')
        .send({
          name: 'New todo',
          info: 'This is the brand new todo!!!'
        })
        .expect('Content-Type', /json/)
        .expect(201)
        .then(res => {
          expect(res.body.id).to.exist
          expect(res.body.name).to.equal('New todo')
          expect(res.body.info).to.equal('This is the brand new todo!!!')
          todo = res.body
        })
    })
  })

  describe('GET /api/todos/:id', () => {
    it('should respond with the requested todo', () => {
      return request
        .get(`/api/todos/${todo.id}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
          expect(res.body.id).to.equal(todo.id)
          expect(res.body.name).to.equal(todo.name)
          expect(res.body.info).to.equal(todo.info)
        })
    })
  })

  describe('PUT /api/todos/:id', () => {
    it('should respond with the updated todo', () => {
      return request
        .put(`/api/todos/${todo.id}`)
        .send({
          name: 'Updated todo',
          info: 'This is the updated todo!!!'
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .then(res => {
          expect(res.body.id).to.equal(todo.id)
          expect(res.body.name).to.equal('Updated todo')
          expect(res.body.info).to.equal('This is the updated todo!!!')
        })
    })
  })

  describe('DELETE /api/todos/:id', () => {
    it('should respond with 204 on successful removal', () => {
      return request
        .delete(`/api/todos/${todo.id}`)
        .expect(204)
    })

    it('should respond with 404 when todo does not exist', () => {
      return request
        .delete(`/api/todos/${todo.id}`)
        .expect(404)
    })
  })
})
