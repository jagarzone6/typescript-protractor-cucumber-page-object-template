class CreateUserModal {
  constructor(EC) {
    this.EC = EC;
    this.MODAL_CONTAINER_SELECTOR = "div[class='modal ng-scope']";
    this.FIRST_NAME_INPUT = By.css(
      this.MODAL_CONTAINER_SELECTOR + " input[name='FirstName']"
    );
    this.LAST_NAME_INPUT = By.css(
      this.MODAL_CONTAINER_SELECTOR + " input[name='LastName']"
    );
    this.USER_NAME_INPUT = By.css(
      this.MODAL_CONTAINER_SELECTOR + " input[name='UserName']"
    );
    this.PASSWORD_INPUT = By.css(
      this.MODAL_CONTAINER_SELECTOR + " input[name='Password']"
    );
    this.CUSTOMER_INPUT = function(customerId) {
      return By.css(
        this.MODAL_CONTAINER_SELECTOR + " input[value='" + customerId + "']"
      );
    };
    this.ROLE_SELECT = By.css(
      this.MODAL_CONTAINER_SELECTOR + " select[name='RoleId']"
    );
    this.ROLE_SELECT_OPTION = function(roleId) {
      return By.css(
        this.MODAL_CONTAINER_SELECTOR + " option[value='" + roleId + "']"
      );
    };
    this.EMAIL_INPUT = By.css(
      this.MODAL_CONTAINER_SELECTOR + " input[name='Email']"
    );
    this.CELLPHONE_INPUT = By.css(
      this.MODAL_CONTAINER_SELECTOR + " input[name='Mobilephone']"
    );
    this.SAVE_BUTTON = By.css(
      this.MODAL_CONTAINER_SELECTOR + " button[class='btn btn-success']"
    );
  }
  async waitForCreateUserModalVisible() {
    return browser.wait(
      this.EC.visibilityOf($(this.MODAL_CONTAINER_SELECTOR)),
      5000
    );
  }
  async attempToCreateUser(newUser) {
    await browser.findElement(this.ROLE_SELECT).click();
    await browser.findElement(this.ROLE_SELECT_OPTION(newUser.roleId)).click();
    await Promise.all([
      browser.findElement(this.FIRST_NAME_INPUT).sendKeys(newUser.firstName),
      browser.findElement(this.LAST_NAME_INPUT).sendKeys(newUser.lastName),
      browser.findElement(this.USER_NAME_INPUT).sendKeys(newUser.userName),
      browser.findElement(this.PASSWORD_INPUT).sendKeys(newUser.pass),
      browser.findElement(this.EMAIL_INPUT).sendKeys(newUser.email),
      browser.findElement(this.CELLPHONE_INPUT).sendKeys(newUser.mobilePhone),
      browser.findElement(this.CUSTOMER_INPUT(newUser.customerCode)).click()
    ]);
    return browser.findElement(this.SAVE_BUTTON).click();
  }
}

module.exports = CreateUserModal;
