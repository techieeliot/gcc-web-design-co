import { existsSync, statSync, readdirSync, readFileSync } from 'fs';
import { join } from 'path';

interface BuildManifest {
  pages: Record<string, string[]>;
  [key: string]: unknown;
}

const requiredFiles: readonly string[] = [
  '.next/server/app/page.js',
  '.next/static',
  '.next/server/app',
  '.next/types',
  'public/images',
  '.next/build-manifest.json',
  '.next/server/middleware-manifest.json',
  '.next/server/pages-manifest.json',
  '.next/server/app-paths-manifest.json',
] as const;

function checkDeploy(): void {
  const nextDir: string = join(process.cwd(), '.next');
  if (!existsSync(nextDir)) {
    console.error(
      '❌ .next directory not found. Please run npm run build first'
    );
    process.exit(1);
  }

  const missing: string[] = requiredFiles.filter((file: string) => {
    const fullPath: string = join(process.cwd(), file);
    try {
      const stats = statSync(fullPath);
      if (stats.isDirectory()) {
        const contents = readdirSync(fullPath);
        return contents.length === 0;
      }
      if (file.endsWith('.json')) {
        const content = readFileSync(fullPath, 'utf8');
        JSON.parse(content);
      }
      return false;
    } catch (err) {
      console.warn(
        `Warning checking ${file}:`,
        err instanceof Error ? err.message : String(err)
      );
      return true;
    }
  });

  if (missing.length) {
    console.error('❌ Missing or empty required paths:', missing);
    process.exit(1);
  }

  console.log('✅ All required files present');

  try {
    const buildManifest: BuildManifest = JSON.parse(
      readFileSync(join(process.cwd(), '.next/build-manifest.json'), 'utf8')
    );

    if (!buildManifest.pages || Object.keys(buildManifest.pages).length === 0) {
      console.error('❌ Build manifest appears to be empty or invalid');
      process.exit(1);
    }
  } catch (err) {
    console.error(
      '❌ Error loading build manifest:',
      err instanceof Error ? err.message : String(err)
    );
    process.exit(1);
  }
}

checkDeploy();
