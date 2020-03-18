const { Given, When, Then } = require("cucumber");

Given(
  "Juan access the webtables application in his web browser",
  async function() {
    await browser.get(this.appURL);
    return browser.waitForAngular();
  }
);

When("attempts to create a new user", async function() {
  await this.homePage.clickOnAddUser();
  await this.createUserModal.waitForCreateUserModalVisible();
  return this.createUserModal.attempToCreateUser(this.newUser);
});

When("attempts to delete user {string}", async function(userName) {
  await this.homePage.clickOnDeleteUser(userName);
  await this.deleteUserModal.waitForDeleteUserModalVisible();
  await this.deleteUserModal.confirmDelete();
});

Then("can see the new user in the table", async function() {
  let answer = this.homePage.searchForUserNameInTable(this.newUser.userName);
  return this.assert.eventually.equal(answer, true);
});

Then("can not see the user {string} in the table", async function(userName) {
  let answer = this.homePage.searchForUserNameInTable(userName);
  return this.assert.eventually.equal(answer, false);
});

When("reloads the page", async function() {
  return browser.refresh();
});
