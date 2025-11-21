import { Then } from '@wdio/cucumber-framework';
import RegisterPage from "../pageobjects/register.page.js"
const registerPage = new RegisterPage();

Then("I enter email address", async function() {
    await registerPage.inputEmail.waitForDisplayed();
    await registerPage.inputEmail.setValue("newmail88811@mailinator.com");
})

Then(/^I enter password$/, async function() {
    await registerPage.inputPassword.waitForDisplayed();
    await registerPage.inputPassword.setValue("pppppp");
})

Then(/^I enter password repeatedly$/, async function() {
    await registerPage.inputPasswordConfirm.waitForDisplayed();
    await registerPage.inputPasswordConfirm.setValue("pppppp");
})

Then(/^I select a question about elder sibling$/, async function() {
    await registerPage.selectSecurityQuestion.waitForDisplayed();
    await registerPage.selectSecurityQuestion.click();
    const element = await registerPage.securityQuestionOption("Your eldest siblings middle name?");
    await element.waitForDisplayed();
    await element.click();
})

Then(/^I write answer$/, async function() {
    await registerPage.inputAnswer.waitForDisplayed();
    await registerPage.inputAnswer.setValue("pppppp");
})

Then(/^I press register button$/, async function() {
    await registerPage.buttonRegister.waitForDisplayed();
    await registerPage.buttonRegister.click();
})
    