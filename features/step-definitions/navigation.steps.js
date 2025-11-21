import { Then } from '@wdio/cucumber-framework';

Then(/^I open landing page$/, async function() {
    await browser.url('');
    await this.pages.basePage.buttonCloseWelcomeBanner.waitForDisplayed();
    await this.pages.basePage.buttonCloseWelcomeBanner.click();
    await this.pages.basePage.buttonDismissCookies.waitForDisplayed();
    await this.pages.basePage.buttonDismissCookies.click();
    await this.pages.basePage.snackBarLanguageChange.waitForExist({ reverse: true });
})

Then(/^I press on Account button$/, async function() {
    await this.pages.basePage.buttonAccount.waitForDisplayed();
    await this.pages.basePage.buttonAccount.click();
})

Then(/^I press on login button$/, async function() {
    await this.pages.basePage.buttonLogin.waitForDisplayed();
    await this.pages.basePage.buttonLogin.click();
})

Then(/^I am on login page$/, async function() {
    await this.pages.loginPage.waitForLoad();
})

Then(/^I press not yet a customer$/, async function() {
    await this.pages.loginPage.linkRegister.waitForDisplayed();
    await this.pages.loginPage.linkRegister.click();
})
 
Then(/^I open basket page$/, async function() {
    console.log("Step - I press not yet a customer")
})

Then(/^I open side menu$/, async function() {
    await this.pages.basePage.buttonBurgerMenu.waitForDisplayed();
    await this.pages.basePage.buttonBurgerMenu.click();
})

Then(/^I open "Complaint" side menu option$/, async function() {
    await this.pages.basePage.sideMenu.sideMenuOption.waitForDisplayed();
    await this.pages.basePage.sideMenu.sideMenuOption.click();
})

Then(/^I am on "Complaint" page$/, async function() {
    await this.pages.complaintPage.waitForLoad();
})