module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/html-closing-bracket-newline': [
      'off',
      {
        singleline: 'never',
        multiline: 'never',
      },
    ],
    'vue/no-unused-components': [
      'error',
      {
        ignoreWhenBindingPresent: true,
      },
    ],
  },
}
