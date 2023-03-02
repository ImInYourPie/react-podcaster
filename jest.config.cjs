const config = {
  verbose: true,
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@context/(.*)$": "<rootDir>/src/context/$1",
    "^@context": "<rootDir>/src/context/index.jsx",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@components": "<rootDir>/src/components/index.jsx",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@utils": "<rootDir>/src/utils/index.jsx",
    "\\.(jsx)$": "babel-jest",
  },
};

module.exports = config;
