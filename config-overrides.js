const path = require('path');

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      'components': path.resolve(__dirname, 'src/components'),
      'themes': path.resolve(__dirname, 'src/themes'),
      'pages': path.resolve(__dirname, 'src/pages'),
      'routes': path.resolve(__dirname, 'src/routes'),
      'services': path.resolve(__dirname, 'src/services'),
      'models': path.resolve(__dirname, 'src/models'),
      'styles': path.resolve(__dirname, 'src/styles'),
      'utils': path.resolve(__dirname, 'src/utils'),
      'store': path.resolve(__dirname, 'src/store'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'validators': path.resolve(__dirname, 'src/validators'),
      'api': path.resolve(__dirname, 'src/api.ts'),
    },
  };

  return config;
};