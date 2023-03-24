module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended', '@trpl-test/javascript', './rules/shared.js', './rules/import.js'
  ],
  parser        : '@typescript-eslint/parser',
  parserOptions : {
    tsconfigRootDir : __dirname,
    project         : 'tsconfig.json',
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    '@typescript-eslint/explicit-member-accessibility' : 'error',
    '@typescript-eslint/member-ordering'               : 'error',
    '@typescript-eslint/method-signature-style'        : 'error',
    '@typescript-eslint/naming-convention'             : [
      'error', {
        selector : 'variable',
        format   : [
          'camelCase', 'PascalCase', 'UPPER_CASE'
        ],
      }, {
        selector : 'function',
        format   : [
          'camelCase', 'PascalCase'
        ],
      }, {
        selector : 'typeLike',
        format   : [
          'PascalCase'
        ],
      }
    ],
    '@typescript-eslint/no-confusing-void-expression' : 'error',
    '@typescript-eslint/no-unnecessary-qualifier'     : 'error',
    '@typescript-eslint/no-useless-empty-export'      : 'error',
    '@typescript-eslint/promise-function-async'       : 'error',
    '@typescript-eslint/strict-boolean-expressions'   : 'error',
    '@typescript-eslint/switch-exhaustiveness-check'  : 'error',
  },
};
