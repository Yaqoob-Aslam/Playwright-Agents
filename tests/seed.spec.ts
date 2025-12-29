import { test, expect } from '@playwright/test';

test.describe('Test group', () => {
  test('seed', async ({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('testgen@test.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('test12345678');
    await page.getByRole('button', { name: 'Sign in' }).click();
  });
});