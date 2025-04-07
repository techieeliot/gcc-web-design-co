const fs = require('fs');

// Read the commit message from the file
const message = fs.readFileSync(process.argv[2], 'utf8').trim();

// Commit message format regex
const commitRegex =
  /^(feat|fix|docs|style|refactor|test|chore|perf|ci|build|revert)(\(.+\))?: .{1,50}/;

if (!commitRegex.test(message)) {
  console.error('\n❌ Invalid commit message format.');
  console.error('\nProper format is: <type>(<scope>): <description>');
  console.error(
    '\nTypes: feat|fix|docs|style|refactor|test|chore|perf|ci|build|revert'
  );
  console.error('Scope: optional, in parentheses');
  console.error('Description: max 50 characters\n');
  console.error('Example: feat(auth): add login functionality\n');
  process.exit(1);
}

console.log('✅ Commit message format is valid');
process.exit(0);
