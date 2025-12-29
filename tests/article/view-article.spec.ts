import { test, expect } from '@playwright/test';

test.describe('Article - View', () => {
  test('View first article details', async ({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    // Wait for articles to load and click the first article link
    await page.getByRole('link', { name: 'Home' }).click();
    // Click the first article link that contains a heading
    const firstLinkWithHeading = page.locator('a:has(h1)').first();
    await expect(firstLinkWithHeading).toBeVisible();
    await firstLinkWithHeading.click();
    await expect(page).toHaveURL(/article/);
    await expect(page.locator('h1').first()).toBeVisible();
    await expect(page.locator('.article-content')).toBeVisible({ timeout: 10000 });
    await expect(page.getByRole('button', { name: /Favorite Article/ }).first()).toBeVisible();
  });
});
