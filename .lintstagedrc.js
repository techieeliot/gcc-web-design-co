module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'prettier --write',
    // Remove ESLint from pre-commit hook
  ],
  '*.{json,md,yml,yaml}': ['prettier --write'],
}
