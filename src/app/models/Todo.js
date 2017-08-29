export default (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    text: {
      field: 'text',
      type: DataTypes.STRING
    },
    completed: {
      field: 'completed',
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, { tableName: 'todos', timestamps: true, paranoid: true, underscored: true })

  return Todo
}
