const sharoNext = require("@tkesgar/sharo-next");

const withSharo = sharoNext();

module.exports = withSharo({
  future: {
    webpack5: true,
  },
});
