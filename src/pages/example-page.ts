import { BasePage } from './base-page';
import { By, Key, Locator } from "protractor";

export class ExamplePage extends BasePage {
    SEARCH_INPUT_ID: Locator = By.name('q');

    async search(text: string) {
        await this.sendKeys(this.SEARCH_INPUT_ID, text);
        await this.sendKeys(this.SEARCH_INPUT_ID, Key.ENTER);
    }
}
