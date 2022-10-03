import { expect, test } from '@playwright/test';

test('should display a canvas on the screen', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Machine Learning 🤖 Genetic Algorithm 🧬/);

  await expect(page.locator('canvas')).toHaveAttribute('role', 'sketch');
});
