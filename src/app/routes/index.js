import wrap from 'co-express'

export default app => {
  const { home, todo } = app.controllers

  app.routes.get('/', wrap(home.index))
  app.routes.get('/api/todos', wrap(todo.index))
  app.routes.post('/api/todos', wrap(todo.create))
  app.routes.get('/api/todos/:id', wrap(todo.show))
  app.routes.put('/api/todos/:id', wrap(todo.update))
  app.routes.delete('/api/todos/:id', wrap(todo.destroy))

  return app.routes
}
