import SideMenu from "./side.menu.js";

export default class BasePage{
    constructor() {
        this.sideMenu = new SideMenu();
    }

    get buttonAccount() {
        return browser.$(`#navbarAccount`);
    }

    get buttonBasket() {
        return browser.$(`[routerlink="/basket"]`);
    }

    get buttonLogin() {
        return browser.$(`#navbarLoginButton`);
    }

    get buttonSidenav() {
        return browser.$(`[aria-label="Open Sidenav"]`);
    }

    get buttonDismissCookies() {
        return browser.$(`[aria-label="dismiss cookie message"]`);
    }

    get buttonCloseWelcomeBanner() {
        return browser.$(`[aria-label="Close Welcome Banner"]`);
    }

    get snackBarLanguageChange() {
        return browser.$(`.mat-mdc-snack-bar-label.mdc-snackbar__label`);
    }
}