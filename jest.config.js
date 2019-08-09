module.exports = {
  verbose: true,
  moduleNameMapper: {
    "\\.(css|scss|jpg|png|svg)$": "<rootDir>/test-mock.js"
  },
  moduleFileExtensions: ["js", "jsx"],
  modulePaths: ["<rootDir>/src"],
  setupFiles: ["<rootDir>/node_modules/regenerator-runtime/runtime"],
  setupFilesAfterEnv: ["<rootDir>/enzyme.config.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"]
};
