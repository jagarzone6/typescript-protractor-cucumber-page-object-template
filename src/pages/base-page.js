var EC = protractor.ExpectedConditions;
var { element } = require("protractor");

class BasePage {

    async clickElement(selector) {
        await browser.wait(
            EC.visibilityOf(element(selector)),
            8000
        );
        await element(selector).click();
    }

    async clickNthElementOf(selector, n) {
        await browser.wait(
            EC.visibilityOf(element(selector)),
            8000
        );
        const elements = await element.all(selector);
        await elements[n].click();
    }

    async sendKeys(selector, keys) {
        await browser.wait(
            EC.visibilityOf(element(selector)),
            8000
        );
        await element(selector).sendKeys(keys);
    }

    async getElementText(selector) {
        await browser.wait(
            EC.visibilityOf(element(selector)),
            8000
        );
        return element(selector).getText();
    }

    async waitForElementVisible(selector, ms) {
        await browser.wait(
            EC.visibilityOf(element(selector)),
            ms
        );
    }
}

module.exports = BasePage;
