module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended', '@trpl/javascript', './rules/shared.js', './rules/import.js'
  ],
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project: ['tsconfig.json', 'tsconfig.eslint.json'],
      },
      parser: '@typescript-eslint/parser',
      excludedFiles: ['**/*.md/*.*'],
      files: [
        '*.ts', '*.tsx', '*.mts', '*.cts'
      ],
    }
  ],
};
