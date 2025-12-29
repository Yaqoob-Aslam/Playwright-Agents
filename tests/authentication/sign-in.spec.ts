import { test, expect } from '@playwright/test';

test.describe('Authentication - Sign In', () => {
  test('Successful Sign In', async ({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('testgen@test.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('test12345678');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page.getByRole('link', { name: 'TestGen' })).toBeVisible();
  });

  test('Sign In with Invalid Credentials shows error', async ({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('invalid@example.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('wrongpassword');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page.getByText('email or password is invalid')).toBeVisible();
  });
});
