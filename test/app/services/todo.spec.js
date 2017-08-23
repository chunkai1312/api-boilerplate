import app from '../../mocks/app'

jest.mock('../../../src/app/repositories/todo')

describe('app.services.todo', () => {
  const todoService = app.services.todo
  const Todo = app.models.Todo

  describe('#getTodos()', () => {
    it('should return todos', async () => {
      const todos = await todoService.getTodos()
      expect(todos).toBeInstanceOf(Array)
    })
  })

  describe('#getTodoById()', () => {
    it('should return the todo', async () => {
      const todo = await todoService.getTodoById(1)
      expect(todo).toBeInstanceOf(Todo)
    })
  })

  describe('#createTodo()', () => {
    it('should return the created todo', async () => {
      const todo = await todoService.createTodo({ text: 'test todo' })
      expect(todo).toBeInstanceOf(Todo)
    })
  })

  describe('#updateTodo()', () => {
    it('should return the updated todo', async () => {
      const todo = await todoService.updateTodo({ text: 'test todo' })
      expect(todo).toBeInstanceOf(Todo)
    })
  })

  describe('#deleteTodo()', () => {
    it('should return the deleted todo', async () => {
      const todo = await todoService.deleteTodo(1)
      expect(todo).toBeInstanceOf(Todo)
    })
  })
})
