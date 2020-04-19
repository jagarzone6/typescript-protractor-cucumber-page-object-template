import { Given, When, Then } from "cucumber";
import { browser } from "protractor";
import { World } from "../cucumber/world";

Given(/I access .* site$/, async function (this: World) {
    await browser.waitForAngularEnabled(false);
    await browser.get(this.appURL);
});

Given('I search {string} in the search box', async function (this: World, text: string) {
    await this.examplePage.search(text);
});
