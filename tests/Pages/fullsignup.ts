import { expect, type Locator, type Page } from '@playwright/test';

export class fullsignup {
  readonly page: Page;
  readonly name: Locator;
  readonly email: Locator;
  readonly signupbutton: Locator;
  readonly gender: Locator;
  readonly name1: Locator;
  readonly password: Locator;
  readonly option: Locator;
  readonly first_name: Locator;
  readonly last_name1: Locator;
  readonly last_name2: Locator;
  readonly company: Locator;
  readonly address: Locator;
 readonly address2: Locator;      
  readonly state: Locator;
readonly city: Locator;
readonly zipcode: Locator;
readonly mobile_number: Locator;
readonly create_account: Locator;

  constructor(page: Page) {
    this.page = page;
    this.name = page.locator("//input[@placeholder='Name']");
    this.email = page.locator("//input[@data-qa='signup-email']");
    this.signupbutton = page.locator("//button[normalize-space()='Signup']");
    this.gender = page.locator("//input[@id='id_gender2']");
    this.name1 = page.locator("//input[@id='name']");
    this.password = page.locator("//input[@id='password']");
    this.option = page.locator("//input [@id='optin']");
    this.first_name = page.locator("//input[@id='first_name']");
    this.last_name1 = page.locator("//input[@id='last_name']");
    this.last_name2 = page.locator("//input[@id='last_name']");
    this.company = page.locator("//input[@id='company']");
    this.address = page.locator("//input[@data-qa='address']");
    this.address2 = page.locator("//input[@data-qa='address2']");
    this.state = page.locator("//input[@data-qa='state']");
    this.city = page.locator("//input[@id='city']");
    this.zipcode = page.locator("//input[@name='zipcode']");
    this.mobile_number = page.locator("//input[@id='mobile_number']");
    this.create_account = page.locator("//button[@data-qa='create-account']");
  }
  //FUNCTIONS

    async goto() {
    await this.page.goto('https://automationexercise.com/signup');
      }

  async fulllogindata() {
    await this.name.fill('Mona1234');
    await this.email.fill('mona888@yahoo.com');
    await this.signupbutton.click();
    await this.gender.click();
    await this.name1.fill('Monaaa');
    await this.password.fill('414141');
    await this.option.click();
    await this.first_name.fill('Mona222');
    await this.last_name1.fill('Mohammed2');
    await this.last_name2.fill('Hagos2');
    await this.company.fill('Hasib22');
    await this.address.fill('Olaya');
    await this.address2.fill('Olaya22');
    await this.state.fill('Najd');
    await this.city.fill('riyadh');
    await this.zipcode.fill('11211');
    await this.mobile_number.fill('0554444444');
    await this.create_account.click();
  }
}