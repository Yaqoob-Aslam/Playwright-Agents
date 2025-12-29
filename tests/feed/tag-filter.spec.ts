import { test, expect } from '@playwright/test';

test('Filter Articles by Tag', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testgen@test.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('test12345678');
  await page.getByRole('button', { name: 'Sign in' }).click();
  const tag = page.getByText('playwright').first();
  await expect(tag).toBeVisible();
  await tag.click();
  // wait for filtered articles or article markers
  await page.waitForSelector('article, a:has(h1), h1', { timeout: 15000 });
  await expect(page.locator('article, a:has(h1), h1').first()).toBeVisible();
});
