module.exports = {
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.ts', '.tsx', '.d.ts'
      ],
    },
    'import/resolver': {
      node: {
        extensions: [
          '.mjs', '.js', '.json', '.ts', '.d.ts'
        ],
      },
    },
    'import/extensions': [
      '.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'
    ],
    'import/external-module-folders': [
      'node_modules', 'node_modules/@types'
    ],
  },
};
