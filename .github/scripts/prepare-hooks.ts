import { exec } from 'child_process';
import { mkdir, writeFile, readFile, access } from 'fs/promises';
import { join } from 'path';
import { promisify } from 'util';
import { constants } from 'fs';

const execAsync = promisify(exec);

interface GitPaths {
  gitDir: string;
  hookDir: string;
  workTree: string;
}

async function fileExists(path: string): Promise<boolean> {
  try {
    await access(path, constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function findGitPaths(): Promise<GitPaths> {
  try {
    // Get Git directory and working tree paths
    const { stdout: gitDir } = await execAsync('git rev-parse --git-dir');
    const { stdout: workTree } = await execAsync('git rev-parse --show-toplevel');
    
    const trimmedGitDir = gitDir.trim();
    const trimmedWorkTree = workTree.trim();
    
    // Check if we're in a worktree
    const isWorktree = trimmedGitDir.includes('worktrees');
    
    // Get the main repository's .git directory if in a worktree
    const mainGitDir = isWorktree 
      ? trimmedGitDir.split('worktrees')[0].replace(/\/+$/, '')
      : trimmedGitDir;
    
    // Use the correct hooks directory
    const hookDir = join(mainGitDir, 'hooks');
    
    // Create hooks directory if it doesn't exist
    await mkdir(hookDir, { recursive: true });
    
    return {
      gitDir: trimmedGitDir,
      hookDir,
      workTree: trimmedWorkTree
    };
  } catch (error) {
    console.error('Failed to find Git paths:', 
      error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  }
}

function getHookPaths(paths: GitPaths) {
  const hooks = ['commit-msg', 'pre-commit'];
  return hooks.map(hook => ({
    src: join(paths.workTree, '.github/hooks', hook),
    dest: join(paths.hookDir, hook),
  }));
}

async function installHooks(): Promise<void> {
  try {
    const paths = await findGitPaths();
    const hookPaths = getHookPaths(paths);

    for (const { src, dest } of hookPaths) {
      if (!(await fileExists(src))) {
        console.error(`❌ Hook source file not found: ${src}`);
        process.exit(1);
      }

      try {
        const content = await readFile(src, 'utf-8');
        await writeFile(dest, content, { mode: 0o755 });
        console.log(`✓ Installed hook: ${dest}`);
      } catch (error) {
        console.error(`❌ Failed to install hook ${dest}:`,
          error instanceof Error ? error.message : 'Unknown error');
        process.exit(1);
      }
    }

    console.log('✓ Git hooks installed successfully');
  } catch (error) {
    console.error('❌ Failed to install Git hooks:', 
      error instanceof Error ? error.message : 'Unknown error');
    process.exit(1);
  }
}

// Start installation
void installHooks();