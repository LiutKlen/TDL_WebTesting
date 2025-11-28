import BasePage from "../pageobjects/base.page.js";
import BasketPage from "../pageobjects/basket.page.js";
import ComplaintPage from "../pageobjects/complaint.page.js";
import LoginPage from "../pageobjects/login.page.js";
import ProductsPage from "../pageobjects/products.page.js";
import RegisterPage from "../pageobjects/register.page.js";

export default class Pages {
    constructor() {
        this.basePage = new BasePage();
        this.complaintPage = this["Complaint"] = new ComplaintPage();
        this.loginPage = this["Login"] = this["login"]= new LoginPage();
        this.registerPage = this["Register"]  = this["register"] =  new RegisterPage();
        this.productsPage = new ProductsPage();
        this.basketPage = new BasketPage();
    }
}
