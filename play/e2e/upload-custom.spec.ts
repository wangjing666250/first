import { test } from '@playwright/test';
import { expectScreenshotWithBootstrap, locateCustomSection, openComponent } from './helpers';

test.describe('Upload custom showcases', () => {
  test('renders theme/color/slot custom sections', async ({ page }, testInfo) => {
    await openComponent(page, /Upload 上传/);
    const customSection = await locateCustomSection(page);
    await expectScreenshotWithBootstrap(customSection, testInfo, 'upload-custom-showcases.png');
  });
});

