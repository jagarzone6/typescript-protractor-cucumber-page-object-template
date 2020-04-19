import { element, ExpectedConditions, browser, Locator } from "protractor";

export class BasePage {

    async clickElement(selector: Locator) {
        await browser.wait(
            ExpectedConditions.visibilityOf(element(selector)),
            8000
        );
        await element(selector).click();
    }

    async clickNthElementOf(selector: Locator, n: number) {
        await browser.wait(
            ExpectedConditions.visibilityOf(element(selector)),
            8000
        );
        const elements = await element.all(selector);
        await elements[n].click();
    }

    async sendKeys(selector: Locator, keys: string) {
        await browser.wait(
            ExpectedConditions.visibilityOf(element(selector)),
            8000
        );
        await element(selector).sendKeys(keys);
    }

    async getElementText(selector: Locator) {
        await browser.wait(
            ExpectedConditions.visibilityOf(element(selector)),
            8000
        );
        return element(selector).getText();
    }

    async waitForElementVisible(selector: Locator, ms: number) {
        await browser.wait(
            ExpectedConditions.visibilityOf(element(selector)),
            ms
        );
    }
}
