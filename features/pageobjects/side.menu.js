export default class SideMenu {
    constructor() {
        // Empty constructor
    }

    get sideMenuOption() {
        return browser.$('//span[@class = "mdc-list-item__content"]//span[contains(text(),"Complaint")]');
    }

    get buttonContact() {
        return browser.$('//span[@class = "mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base"]//span[contains(text(),"Contact")]');
    }

    get buttonAboutUs() {
        return browser.$('//span[contains(text(), "About Us")]');
    }

    get versionInfoText() {
        return browser.$('//span[contains(text(), "v18.0.0")]');
}

}