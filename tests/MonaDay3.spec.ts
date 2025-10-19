import {test, expect} from '@playwright/test';

test('try_signup', async ({page}) => {

await page.goto('https://automationexercise.com//');
await page.waitForTimeout(4000);

await page.locator("//a[normalize-space()='Signup / Login']").click();
await page.waitForTimeout(1000);

await page.getByPlaceholder('Name').fill('Mona35535');


//await page.locator("//input[@placeholder='Name']").fill('Mona3333');

//await page.getByText('Signup').nth(2).click();
//await page.locator("input[placeholder='Name']").fill('Mona3');

//await page.getByAltText('Website for automation practice').click();

//await page.waitForTimeout(1000);

await page.locator('(//input[@data-qa="signup-email"])').fill("m5s02222213@yahoo.com");

await page.waitForTimeout(1000);



await page.locator("//button[normalize-space()='Signup']").click();

await page.locator("//input[@id='id_gender2']").click();
await page.waitForTimeout(1000);


await page.locator("//input[@id='name']").fill('Mona2');
await page.waitForTimeout(1000);


await page.locator("//input[@id='password']").fill('123123');
await page.waitForTimeout(1000);

await page.locator("//input [@id='optin']").click();

await page.locator("//input[@id='first_name']").fill('Mona');
await page.waitForTimeout(1000);

await page.locator("//input[@id='last_name']").fill('Taher');
await page.waitForTimeout(1000);

await page.locator("//input[@id='last_name']").fill('Mohammed');
await page.waitForTimeout(1000);

await page.locator("//input[@id='company']").fill('Hasib');
await page.waitForTimeout(1000);

await page.locator("//input[@data-qa='address']").fill('Adress mona 1');
await page.waitForTimeout(1000);

await page.locator("//input[@data-qa='address2']").fill('Adress mona 2');
await page.waitForTimeout(1000);

await page.locator("//input[@data-qa='state']").fill('Central Region');
await page.waitForTimeout(1000);

await page.locator("//input[@id='city']").fill('Riyadh');
await page.waitForTimeout(1000);

await page.locator("//input[@name='zipcode']").fill('11211');
await page.waitForTimeout(1000);

await page.locator("//input[@id='mobile_number']").fill('0554511344');
await page.waitForTimeout(1000);

await page.locator("//button[@data-qa='create-account']").click();
await page.waitForTimeout(500);



//await page.locator("/html[1]/body[1]/section[1]/div[1]/div[1]/div[1]/div[1]/form[1]/button[1]']").click();
// 58 | await page.locator("//button[@data-qa='create-account']").click();
//59 | await page.waitForTimeout(4000); 

});
