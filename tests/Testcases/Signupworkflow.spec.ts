import { test, expect } from '@playwright/test';
import { loginpage } from '../Pages/loginpage';


test('E2E', async ({ page }) => {
  const login = new loginpage(page);
  await login.goto();
  await login.logindata();

});

