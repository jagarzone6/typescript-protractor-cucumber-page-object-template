import { After, Before, BeforeAll } from "cucumber";
import { browser } from "protractor";

BeforeAll(async function() {
  await browser.waitForAngularEnabled(false);
  await browser.manage().window().maximize();
});

After(async function() {
});
