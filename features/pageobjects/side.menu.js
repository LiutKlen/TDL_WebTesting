export default class SideMenu {
    constructor() {
        // Empty constructor
    }

    async sideMenuOption(option) {
        return browser.$(`//span[@class = "mdc-list-item__content"]//span[contains(text(),"${option}")]`);
    }
}
