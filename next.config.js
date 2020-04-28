const withSharo = require("@tkesgar/sharo-next");
const { loadEnv, getPrefixEnvs } = require("@tkesgar/reno");

loadEnv();

module.exports = withSharo({
  env: getPrefixEnvs("APP_"),
});
