import type { JestConfigWithTsJest } from 'ts-jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

const jestConfig: JestConfigWithTsJest = {
  // testEnvironment: 'jsdom',
  preset: 'react-native',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    '^.+\\.(ts|tsx)?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.spec.json',
      },
    ],
    '.+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  transformIgnorePatterns: ['node_modules/(?!(jest-)?@?react-native|@react-native-community|@react-navigation|uuid)'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFiles: ['<rootDir>/__tests__/Setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: [
    '\\.snap$',
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/Setup.ts',
    '<rootDir>/__tests__/ReduxNativeBaseProvider.tsx',
    '<rootDir>/__tests__/TestUtils.tsx',
    '<rootDir>/__mocks__/',
  ],
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'junit',
        outputName: 'junit.xml',
        usePathForSuiteName: 'true',
      },
    ],
  ],
  testResultsProcessor: 'jest-sonar-reporter',
  coverageReporters: ['lcov', 'html', 'text'],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
};

export default jestConfig;
