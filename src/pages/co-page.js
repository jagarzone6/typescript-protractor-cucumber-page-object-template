var { element, By, Key} = require("protractor");
class COPage {
  constructor(EC) {
    this.SEARCH_SELECTOR = By.className('nav-search-input');
    this.EC = EC;
    this.NEW_CONDITION_SELECTOR = By.css('a[title="Nuevo"]');
    this.LOCATION_FILTER_SELECTOR = (locationText)=>{ return By.xpath('//span[contains(text(),"'+locationText+'")]')}
    this.RESULTS_NUMBER = By.className('quantity-results');
    this.SORT_BY = By.className('sort-by');
    this.SORT_BY_OPTIONS = By.css('ul li[class="ui-list__item"]');
    this.SEARCH_RESULTS = By.css('*[id="searchResults"] li');
  }
  async search(text) {
    await browser.wait(
      this.EC.visibilityOf(element(this.SEARCH_SELECTOR)),
      5000
    );
    await element(this.SEARCH_SELECTOR).sendKeys(text);
    await element(this.SEARCH_SELECTOR).sendKeys(Key.ENTER);
  }
  async selectNewCondition() {
    await browser.wait(
      this.EC.visibilityOf(element(this.NEW_CONDITION_SELECTOR)),
      8000
    );
    return element(this.NEW_CONDITION_SELECTOR).click();
  }
  async filterByLocation(text) {
    await browser.wait(
      this.EC.visibilityOf(element(this.LOCATION_FILTER_SELECTOR(text))),
      5000
    );
    return element(this.LOCATION_FILTER_SELECTOR(text)).click();
  }

  async printResultsNumber() {
    await browser.wait(
      this.EC.visibilityOf(element(this.RESULTS_NUMBER)),
      5000
    );
    console.log(await element(this.RESULTS_NUMBER).getText());
  }

  async orderByLessPrice() {
    await browser.wait(
      this.EC.visibilityOf(element(this.SORT_BY)),
      5000
    );
    await element(this.SORT_BY).click();
    await browser.wait(
      this.EC.visibilityOf(element(this.SORT_BY_OPTIONS)),
      5000
    );
    const options = await element.all(this.SORT_BY_OPTIONS);
    await options[0].click();
  }

  async printFirstResults() {
    await browser.wait(
      this.EC.visibilityOf(element(this.SEARCH_RESULTS)),
      5000
    );
    const results =await element.all(this.SEARCH_RESULTS);
    console.log(await results[0].getText());
    console.log(await results[1].getText());
    console.log(await results[2].getText());
    console.log(await results[3].getText());
    console.log(await results[4].getText());

  }
  
}

module.exports =COPage;
