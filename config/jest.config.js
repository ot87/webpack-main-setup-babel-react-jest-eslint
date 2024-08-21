const path = require("path");

module.exports = {
  collectCoverageFrom: ["src/**/*.{js,jsx}", "!src/index.{js,jsx}"],
  moduleFileExtensions: ["js", "jsx"],
  roots: ["<rootDir>/src"],
  testMatch: ["<rootDir>/src/**/*.test.{js,jsx}"],
  watchPlugins: ["typeahead/filename", "typeahead/testname"],
  projects: [
    {
      displayName: "lint",
      runner: "eslint",
    },
    {
      displayName: "test",
      testEnvironment: "jsdom",
      transform: {
        "\\.(js|jsx)$": [
          "babel-jest",
          { configFile: path.resolve("config/babel.config.json") },
        ],
      },
      setupFilesAfterEnv: ["@testing-library/jest-dom"],
      moduleNameMapper: {
        "\\.(png|jpg|svg)$": "<rootDir>/config/jest/fileMock.js",
        "\\.css$": "<rootDir>/config/jest/styleMock.js",
        "^@/(.*)$": "<rootDir>/src/$1",
      },
      resetMocks: true,
    },
  ],
};
