import { element, ExpectedConditions, browser, Locator, ElementFinder, WebElement, WebElementPromise } from "protractor";

export class BasePage {

	protected async clickElement(selector: Locator): Promise<void> {
		const elementFinder: ElementFinder = await element(selector);
		await this.scrollIntoView(elementFinder);
		await this.waitForElementClickable(elementFinder, 3000);
		await elementFinder.click();
	}

	protected async clickNthElementOf(selector: Locator, n: number): Promise<void> {
		const elements = await element.all(selector);
		await this.scrollIntoView(elements[n]);
		await this.waitForElementClickable(elements[n], 3000);
		await elements[n].click();
	}

	protected async sendKeys(selector: Locator, keys: string): Promise<void> {
		const elementFinder: ElementFinder = await element(selector);
		await this.scrollIntoView(elementFinder);
		await elementFinder.sendKeys(keys);
	}

	protected async getElementText(selector: Locator): Promise<string> {
		return element(selector).getText();
	}

	private async waitForElementVisible(elementF: ElementFinder, ms: number): Promise<void> {
		await browser.wait(
			ExpectedConditions.visibilityOf(elementF),
			ms
		);
	}

	private async waitForElementClickable(elementF: ElementFinder, ms: number): Promise<void> {
		await browser.wait(
			ExpectedConditions.elementToBeClickable(elementF),
			ms
		);
	}

	private async scrollIntoView(elementF: ElementFinder): Promise<void> {
		await this.jsExecutor(function () {
			arguments[0].scrollIntoView({block: "center"});
		}, elementF.getWebElement());
		await this.waitForElementVisible(elementF, 3000);
	}

	private async jsExecutor(func: Function, ...args: WebElementPromise[]): Promise<any> {
		return browser.executeScript(func, ...args);
	}
}
