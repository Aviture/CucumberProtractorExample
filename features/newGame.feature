Feature: Creating a new Firepoker game
  As an Agile Development team member
  I'd like to start a game
  So that I can estimate stories with my team

  Scenario: Creating a new game
    Given I go to firepoker
    When I click the Play Now button
    Then I should be prompted to begin a new game
