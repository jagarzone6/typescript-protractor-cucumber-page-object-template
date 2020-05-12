import { setWorldConstructor, setDefaultTimeout, World as CucumberWorld } from "cucumber";
import { browser } from 'protractor'
import { ExamplePage } from "../pages/example-page";
import { assert, use } from "chai";
import chaiAsPromised from "chai-as-promised";
import environments from './../../resources/config.json';

export class World implements CucumberWorld {
  constructor() {
    this.testData = {};
    this.appURL = environments[browser.params.env ? browser.params.env : 'default'].appURL;
    this.examplePage = new ExamplePage();
    this.assert = assert;
  }
  testData: {};
  appURL: string;
  examplePage: ExamplePage;
  assert: Chai.AssertStatic
}

use(chaiAsPromised);
setWorldConstructor(World);
setDefaultTimeout(25 * 1000);
