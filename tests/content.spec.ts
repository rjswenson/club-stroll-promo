import { test, expect } from '@playwright/test';

test.describe('Content Verification Tests', () => {
  test('video embed section is present', async ({ page }) => {
    await page.goto('/');

    // Check for video wrapper
    const videoWrapper = page.locator('.video-wrapper');
    await expect(videoWrapper).toBeVisible();
  });

  test('main section structure is correct', async ({ page }) => {
    await page.goto('/');

    // Verify main sections exist
    const header = page.locator('header');
    const heroSection = page.locator('section.hero');
    const footer = page.locator('footer');

    await expect(header).toBeVisible();
    await expect(heroSection).toBeVisible();
    await expect(footer).toBeVisible();
  });

  test('page has correct semantic structure', async ({ page }) => {
    await page.goto('/');

    // Check for semantic HTML elements
    const main = page.locator('main');
    const h1 = page.locator('h1');

    await expect(main).toBeVisible();
    await expect(h1).toBeVisible();

    // Verify only one h1 on page
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);
  });

  test('responsive design meta tags are present', async ({ page }) => {
    await page.goto('/');

    // Check for viewport meta tag
    const viewportMeta = page.locator('meta[name="viewport"]');
    await expect(viewportMeta).toHaveAttribute('content', /width=device-width/);
  });
});
