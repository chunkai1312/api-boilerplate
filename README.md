# api-seed [![JavaScript Style Guide][standardjs-image]][standardjs-url]

> A seed project for building api server using Express with MongoDB

## Features

- Use [MongoDB](https://www.mongodb.com/) for the database and [Mongoose](https://github.com/Automattic/mongoose) ODM for schema creation
- Introduce [co-express](https://github.com/mciparelli/co-express) to enable generators to be used as middlewares
- Use [winston](https://github.com/winstonjs/winston) for logging errors and events
- Use [nodemon](https://github.com/remy/nodemon) for watching and restarting
- Use [Mocha](https://github.com/mochajs/mocha) as test framework

## Structure

```
.
├── api
│   ├── controllers  # api implementations
|   ├── middlewares  # middleware implementations
│   ├── models       # database schema definitions
│   ├── routes       # router definitions
│   └── services     # standalone services
├── config           # app configurations
│   ├── env          # environment variable definitions
│   ├── express.js   # express setup
│   ├── index.js     # configuration variable loader
│   ├── local.js     # local variable definitions
│   ├── logger.js    # winston logger transport settings
│   └── mongoose.js  # mongoose connection handler
├── logs             # logging files
├── test             # testing scripts
├── app.js           # entry
└── package.json
```

## Usage

### Setup

```
$ npm install
```

### Developing

```
$ npm run dev
```

### Running

```
$ npm start
```

### Testing

```
$ npm test
```

## License

MIT © [Chun-Kai Wang](https://github.com/chunkai1312)

[standardjs-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standardjs-url]: http://standardjs.com/
