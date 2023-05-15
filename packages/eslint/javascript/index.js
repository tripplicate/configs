module.exports = {
  extends: [
    'eslint:recommended', 'plugin:unicorn/recommended', './rules/formatter.js', './rules/import.js'
  ],
  plugins: ['unused-imports', 'unicorn'],
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  globals: {
    navigator: 'readonly',
    document: 'readonly',
    window: 'readonly',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: [
    'dist',
    'build',
    'coverage',
    'public',
    'temp',
    '__snapshots__',
    '*.d.ts',
    'CHANGELOG.md',
    'LICENSE*',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock'
  ],
  overrides: [
    {
      files: [
        '*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'
      ],
      rules: {
        'no-console': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'import/no-unresolved': 'off',
        'unused-imports/no-unused-imports': 'off',
        'unused-imports/no-unused-vars': 'off',
      },
    }
  ],
  rules: {
    'no-unused-vars': ['off'],
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_',
      }
    ],
    'no-var': 'warn',
    'new-cap': ['error', { newIsCap: true, capIsNew: false, properties: true, }],
    'new-parens': 'error',
    'object-shorthand': ['warn', 'properties'],
    'accessor-pairs': ['error', { setWithoutGet: true, enforceForClassMembers: true, }],
    'no-mixed-spaces-and-tabs': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-obj-calls': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-proto': 'error',
    'no-redeclare': ['error', { builtinGlobals: false, }],
    'no-regex-spaces': 'error',
    'no-return-assign': ['error', 'except-parens'],
    'no-self-assign': ['error', { props: true, }],
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow-restricted-names': 'error',
    'no-sparse-arrays': 'error',
    'no-tabs': 'error',
    'no-template-curly-in-string': 'error',
    'no-this-before-super': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-unexpected-multiline': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false, }],
    'no-unreachable': 'error',
    'no-unreachable-loop': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'no-unused-expressions': [
      'error', {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      }
    ],
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-const-assign': 'error',
    'no-constant-condition': ['error', { checkLoops: false, }],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-delete-var': 'error',
    'no-dupe-args': 'error',
    'no-dupe-class-members': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-useless-backreference': 'error',
    'no-empty': ['error', { allowEmptyCatch: true, }],
    'no-empty-character-class': 'error',
    'no-empty-pattern': 'error',
    'no-eval': 'error',
    'no-ex-assign': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': ['error', 'functions'],
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-func-assign': 'error',
    'no-global-assign': 'error',
    'no-implied-eval': 'error',
    'no-import-assign': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-iterator': 'error',
    'no-labels': ['error', { allowLoop: false, allowSwitch: false, }],
    'no-lone-blocks': 'error',
    'no-loss-of-precision': 'error',
    'no-misleading-character-class': 'error',
    'no-prototype-builtins': 'error',
    'no-useless-catch': 'error',
    'no-console': ['error'],
    'no-use-before-define': ['error', { functions: false, classes: false, variables: false, }],
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-escape': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',

    'unicorn/prefer-module': 'off',
    'unicorn/consistent-function-scoping': ['off'],
    'unicorn/prevent-abbreviations': ['off'],
    'unicorn/no-null': ['off'],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          kebabCase: true,
          pascalCase: true,
        },
      }
    ],
  },
};
