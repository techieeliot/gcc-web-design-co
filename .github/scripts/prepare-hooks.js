const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get the git common dir for worktree support
function getGitDir() {
  try {
    // Get the git common directory
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

// Setup hooks
function setupHooks() {
  const gitDir = getGitDir();
  const hooksDir = path.join(gitDir, 'hooks');
  const preCommitHook = path.join(hooksDir, 'pre-commit');
  const commitMsgHook = path.join(hooksDir, 'commit-msg');

  const preCommitContent = `#!/bin/sh
# Pre-commit hook for code quality checks
set -e

echo "🔍 Running pre-commit checks..."

# Store the Git directory for worktree support
export GIT_DIR="${gitDir}"

# Get staged files
STAGED_FILES=$(git diff --cached --name-only --diff-filter=ACM | grep -E '\.(js|jsx|ts|tsx)$' || true)

if [ -n "$STAGED_FILES" ]; then
  # Run TypeScript checks
  echo "⌛ Running TypeScript checks..."
  npm run type-check

  # Run ESLint
  echo "⌛ Running ESLint..."
  npm run lint

  # Run Prettier
  echo "⌛ Running Prettier..."
  npm run format "$STAGED_FILES"

  # Add back the formatted files
  echo "📝 Adding formatted files back to staging..."
  git add $STAGED_FILES
fi

# Run lint-staged for remaining checks
npm run pre-commit

echo "✅ All pre-commit checks passed!"
`;

  const commitMsgContent = `#!/bin/sh
# Commit message hook
set -e

node ./scripts/verify-commit-msg.js "$1"
`;

  try {
    // Ensure hooks directory exists
    if (!fs.existsSync(hooksDir)) {
      console.log('📁 Creating hooks directory...');
      fs.mkdirSync(hooksDir, { recursive: true });
    }

    // Write pre-commit hook
    console.log('✏️  Writing pre-commit hook...');
    fs.writeFileSync(preCommitHook, preCommitContent);
    fs.chmodSync(preCommitHook, '755');

    // Write commit-msg hook
    console.log('✏️  Writing commit-msg hook...');
    fs.writeFileSync(commitMsgHook, commitMsgContent);
    fs.chmodSync(commitMsgHook, '755');

    console.log('✅ Git hooks installed successfully!');
    console.log('📍 Hooks location:', hooksDir);
  } catch (error) {
    console.error('❌ Failed to install Git hooks:', error);
    process.exit(1);
  }
}

setupHooks();