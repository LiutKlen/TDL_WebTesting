import { Then } from '@wdio/cucumber-framework';
import {faker } from "@faker-js/faker"

Then("I enter email address", async function() {
    await this.pages.registerPage.inputEmail.waitForDisplayed();
    this.user.email = faker.internet.email();
    console.log(this.user.email);
    await this.pages.registerPage.inputEmail.setValue(this.user.email);
})

Then(/^I enter password$/, async function() {
    await this.pages.registerPage.inputPassword.waitForDisplayed();
    this.user.password = faker.internet.password();
    await this.pages.registerPage.inputPassword.setValue(this.user.password);
})

Then(/^I enter password repeatedly$/, async function() {
    await this.pages.registerPage.inputPasswordConfirm.waitForDisplayed();
    await this.pages.registerPage.inputPasswordConfirm.setValue(this.user.password);
})

Then(/^I select a question about elder sibling$/, async function() {
    await this.pages.registerPage.selectSecurityQuestion.waitForDisplayed();
    await this.pages.registerPage.selectSecurityQuestion.click();
    this.user.secQuestionOption = "Your eldest siblings middle name?";
    const element = await this.pages.registerPage.securityQuestionOption(this.user.secQuestionOption);
    await element.waitForDisplayed();
    await element.click();
})

Then(/^I write answer$/, async function() {
    await this.pages.registerPage.inputAnswer.waitForDisplayed();
    this.user.securityAnswer = faker.person.middleName();
    console.log(this.user.securityAnswer);
    await this.pages.registerPage.inputAnswer.setValue();
})

Then(/^I press register button$/, async function() {
    await this.pages.registerPage.buttonRegister.waitForDisplayed();
    await this.pages.registerPage.buttonRegister.click();
})
    