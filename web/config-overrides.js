// eslint-disable-next-line import/no-extraneous-dependencies
const { addBabelPlugin, override } = require('customize-cra');

module.exports = override(
  addBabelPlugin([
    '@babel/plugin-proposal-optional-chaining',
    'babel-plugin-root-import',
    {
      rootPathSuffix: 'src',
    },
  ])
);
