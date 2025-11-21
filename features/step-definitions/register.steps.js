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
    console.log("Step - I select a question about elder sibling")
})

Then(/^I write answer$/, async function() {
    console.log("Step - I write answer")
})

Then(/^I press register button$/, async function() {
    console.log("Step - I press register button")
})
    