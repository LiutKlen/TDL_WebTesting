import BasePage from "./base.page.js";

export default class ComnplaintPage extends BasePage {
    constructor() {
        super()
    }

    get title() {
        return browser.$('//h1[text()="Complaint"]');
    }

    get inputCustomerEmail() {
        return browser.$('[aria-label="Text field for the mail address of the user"]');
    }

    get textAreaMessage() {
        return browser.$('#complaintMessage');
    }

    get attachment() {
        return browser.$('#file');
    }

    get buttonSubmit() {
        return browser.$('#submitButton');
    }
    
    get confirmationTextArea() {
        return browser.$('//div[@class ="confirmation"]');
    }
    
    async waitForLoad() {
        await this.title.waitForDisplayed();
        await this.inputCustomerEmail.waitForDisplayed();
        await this.textAreaMessage.waitForDisplayed();
        await this.attachment.waitForDisplayed();
        await this.buttonSubmit.waitForDisplayed();
    }
}