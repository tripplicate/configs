module.exports = {
  extends: ['plugin:import/recommended'],
  plugins: [
    'import',
    'unused-imports'
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.cjs', '.mjs'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.cjs', '.mjs'],
      },
    },
  },
  rules: {
    'unused-imports/no-unused-imports': ['error'],

    'import/first': ['error'],
    'import/newline-after-import': ['error'],
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/no-deprecated': ['warn'],

    'import/no-duplicates': ['error'],
    'import/no-mutable-exports': ['error'],
    'import/no-named-default': ['error'],
    'import/no-self-import': ['error'],
    'import/no-webpack-loader-syntax': ['error'],
    'import/no-extraneous-dependencies': ['error'],
    'import/no-relative-packages': ['error'],

    'import/extensions': ['error', 'never', {
      jsx: 'never',
      json: 'always',
      yaml: 'always',
      svg: 'always',
      jpeg: 'always',
      png: 'always',
      scss: 'always',
      sass: 'always',
      css: 'always',
    }],

    'import/order': [
      'error', {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'type'
        ],
      }
    ],

    'import/dynamic-import-chunkname': [2, {
      importFunctions: ['dynamicImport'],
      webpackChunknameFormat: '[a-zA-Z0-57-9-/_]+',
    }],
  },
};
