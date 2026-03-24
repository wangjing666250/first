import { test } from '@playwright/test';
import { expectScreenshotWithBootstrap, locateCustomSection, openComponent } from './helpers';

test.describe('Menu custom showcases', () => {
  test('renders theme/color/slot custom sections', async ({ page }, testInfo) => {
    await openComponent(page, /Menu 菜单/);
    const customSection = await locateCustomSection(page);
    await expectScreenshotWithBootstrap(customSection, testInfo, 'menu-custom-showcases.png');
  });
});

