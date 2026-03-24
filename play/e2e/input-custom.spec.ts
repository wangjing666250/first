import { test } from '@playwright/test';
import { expectScreenshotWithBootstrap, locateCustomSection, openComponent } from './helpers';

test.describe('Input custom showcases', () => {
  test('renders theme/color/slot custom sections', async ({ page }, testInfo) => {
    await openComponent(page, /Input 输入框/);
    const customSection = await locateCustomSection(page);
    await expectScreenshotWithBootstrap(customSection, testInfo, 'input-custom-showcases.png');
  });
});

