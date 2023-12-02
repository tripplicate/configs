module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    '@trpl/stylelint-config-standard'
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
};
