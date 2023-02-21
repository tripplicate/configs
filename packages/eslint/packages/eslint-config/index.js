module.exports =  {
  'extends' : ['eslint:recommended', 'plugin:unicorn/recommended', 'plugin:import/recommended', 'plugin:markdown/recommended', 'plugin:jsonc/recommended-with-json', 'plugin:yml/standard'],
  'plugins' : ['markdown', 'unused-imports'],
  'env'     : {
    'browser' : true,
    'node'    : true,
    'es6'     : true,
  },
  'globals' : {
    'window'    : 'readonly',
    'document'  : 'readonly',
    'navigator' : 'readonly',
  }, 
  'parserOptions' : {
    'ecmaVersion' : 2022,
    'sourceType'  : 'module',
  },
  'settings' : {
    'import/resolver' : {
      'node' : { 'extensions': ['.js', '.mjs'] },
    },
  },
  'overrides' : [
    // json
    {
      'files'  : ['*.json', '*json5'],
      'parser' : 'jsonc-eslint-parser',
      'rules'  : {
        'jsonc/array-bracket-spacing' : ['warn', 'never'],
        'jsonc/comma-style'           : ['error', 'last'],
        'jsonc/indent'                : ['error', 2],
        'jsonc/key-spacing'           : [
          'error',
          {
            'beforeColon' : false,
            'afterColon'  : true, 
          },
        ],
        'jsonc/no-octal-escape'      : 'error',
        'jsonc/no-comments'          : 'off',
        'jsonc/object-curly-newline' : [
          'error',
          {
            'multiline'  : true,
            'consistent' : true, 
          },
        ],
        'jsonc/object-curly-spacing'    : ['error', 'always'],
        'jsonc/object-property-newline' : ['error', { 'allowMultiplePropertiesPerLine': true }],
      },
    },
    {
      'files'  : ['package.json'],
      'parser' : 'jsonc-eslint-parser',
      'rules'  : {
        'jsonc/sort-keys' : [
          'error',
          {
            'pathPattern' : '^$',
            'order'       : [
              'name',
              'version',
              'author',
              'description',
              'keywords',
              'contributors',
              'license',
              'repository',
              'homepage',
              'bugs',
              'funding',
              'packageManager',
              'private',
              'type',
              'sideEffects',
              'browser',
              'engines',
              'workspaces',
              'main',
              'files',
              'typesVersions',
              'import',
              'export',
              'directories',
              'bin',
              'man',
              'scripts',
              'dependencies',
              'peerDependencies',
              'devDependencies',
            ],
          },
        ],
      },
    },
    // yaml yml
    {
      'files'  : ['*.yaml', '*.yml'],
      'parser' : 'yaml-eslint-parser',
    },
    // markdown md
    {
      'files' : ['**/*.md/*.js'],
      'rules' : {
        'no-alert'                         : ['off'],
        'no-console'                       : ['off'],
        'no-restricted-imports'            : ['off'],
        'no-undef'                         : ['off'],
        'no-unused-expressions'            : ['off'],
        'no-unused-vars'                   : ['off'],
        'no-duplicate-imports'             : ['off'],
        'unused-imports/no-unused-imports' : ['off'],
        'unused-imports/no-unused-vars'    : ['off'],
      },
    },
    // settings for cli apps 
    {
      files : ['scripts/**/*.*', 'cli.*'],
      rules : {
        'no-console'              : ['off'],
        'unicorn/no-process-exit' : ['off'],
      },
    },
    // tests
    {
      files : ['*.test.ts', '*.test.js', '*.spec.ts', '*.spec.js'],
      rules : {
        'no-unused-expressions'       : 'off',
        'no-only-tests/no-only-tests' : 'error',
      },
    },
  ],
  'rules' : {

    // styling
    'max-len' : [
      'warn',
      {
        'code'                   : 120,
        'tabWidth'               : 2,
        'ignoreComments'         : true, 
        'ignoreUrls'             : true,
        'ignoreStrings'          : true,
        'ignoreTemplateLiterals' : true,
      },
    ],
    'quotes'                  : ['error', 'single'],
    'no-multiple-empty-lines' : [
      'error',
      {
        'max'    : 1,
        'maxEOF' : 0,
        'maxBOF' : 0, 
      },
    ],
    'comma-dangle'  : ['error', 'always-multiline'],
    'comma-spacing' : 'error',
    'comma-style'   : 'error',
    'semi-style'    : ['error', 'last'],
    'semi-spacing'  : [
      'error',
      {
        'before' : false,
        'after'  : true, 
      },
    ],
    'key-spacing' : [
      2,
      {
        'singleLine' : {
          'beforeColon' : false,
          'afterColon'  : true,
        },
        'multiLine' : {
          'beforeColon' : true,
          'afterColon'  : true,
          'align'       : 'colon',
        },
      },
    ],
    'computed-property-spacing' : 'error',
    'space-before-blocks'       : ['error'],
    'space-in-parens'           : ['error', 'never'],
    'space-unary-ops'           : [
      'error',
      {
        'words'    : true,
        'nonwords' : false, 
      },
    ],
    'switch-colon-spacing' : ['error'],
    'wrap-regex'           : ['error'],
    'brace-style'          : ['error', '1tbs'],

    'camelcase' : ['error', { 'properties': 'never' }],
    'indent'    : [
      'error',
      2,
      {
        'SwitchCase'         : 1,
        'VariableDeclarator' : 3,
        'outerIIFEBody'      : 1, 
      },
    ],

    'max-statements-per-line' : ['error', { 'max': 1 }],
    'no-console'              : ['error'],

    //import and export
    'sort-imports' : [
      'error',
      {
        'ignoreCase'            : false,
        'ignoreDeclarationSort' : false,
        'ignoreMemberSort'      : false,
        'memberSyntaxSortOrder' : ['none', 'all', 'multiple', 'single'],
        'allowSeparatedGroups'  : true,
      },
    ],
    'no-duplicate-imports'      : ['error', { 'includeExports': true }],
    'import/order'              : 'error',
    'import/first'              : 'error',
    'import/no-mutable-exports' : 'error',
    'import/no-unresolved'      : 'off',
    'import/no-absolute-path'   : 'off',

    // variables
    'no-unused-vars'                   : ['off'],
    'unused-imports/no-unused-imports' : ['warn'],
    'unused-imports/no-unused-vars'    : [
      'error',
      {
        'vars'              : 'all',
        'varsIgnorePattern' : '^_',
        'args'              : 'after-used',
        'argsIgnorePattern' : '^_', 
      },
    ],
    'no-var'                       : 'warn',
    'no-use-before-define'         : ['error'],
    'one-var-declaration-per-line' : ['error', 'always'],  
    'no-floating-decimal'          : ['error'],
    'no-implicit-globals'          : 'off',
    'no-implicit-coercion'         : [
      'off',
      {
        'boolean' : false,
        'number'  : true,
        'string'  : true,
      },
    ],
    'no-global-assign' : ['error', { 'exceptions': [] }],
    'prefer-const'     : ['error'],

    // arrays
    'array-bracket-spacing' : ['error', 'never'],
    'array-bracket-newline' : [
      'error',
      {
        'multiline' : true,
        'minItems'  : 8, 
      },
    ],
    'array-element-newline' : [
      'error',
      {
        'multiline' : true,
        'minItems'  : 8, 
      },
    ],
    'array-callback-return' : ['error'],

    // objects
    'no-extend-native'     : 'error',
    'no-extra-bind'        : 'error',
    'consistent-this'      : ['error', 'self'],
    'dot-notation'         : ['error'],
    'object-curly-newline' : [
      'error',
      {
        'multiline'     : true,
        'minProperties' : 4,
        'consistent'    : true, 
      },
    ],
    'object-property-newline' : ['error', { 'allowAllPropertiesOnSameLine': false }],
    'object-curly-spacing'    : ['error', 'always'],

    // classes 
    'no-unused-private-class-members' : ['error'],
    'class-methods-use-this'          : ['warn'],
    'accessor-pairs'                  : ['error'],

    // functions
    'arrow-body-style'  : ['error', 'as-needed'],
    'func-call-spacing' : ['error', 'never'],
    'no-empty-function' : [
      'error',
      {
        'allow' : ['arrowFunctions', 'functions', 'methods'],
      },
    ],

    // behavior
    'eqeqeq'                      : ['error', 'always'],
    'no-template-curly-in-string' : ['error'],
    'no-alert'                    : ['warn'],
    'no-extra-label'              : 'error',
    'no-div-regex'                : 'off',
    'no-fallthrough'              : 'error',
    'no-eq-null'                  : 'off',
    'no-empty-pattern'            : 'error',

    // unicorn
    'unicorn/prefer-module' : ['off'],
  },
}