import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    browserName: 'chromium',
    // browserName: 'firefox', 
    // browserName: 'webkit', 
    headless: true,
  },
});
