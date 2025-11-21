import { Then } from '@wdio/cucumber-framework';

Then(/^I wait for 5 seconds$/, async function() {
    await browser.pause(5000);
})