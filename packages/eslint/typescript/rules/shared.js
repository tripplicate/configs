const jsFormatterRules = require('@trpl/eslint-config-javascript/rules/formatter').rules;
const jsGlobalRules = require('@trpl/eslint-config-javascript').rules;

module.exports = {
  rules: {
    indent: 'off',
    '@typescript-eslint/no-unused-vars': jsGlobalRules['no-unused-vars'],
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

    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': jsFormatterRules['dot-notation'],

    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': jsGlobalRules['no-array-constructor'],
  },
};