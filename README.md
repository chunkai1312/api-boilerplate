# api-boilerplate

[![Build Status][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]
[![JavaScript Style Guide][standardjs-image]][standardjs-url]

> A boilerplate for building api services based NodeJS, Express web framework and MongoDB

## Features

- ES6/ES2015+ support with [Babel](https://babeljs.io)
- Application framework with [Express](http://expressjs.com)
- Database object modeling with [Mongoose**](http://mongoosejs.com)
- Logging library with [Winston](https://github.com/winstonjs/winston)
- Application watching and restarting use in development mode with [Nodemon](https://github.com/remy/nodemon)
- Test Framework with [Jest](https://facebook.github.io/jest)
- Todo API implementation for example

## Structure

```
.
├── bin
│   └── api              # application entry
├── logs                 # logging files
├── src
│   ├── config           # app configurations
│   │   ├── env          # environment variable definitions
│   │   ├── index.js     # configuration
│   │   ├── config.js    # configuration variables definitions
│   │   ├── winston.js   # winston logger transport settings
│   │   └── mongoose.js  # mongoose connection handler
│   ├── controllers      # routing controller implementations
│   ├── helpers          # helper function implementations
|   ├── middlewares      # connect/express middleware implementations
│   ├── models           # database schema definitions
│   ├── repositories     # repository implementations
│   ├── routes           # router definitions
│   ├── servies          # standalone service implementations
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
