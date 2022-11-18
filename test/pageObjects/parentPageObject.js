const { assert } = require('chai')

class ParentPageObject {
  top20Selector = '[data-testid="nav-category-top-20-student-discounts"]'
  loginSelector = '[data-testid="nav-login"]'

  async goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    await browser.url('')
  }

  async acceptCookies() {
    await $('#onetrust-accept-btn-handler').click()
  }

  async goToTop20Page() {
    await $(this.top20Selector).click()
  }

  async goToLoginPage() {
    await $(this.loginSelector).click()
  }

  async verifyHomePage () {
    await this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  async isElementEqualToExpected (element, expectedText) {
    const errorMessage = 'Actual does not match expected'
    assert(await expect(await element.getText(), errorMessage).to.equal(expectedText))
  }

}

module.exports = ParentPageObject
