module.exports = {
  extends: [
    'stylelint-config-standard', 'stylelint-config-html/vue', 'stylelint-config-clean-order'
  ],
  rules: {

    // Deprecated
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

    // Duplicates
    'no-duplicate-at-import-rules': true,
    'keyframe-block-no-duplicate-selectors': true,
    'font-family-no-duplicate-names': true,
    'declaration-block-no-duplicate-custom-properties': true,
    'declaration-block-no-duplicate-properties': true,
    'no-duplicate-selectors': true,

    // Invalid
    'color-no-invalid-hex': true,
    'function-calc-no-unspaced-operator': true,
    'keyframe-declaration-no-important': true,
    'named-grid-areas-no-invalid': true,
    'no-invalid-double-slash-comments': true,
    'string-no-newline': true,

    // Irregular
    'no-irregular-whitespace': true,

    // Empty
    'block-no-empty': true,
    'comment-no-empty': true,
    'no-empty-source': true,

    'custom-property-no-missing-var-function': true,
    'font-family-no-missing-generic-family-keyword': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'selector-anb-no-unmatchable': true,

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

    // Enforce conventions

    // At-rule
    'at-rule-no-vendor-prefix': true,

    // Colors
    'color-hex-alpha': 'never',
    'color-named': 'never',

    // Declaration
    'declaration-no-important': true,

    // Media feature
    'media-feature-name-no-vendor-prefix': true,

    // Property
    'property-no-vendor-prefix': true,

    // Selector
    'selector-no-vendor-prefix': true,
    'selector-attribute-quotes': 'always',
    'selector-max-id': 1,
    'selector-class-pattern': null,

    // Value
    'value-no-vendor-prefix': true,

    // Case
    'selector-type-case': 'lower',
    'value-keyword-case': 'lower',
    'function-name-case': 'lower',

    // Empty lines
    'at-rule-empty-line-before': 'always',
    'comment-empty-line-before': 'always',
    'custom-property-empty-line-before': ['never'],
    'declaration-empty-line-before': [
      'always', {
        ignore: [
          'after-comment', 'after-declaration', 'first-nested', 'inside-single-line-block'
        ],
      }
    ],
    'rule-empty-line-before': 'always',

    // Notation
    'alpha-value-notation': 'number',
    'color-function-notation': 'modern',
    'color-hex-length': 'short',
    'hue-degree-notation': 'number',
    'import-notation': 'url',
    'keyframe-selector-notation': 'percentage-unless-within-keyword-only-block',
    'media-feature-range-notation': 'context',
    'selector-not-notation': 'complex',
    'selector-pseudo-element-colon-notation': 'single',
  },

  // Quotes
  'font-family-name-quotes': 'always-where-recommended',
  'function-url-quotes': 'always',
  'selector-attribute-quotes': 'always',

  // Whitespace inside
  'comment-whitespace-inside': 'always',
};
