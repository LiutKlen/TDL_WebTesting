Feature: auth
This feature describes scenarios for login, registration etc

@login @smoke @auth
Scenario: Login
    Given I open landing page
    And I press on Account button
    And I press on login button
    And I am on login page
    When I enter login email
    And I enter login password
    And I confirm login
    Then I am logged in
    And I press on Account button
    And I see Go to profile button contains login email

@register @auth
Scenario: Register a new user
    Given I open landing page
    And I press on Account button
    And I press on login button
    When I press not yet a customer
    And I enter email address
    And I enter password
    And I enter password repeatedly
    And I select a question about elder sibling
    And I write answer
    And I press register button
    Then I am on login page
    When I enter login email
    And I enter login password
    And I confirm login
    Then I am logged in
