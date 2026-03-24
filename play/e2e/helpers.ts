import fs from 'node:fs';
import path from 'node:path';
import type { Locator, Page, TestInfo } from '@playwright/test';
import { expect } from '@playwright/test';

export async function openComponent(page: Page, navLabel: RegExp): Promise<void> {
  await page.goto('/');
  await page.getByRole('button', { name: navLabel }).click();
}

export async function locateCustomSection(page: Page): Promise<Locator> {
  const section = page
    .locator('section.demo-card')
    .filter({ has: page.getByRole('heading', { name: '自定义', exact: true }) })
    .first();
  await expect(section).toBeVisible();
  await expect(section.getByRole('heading', { name: '设置 Theme 风格', exact: true })).toBeVisible();
  await expect(section.getByRole('heading', { name: '自定义颜色', exact: true })).toBeVisible();
  await expect(section.getByRole('heading', { name: '插槽/结构扩展', exact: true })).toBeVisible();
  return section;
}

export async function expectScreenshotWithBootstrap(
  section: Locator,
  testInfo: TestInfo,
  snapshotName: string,
): Promise<void> {
  const snapshotPath = testInfo.snapshotPath(snapshotName);
  if (!fs.existsSync(snapshotPath)) {
    fs.mkdirSync(path.dirname(snapshotPath), { recursive: true });
    await section.screenshot({ path: snapshotPath });
    testInfo.annotations.push({ type: 'snapshot-bootstrap', description: snapshotPath });
    return;
  }
  await expect(section).toHaveScreenshot(snapshotName);
}

