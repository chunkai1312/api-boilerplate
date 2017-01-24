import error from 'http-errors'
import { Todo } from '../models'

export async function index (req, res) {
  const todos = await Todo.find()
  res.status(200).json(todos)
}

export async function create (req, res) {
  const todo = await Todo.create(req.body)
  res.status(201).json(todo)
}

export async function show (req, res) {
  const todo = await Todo.findById(req.params.id)
  if (!todo) throw error(404)
  res.status(200).json(todo)
}

export async function update (req, res) {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (!todo) throw error(404)
  res.status(200).json(todo)
}

export async function destroy (req, res) {
  const todo = await Todo.findByIdAndRemove(req.params.id)
  if (!todo) throw error(404)
  res.status(204).end()
}
