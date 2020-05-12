import { BasePage } from './base-page';
import { By, Key, Locator } from "protractor";

export class ExamplePage extends BasePage {
    private static SEARCH_INPUT_LOCATOR: Locator = By.name('q');
    private static RESULTS_LOCATOR: Locator = By.css('div[class="g"] h3[class="LC20lb DKV0Md"]');

    public async search(text: string): Promise<void> {
        await this.sendKeys(ExamplePage.SEARCH_INPUT_LOCATOR, text);
        await this.sendKeys(ExamplePage.SEARCH_INPUT_LOCATOR, Key.ENTER);
    }

    public async clickFirstResult(): Promise<void> {
        await this.clickNthElementOf(ExamplePage.RESULTS_LOCATOR, 0);
    }
}
