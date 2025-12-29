import { test, expect } from '@playwright/test';

test('Sign Up with Existing Email shows error', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('duplicateUser');
  await page.getByRole('textbox', { name: 'Email' }).fill('testgen@test.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('password123');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByText(/taken|already|invalid|is too/)).toBeVisible();
});
