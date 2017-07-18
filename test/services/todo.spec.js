import TodoService from '../../src/services/todo'
import TodoRepository from '../../src/repositories/todo'
import Todo from '../../src/models/todo'

jest.mock('../../src/repositories/todo', () => require('../mocks/repositories/todo'))

function setup () {
  const todoRepo = TodoRepository()
  return { todoRepo }
}

describe('TodoService', () => {
  describe('#TodoService()', () => {
    it('should create an TodoService', () => {
      const todoService = TodoService()
      expect(todoService).toBeInstanceOf(Object)
    })
  })

  describe('#getTodos()', () => {
    it('should return todos', async () => {
      const { todoRepo } = setup()

      const todoService = TodoService({ todoRepo })
      const todos = await todoService.getTodos()

      expect(todos).toBeInstanceOf(Array)
    })
  })

  describe('#getTodoById()', () => {
    it('should return the todo', async () => {
      const { todoRepo } = setup()

      const todoService = TodoService({ todoRepo })
      const todo = await todoService.getTodoById(1)

      expect(todo).toBeInstanceOf(Todo)
    })
  })

  describe('#createTodo()', () => {
    it('should return the created todo', async () => {
      const { todoRepo } = setup()

      const todoService = TodoService({ todoRepo })
      const todo = await todoService.createTodo({ title: 'test todo' })

      expect(todo).toBeInstanceOf(Todo)
    })
  })

  describe('#updateTodo()', () => {
    it('should return the updated todo', async () => {
      const { todoRepo } = setup()

      const todoService = TodoService({ todoRepo })
      const todo = await todoService.updateTodo({ title: 'test todo' })

      expect(todo).toBeInstanceOf(Todo)
    })
  })

  describe('#deleteTodo()', () => {
    it('should return the deleted todo', async () => {
      const { todoRepo } = setup()

      const todoService = TodoService({ todoRepo })
      const todo = await todoService.deleteTodo(1)

      expect(todo).toBeInstanceOf(Todo)
    })
  })
})
