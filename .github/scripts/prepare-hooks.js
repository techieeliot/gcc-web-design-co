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

  const hookContent = `#!/bin/sh
# Pre-commit hook for lint-staged
set -e

echo "🔍 Running pre-commit hooks..."
export GIT_DIR="${gitDir}"
npm run pre-commit
echo "✅ Pre-commit checks passed!"
`;

  try {
    // Ensure hooks directory exists
    if (!fs.existsSync(hooksDir)) {
      console.log('📁 Creating hooks directory...');
      fs.mkdirSync(hooksDir, { recursive: true });
    }

    // Write pre-commit hook
    console.log('✏️  Writing pre-commit hook...');
    fs.writeFileSync(preCommitHook, hookContent);
    fs.chmodSync(preCommitHook, '755');

    console.log('✅ Git hooks installed successfully!');
    console.log('📍 Hook location:', preCommitHook);
  } catch (error) {
    console.error('❌ Failed to install Git hooks:', error);
    process.exit(1);
  }
}

setupHooks();