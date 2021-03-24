const smartAsset = require('rollup-plugin-smart-asset');

module.exports = {
  rollup(config, options) {
    config.plugins.push(smartAsset());
    return config;
  },
};
