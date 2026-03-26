import { test } from '@playwright/test';
import { expectScreenshotWithBootstrap, locateCustomSection, openComponent } from './helpers';

test.describe('Modal custom showcases', () => {
  test('renders theme/color/slot custom sections', async ({ page }, testInfo) => {
    await openComponent(page, /Modal 弹窗/);
    const customSection = await locateCustomSection(page);
    await expectScreenshotWithBootstrap(customSection, testInfo, 'modal-custom-showcases.png');
  });
});

