const { Given, When, Then } = require("cucumber");

Given(
  "I access mercadolibre site",
  async function() {
    await browser.waitForAngularEnabled(false);
    await browser.get(this.appURL);
  }
);

When("I select colombian site", async function() {
   await this.countryPage.clickOnCOButton();
});

When("I search for {string}", async function(text) {
  await this.coPage.search(text);
});

When("I filter by new", async function() {
  await this.coPage.selectNewCondition();
});

When("I filter by location {string}", async function(text) {
  await this.coPage.filterByLocation(text);
  await this.coPage.printResultsNumber();
});

When("I order by less price", async function() {
  await this.coPage.orderByLessPrice();
  await this.coPage.printFirstResults();
});
