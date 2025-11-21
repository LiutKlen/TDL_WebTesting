export default class SideMenu {
    constructor() {
        // Empty constructor
    }

    get sideMenuOption() {
        return browser.$('//span[@class = "mdc-list-item__content"]//span[contains(text(),"Complaint")]');
    }
}