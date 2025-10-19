import { test, expect } from '@playwright/test';
import { fullsignup } from '../Pages/fullsignup';


test('E2E', async ({ page }) => {
  const login = new fullsignup(page);
  await login.goto();
  await login.fulllogindata();

});

