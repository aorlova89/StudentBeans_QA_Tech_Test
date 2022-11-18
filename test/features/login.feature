Feature: Login with invalid credentials

  Scenario: As a product owner I want to confirm that no one is not able to login to studentbeans.com using invalid credentials
    Given I am on the studentbeans homepage
    And I open the log in function
    When I use the credentials email: test@test.com password: testingStuff
    Then Error message should display
