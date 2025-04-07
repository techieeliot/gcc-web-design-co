module.exports = {
  "pre-commit": "npm run pre-commit",
  "pre-push": "npm run type-check",
  "commit-msg": "node scripts/verify-commit-msg.js",
};
