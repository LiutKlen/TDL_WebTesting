import { Then } from '@wdio/cucumber-framework';
import BasePage from "../pageobjects/base.page.js"
import LoginPage from '../pageobjects/login.page.js';
const basePage = new BasePage();
const loginPage = new LoginPage();

Then(/^I open landing page$/, async function() {
    await browser.url('');
    await basePage.buttonCloseWelcomeBanner.waitForDisplayed();
    await basePage.buttonCloseWelcomeBanner.click();
    await basePage.buttonDismissCookies.waitForDisplayed();
    await basePage.buttonDismissCookies.click();
    await basePage.snackBarLanguageChange.waitForExist({ reverse: true });
})

Then(/^I press on Account button$/, async function() {
    await basePage.buttonAccount.waitForDisplayed();
    await basePage.buttonAccount.click();
})

Then(/^I press on login button$/, async function() {
    await basePage.buttonLogin.waitForDisplayed();
    await basePage.buttonLogin.click();
})

Then(/^I am on login page$/, async function() {
    await loginPage.waitForLoad();
})

Then(/^I press not yet a customer$/, async function() {
    await loginPage.linkRegister.waitForDisplayed();
    await loginPage.linkRegister.click();
})
 
Then(/^I open basket page$/, async function() {
    console.log("Step - I press not yet a customer")
})

Then(/^I open side menu$/, async function() {
    basePage.buttonBurgerMenu.waitForDisplayed();
    await basePage.buttonBurgerMenu.click();
})

Then(/^I open "Complaint" side menu option$/, async function() {
})
 