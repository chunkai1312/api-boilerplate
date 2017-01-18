import error from 'http-errors'
import { Thing } from '../models'

export async function index (req, res) {
  const things = await Thing.find()
  res.status(200).json(things)
}

export async function create (req, res) {
  const thing = await Thing.create(req.body)
  res.status(201).json(thing)
}

export async function show (req, res) {
  const thing = await Thing.findById(req.params.thingId)
  if (!thing) throw error(404)
  res.status(200).json(thing)
}

export async function update (req, res) {
  const thing = await Thing.findByIdAndUpdate(req.params.thingId, req.body, { new: true })
  if (!thing) throw error(404)
  res.status(200).json(thing)
}

export async function destroy (req, res) {
  const thing = await Thing.findByIdAndRemove(req.params.thingId)
  if (!thing) throw error(404)
  res.status(204).end()
}
