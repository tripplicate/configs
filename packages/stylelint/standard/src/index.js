module.exports = {
  extends: [
    'stylelint-config-clean-order',
    'stylelint-config-html/vue'
  ],
  rules: {
    indentation: [2],
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
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'max-empty-lines': 1,
    'no-missing-end-of-source-newline': true,

    // Empty
    'block-no-empty': true,
    'comment-no-empty': true,
    'no-empty-source': true,
    'no-empty-first-line': true,

    // Unknown
    'annotation-no-unknown': true,
    'at-rule-no-unknown': true,
    'declaration-property-value-no-unknown': true,
    'function-no-unknown': true,
    'media-feature-name-no-unknown': true,
    'no-unknown-animations': true,
    'property-no-unknown': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'unit-no-unknown': true,
  },
};
