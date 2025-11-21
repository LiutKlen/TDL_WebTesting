/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

import SideMenu from "./side.menu.js"

export default class BasePage {
    constructor() {
        this.sideMenu = new SideMenu();
    }

    get buttonAccount() {
        return browser.$('#navbarAccount');
        ////button[@id="navbarAccount"]
    }

    get buttonBasket() {
        return browser.$('[routerlink="/basket"]');
        //button[@routerlink="/basket"]
    }

    get buttonLogin() {
        return browser.$('#navbarLoginButton');
        //button[@id="navbarLoginButton"]
    }

    get buttonUserProfile() {
        return browser.$('//button[@aria-label="Go to user profile"]');
    }

    get buttonBurgerMenu() {
        //button[@aria-label="Open Sidenav"]
        return browser.$('[aria-label="Open Sidenav"]');
    }

    get buttonCloseWelcomeBanner() {
        return browser.$('[aria-label="Close Welcome Banner"]')
    }

    get buttonDismissCookies() {
        return browser.$('[aria-label="dismiss cookie message"]');
    }

    get snackBarLanguageChange() {
        return browser.$('.mat-mdc-snack-bar-label.mdc-snackbar__label');
    }

    get buttonLanguageSelect(){
        return browser.$('#navbarLanguageButton');
    }

    get textAllProducts(){
        return browser.$('[text()="All Products"]')
    }

    get buttonPageItems(){
        return browser.$('[aria-labelledby="mat-paginator-page-size-label"]');
    }

    get itemsInPage(){
        return browser.$('[aria-live="polite" and contains(@class,"mat-paginator-range-label")]');
    }

    get buttonNextPage(){
        return browser.$('[aria-label="Next page"]');
    }

    get buttonPrevPage(){
        return browser.$('[aria-label="Previous page"]');
    }

    get buttonPrevPage(){
        return browser.$('[aria-label="Previous page"]');
    }
}
