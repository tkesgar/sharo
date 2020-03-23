const withSharo = require("@tkesgar/sharo-next");
const { loadEnv, getAppEnvs } = require("./lib/env");

loadEnv();

module.exports = withSharo({
  env: getAppEnvs(),
});
