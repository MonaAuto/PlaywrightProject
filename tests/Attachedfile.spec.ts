import { test, expect } from '@playwright/test';

test('try_attach', async ({page}) => {
await page.goto('https://demo.automationtesting.in/Register.html');
await page.waitForTimeout (1000);

//كلها جمل صحيحة
//await page.locator("//input[@id='imagesrc']").setInputFiles('tests/TestData/pdf.pdf');
//await page.locator("#imagesrc").setInputFiles('tests/TestData/pdf.pdf');
await page.locator('[id="imagesrc"]').setInputFiles('tests/TestData/pdf.pdf');




await page.waitForTimeout (2000);
 //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});