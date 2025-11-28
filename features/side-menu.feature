Feature: Side menu

  @side-menu @logged-in
  Scenario: Valdiate side menu options when logged in
    Given I open landing page
    And I have logged in
    When I open side menu
    Then I see side menu options
      | Customer Feedback    |
      | Complaint            |
      | Support Chat         |
      | About Us             |
      | Photo Wall           |
      | Deluxe Membership    |
      | Help getting started |
      | GitHub               |

  @side-menu @logged-out
  Scenario: Valdiate side menu options when NOT logged in
    Given I open landing page
    When I open side menu
    Then I see side menu options
      | Customer Feedback    |
      | About Us             |
      | Photo Wall           |
      | Help getting started |
      | GitHub               |
    And I do not see side menu options
      | Complaint            |
      | Support Chat         |
      | Deluxe Membership    |
