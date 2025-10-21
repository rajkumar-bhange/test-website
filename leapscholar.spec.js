// tests/leapscholar.spec.js
import { test, expect } from '@playwright/test';

test('Verify LeapScholar USA page title', async ({ page }) => {
  await page.goto('https://leapscholar.com/usa');
  await expect(page).toHaveTitle(/Study in USA/i);
});
