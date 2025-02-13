const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: './',
});

const customJestConfig = {
    // specifies the test environemnt to simulate browser
    testEnvironment: 'jest-environment-jsdom',  
    // specifies setup file to be executed
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};

module.exports = createJestConfig(customJestConfig);
