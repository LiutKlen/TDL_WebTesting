Feature: auth
#empty feature


Scenario: login
    Given I open landing page
    And I click on account button
    And I press login button
    And I am on login page
    When I enter login password
    And I confirm login
    Then I should be logged in successfully

Scenario: register a new user
    Given I open landing page
    And I click on account button
    And I press login button
    And I am on login page
    When I press not yet a customer button
    And I enter email adress
    And I enter registration password
    And I confirm registration password
    And I confirm registration
    Then I should be registered successfully