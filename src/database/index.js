import fs from 'fs'
import path from 'path'
import Sequelize from 'sequelize'
import config from '../config'

const sequelize = new Sequelize(config.sequelize.uri, config.sequelize.options)

const db = {
  sequelize,
  Sequelize,
  models: {}
}

const models = path.join(config.path.app, 'models')

fs
  .readdirSync(models)
  .forEach(file => {
    const model = sequelize.import(path.join(models, file))
    db.models[model.name] = model
  })

Object.keys(db.models).forEach(modelName => {
  if ('associate' in db.models[modelName]) {
    db.models[modelName].associate(db.models)
  }
})

export default db
