module.exports = {
  displayName: 'broccoli-and-co',
  testEnvironmentOptions: {
    url: 'http://localhost:3000'
  },
  roots: ['<rootDir>/src'],
  coverageThreshold: {
    global: {
      statements: 10,
      branches: 10,
      functions: 10,
      lines: 10
    }
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['<rootDir>/src/index.tsx'],
  setupFilesAfterEnv: ['<rootDir>/jest/setupTests.ts'],
  moduleFileExtensions: ['tsx', 'ts', 'js', 'json'],
  testMatch: ['<rootDir>/src/**/__test?(s)__/**/*.test.ts?(x)'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(tsx?)$': 'ts-jest'
  },
  reporters: ['default', ['jest-junit', { outputName: 'jest-report.xml' }]],
  preset: 'ts-jest',
  verbose: true
};
