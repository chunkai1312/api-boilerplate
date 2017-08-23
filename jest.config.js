module.exports = {
  testRegex: '(/test/.*\\.spec.js)$',
  testEnvironment: 'node',
  setupFiles: [
    '<rootDir>/test/setup.js'
  ],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/test/',
    '<rootDir>/src/bootstrap/',
    '<rootDir>/src/config/',
    '<rootDir>/src/database/',
    '<rootDir>/src/lib/',
    '<rootDir>/src/app/repositories/',
    '<rootDir>/src/app/middlewares/index.js',
    '<rootDir>/src/app/middlewares/errorhandlers/index.js'
  ],
  coverageReporters: ['text', 'text-summary']
}
