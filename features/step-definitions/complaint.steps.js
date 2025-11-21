import { Then } from "@wdio/cucumber-framework";
import ComplaintPage from "../pageobjects/complaint.page.js";
const complaintPage = new ComplaintPage();

Then(/^I type and send message "I don't like tomato juice"$/, async function() {
    complaintPage.textAreaMessage.waitForDisplayed();
    complaintPage.textAreaMessage.setValue("I don't like tomato juice");
})

Then(/^I see confirmation that message has been sent$/, async function() {

})