import { Given, When, Then } from "cucumber";
import { browser } from "protractor";
import { World } from "../cucumber/world";

Given(/I access .* site$/, async function (this: World) {
    await browser.get(this.appURL);
});

Given('I search {string} in the search box', async function (this: World, text: string) {
    await this.examplePage.search(text);
});

When('select the first result', async function (this: World) {
    await this.examplePage.clickFirstResult();
});

Then('I should be in wikipedia SB page', async function (this: World) {
    const currentUrl: string = await browser.getCurrentUrl();
    this.assert.equal(currentUrl, 'https://es.wikipedia.org/wiki/Super_Bowl', 'Not in NFL official site');
});
