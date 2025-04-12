import { readFileSync } from 'fs';

type CommitType =
  | 'feat'
  | 'fix'
  | 'docs'
  | 'style'
  | 'refactor'
  | 'test'
  | 'chore'
  | 'perf'
  | 'ci'
  | 'build'
  | 'revert';

const COMMIT_TYPES: readonly CommitType[] = [
  'feat',
  'fix',
  'docs',
  'style',
  'refactor',
  'test',
  'chore',
  'perf',
  'ci',
  'build',
  'revert',
] as const;

if (!process.argv[2]) {
  console.error('Error: No commit message file provided');
  process.exit(1);
}

const message: string = readFileSync(process.argv[2], 'utf8').trim();

const commitRegex = new RegExp(
  `^(${COMMIT_TYPES.join('|')})(?:\\(.+\\))?: .{1,50}$`
);

if (!commitRegex.test(message)) {
  console.error('\n❌ Invalid commit message format.');
  console.error('\nProper format is: <type>(<scope>): <description>');
  console.error(`\nTypes: ${COMMIT_TYPES.join('|')}`);
  console.error('Scope: optional, in parentheses');
  console.error('Description: max 50 characters\n');
  console.error('Example: feat(auth): add login functionality\n');
  process.exit(1);
}

console.log('✅ Commit message format is valid');
process.exit(0);
