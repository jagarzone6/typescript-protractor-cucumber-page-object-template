var { setWorldConstructor } = require("cucumber");
var { setDefaultTimeout } = require("cucumber");
var config = require('./../../resources/config.json')[process.env.ENV || 'default'];
var HomePage = require("./../pages/home-page.js");
var CreateUserModal = require("./../pages/modals/create-user-modal.js");
var DeleteUserModal = require("./../pages/modals/delete-user-modal.js");
var EC = protractor.ExpectedConditions;
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");


class World {
  constructor() {
    this.testData = {};
    this.appURL = config.appURL;
    this.homePage = new HomePage(EC);
    this.createUserModal = new CreateUserModal(EC);
    this.deleteUserModal = new DeleteUserModal(EC);
    this.newUser = config.newUser;
    this.assert = chai.assert;
  }
}

chai.use(chaiAsPromised);
setWorldConstructor(World);
setDefaultTimeout(25 * 1000);
