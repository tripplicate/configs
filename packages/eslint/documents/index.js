module.exports = {
  extends: ['plugin:jsonc/recommended-with-jsonc', 'plugin:yml/standard'],
  plugins: ['markdown'],
  overrides: [
    {
      files: [
        '*.json', '*.json5', '*.jsonc'
      ],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/indent': ['error', 2],
      },
    },
    {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error', {
            pathPattern: '^$',
            order: [
              'name', 'version', 'author', 'description', 'keywords', 'contributors', 'license', 'repository', 'homepage', 'bugs', 'funding', 'packageManager', 'private', 'publishConfig', 'type', 'sideEffects', 'browser', 'engines', 'workspaces', 'main', 'types', 'typesVersions', 'files', 'import', 'directories', 'bin', 'man', 'scripts', 'peerDependencies', 'dependencies', 'devDependencies'
            ],
          }
        ],
        'jsonc/no-dupe-keys': ['off'],
      },
    },
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
      rules: {
        'yml/indent': ['error', 2],
      },
    },
    {
      files: ['*.toml'],
      parser: 'toml-eslint-parser',
      rules: {
        'toml/indent': ['error', 2],
      },
    },
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
    {
      files: ['**/*/md.*'],
      rules: {
        'no-unused-vars': 'off',
        'import/no-unresolved': 'off',
        'unused-imports/no-unused-imports': 'off',
        'unused-imports/no-unused-vars': 'off',
        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
      },
    }
  ],
};
