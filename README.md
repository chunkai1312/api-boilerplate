# api-boilerplate

[![Build Status][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]
[![JavaScript Style Guide][standardjs-image]][standardjs-url]

> A boilerplate for building api services based NodeJS, Express web framework and MongoDB

## Features

- ES6/ES2015+ support using [Babel](https://babeljs.io)
- Use [MongoDB](https://www.mongodb.com/) for the database and [Mongoose](https://github.com/Automattic/mongoose) ODM for schema creation
- Use [winston](https://github.com/winstonjs/winston) for logging errors and events
- Use [nodemon](https://github.com/remy/nodemon) for watching and restarting
- Use [Mocha](https://github.com/mochajs/mocha) as test framework

## Structure

```
.
├── bin
│   └── server.js        # entry
├── logs                 # logging files
├── src
│   ├── config           # app configurations
│   │   ├── env          # environment variable definitions
│   │   ├── index.js     # configuration
│   │   ├── config.js    # configuration variables definitions
│   │   ├── winston.js   # winston logger transport settings
│   │   └── mongoose.js  # mongoose connection handler
│   ├── controllers      # api implementations
|   ├── middlewares      # middleware implementations
│   ├── models           # database schema definitions
│   ├── routes           # router definitions
│   ├── servies          # standalone services
│   └── app.js           # express instance
├── test                 # testing scripts
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

### Building

```
$ npm run build
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

[travis-image]: https://img.shields.io/travis/chunkai1312/api-boilerplate.svg
[travis-url]: https://travis-ci.org/chunkai1312/api-boilerplate
[codecov-image]: https://img.shields.io/codecov/c/github/chunkai1312/api-boilerplate.svg
[codecov-url]: https://codecov.io/gh/chunkai1312/api-boilerplate
[standardjs-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standardjs-url]: http://standardjs.com/
