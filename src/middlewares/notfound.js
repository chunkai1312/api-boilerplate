import createError from 'http-errors'

export default () => (req, res, next) => {
  next(createError(404))
}
