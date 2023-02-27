const config = {
  verbose: true,
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
};

module.exports = config;
