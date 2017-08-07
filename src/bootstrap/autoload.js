import consign from 'consign'

/**
 * Autoload scripts.
 *
 * @see https://github.com/jarradseers/consign
 */
export default app => {
  const { path, autoload } = app.config

  // create loader
  const loader = consign({
    cwd: path.app,
    logger: app.logger,
    loggingType: 'verbose'
  })

  // load scripts in order
  autoload.forEach(item => loader.then(item))

  // load scripts into express instance
  loader.into(app)

  return app
}
