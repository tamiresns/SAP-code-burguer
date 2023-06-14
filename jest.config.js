module.exports = {
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|svg|css)$': '<rootDir>/src/testes/fileMock.js',
      },
    moduleDirectories: ['node_modules'],
    testEnvironment: 'jsdom',
  };
  