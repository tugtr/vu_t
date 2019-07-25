module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-comma-dangle':'off',
    'no-param-reassign':'off',
    'import/extensions':'off',
    'no-nested-ternary':'off',
    'consistent-return':'off',
    'func-names':'off',
    'array-callback-return':'off',
    'no-unreachable': 'off',
    'no-useless-return': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
