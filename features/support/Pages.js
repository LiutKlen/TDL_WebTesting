import BasePage from "../pageobjects/base.page.js";
import ComnplaintPage from "../pageobjects/complaint.page.js";
import LoginPage from "../pageobjects/login.page.js";
import RegisterPage from "../pageobjects/register.page.js";

export default class Pages {
    constructor() {
        this.basePage = new BasePage();
        this.complaintPage = new ComnplaintPage();
        this.loginPage = new LoginPage();
        this.registerPage = new RegisterPage();
    }
}