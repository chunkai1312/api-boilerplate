# api-boilerplate

[![Build Status][travis-image]][travis-url]
[![Coverage Status][codecov-image]][codecov-url]
[![JavaScript Style Guide][standardjs-image]][standardjs-url]

> A boilerplate for building api services based NodeJS, Express web framework and MongoDB

## Features

- ES6/ES2015+ support with [Babel](https://babeljs.io)
- Application framework with [Express](http://expressjs.com)
- Database object modeling with [Mongoose](http://mongoosejs.com)
- Logging library with [Winston](https://github.com/winstonjs/winston)
- Application watching and restarting use in development mode with [Nodemon](https://github.com/remy/nodemon)
- Test Framework with [Jest](https://facebook.github.io/jest)
- Todo API implementation for example

## Requirements

* [Node.js](https://nodejs.org) v6+
* [Yarn](https://yarnpkg.com) or [NPM](https://www.npmjs.com)
* [MongoDB](https://www.mongodb.com)

## Installation

Clone this repo:

```
$ git clone https://github.com/chunkai1312/api-boilerplate.git <my-project-name>
$ cd <my-project-name>
```

Install dependencies:

```
$ npm install
```

## Running the Project

|`yarn <script>`    |Description|
|-------------------|-----------|
|`start`            |Runs the application|
|`dev`              |Runs the application in development mode with Nodemon|
|`build`            |Builds the project for production|
|`test`             |Runs unit tests with Jest|
|`test:watch`       |Runs `test` in watch mode to re-run tests when changed|
|`test:coverage`    |Runs `test` and generates code coverage report|
|`lint`             |Lints the project for potential errors|

## Project Structure

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

## License

MIT © [Chun-Kai Wang](https://github.com/chunkai1312)

[travis-image]: https://img.shields.io/travis/chunkai1312/api-boilerplate.svg
[travis-url]: https://travis-ci.org/chunkai1312/api-boilerplate
[codecov-image]: https://img.shields.io/codecov/c/github/chunkai1312/api-boilerplate.svg
[codecov-url]: https://codecov.io/gh/chunkai1312/api-boilerplate
[standardjs-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standardjs-url]: http://standardjs.com/
