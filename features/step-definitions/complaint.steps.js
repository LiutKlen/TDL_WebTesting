import { Then } from "@wdio/cucumber-framework"

Then(/^I type and send message "(.*?)"$/, async function(message) {
    await this.pages.complaintPage.textAreaMessage.waitForDisplayed();
    await this.pages.complaintPage.textAreaMessage.setValue(message);
    await this.pages.complaintPage.buttonSubmit.waitForDisplayed();
    await this.pages.complaintPage.buttonSubmit.click();
})

Then(/^I see confirmation that message has been sent$/, async function() {
    await this.pages.complaintPage.confirmationTextArea.waitForDisplayed();
    await expect(await this.pages.complaintPage.confirmationTextArea).toHaveText(expect.stringContaining("Customer support will get in touch with you soon! Your complaint reference is"));
})
