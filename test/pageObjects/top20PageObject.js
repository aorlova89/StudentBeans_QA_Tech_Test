const ParentPageObject = require('./parentPageObject')

class Top20PageObject extends ParentPageObject {
  offersSelector = '[itemprop="offers"]'

  async verifyTop20Page() {
    await this.isElementEqualToExpected($('h1'), 'TOP 20 STUDENT DISCOUNTS')
  }

  async openOffer() {
    const offers = await $$(this.offersSelector)
    const offerTitle = await offers[5].$('h4').getText()
    await offers[5].click()
    const breadcrumbs = await $('[aria-current="page"]')
    await this.isElementEqualToExpected(breadcrumbs, await offerTitle)
    return offerTitle
  }

}


module.exports = Top20PageObject
