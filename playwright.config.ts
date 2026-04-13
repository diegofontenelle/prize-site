import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 1,
  workers: 1,
  reporter: [
    ['html', { outputFolder: 'tests/reports/html', open: 'never' }],
    ['json', { outputFile: 'tests/reports/results.json' }],
    ['list'],
  ],
  use: {
    baseURL: 'http://localhost:3000',
    headless: true,
    screenshot: 'on',
    trace: 'on',
    video: 'off',
    locale: 'pt-BR',
    viewport: { width: 1280, height: 720 },
  },
  projects: [
    {
      name: 'desktop-chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Iphone 17'] },
    },
  ],
  outputDir: 'tests/results',
});
