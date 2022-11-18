const { Given, When, Then } = require('@cucumber/cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')
const DiscountPageObject = require("../pageObjects/discountPageObject");

const simpleSearchPageObject = new SimpleSearchPageObject()
const discountPageObject = new DiscountPageObject()
let openedOfferTitle = ''

Given('I am on the studentbeans homepage', async () => {
  await simpleSearchPageObject.goToHomePage()
  await simpleSearchPageObject.verifyHomePage()
  await simpleSearchPageObject.acceptCookies()
})

Given('I open the search bar', async () => {
  await simpleSearchPageObject.openSearchBar()
  await simpleSearchPageObject.verifySearchBar()
})

When('I enter "Samsung"', async () => {
  await simpleSearchPageObject.typeIntoSearchBar() // probably it worth to pass argument here
  await simpleSearchPageObject.verifySearchResults()
})

Then('I should select the 4th "Samsung" search listing', async () => {
  openedOfferTitle = await simpleSearchPageObject.openSearchResults() // probably it worth to pass argument with index here
})

Then("I am navigated to selected offer page", async () => {
  await discountPageObject.verifyDiscountPageTitle(openedOfferTitle)
})
