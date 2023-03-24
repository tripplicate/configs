module.exports = {
  extends: [
    'eslint:recommended', './rules/formatter.js', './rules/import.js'
  ],
  env: {
    node    : true,
    browser : true,
    es6     : true,
  },
  globals: {
    window    : 'readonly',
    navigator : 'readonly',
    document  : 'readonly',
  },
  parserOptions: {
    sourceType  : 'module',
    ecmaVersion : 2022,
  },
  rules: {
    // global behavioral
    'no-alert': [
      'error'
    ],
    'no-console': [
      'error', {
        allow: [
          'warn', 'error', 'info'
        ],
      }
    ],
    'no-var': [
      'error'
    ],
    'no-void': [
      'error'
    ],
    'no-caller': [
      'error'
    ],
    'no-labels': [
      'error'
    ],
    'no-lone-blocks': [
      'error'
    ],
    'no-multi-assign': [
      'error'
    ],
    'no-nested-ternary': [
      'error'
    ],
    strict: [
      'error', 'safe'
    ],
    'dot-notation': [
      'error'
    ],
    eqeqeq: [
      'error'
    ],
    'object-shorthand': [
      'error'
    ],
    'one-var': [
      'error', 'never'
    ],
    'array-callback-return': [
      'error'
    ],
    'consistent-return': [
      'error'
    ],
    'no-use-before-define': [
      'error'
    ],
    'require-atomic-updates': [
      'error'
    ],
    'default-case': [
      'error'
    ],
    'default-case-last': [
      'error'
    ],
    'no-return-await': [
      'error'
    ],
    'no-promise-executor-return': [
      'error'
    ],
    'no-script-url': [
      'error'
    ],
    'no-shadow': [
      'error'
    ],
    'no-throw-literal': [
      'error'
    ],
    'no-undef-init': [
      'error'
    ],
    'no-underscore-dangle': [
      'error'
    ],
    'no-useless-call': [
      'error'
    ],
    'no-useless-rename': [
      'error'
    ],
    'no-confusing-arrow': [
      'error'
    ],
    'no-template-curly-in-string': [
      'error'
    ],
    'no-array-constructor': [
      'error'
    ],
    'no-div-regex': [
      'error'
    ],
    'no-extra-bind': [
      'error'
    ],
    'no-extra-label': [
      'error'
    ],
    'no-floating-decimal': [
      'error'
    ],
    // TODO needs change ?
    'no-implicit-coercion': [
      'error'
    ],
    'no-implicit-globals': [
      'error'
    ],
    'no-implied-eval': [
      'error'
    ],
    'prefer-arrow-callback': [
      'error'
    ],
    'prefer-const': [
      'error'
    ],
    'prefer-exponentiation-operator': [
      'error'
    ],
    'prefer-destructuring': [
      'error'
    ],
    'prefer-object-spread': [
      'error'
    ],
    'prefer-rest-params': [
      'error'
    ],
    'prefer-named-capture-group': [
      'error'
    ],
    'prefer-numeric-literals': [
      'error'
    ],
    'prefer-object-has-own': [
      'error'
    ],
    'prefer-promise-reject-errors': [
      'error'
    ],
    'prefer-regex-literals': [
      'error'
    ],
    'prefer-template': [
      'error'
    ],
    'require-await': [
      'error'
    ],
    'init-declarations': [
      'error', 'always'
    ],
    'logical-assignment-operators': [
      'error', 'always'
    ],
    'operator-assignment': [
      'error', 'always'
    ],

    // variables
    'no-unused-vars': [
      'error'
    ],
    'no-self-compare': [
      'error'
    ],
    'block-scoped-var': [
      'error'
    ],
    camelcase: [
      'error'
    ],
    // TODO needs change ?
    'id-denylist': [
      'error', 'data', 'err', 'callback'
    ],
    'id-length': [
      'warn', { min: 2, }
    ],

    // classes
    'no-constant-binary-expression': [
      'error'
    ],
    'no-constructor-return': [
      'error'
    ],
    'no-new-native-nonconstructor': [
      'error'
    ],
    'no-unused-private-class-members': [
      'error'
    ],
    'class-methods-use-this': [
      'error'
    ],
    // TODO needs change ?
    'accessor-pairs': [
      'warn'
    ],
    'grouped-accessor-pairs': [
      'error'
    ],
    'consistent-this': [
      'error'
    ],
    'new-cap': [
      'error', {
        newIsCap           : true,
        newIsCapExceptions : [
        ],
        capIsNew           : false,
        capIsNewExceptions : [
          'Immutable.Map', 'Immutable.Set', 'Immutable.List'
        ],
      }
    ],
    'no-empty-static-block': [
      'error'
    ],
    'no-invalid-this': [
      'error'
    ],
    'no-iterator': [
      'error'
    ],
    'no-new': [
      'error'
    ],
    'no-new-func': [
      'error'
    ],
    'no-new-object': [
      'error'
    ],
    'no-new-wrappers': [
      'error'
    ],
    'no-proto': [
      'error'
    ],
    'symbol-description': [
      'warn'
    ],

    // functions
    'func-name-matching': [
      'error'
    ],
    'func-names': [
      'error', 'never'
    ],
    'func-style': [
      'error'
    ],
    'max-params': [
      'warn', 4
    ],
    'no-empty-function': [
      'error'
    ],
    'no-loop-func': [
      'error'
    ],

    // loops
    'no-unmodified-loop-condition': [
      'error'
    ],
    'no-unreachable-loop': [
      'error'
    ],
    'no-await-in-loop': [
      'error'
    ],
    // TODO needs change ?
    'guard-for-in': [
      'error'
    ],
  },
};
