module.exports = {
  '*.{js,jsx,ts,tsx,md,mdx}': [
    'prettier --write',
    // Remove ESLint from pre-commit hook
  ],
  '*.{json,md,yml,yaml}': ['prettier --write'],
};
