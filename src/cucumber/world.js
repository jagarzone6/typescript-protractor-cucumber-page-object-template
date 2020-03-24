var { setWorldConstructor } = require("cucumber");
var { setDefaultTimeout } = require("cucumber");
var config = require('./../../resources/config.json')[process.env.ENV || 'default'];
var CountryPage = require("./../pages/country-page");
var COPage = require("./../pages/co-page");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

class World {
  constructor() {
    this.testData = {};
    this.appURL = config.appURL;
    this.countryPage = new CountryPage();
    this.coPage = new COPage();
    this.assert = chai.assert;
  }
}

chai.use(chaiAsPromised);
setWorldConstructor(World);
setDefaultTimeout(25 * 1000);
