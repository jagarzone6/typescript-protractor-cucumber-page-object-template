var { element, By, $ } = require("protractor");
class CountryPage {
  constructor(EC) {
    this.CO_SELECTOR = By.id('CO');
    this.EC = EC;
  }
  async clickOnCOButton() {
    await browser.wait(
      this.EC.visibilityOf(element(this.CO_SELECTOR)),
      5000
    );
    return element(this.CO_SELECTOR).click();
  }
}

module.exports =CountryPage;
