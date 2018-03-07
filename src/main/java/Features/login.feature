Feature: Free CRM Login Feature
  Scenario Outline: Free CRM login Test Scenario
    Given User is already on Login Page
    When Title of login page is Free CRM
    Then User enter their "<username>"
    And User enter "<password>"
    Then User Clicks on login button
    Then User is on the homepage

    Examples:
    |username|password   |
    |kp1439  |Peoplentech|

