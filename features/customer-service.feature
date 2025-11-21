Feature: Customer service

  @customer-service
  Scenario: Leave a complaint
    Given I open landing page
    And I have logged in
    When I open side menu
    And I open "Complaint" side menu option
    And I am on "Complaint" page
    And I type and send message "I don't like tomato juice"
    Then I see confirmation that message has been sent
