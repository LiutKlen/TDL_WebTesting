import { Then } from "@wdio/cucumber-framework";
import BasePage from "../pageobjects/base.page.js";
const basePage = new BasePage();

Then(/^I open landing page$/, async function (){
    await browser.url('');
    await basePage.buttonCloseWelcomeBanner.waitForDisplayed();
    await basePage.buttonCloseWelcomeBanner.click();
    await basePage.buttonDismissCookies.waitForDisplayed();
    await basePage.buttonDismissCookies.click();
    await basePage.buttonLogin.waitForDisplayed();
    await basePage.buttonLogin.click();
    await basePage.snackBarLanguageChange.waitForExist({reverse : true});
})

Then(/^I press on login button$/, async function (){
    await basePage.buttonLogin.waitForDisplayed();
    await basePage.buttonLogin.click();
})

Then(/^I press on Account button$/, async function (){
    await basePage.buttonAccount.waitForDisplayed();
    await basePage.buttonAccount.click();
})