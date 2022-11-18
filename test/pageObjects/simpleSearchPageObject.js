const { assert, expect} = require('chai')

const ParentPageObject = require('./parentPageObject')

class SimpleSearchPageObject extends ParentPageObject {
  searchBarSelector = '[data-testid="home-search-bar"]'
  searchBarInputSelector = '[data-testid="search-input"]'
  studentDiscountsSelector = '[data-testid="search-result-title"]'
  searchResultsSelector = '[data-testid="search-result-offer"]'
  searchResultTitleSelector = 'div:nth-child(2) p:nth-child(2) span'

  async openSearchBar () {
    const searchBar = await $(this.searchBarSelector)
    await searchBar.click()
  }

  async verifySearchBar () {
    const searchBarInput = await $(this.searchBarInputSelector)
    assert(await expect(await searchBarInput.getAttribute('placeholder'))
      .to.equal('Brands, items or categories'))
  }

  async typeIntoSearchBar () {
    const searchInput = await $(this.searchBarInputSelector)
    await searchInput.setValue('Samsung')
    assert(await expect(await searchInput.getValue()).to.equal('Samsung'))
  }

  async verifySearchResults () {
    const studentDiscountTitle = await $(this.studentDiscountsSelector)

    await studentDiscountTitle.waitUntil(async function () {
      return (await studentDiscountTitle.getText()) === 'Student Discounts'
    }, {timeout: 5000, timeoutMsg: 'Looks like discounts have not been found after 5s'})
  }

  async openSearchResults () {
    const searchResults = await $$(this.searchResultsSelector)
    const searchResultTitle = await searchResults[5].$(this.searchResultTitleSelector).getText()
    await searchResults[5].click()

    return searchResultTitle
  }

}

module.exports = SimpleSearchPageObject
