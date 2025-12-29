import { test, expect } from '@playwright/test';

test('Create Article with Tags', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testgen@test.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('test12345678');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'New Article' }).click();
  const ts = Date.now();
  await page.getByRole('textbox', { name: 'Article Title' }).fill(`Tagged Article ${ts}`);
  await page.getByRole('textbox', { name: "What's this article about?" }).fill('Desc');
  await page.getByRole('textbox', { name: 'Write your article (in' }).fill('Body');
  await page.getByRole('textbox', { name: 'Enter tags' }).fill('tag1 tag2');
  await page.getByRole('button', { name: 'Publish Article' }).click();
  await expect(page).toHaveURL(/article/);
  await expect(page.getByText('tag1')).toBeVisible();
  await expect(page.getByText('tag2')).toBeVisible();
});
