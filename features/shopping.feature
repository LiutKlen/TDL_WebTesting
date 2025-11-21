Feature: Shopping

Scenario: Add item to a basket
    Given I open landing page
    And I have logged in
    When I press add item to basket
    And I open basket page
    Then I see the item in basket