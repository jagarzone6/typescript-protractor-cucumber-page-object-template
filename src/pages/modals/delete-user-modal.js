class DeleteUserModal {
  constructor(EC) {
    this.EC = EC;
    this.MODAL_CONTAINER_SELECTOR = "div[class='modal ng-scope']";
    this.OK_BUTTON = By.css(
      this.MODAL_CONTAINER_SELECTOR +
        " button[class='btn ng-scope ng-binding btn-primary']"
    );
    this.CANCEL_BUTTON = By.css(
      this.MODAL_CONTAINER_SELECTOR + " button[class='btn ng-scope ng-binding']"
    );
  }
  async waitForDeleteUserModalVisible() {
    return browser.wait(
      this.EC.visibilityOf($(this.MODAL_CONTAINER_SELECTOR)),
      5000
    );
  }
  async confirmDelete() {
    return browser.findElement(this.OK_BUTTON).click();
  }
}

module.exports = DeleteUserModal;
