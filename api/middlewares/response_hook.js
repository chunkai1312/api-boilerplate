'use strict'

module.exports = () => (req, res, next) => {
  res.ok = sendOK
  next()
}

function sendOK (data) {
  const res = this
  res.status(200)

  if (!data) return res.send()
  if (typeof data !== 'object') return res.send(data)
  return res.json(data)
}
