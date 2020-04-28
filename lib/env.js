const dotenv = require("dotenv");

exports.loadEnv = loadEnv;

function loadEnv() {
  dotenv.config();
  dotenv.config({ path: `${process.env.NODE_ENV}.local.env` });
  dotenv.config({ path: `${process.env.NODE_ENV}.env` });
  dotenv.config({ path: "default.env" });
}

function getAppEnvs() {
  const env = {};

  for (const [key, value] of Object.entries(process.env)) {
    if (key.startsWith("APP_")) {
      env[key] = value;
    }
  }

  return env;
}

exports.getAppEnvs = getAppEnvs;
