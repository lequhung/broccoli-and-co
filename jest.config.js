module.exports = {
  displayName: 'broccoli-and-co',
  testURL: 'http://localhost:3000',
  roots: ['<rootDir>/src'],
  coverageThreshold: {
    global: {
      statements: 90,
      branches: 90,
      functions: 90,
      lines: 90
    }
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['<rootDir>/src/index.tsx'],
  setupFiles: ['<rootDir>/jest/setupTests.ts'],
  moduleFileExtensions: ['tsx', 'ts', 'js', 'json'],
  testMatch: ['<rootDir>/src/**/__test?(s)__/**/*.test.ts?(x)'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(tsx?)$': 'ts-jest'
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.test.json'
    }
  },
  reporters: ['default', ['jest-junit', { outputName: 'jest-report.xml' }]],
  preset: 'ts-jest'
};
