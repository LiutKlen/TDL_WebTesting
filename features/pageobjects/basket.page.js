import BasePage from "./base.page.js";

export default class BasketPage extends BasePage {
    constructor() {
        super();
    }


    ////mat-cell[contains(text(), "Apple Juice")]//following-sibling::mat-cell[contains(text(), "1.99")]
    async item(name, price) {
        ////mat-row[descendant-or-self::mat-cell[contains(text(), "Apple Juice")]][descendant-or-self::mat-cell[contains(text(), "1.99")]]
        return browser.$(`//mat-row[descendant-or-self::mat-cell[contains(text(), "${name}")]][descendant-or-self::mat-cell[contains(text(), "${price}")]]`);
    }
}
