Feature: Customer service

@customer-revice
Scenario: leave a complaint
    Given I open landing page
    And I have logged in
    And I open side menu
    When I open side menu
    And I open "Complaint" side menu option
    And I am on "Complaint" page
    And I type and send a message "I don't like tomato juice"
    Then I see a confirmation that message has been sent