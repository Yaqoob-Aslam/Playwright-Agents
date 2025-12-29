import { test, expect } from '@playwright/test';

test('Logout returns to unauthenticated state', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testgen@test.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('test12345678');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.goto('https://conduit.bondaracademy.com/settings');
  // Attempt to click logout link/button on settings
  const logout = page.getByRole('button', { name: /logout|log out|Or click here to logout/i }).first();
  if (await logout.count() > 0) {
    await logout.click();
  } else {
    // fallback: click link text if present
    const link = page.getByText(/logout|log out|Or click here to logout/i).first();
    if (await link.count() > 0) await link.click();
  }
  await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();
});
