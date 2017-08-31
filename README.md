# punserve

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
│   └── api                 # Application entry point
├── logs                    # Logging files
├── src                     # Application source code
│   ├── app                 # Application logic implementations
│   │   ├── controllers     # Routing controller implementations
│   │   ├── middlewares     # Connect/Express middleware implementations
│   │   ├── models          # Schema/Entity definitions
│   │   ├── repositories    # Repository implementations
│   │   ├── routes          # Route definitions
│   │   ├── servies         # Service implementations
│   │   └── index.js        # Application settings
│   ├── bootstrap           # App configurations
│   │   ├── app.js          # Bootstrap application
│   │   └── autoload.js     # Auto-load scripts
│   ├── config              # Application configurations
│   │   ├── env             # Environment variable definitions
│   │   ├── index.js        # Export configurations
│   │   └── config.js       # Configuration variables definitions
│   ├── database            # Database settings
│   │   └── index.js        # MongoDB connection settings
│   ├── lib                 # Third-party libraries
│   │   └── logger.js       # Winston logger settings
│   └── index.js            # Export application
└── test                    # testing scripts

```

## License

MIT © [Chun-Kai Wang](https://github.com/chunkai1312)

[travis-image]: https://img.shields.io/travis/chunkai1312/api-boilerplate.svg
[travis-url]: https://travis-ci.org/chunkai1312/api-boilerplate
[codecov-image]: https://img.shields.io/codecov/c/github/chunkai1312/api-boilerplate.svg
[codecov-url]: https://codecov.io/gh/chunkai1312/api-boilerplate
[standardjs-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standardjs-url]: http://standardjs.com/
