module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['error', 'never'],
    'no-tabs': 'off',
    'max-len': [0, 400, 4],
    'key-spacing': ['error', { mode: 'minimum' }],
    'no-multi-spaces': 'off',
    'linebreak-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
    }],
  },
}
