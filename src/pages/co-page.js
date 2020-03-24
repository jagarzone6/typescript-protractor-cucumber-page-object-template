var { element, By, Key } = require("protractor");
var BasePage = require("./../pages/base-page");

class COPage extends BasePage {
  constructor() {
    super();
    this.SEARCH_SELECTOR = By.className('nav-search-input');
    this.NEW_CONDITION_SELECTOR = By.css('a[title="Nuevo"]');
    this.LOCATION_FILTER_SELECTOR = (locationText) => { return By.xpath('//span[contains(text(),"' + locationText + '")]') }
    this.RESULTS_NUMBER = By.className('quantity-results');
    this.SORT_BY = By.className('sort-by');
    this.SORT_BY_OPTIONS = By.css('ul li[class="ui-list__item"]');
    this.SEARCH_RESULTS = By.css('*[id="searchResults"] li');
  }
  async search(text) {
    await this.sendKeys(this.SEARCH_SELECTOR, text);
    await this.sendKeys(this.SEARCH_SELECTOR, Key.ENTER);
  }
  async selectNewCondition() {
    await this.clickElement(this.NEW_CONDITION_SELECTOR);
  }

  async filterByLocation(text) {
    await this.clickElement(this.LOCATION_FILTER_SELECTOR(text));
  }

  async printResultsNumber() {
    console.log(await this.getElementText(this.RESULTS_NUMBER));
  }

  async orderByLessPrice() {
    await this.clickElement(this.SORT_BY);
    await this.clickNthElementOf(this.SORT_BY_OPTIONS, 0);
  }

  async printFirstResults() {
    await this.waitForElementVisible(this.SEARCH_RESULTS, 8000);
    const results = await element.all(this.SEARCH_RESULTS);
    console.log(await results[0].getText());
    console.log(await results[1].getText());
    console.log(await results[2].getText());
    console.log(await results[3].getText());
    console.log(await results[4].getText());

  }

}

module.exports = COPage;
