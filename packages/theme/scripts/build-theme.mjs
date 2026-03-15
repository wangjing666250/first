import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const srcFile = path.resolve(root, 'src/index.css');
const outDir = path.resolve(root, 'dist');
const outFile = path.resolve(outDir, 'index.css');

fs.mkdirSync(outDir, { recursive: true });
fs.copyFileSync(srcFile, outFile);
console.log('Theme build finished:', outFile);
