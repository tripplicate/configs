module.exports = {
  extends: ['plugin:import/typescript'],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js', '.jsx', '.mjs', '.ts', '.tsx', '.d.ts'
        ],
      },
    },
  },
};
