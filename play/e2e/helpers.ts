import type { Locator, Page, TestInfo } from '@playwright/test';
import { expect } from '@playwright/test';
import { createRequire } from 'node:module';
import { existsSync, mkdirSync } from 'node:fs';
import { dirname, join, extname } from 'node:path';

const require = createRequire(import.meta.url);

export async function openComponent(page: Page, navLabel: RegExp): Promise<void> {
  await page.goto('/');
  await page.getByRole('button', { name: navLabel }).click();
  await page.waitForLoadState('load');
}

export async function locateCustomSection(page: Page): Promise<Locator> {
  const section = page.locator('section.demo-card').filter({ has: page.locator('h3', { hasText: '自定义' }) }).first();
  await expect(section).toBeVisible();
  return section;
}

export async function expectScreenshotWithBootstrap(section: Locator, testInfo: TestInfo, snapshotName: string): Promise<void> {
  // Build baseline path matching committed snapshots in
  // {testDir}/{testFileName}-snapshots/{snapshotBase}-chromium-win32{ext}
  const testDir = testInfo.project.testDir;
  const testFile = testInfo.file;
  const testFileName = testFile ? testFile.replace(/.*[/\\]/, '') : '';
  const ext = extname(snapshotName);
  const snapshotBase = snapshotName.replace(ext, '');
  const baselineDir = join(testDir, `${testFileName}-snapshots`);
  const baselinePath = join(baselineDir, `${snapshotBase}-chromium-win32${ext}`);

  if (!existsSync(baselinePath)) {
    mkdirSync(baselineDir, { recursive: true });
    await section.screenshot({ path: baselinePath });
    testInfo.annotations.push({ type: 'snapshot-bootstrap', description: baselinePath });
    return;
  }
  await expect(section).toHaveScreenshot(snapshotName);
}
