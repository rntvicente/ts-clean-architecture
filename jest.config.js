module.exports = {
  verbose: false,
  roots: ['<rootDir>/src'],
  bail: 1,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*-protocols.ts',
    '!<rootDir>/src/**/protocols/*'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
