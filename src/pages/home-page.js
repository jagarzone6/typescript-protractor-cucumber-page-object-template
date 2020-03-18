class HomePage {
  constructor(EC) {
    this.ADD_USER_BUTTON_SELECTOR = "table button[type='add']";
    this.TABLE_DATA_SELECTOR = By.css("table tbody tr");
    this.ADD_USER_BUTTON = By.css(this.ADD_USER_BUTTON_SELECTOR);
    this.EC = EC;
  }
  async clickOnAddUser() {
    await browser.wait(
      this.EC.visibilityOf($(this.ADD_USER_BUTTON_SELECTOR)),
      5000
    );
    return browser.findElement(this.ADD_USER_BUTTON).click();
  }
  async searchForUserNameInTable(userName) {
    return new Promise(
      async function(resolve, reject) {
        let tableRows = await browser.findElements(this.TABLE_DATA_SELECTOR);
        for (let row of tableRows) {
          let rowUserName = await row.findElement(By.css(":nth-child(3)"));
          if ((await rowUserName.getText()) == userName) resolve(true);
        }
        resolve(false);
      }.bind(this)
    );
  }
  async clickOnDeleteUser(userName) {
    return new Promise(
      async function(resolve, reject) {
        let tableRows = await browser.findElements(this.TABLE_DATA_SELECTOR);
        for (let row of tableRows) {
          let rowUserName = await row.findElement(By.css(":nth-child(3)"));
          if ((await rowUserName.getText()) == userName) {
            let deleteButton = await row.findElement(
              By.css("button[ng-click='delUser()']")
            );
            await deleteButton.click();
            resolve();
          }
        }
        reject();
      }.bind(this)
    );
  }
}

module.exports = HomePage;
