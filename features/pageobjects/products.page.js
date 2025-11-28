import BasePage from "./base.page.js";

export default class ProductsPage extends BasePage {
    constructor() {
        super();
    }

    //name = //div[@class="item-name"][contains(text(), "Apple Juice")]

    //price =//div[@class="item-price"]/span[contains(text(), "1.99")]

    //button = //span[text()="Add to Basket"]

    //element[name][price]//button

    //mat-card[descendant-or-self::div[@class="item-name"][contains(text(), "Apple Juice")]][descendant-or-self::div[@class="item-price"]/span[contains(text(), "1.99")]]//span[text()="Add to Basket"]

    async buttonAddToCart(name, price) {
        return browser.$(`//mat-card[descendant-or-self::div[@class="item-name"][contains(text(), "${name}")]][descendant-or-self::div[@class="item-price"]/span[contains(text(), "${price}")]]//span[text()="Add to Basket"]`);
    }

    async snackbarItemAdded(name) {
        return browser.$(`//*[@class = "mat-mdc-snack-bar-label mdc-snackbar__label"][contains(text(), "${name}")][contains(text(), "to basket")]`)
    }
    
}
