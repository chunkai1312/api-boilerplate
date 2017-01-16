import { Todo } from '../models'

export async function index (ctx) {
  const todos = await Todo.find()
  ctx.body = todos
}

export async function create (ctx) {
  const todo = await Todo.create(ctx.request.body)
  ctx.status = 201
  ctx.body = todo
}

export async function show (ctx) {
  const todo = await Todo.findById(ctx.params.id)
  if (!todo) ctx.throw(404)
  ctx.body = todo
}

export async function update (ctx) {
  const todo = await Todo.findByIdAndUpdate(ctx.params.id, ctx.request.body, { new: true })
  if (!todo) ctx.throw(404)
  ctx.body = todo
}

export async function destroy (ctx) {
  const todo = await Todo.findByIdAndRemove(ctx.params.id)
  if (!todo) ctx.throw(404)
  ctx.status = 204
}
