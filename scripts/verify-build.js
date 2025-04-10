const fs = require('fs');
const path = require('path');

const requiredFiles = [
  '.next/server/app/page.js',
  '.next/static',
  '.next/server/app',
  '.next/types',
  'public/images',
  '.next/BUILD_ID',
];

function checkFiles() {
  const missing = requiredFiles.filter((file) => {
    const fullPath = path.join(process.cwd(), file);
    return !fs.existsSync(fullPath);
  });

  if (missing.length) {
    console.error('Missing required files:', missing);
    process.exit(1);
  }

  console.log('✅ All required Next.js files present');

  // Additional check for Netlify function
  const netlifyFunction = path.join(
    process.cwd(),
    '.netlify/functions/___netlify-server-handler'
  );
  if (!fs.existsSync(netlifyFunction)) {
    console.warn(
      '⚠️  Netlify server handler not found. Run `netlify build` first.'
    );
  }
}

checkFiles();
