const { Given, When, Then } = require('@cucumber/cucumber')
const Top20PageObject = require('../pageObjects/top20PageObject')
const DiscountPageObject = require("../pageObjects/discountPageObject");

const top20PageObject = new Top20PageObject()
const discountPageObject = new DiscountPageObject()
let openedOfferTitle = ''

Given('I navigate to Top 20 offers', async () => {
  await top20PageObject.goToTop20Page()
  await top20PageObject.verifyTop20Page()
})

When('I click the 6th offer from the list', async () => {
  openedOfferTitle = await top20PageObject.openOffer()
})

Then("I am navigated to brand page", async () => {
  await discountPageObject.verifyDiscountPageTitle(openedOfferTitle)
})
