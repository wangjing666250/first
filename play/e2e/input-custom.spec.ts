import { test } from '@playwright/test';
import { expectScreenshot, locateCustomSection, openComponent } from './helpers';

test.describe('Input custom showcases', () => {
  test('renders theme/color/slot custom sections', async ({ page }) => {
    await openComponent(page, /Input 输入框/);
    const customSection = await locateCustomSection(page);
    await expectScreenshot(customSection, 'input-custom-showcases.png');
  });
});
