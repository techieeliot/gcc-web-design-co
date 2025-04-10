const fs = require('fs');
const path = require('path');

const requiredFiles = [
  '.next/server/app/page.js',
  '.next/static',
  '.next/server/app',
  '.next/types',
  'public/images',
  '.next/build-manifest.json',
  '.next/server/middleware-manifest.json',
  '.next/server/pages-manifest.json',
  '.next/server/app-paths-manifest.json',
];

function checkDeploy() {
  // Check if .next directory exists
  const nextDir = path.join(process.cwd(), '.next');
  if (!fs.existsSync(nextDir)) {
    console.error(
      '❌ .next directory not found. Please run npm run build first'
    );
    process.exit(1);
  }

  const missing = requiredFiles.filter((file) => {
    const fullPath = path.join(process.cwd(), file);
    try {
      const stats = fs.statSync(fullPath);
      // For directories, check if they're not empty
      if (stats.isDirectory()) {
        const contents = fs.readdirSync(fullPath);
        return contents.length === 0;
      }
      // For JSON files, check if they're valid
      if (file.endsWith('.json')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        JSON.parse(content); // Will throw if invalid JSON
      }
      return false;
    } catch (err) {
      console.warn(`Warning checking ${file}:`, err.message);
      return true;
    }
  });

  if (missing.length) {
    console.error('❌ Missing or empty required paths:', missing);
    process.exit(1);
  }

  console.log('✅ All required files present');

  // Additional check for build manifests
  try {
    const buildManifest = require(
      path.join(process.cwd(), '.next/build-manifest.json')
    );
    if (!buildManifest.pages || Object.keys(buildManifest.pages).length === 0) {
      console.error('❌ Build manifest appears to be empty or invalid');
      process.exit(1);
    }
  } catch (err) {
    console.error('❌ Error loading build manifest:', err.message);
    process.exit(1);
  }
}

checkDeploy();
