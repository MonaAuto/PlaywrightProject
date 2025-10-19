import { test, expect } from '@playwright/test';

test('try_attach', async ({page}) => {
await page.goto('https://practice.expandtesting.com/checkboxes');
await page.locator("#checkbox2").check();

await page.waitForTimeout (2000);
});