const os = require('os');

function getPlatformConfig() {
  const platform = os.platform();
  const arch = os.arch();

  const config = {
    darwin: {
      arm64: '@next/swc-darwin-arm64',
      x64: '@next/swc-darwin-x64',
    },
    linux: {
      x64: '@next/swc-linux-x64-gnu',
    },
    win32: {
      x64: '@next/swc-win32-x64-msvc',
    },
  };

  return config[platform]?.[arch] || '@next/swc-linux-x64-gnu';
}

module.exports = { getPlatformConfig };
