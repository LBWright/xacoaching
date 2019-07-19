const env = process.env.NODE_ENV || "development";

const baseConfig = {
  env,
  isDev: env === "development",
  isTest: env === "testing",
  port: 5000,
  host: "0.0.0.0",
  secrets: {
    jwt: process.env.JWT_SECRET || "local secrets are no fun",
    jwtExp: "100d"
  }
};

let envConfig = {};

switch (env) {
  case "dev":
  case "development":
    envConfig = require("./development").config;
    break;
  case "test":
  case "testing":
    envConfig = require("./testing").config;
    break;
  default:
    envConfig = require("./development").config;
}

export default { ...baseConfig, ...envConfig };
