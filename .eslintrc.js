module.exports = {
  extends: ['next/core-web-vitals'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'react/no-unescaped-entities': 'off', // Changes error to warning during development
    quotes: ['error', 'single', { avoidEscape: true }],
    '@typescript-eslint/no-require-imports': 'off',
  },
}
