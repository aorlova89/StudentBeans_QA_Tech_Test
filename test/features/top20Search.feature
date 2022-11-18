Feature: Search Top 20 offers

  Scenario: As a user I want to search for top 20 offers on studentbeans.com and open details for the 6th offer
    Given I am on the studentbeans homepage
    And I navigate to Top 20 offers
    When I click the 6th offer from the list
    Then I am navigated to brand page
