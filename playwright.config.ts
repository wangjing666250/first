import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './play/e2e',
  timeout: 30000,
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'list',
  expect: {
    toHaveScreenshot: {
      // No {platform} → same path on Linux CI and Windows dev. Baselines must NOT have a
      // platform suffix (rename them accordingly: "*-chromium-win32.png" → "*-chromium.png").
      pathTemplate: '{testDir}/{testFilePath}-snapshots/{arg}{ext}',
    },
  },
  use: {
    baseURL: 'http://127.0.0.1:4174',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'pnpm --filter @pillar-ui/play dev --host 127.0.0.1 --port 4174',
    url: 'http://127.0.0.1:4174',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});
