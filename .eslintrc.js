module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-native', 'prettier'],
  env: {
    'react-native/react-native': true,
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/react-in-jsx-scope': 'off', // Not needed in React Native
  },
  ignorePatterns: [
    'node_modules/',
    'lib/',
    'android/',
    'ios/',
    'example/android',
    'example/ios',
  ],
};
