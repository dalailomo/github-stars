const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e',
  ],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  'collectCoverage': true,
  'collectCoverageFrom': [
    '**/src/**/*.{js,jsx,vue}',
    '!**/src/router/*.{js,jsx,vue}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
}
