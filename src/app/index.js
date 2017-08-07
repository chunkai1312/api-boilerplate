export default app => {
  const middlewares = app.middlewares.index
  const routes = app.routes.index
  const errorhandlers = app.middlewares.errorhandlers.index

  app.use(middlewares)
  app.use(routes)
  app.use(errorhandlers)
}
