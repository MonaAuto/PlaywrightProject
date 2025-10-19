import { test, expect } from '@playwright/test';

test('try_attach', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Datepicker.html');

// await page.locator("#datepicker2").fill("25/09/2025");
let day = '25';
await page.locator("#datepicker2").click();
await page.waitForTimeout (1000);

await page.locator("select[title='Change the year']").selectOption("2025");
await page.waitForTimeout (1000);

await page.locator("select[title='Change the month']").selectOption("September");
await page.waitForTimeout (1000);

await page.getByRole('link', {name : day}).click();


await page.waitForTimeout (2000);
});