import { test, expect } from '@playwright/test';

test('Has title', async ({ page }) => {
  await page.goto('https://katarzynawietecha.github.io/notemaster/');

  await expect(page).toHaveTitle(/Notemaster/);
});
