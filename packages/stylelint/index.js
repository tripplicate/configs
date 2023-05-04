module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
  rules: {
    indentation: 'tab',
    'string-quotes': 'single',

    'max-empty-lines': 1,
    'max-line-length': 80,

    'no-empty-first-line': true,
    'no-extra-semicolons': true,
    'no-unknown-animations': true,
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,

    'unit-case': 'lower',

    'value-keyword-case': 'lower',
    'value-list-max-empty-lines': 0,

    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-after': 'always-single-line',
    'block-closing-brace-space-before': 'always-single-line',

    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-newline-before': 'always-single-line',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',

    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',

    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': [
      'never', {
        ignore: [
          'after-comment',
          'inside-single-line-block'
        ],
      }
    ],
    'declaration-no-important': true,

    'selector-max-empty-lines': 0,
    'selector-max-id': 0,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'always',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
  },
};
