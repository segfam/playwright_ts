import { Locator, Page, expect } from "@playwright/test";
import ApplicationURL from "./helpers/ApplicationURL";

export default class LoginPage {

    userNameField : Locator;
    passwordfield : Locator;
    loginButton : Locator;

    constructor (protected page: Page)  {
        this.userNameField = this.page.locator('[data-test="username"]');
        this.passwordfield = this.page.locator('[data-test="password"]');
        this.loginButton = this.page.locator('[data-test="login-button"]');

     }

    // public async loginToApplication (username : string, password : string, loginURL : string) {
    //     await this.page.goto(loginURL);
    //     await this.validatepageURL (ApplicationURL.BASE_URL);
    //     await this.userNameField.fill(username);
    //     await this.passwordfield.fill(password);
    //     await this.loginButton.click();
    // }
    public async loginToApplication (username = process.env.STANDART_USER as string, password = process.env.CORRECT_PASSWORD as string, loginURL : string) {
        await this.page.goto(loginURL);
        await this.validatepageURL (ApplicationURL.BASE_URL);
        await this.userNameField.fill(username);
        await this.passwordfield.fill(password);
        await this.loginButton.click();
    }

    public async validatepageURL (url : string) {
        await expect (this.page).toHaveURL (url);
    }
}