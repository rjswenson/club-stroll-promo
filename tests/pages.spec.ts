import { test, expect } from '@playwright/test';

test.describe('Page Load Tests', () => {
  test('home page loads successfully', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);

    // Verify page title
    await expect(page).toHaveTitle(/Club Stroll/);
  });

  test('main heading is present', async ({ page }) => {
    await page.goto('/');

    // Check for main heading
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    await expect(heading).toHaveText('Club Stroll');
  });

  test('tagline is displayed', async ({ page }) => {
    await page.goto('/');

    // Check for tagline
    const tagline = page.locator('.tagline');
    await expect(tagline).toBeVisible();
    await expect(tagline).toContainText("Kansas City's Jazz Age");
  });

  test('hero description is present', async ({ page }) => {
    await page.goto('/');

    // Check for hero description
    const description = page.locator('.hero-description');
    await expect(description).toBeVisible();
    await expect(description).toContainText('jazz and nightlife');
  });

  test('footer is displayed with copyright', async ({ page }) => {
    await page.goto('/');

    // Check for footer
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer).toContainText('© 2026 Club Stroll');
  });

  test('404 page loads for non-existent route', async ({ page }) => {
    const response = await page.goto('/non-existent-page');
    expect(response?.status()).toBe(404);
  });
});
