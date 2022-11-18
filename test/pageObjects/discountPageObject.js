const ParentPageObject = require("./parentPageObject");

class DiscountPageObject extends ParentPageObject{
  breadCrumbsSelector = '[aria-current="page"]'

  async verifyDiscountPageTitle(expectedTitle) {
    await this.isElementEqualToExpected($(this.breadCrumbsSelector), expectedTitle)
  }

}

module.exports = DiscountPageObject
