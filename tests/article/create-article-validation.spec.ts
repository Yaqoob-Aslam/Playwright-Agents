import { test, expect } from '@playwright/test';

test('Create Article with Missing Fields shows validation', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testgen@test.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('test12345678');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'New Article' }).click();
  // Leave fields empty and publish
  await page.getByRole('button', { name: 'Publish Article' }).click();
  await expect(page.locator('.error-messages, .errors')).toBeVisible({ timeout: 5000 });
});
