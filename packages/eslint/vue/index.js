let { isPackageExists, } = require('local-pkg');

let isTypescriptExist = isPackageExists('typescript', {
  paths: [__dirname],
});

module.exports = {
  extends: [
    isTypescriptExist ? '@trpl/typescript' : '@trpl/javascript', 'plugin:vue/vue3-recommended', 'plugin:vue/vue3-strongly-recommended', './rules/formatter.js'
  ],
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    }
  ],
  rules: {
    'vue/multi-word-component-names': ['off'],
    'vue/component-tags-order': [
      'error', {
        order: [
          'script', 'template', 'style'
        ],
      }
    ],
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'vue/component-options-name-casing': ['error', 'PascalCase'],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/define-macros-order': [
      'error', {
        order: ['defineProps', 'defineEmits'],
      }
    ],
    'vue/no-restricted-v-bind': ['error', '/^v-/'],
    'vue/no-useless-v-bind': ['error'],
    'vue/no-unused-refs': ['error'],
  },
};
