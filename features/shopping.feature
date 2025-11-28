Feature: Shopping

  @shop
  Scenario: Browse and add products to basket
    Given I open landing page
    And I have logged in
    When I submit 'Juice' in search bar
    And I add items to basket
      | Name         | Price |
      | Apple Juice  |  1.99 |
      | Banana Juice |  1.99 |
      | Lemon Juice  |  2.99 |
    And I open shopping basket
    Then I see items in basket
      | Name         | Price |
      | Apple Juice  |  1.99 |
      | Banana Juice |  1.99 |
      | Lemon Juice  |  2.99 |
