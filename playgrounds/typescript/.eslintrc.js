module.exports = {
  root: true,
  extends: [
    '@trpl-test/typescript',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
};
