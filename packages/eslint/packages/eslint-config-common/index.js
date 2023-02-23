module.exports = {
  extends : ['plugin:import/recommended', 'plugin:markdown/recommended', 'plugin:jsonc/recommended-with-json', 'plugin:yml/standard'],
  plugins : ['unicorn', 'markdown', 'unused-imports'],
  env     : {
    browser : true,
    node    : true,
    es6     : true,
  },
  globals : {
    window    : 'readonly',
    document  : 'readonly',
    navigator : 'readonly',
  },
  parserOptions : {
    ecmaVersion : 2022,
    sourceType  : 'module',
  },
  settings : {
    'import/resolver' : {
      node : { extensions: ['.js', '.mjs', '.jsx'] },
    },
  },
  overrides : [
    // cli
    {
      files : ['scripts/**/*.*', 'cli.*'],
      rules : {
        'no-console'              : ['off'],
        'unicorn/no-process-exit' : ['off'],
      },
    },
    // json
    {
      files  : ['*.json', '*json5'],
      parser : 'jsonc-eslint-parser',
      rules  : {
        'jsonc/array-bracket-spacing' : ['warn', 'never'],
        'jsonc/comma-style'           : ['error', 'last'],
        'jsonc/indent'                : ['error', 2],
        'jsonc/key-spacing'           : [
          'error',
          {
            beforeColon : false,
            afterColon  : true,
          },
        ],
        'jsonc/no-octal-escape'      : 'error',
        'jsonc/no-comments'          : 'off',
        'jsonc/object-curly-newline' : [
          'error',
          {
            multiline  : true,
            consistent : true,
          },
        ],
        'jsonc/object-curly-spacing'    : ['error', 'always'],
        'jsonc/object-property-newline' : ['error', { allowMultiplePropertiesPerLine: true }],
      },
    },
    // package.json
    {
      files  : ['package.json'],
      parser : 'jsonc-eslint-parser',
      rules  : {
        'jsonc/sort-keys' : [
          'error',
          {
            pathPattern : '^$',
            order       : [
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
              'directories',
              'bin',
              'man',
              'scripts',
              'peerDependencies',
              'dependencies',
              'devDependencies',
            ],
          },
          {
            pathPattern : '^exports.*$',
            order       : ['types', 'node', 'default', 'import', 'require'],
          },
        ],
      },
    },
    // yaml,yml
    {
      files  : ['*.yaml', '*.yml'],
      parser : 'yaml-eslint-parser',
    },
    // markdown,md
    {
      files : ['**/*.md/*.*'],
      rules : {
        '@typescript-eslint/no-redeclare'            : ['off'],
        '@typescript-eslint/no-unused-vars'          : ['off'],
        '@typescript-eslint/no-use-before-define'    : ['off'],
        '@typescript-eslint/no-var-requires'         : ['off'],
        '@typescript-eslint/comma-dangle'            : ['off'],
        '@typescript-eslint/consistent-type-imports' : ['off'],
        'import/no-unresolved'                       : ['off'],
        'unused-imports/no-unused-imports'           : ['off'],
        'unused-imports/no-unused-vars'              : ['off'],
        'no-alert'                                   : ['off'],
        'no-console'                                 : ['off'],
        'no-restricted-imports'                      : ['off'],
        'no-undef'                                   : ['off'],
        'no-unused-expressions'                      : ['off'],
        'no-unused-vars'                             : ['off'],
      },
    },
  ],
  rules : {
    // formatter
    'max-len' : [
      'warn',
      {
        code                   : 120,
        tabWidth               : 2,
        ignoreComments         : true, 
        ignoreUrls             : true,
        ignoreStrings          : true,
        ignoreTemplateLiterals : true,
      },
    ],
    'indent' : [
      'error',
      2,
      {
        SwitchCase         : 1,
        VariableDeclarator : 3,
        outerIIFEBody      : 1, 
      },
    ],
    'quotes'                  : ['error', 'single'],
    'quote-props'             : ['error', 'consistent-as-needed'],
    'no-multiple-empty-lines' : [
      'error',
      {
        max    : 1,
        maxEOF : 0,
        maxBOF : 0,
      },
    ],
    'comma-dangle'  : ['error', 'always-multiline'],
    'comma-spacing' : 'error',
    'comma-style'   : 'error',
    'semi-style'    : ['error', 'last'],
    'semi-spacing'  : [
      'error',
      {
        before : false,
        after  : true,
      },
    ],
    'padding-line-between-statements' : [
      'error',
      {
        blankLine : 'always',
        prev      : ['const', 'let', 'var'],
        next      : '*', 
      },
      {
        blankLine : 'any',
        prev      : ['const', 'let', 'var'],
        next      : ['const', 'let', 'var'], 
      },
    ],
    'key-spacing' : [
      2,
      {
        singleLine : {
          beforeColon : false,
          afterColon  : true,
        },
        multiLine : {
          beforeColon : true,
          afterColon  : true,
          align       : 'colon',
        },
      },
    ],
    'computed-property-spacing' : 'error',
    'space-before-blocks'       : ['error'],
    'space-in-parens'           : ['error', 'never'],
    'space-unary-ops'           : [
      'error',
      {
        words    : true,
        nonwords : false,
      },
    ],
    'switch-colon-spacing'             : ['error'],
    'wrap-regex'                       : ['error'],
    'brace-style'                      : ['error', '1tbs'],
    'camelcase'                        : ['error', { properties: 'never' }],
    'max-statements-per-line'          : ['error', { max: 1 }],
    // variables
    'unused-imports/no-unused-imports' : ['error'],
    'unused-imports/no-unused-vars'    : [
      'error',
      {
        vars              : 'all',
        varsIgnorePattern : '^_',
        args              : 'after-used',
        argsIgnorePattern : '^_',
      },
    ],
    // imports, exports
    'import/order' : [
      'error',
      {
        'newlines-between' : 'always',
        'alphabetize'      : {
          order           : 'desc',
          caseInsensitive : true,
        },
        'groups' : [
          'builtin',
          'external',
          'type',
          'internal',
          'index',
          'sibling',
          'parent',
          'object',
        ],
        'pathGroups' : [
          {
            pattern  : '/**',
            group    : 'parent',
            position : 'after',
          },
        ],
      },
    ],
    'import/first'              : ['error'],
    'import/no-mutable-exports' : ['error'],
    'import/no-unresolved'      : ['off'],
    // objects
    'object-curly-newline'      : [
      'error',
      {
        multiline     : true,
        minProperties : 4,
        consistent    : true,
      },
    ],
    'object-property-newline'                : ['error', { allowAllPropertiesOnSameLine: false }],
    'object-curly-spacing'                   : ['error', 'always'],
    // class
    'lines-between-class-members'            : ['error', 'always'],
    // behavior
    'eqeqeq'                                 : ['error', 'always'],
    'no-template-curly-in-string'            : ['error'],
    'no-alert'                               : ['error'],
    'no-console'                             : ['error'],
    'no-extra-label'                         : ['error'],
    'no-div-regex'                           : ['off'],
    'no-fallthrough'                         : ['error'],
    'no-eq-null'                             : ['off'],
    'no-empty-pattern'                       : ['error'],
    // unicorn
    'unicorn/no-new-buffer'                  : ['error'],
    'unicorn/no-instanceof-array'            : ['error'],
    'unicorn/no-unsafe-regex'                : ['error'],
    'unicorn/prefer-includes'                : ['error'],
    'unicorn/prefer-string-starts-ends-with' : ['error'],
    'unicorn/prefer-text-content'            : ['error'],
    'unicorn/throw-new-error'                : ['error'],
    'unicorn/prefer-type-error'              : ['error'],
    'unicorn/switch-case-braces'             : ['error'],
    'unicorn/relative-url-style'             : ['error'],
    'unicorn/prefer-query-selector'          : ['error'],
    'unicorn/filename-case'                  : [
      'error',
      {
        cases : {
          kebabCase  : true,
          pascalCase : true,
        },
      },
    ],
  },
}
