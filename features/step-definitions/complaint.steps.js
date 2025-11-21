import { Then } from "@wdio/cucumber-framework"

Then(/^I type and send message "I don't like tomato juice"$/, async function() {
    await this.pages.complaintPage.textAreaMessage.waitForDisplayed();
    await this.pages.complaintPage.textAreaMessage.setValue("I don't like tomato juice");
    await this.pages.complaintPage.buttonSubmit.waitForDisplayed();
    await this.pages.complaintPage.buttonSubmit.click();
})

Then(/^I see confirmation that message has been sent$/, async function() {
    await this.pages.complaintPage.confirmationTextArea.waitForDisplayed();
    await expect(await this.pages.complaintPage.confirmationTextArea).toHaveText(expect.stringContaining("Customer support will get in touch with you soon! Your complaint reference is"));
})
