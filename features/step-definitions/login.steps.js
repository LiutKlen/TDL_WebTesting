import { Then } from '@wdio/cucumber-framework';

Then(/^I enter login email$/, async function() {
    await this.pages.loginPage.inputEmail.waitForDisplayed();
    await this.pages.loginPage.inputEmail.setValue(this.user.email);
})

Then(/^I enter login password$/, async function() {
    await this.pages.loginPage.inputPassword.waitForDisplayed();
    await this.pages.loginPage.inputPassword.setValue(this.user.password);
})

Then(/^I confirm login$/, async function() {
    await this.pages.loginPage.buttonLogin.waitForDisplayed();
    await this.pages.loginPage.buttonLogin.click();
})

Then(/^I am logged in$/, async function() {
    await this.pages.basePage.buttonBasket.waitForDisplayed();
})

Then(/^I have logged in$/, async function() {
    await this.pages.basePage.buttonAccount.waitForDisplayed();
    await this.pages.basePage.buttonAccount.click();
    await this.pages.basePage.buttonLogin.waitForDisplayed();
    await this.pages.basePage.buttonLogin.click();
    await this.pages.loginPage.inputEmail.waitForDisplayed();
    await this.pages.loginPage.inputEmail.setValue(this.user.email);
    await this.pages.loginPage.inputPassword.waitForDisplayed();
    await this.pages.loginPage.inputPassword.setValue(this.user.password);
    await this.pages.loginPage.buttonLogin.waitForDisplayed();
    await this.pages.loginPage.buttonLogin.click();
    await this.pages.basePage.buttonBasket.waitForDisplayed();
})

Then(/^I see Go to profile button contains login email$/, async function() {
    const element = await this.pages.basePage.buttonUserProfile;
    await element.waitForDisplayed();
    await expect(element).toHaveText(expect.stringContaining(this.user.email))
})

