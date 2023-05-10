// eslint-disable-next-line import/no-unresolved
let { isPackageExists, } = require('local-pkg');

let isTypescriptExist = isPackageExists('typescript');

module.exports = {
  extends: [
    'plugin:react/recommended', 'plugin:react-hooks/recommended', isTypescriptExist ? '@trpl/typescript' : '@trpl/javascript'
  ],
  settings: {
    react: {
      version: '18.0',
    },
  },
  rules: {
    'jsx-quotes': [
      'error',
      'prefer-double'
    ],
    'react/react-in-jsx-scope': 'off',
  },
};
