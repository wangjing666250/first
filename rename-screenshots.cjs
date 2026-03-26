// @ts-check
const fs = require('fs');
const path = require('path');

const snapshotsDir = path.join(__dirname, 'play', 'e2e');

const files = [
  'input-custom.spec.ts-snapshots/input-custom-showcases-chromium-win32.png',
  'modal-custom.spec.ts-snapshots/modal-custom-showcases-chromium-win32.png',
  'pagination-custom.spec.ts-snapshots/pagination-custom-showcases-chromium-win32.png',
  'table-custom.spec.ts-snapshots/table-custom-showcases-chromium-win32.png',
  'tabs-custom.spec.ts-snapshots/tabs-custom-showcases-chromium-win32.png',
  'upload-custom.spec.ts-snapshots/upload-custom-showcases-chromium-win32.png',
  'menu-custom.spec.ts-snapshots/menu-custom-showcases-chromium-win32.png',
  'select-custom.spec.ts-snapshots/select-custom-showcases-chromium-win32.png',
];

for (const rel of files) {
  const oldPath = path.join(snapshotsDir, rel);
  const newPath = oldPath.replace('-chromium-win32.png', '-chromium.png');

  if (fs.existsSync(oldPath)) {
    fs.copyFileSync(oldPath, newPath);
    fs.unlinkSync(oldPath);
    console.log(`Renamed: ${rel} -> ${path.basename(newPath)}`);
  } else {
    console.log(`Not found (skip): ${rel}`);
  }
}

console.log('Done.');
