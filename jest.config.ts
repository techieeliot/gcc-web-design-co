const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setup/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules', '<rootDir>'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '<rootDir>/src/__tests__/unit/**/*.spec.{ts,tsx}',
    '<rootDir>/src/__tests__/unit/**/*.test.{ts,tsx}',
  ],
  testPathIgnorePatterns: ['<rootDir>/src/__tests__/e2e/'],
};

module.exports = createJestConfig(customJestConfig);
