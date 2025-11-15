export default class SideMenu {
constructor() {
    //span@class = "mdc-list-item__content"']//span[noramlize-space(text())="Complaint"]
    }

    get sideMenuOption() {
        return browser.$(`//span@class = "mdc-list-item__content"']//span[noramlize-space(text())="Complaint"]`);
    }
}

