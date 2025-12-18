import { test, expect } from '@playwright/test';

test('this should fail on purpose', async ({ page }) => {
  await page.goto('/');

  // Something impossible – so it will always fail
  await expect(page.getByText('THIS TEXT DOES NOT EXIST')).toBeVisible();
});
