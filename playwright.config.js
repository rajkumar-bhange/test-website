import { defineConfig } from '@playwright/test';

export default defineConfig({
  // Use the root directory for tests
  testDir: '.',  

  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
