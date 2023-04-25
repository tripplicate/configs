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
    }, {
      files: ['package.json'],
      parser: 'jsonc-eslint-parser',
      rules: {
        'jsonc/sort-keys': [
          'error', {
            pathPattern: '^$',
            order: [
              'name', 'version', 'author', 'description', 'keywords', 'contributors', 'license', 'repository', 'homepage', 'bugs', 'funding', 'packageManager', 'private', 'publishConfig', 'type', 'sideEffects', 'browser', 'engines', 'workspaces', 'main', 'files', 'typesVersions', 'import', 'directories', 'bin', 'man', 'scripts', 'peerDependencies', 'dependencies', 'devDependencies'
            ],
          }
        ],
      },
    }, {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
      rules: {
        'yml/indent': ['error', 2],
      },
    }, {
      files: ['*.toml'],
      parser: 'toml-eslint-parser',
      rules: {
        'toml/indent': ['error', 2],
      },
    }, {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    }
  ],
};
