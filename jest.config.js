module.exports = {
  testRegex: '(/test/.*\\.spec.js)$',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['/src/config/'],
  setupFiles: [
    '<rootDir>/test/setup.js'
  ]
}
