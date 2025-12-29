import { test, expect } from '@playwright/test';

test('Post Comment on Article', async ({ page }) => {
  await page.goto('https://conduit.bondaracademy.com/');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('testgen@test.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('test12345678');
  await page.getByRole('button', { name: 'Sign in' }).click();
  // Wait for sign-in to complete (nav shows username) before continuing
  await expect(page.getByRole('link', { name: 'TestGen' })).toBeVisible({ timeout: 10000 });
  await page.getByRole('link', { name: 'Home' }).click();
  // Ensure article list is loaded. If no article links found, switch to Global Feed.
  try {
    await page.waitForSelector('a:has(h1)', { timeout: 5000 });
  } catch {
    const globalFeed = page.getByText('Global Feed').first();
    if (await globalFeed.count() > 0) {
      await globalFeed.click();
      await page.waitForSelector('a:has(h1)', { timeout: 5000 });
    }
  }
  // Collect the first few article hrefs to avoid stale locators after navigation
  const hrefs = await page.locator('a:has(h1)').evaluateAll((nodes: any[]) =>
    nodes.map((n: any) => n.getAttribute('href')).filter(Boolean)
  );
  const maxTry = Math.min(5, hrefs.length);
  let posted = false;
  for (let i = 0; i < maxTry; ++i) {
    const href = hrefs[i];
    if (!href) continue;
    await page.goto(new URL(href, 'https://conduit.bondaracademy.com/').toString());
    await page.waitForLoadState('networkidle');
    const candidates = [
      page.locator('form.comment-form textarea'),
      page.getByPlaceholder('Write a comment...'),
      page.locator('.comment-form textarea'),
      page.locator('textarea'),
      page.locator('[contenteditable="true"]'),
    ];
    let commentBox = null;
    for (const c of candidates) {
      try {
        if (await c.count() > 0) {
          if (await c.first().isVisible()) { commentBox = c.first(); break; }
        }
      } catch {}
    }
    if (!commentBox) {
      // No comment box on this article; try next
      continue;
    }
    // Fill or set text depending on element type
    const tagName = await commentBox.evaluate((el: any) => el.tagName && el.tagName.toLowerCase()).catch(() => '');
    try {
      if (tagName === 'div' || (await commentBox.getAttribute('contenteditable'))) {
        await commentBox.evaluate((el: any, text: string) => { el.innerText = text; }, 'Nice article! Automated comment.');
      } else {
        await commentBox.fill('Nice article! Automated comment.');
      }
      // Click the post button (may exist as a button inside the comment form)
      const postBtn = page.getByRole('button', { name: /Post Comment|Post/ }).first();
      if (await postBtn.count() > 0) await postBtn.click();
      await expect(page.getByText('Nice article! Automated comment.')).toBeVisible({ timeout: 10000 });
      posted = true;
      break;
    } catch (e) {
      // If posting failed, try the next article
      continue;
    }
  }
  if (!posted) throw new Error('Unable to find a comment box on first several articles');
});