import { existsSync } from 'fs';
import { join } from 'path';

const requiredFiles: readonly string[] = [
  '.next/server/app/page.js',
  '.next/static',
  '.next/server/app',
  '.next/types',
  'public/images',
  '.next/BUILD_ID',
] as const;

function checkFiles(): void {
  const missing: string[] = requiredFiles.filter((file: string) => {
    const fullPath: string = join(process.cwd(), file);
    return !existsSync(fullPath);
  });

  if (missing.length) {
    console.error('Missing required files:', missing);
    process.exit(1);
  }

  console.log('✅ All required Next.js files present');

  const netlifyFunction: string = join(
    process.cwd(),
    '.netlify/functions/___netlify-server-handler'
  );

  if (!existsSync(netlifyFunction)) {
    console.warn(
      '⚠️  Netlify server handler not found. Run `netlify build` first.'
    );
  }
}

checkFiles();
