module.exports = {
  'env': {
    'es2020': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 11,
    'sourceType': 'module'
  },
  'ignorePatterns': ['db.sqlite'],
  'rules': {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never']
  }
}
