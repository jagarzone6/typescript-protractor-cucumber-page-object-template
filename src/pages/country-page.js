var { By } = require("protractor");
var BasePage = require("./../pages/base-page");

class CountryPage extends BasePage {
  constructor() {
    super();
    this.CO_SELECTOR = By.id('CO');
  }
  async clickOnCOButton() {
    await this.clickElement(this.CO_SELECTOR);
  }
}

module.exports =CountryPage;
