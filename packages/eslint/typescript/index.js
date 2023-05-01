const jsFormatterRules = require('@trpl/eslint-config-javascript/rules/formatter').rules;
const jsGlobalRules = require('@trpl/eslint-config-javascript').rules;

module.exports = {
  extends: [
    '@trpl/javascript', 'plugin:@typescript-eslint/recommended', 'plugin:import/typescript'
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'
        ],
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  overrides: [
    {
      files: [
        '*.ts', '*.tsx', '*.mts', '*.cts'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: ['tsconfig.json', 'tsconfig.eslint.json'],
      },
      rules: {
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': jsFormatterRules['dot-notation'],
        '@typescript-eslint/no-throw-literal': 'error',
        '@typescript-eslint/no-implied-eval': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-misused-promises': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unsafe-argument': 'error',
        '@typescript-eslint/no-unsafe-assignment': 'error',
        '@typescript-eslint/no-unsafe-call': 'error',
        '@typescript-eslint/no-unsafe-member-access': 'error',
        '@typescript-eslint/no-unsafe-return': 'error',
        '@typescript-eslint/require-await': 'error',
        '@typescript-eslint/restrict-plus-operands': 'error',
        '@typescript-eslint/restrict-template-expressions': 'error',
        '@typescript-eslint/unbound-method': 'error',
      },
    }
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': jsGlobalRules['no-unused-vars'],

    indent: 'off',
    '@typescript-eslint/indent': jsFormatterRules.indent,

    'block-spacing': ['off'],
    '@typescript-eslint/block-spacing': jsFormatterRules['block-spacing'],

    'brace-style': 'off',
    '@typescript-eslint/brace-style': jsFormatterRules['brace-style'],

    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': jsFormatterRules['comma-dangle'],

    'comma-spacing': 'off',
    '@typescript-eslint/comma-spacing': jsFormatterRules['comma-spacing'],

    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing': jsFormatterRules['func-call-spacing'],

    'key-spacing': 'off',
    '@typescript-eslint/key-spacing': jsFormatterRules['key-spacing'],

    'keyword-spacing': 'off',
    '@typescript-eslint/keyword-spacing': jsFormatterRules['keyword-spacing'],

    'lines-around-comment': 'off',
    '@typescript-eslint/lines-around-comment': 'error',

    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': jsFormatterRules['lines-between-class-members'],

    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': jsGlobalRules['no-extra-parens'],

    'object-curly-spacing': 'off',
    '@typescript-eslint/object-curly-spacing': jsFormatterRules['object-curly-spacing'],

    quotes: 'off',
    '@typescript-eslint/quotes': jsFormatterRules.quotes,

    semi: 'off',
    '@typescript-eslint/semi': jsFormatterRules.semi,

    'space-before-blocks': 'off',
    '@typescript-eslint/space-before-blocks': jsFormatterRules['space-before-blocks'],

    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': jsFormatterRules['space-before-function-paren'],

    'space-infix-ops': 'off',
    '@typescript-eslint/space-infix-ops': jsFormatterRules['space-infix-ops'],

    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': jsGlobalRules['no-array-constructor'],
  },
};
