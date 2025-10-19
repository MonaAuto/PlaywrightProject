import { expect, type Locator, type Page } from '@playwright/test';

export class loginpage {
  readonly page: Page;
  readonly name: Locator;
  readonly email: Locator;
  readonly signupbutton: Locator;
  

  constructor(page: Page) {
    this.page = page;
    this.name = page.locator("//input[@placeholder='Name']");
    this.email = page.locator("//input[@data-qa='signup-email']");
    this.signupbutton = page.locator("//button[normalize-space()='Signup']");
    
  }
  //FUNCTIONS

    async goto() {
    await this.page.goto('https://automationexercise.com/signup');
      }

  async logindata() {
    await this.name.fill('Mona1234');
    await this.email.fill('mona888@yahoo.com');
    await this.signupbutton.click();
    
  }
}