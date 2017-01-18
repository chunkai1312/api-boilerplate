export default {
  mongoDB: {
    uri: 'mongodb://localhost:27017/api-seed-test',
    options: {
      server: { socketOptions: { keepAlive: 1 } }
    }
  }
}
