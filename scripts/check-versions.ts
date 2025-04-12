import { engines } from '../package.json';

const checkVersion = (current: string, required: string): boolean => {
  const [currentMajor, currentMinor] = current
    .replace(/^v/, '')
    .split('.')
    .map(Number);
  const [reqMajor, reqMinor] = required
    .replace(/[\^~]/, '')
    .split('.')
    .map(Number);

  return (
    currentMajor === reqMajor &&
    typeof currentMinor === 'number' &&
    typeof reqMinor === 'number' &&
    currentMinor >= reqMinor
  );
};

const nodeVersion = process.version;
const npmVersion = process.env.npm_config_user_agent?.split('/')[1] ?? '';

if (!checkVersion(nodeVersion, engines.node)) {
  console.error(
    `\x1b[31mError: Node.js version ${engines.node} is required. Current version: ${nodeVersion}\x1b[0m`
  );
  process.exit(1);
}

if (!checkVersion(npmVersion, engines.npm)) {
  console.error(
    `\x1b[31mError: npm version ${engines.npm} is required. Current version: ${npmVersion}\x1b[0m`
  );
  process.exit(1);
}

console.log('\x1b[32m✓ Node.js and npm versions are correct\x1b[0m');
