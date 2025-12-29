import { test, expect } from '@playwright/test';

test.describe('Article Creation', () => {
  test('Create New Article', async ({ page }) => {
    await page.goto('https://conduit.bondaracademy.com/');
    await page.getByRole('link', { name: 'Sign in' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('testgen@test.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('test12345678');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.getByRole('link', { name: '  New Article' }).click();
    const timestamp = Date.now();
    await page.getByRole('textbox', { name: 'Article Title' }).fill(`Test Article Title ${timestamp}`);
    await page.getByRole('textbox', { name: 'What\'s this article about?' }).fill('A brief description');
    await page.getByRole('textbox', { name: 'Write your article (in' }).fill('# Test Article\n\nThis is the body of the article.');
    await page.getByRole('textbox', { name: 'Enter tags' }).fill('test, article');
    await page.getByRole('button', { name: 'Publish Article' }).click();
    await expect(page).toHaveURL(/article/);
    await expect(page.getByRole('heading', { name: `Test Article Title ${timestamp}` })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Test Article' })).toBeVisible();
    await expect(page.getByText('This is the body of the article.')).toBeVisible();
    await expect(page.getByText('Test, Article')).toBeVisible();
    await expect(page.locator('a.author').first()).toContainText('TestGen');
  });
});