import { Then } from '@wdio/cucumber-framework';

Then(/^I submit '(.*?)' in search bar$/, async function (searchText) {
    await this.pages.basePage.buttonSearch.waitForDisplayed();
    await this.pages.basePage.buttonSearch.click();
    await this.pages.basePage.searchBar.waitForDisplayed();
    await this.pages.basePage.searchBar.setValue(searchText);
    await browser.keys("Enter");
})

Then(/^I add items to basket$/, async function (tableWithItems) {
    for await (const itemRow of tableWithItems.rows()) {
        const itemElement = await this.pages.productsPage.buttonAddToCart(itemRow[0], itemRow[1]);
        await itemElement.waitForDisplayed();
        await itemElement.scrollIntoView()
        await itemElement.click();
        const itemSnackbar = await this.pages.productsPage.snackbarItemAdded(itemRow[0]);
        await itemSnackbar.waitForDisplayed();
        await itemSnackbar.waitForExist({ reverse: true });
    }
})


Then(/^I see items in basket$/, async function (tableWithItems) {
    for await (const itemRow of tableWithItems.hashes()) {
        console.log(`name = ${itemRow.Name}, price = ${itemRow.Price}`);
        const element = await this.pages.basketPage.item(itemRow.Name, itemRow.Price);
        await element.waitForDisplayed();
    }
})
