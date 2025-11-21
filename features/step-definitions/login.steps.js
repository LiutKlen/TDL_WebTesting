import { Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';
import BasePage from '../pageobjects/base.page.js';
const loginPage = new LoginPage();
const basePage = new BasePage();

Then(/^I enter login email$/, async function() {
    await loginPage.inputEmail.waitForDisplayed();
    await loginPage.inputEmail.setValue("newmail25@mailinator.com");
})

Then(/^I enter login password$/, async function() {
    await loginPage.inputPassword.waitForDisplayed();
    await loginPage.inputPassword.setValue("pppppp");
})

Then(/^I confirm login$/, async function() {
    await loginPage.buttonLogin.waitForDisplayed();
    await loginPage.buttonLogin.click();
})

Then(/^I am logged in$/, async function() {
    await basePage.buttonBasket.waitForDisplayed();
})

Then(/^I have logged in$/, async function() {
    console.log("Step - I have logged in")
})
