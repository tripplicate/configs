module.exports = {
  root: true,
  extends: [
    '@trpl/typescript',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: 'tsconfig.json',
  },
};
