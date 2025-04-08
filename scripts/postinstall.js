const fs = require('fs');
const path = require('path');
const { getPlatformConfig } = require('./platform-detect');

// Function to modify package.json for cross-platform compatibility
function makePackageJsonCrossplatform() {
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  const pkg = require(packageJsonPath);

  // Remove platform restrictions if they exist
  delete pkg.os;
  delete pkg.cpu;

  // Ensure all necessary SWC packages are included
  pkg.optionalDependencies = {
    '@next/swc-darwin-arm64': pkg.dependencies.next,
    '@next/swc-darwin-x64': pkg.dependencies.next,
    '@next/swc-linux-x64-gnu': pkg.dependencies.next,
    '@next/swc-linux-x64-musl': pkg.dependencies.next,
  };

  // Write modified package.json
  fs.writeFileSync(packageJsonPath, JSON.stringify(pkg, null, 2));
}

// Run platform-specific installations
async function main() {
  // Make package.json cross-platform compatible
  makePackageJsonCrossplatform();

  // Install platform-specific dependencies
  if (process.env.NETLIFY) {
    console.log('Installing Netlify-specific dependencies...');
    const swcPackage = getPlatformConfig();

    require('child_process').execSync(
      `npm install ${swcPackage}@14.2.27 sharp@latest --no-save`,
      { stdio: 'inherit' }
    );
  }
}

main().catch(console.error);
