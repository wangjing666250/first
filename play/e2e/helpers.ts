import type { Locator, Page, TestInfo } from '@playwright/test';
import { expect } from '@playwright/test';

export async function openComponent(page: Page, navLabel: RegExp): Promise<void> {
  await page.goto('/');
  await page.getByRole('button', { name: navLabel, exact: true }).click();
  await page.waitForLoadState('networkidle');
}

export async function locateCustomSection(page: Page): Promise<Locator> {
  const section = page.locator('section.demo-card').filter({ has: page.locator('h3', { hasText: '自定义' }) }).first();
  await expect(section).toBeVisible();
  return section;
}

export async function expectScreenshotWithBootstrap(section: Locator, testInfo: TestInfo, snapshotName: string): Promise<void> {
  const snapshotPath = testInfo.snapshotPath(snapshotName);
  if (!require('node:fs').existsSync(snapshotPath)) {
    require('node:fs').mkdirSync(require('node:path').dirname(snapshotPath), { recursive: true });
    await section.screenshot({ path: snapshotPath });
    testInfo.annotations.push({ type: 'snapshot-bootstrap', description: snapshotPath });
    return;
  }
  await expect(section).toHaveScreenshot(snapshotName);
}
