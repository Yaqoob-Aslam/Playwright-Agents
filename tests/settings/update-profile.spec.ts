import { test, expect } from '@playwright/test';

test('Update Profile Settings', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testgen@test.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('test12345678');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'Settings' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('TestGen');
  await page.getByRole('button', { name: 'Update Settings' }).click();
  await expect(page.getByRole('link', { name: 'TestGen' })).toBeVisible();
});
