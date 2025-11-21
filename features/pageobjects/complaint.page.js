import BasePage from "./base.page.js";

export default class ComplaintPage extends BasePage {
    constructor() {
        super();
    }
    get title() {
        return browser.$('');
    }
    get inputCustomerEmail() {
        return browser.$('aria-label="Text field for the mail address of the user"]');
    }
    get textAreaMessage() {
        return browser.$('#complaintMessage');
    }
    get attachment() {
        return browser.$('#file');
    }
    get buttonSubmit() {
        return browser.$('submitButton');
    }
    get confirmationTextArea() {
        return browser.$('//div[@class ="confirmation"][contains(text(), "Customer support will get in touch with you soon! Your complaint reference is")]');
    }
     async waitForLoad() {
        await this.title.waitForDisplayed();
        await this.inputCustomerEmail.waitForDisplayed();
        await this.textAreaMessage.waitForDisplayed();
        await this.attachment.waitForDisplayed();
        await this.buttonSubmit.waitForDisplayed(); 
    }
}