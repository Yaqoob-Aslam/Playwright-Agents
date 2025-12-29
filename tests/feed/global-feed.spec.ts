import { test, expect } from '@playwright/test';

test('View Global Feed', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testgen@test.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('test12345678');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByText('Global Feed').click();
  await expect(page.getByText('Global Feed')).toBeVisible();
  // wait for articles or article-like elements to load
  await page.waitForSelector('article, a:has(h1), h1', { timeout: 15000 });
  await expect(page.locator('article, a:has(h1), h1').first()).toBeVisible();
});
