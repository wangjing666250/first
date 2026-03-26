import type { Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

export async function openComponent(page: Page, navLabel: RegExp): Promise<void> {
  await page.goto('/');
  await page.getByRole('button', { name: navLabel }).click();
  await page.waitForLoadState('networkidle');
}

export async function locateCustomSection(page: Page): Promise<Locator> {
  const section = page.locator('section.demo-card').filter({ has: page.locator('h3', { hasText: '自定义' }) }).first();
  await expect(section).toBeVisible();
  return section;
}

export async function expectScreenshot(section: Locator, snapshotName: string): Promise<void> {
  await section.scrollIntoViewIfNeeded();
  await expect(section).toHaveScreenshot(snapshotName);
}
