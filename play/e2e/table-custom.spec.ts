import { test } from '@playwright/test';
import { expectScreenshotWithBootstrap, locateCustomSection, openComponent } from './helpers';

test.describe('Table custom showcases', () => {
  test('renders theme/color/slot custom sections', async ({ page }, testInfo) => {
    await openComponent(page, /Table 表格/);
    const customSection = await locateCustomSection(page);
    await expectScreenshotWithBootstrap(customSection, testInfo, 'table-custom-showcases.png');
  });
});

