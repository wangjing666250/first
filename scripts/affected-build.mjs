import { execSync } from 'node:child_process';

try {
  execSync('turbo run build --filter=...[HEAD^1]', { stdio: 'inherit' });
} catch {
  console.warn('No git history detected, fallback to full build.');
  execSync('pnpm -r --filter ./packages/* run build', { stdio: 'inherit' });
}
