import { test, expect } from '@playwright/test';

test('Create Article with Markdown renders correctly', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testgen@test.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('test12345678');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('link', { name: 'New Article' }).click();
  const ts = Date.now();
  await page.getByRole('textbox', { name: 'Article Title' }).fill(`Markdown Article ${ts}`);
  await page.getByRole('textbox', { name: "What's this article about?" }).fill('MD desc');
  await page.getByRole('textbox', { name: 'Write your article (in' }).fill('# Heading\n\n**bold text**');
  await page.getByRole('button', { name: 'Publish Article' }).click();
  await expect(page.locator('h1').first()).toHaveText(/Markdown Article/);
  await expect(page.locator('.article-content h1')).toHaveText('Heading');
  await expect(page.locator('.article-content strong')).toHaveText('bold text');
});
