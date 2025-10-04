//C:\Users\user\Documents\PlaywrightProjects> npx playwright test -g "has title" --- grip by file name 

/* test.only('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});*/

// to run one test only 


//import {test, expect} from '@playwright/test';  ---- by default first command always
//test('has title', async ({page}) => يعني افتح صفحة جديدة 
//await page.locator('(//input[@placeholder="Email Address"])[2]').fill("m5s0213@yahoo.com");   indexing لحقلين متطابقين


//await page.locator("//input[@placeholder='Name']").fill('Mona3'); XPATH 
//await page.locator("input[placeholder='Name']").fill('Mona3'); CSS
//الفرق أنه نشيل  // و @

