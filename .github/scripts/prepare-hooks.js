const fs = require('fs');
const path = require('path');

const gitHooksDir = path.join(__dirname, '/.git/hooks');
const preCommitHook = path.join(gitHooksDir, 'pre-commit');

const hookContent = `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

exec < /dev/tty

npm run pre-commit
`;

// Ensure hooks directory exists
if (!fs.existsSync(gitHooksDir)) {
  fs.mkdirSync(gitHooksDir, { recursive: true });
}

// Write pre-commit hook
fs.writeFileSync(preCommitHook, hookContent);
fs.chmodSync(preCommitHook, '755');

console.log('Git hooks installed successfully! 🎉');