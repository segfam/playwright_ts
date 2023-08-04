import { test, expect } from '@playwright/test';
import LoginPage from './pages/LoginPage';
import Credentials from './pages/helpers/Credentials';
import ApplicationURL from './pages/helpers/ApplicationURL';


// test('login to page', async ({ page }) => {

//     const loginPage = new LoginPage (page);
//     await loginPage.loginToApplication(
//       Credentials.STANDARD_USER, Credentials.CORRECT_PASSWORD, ApplicationURL.BASE_URL
//       );
// });

test('login to page', async ({ page }) => {

  const loginPage = new LoginPage (page);
  await loginPage.loginToApplication(
    process.env.STANDARD_USER, process.env.CORRECT_PASSWORD, process.env.BASE_URL as string
    );
});