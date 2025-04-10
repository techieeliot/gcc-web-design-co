const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

/**
 * @typedef {Object} HookPaths
 * @property {string} hooksDir
 * @property {string} preCommitHook
 * @property {string} commitMsgHook
 */

function getGitDir() {
  try {
    const gitCommonDir = execSync('git rev-parse --git-common-dir', { 
      encoding: 'utf8' 
    }).trim();
    
    console.log('📂 Git common directory:', gitCommonDir);
    return gitCommonDir;
  } catch (error) {
    console.error('Failed to find Git directory:', error.message);
    process.exit(1);
  }
}

/**
 * @param {string} gitDir
 * @returns {HookPaths}
 */
function getHookPaths(gitDir) {
  return {
    hooksDir: path.join(gitDir, 'hooks'),
    preCommitHook: path.join(gitDir, 'hooks', 'pre-commit'),
    commitMsgHook: path.join(gitDir, 'hooks', 'commit-msg')
  };
}

function createHookContent(gitDir) {
  return `#!/bin/sh
set -e

echo "🔍 Running pre-commit checks..."
export GIT_DIR="${gitDir}"

echo "⌛ Running TypeScript checks..."
npm run type-check

echo "⌛ Running ESLint..."
npm run lint

echo "⌛ Running Tests..."
npm run test:unit # Only run unit tests in pre-commit to keep it fast

echo "⌛ Processing files..."
# Process files in smaller batches using find
git diff --cached --name-only --diff-filter=ACM |
  grep -E '\.(js|jsx|ts|tsx|md|mdx)$' |
  while IFS= read -r file; do
    if [ -f "$file" ]; then
      printf "Formatting %s..." "$file"
      npm run format "$file"
      git add "$file"
      echo " ✓"
    fi
  done

echo "✅ All pre-commit checks passed!"
`;
}

function setupHooks() {
  try {
    const gitDir = getGitDir();
    const { hooksDir, preCommitHook, commitMsgHook } = getHookPaths(gitDir);

    // Ensure hooks directory exists
    if (!fs.existsSync(hooksDir)) {
      console.log('📁 Creating hooks directory...');
      fs.mkdirSync(hooksDir, { recursive: true });
    }

    // Write pre-commit hook
    console.log('✏️  Writing pre-commit hook...');
    fs.writeFileSync(preCommitHook, createHookContent(gitDir));
    fs.chmodSync(preCommitHook, '755');

    // Write commit-msg hook
    console.log('✏️  Writing commit-msg hook...');
    fs.writeFileSync(commitMsgHook, `#!/bin/sh
# Commit message hook
set -e

node ./scripts/verify-commit-msg.js "$1"
`);
    fs.chmodSync(commitMsgHook, '755');

    console.log('✅ Git hooks installed successfully!');
    console.log('📍 Hooks location:', hooksDir);
  } catch (error) {
    console.error('❌ Failed to install Git hooks:', error.message);
    process.exit(1);
  }
}

setupHooks();