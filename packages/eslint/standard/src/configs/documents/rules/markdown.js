module.exports = {
  plugins: ['markdown'],
  overrides: [
    {
      files: ['**/*.md'],
      processor: 'markdown/markdown',
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
    },
    {
      files: ['**/*.md/*.*'],
      rules: {
        'unused-imports/no-unused-imports': 'off',
        'unused-imports/no-unused-vars': 'off',

        'import/no-unresolved': 'off',
        'import/first': 'off',
        'import/newline-after-import': 'off',
        'import/no-deprecated': 'off',

        'no-alert': 'off',
        'no-console': 'off',
        'no-restricted-imports': 'off',
        'no-undef': 'off',
        'no-unused-expressions': 'off',
        'no-unused-vars': 'off',

        '@stylistic/padding-line-between-statements': 'off',
        quotes: 'off',
        '@stylistic/quotes': 'off',
        'func-style': 'off',

        '@typescript-eslint/no-redeclare': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/consistent-type-imports': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-require-imports': 'off',
      },
    }
  ],
};
