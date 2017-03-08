Feature: Creating a new todo task
  As a person with multiple things to do
  I'd like a way to manage my tasks
  So that I see what I'm getting done

  Scenario: Adding a new task
    Given I have gone to the angular todo mvc page
    And I have entered "mow the lawn" into the todo entry box
    When I hit enter
    Then I should see "mow the lawn" in the todo list

  Scenario: Completing a task
    Given I have gone to the angular todo mvc page
    When I complete the "mow the lawn" task
    Then "mow the lawn" task should be completed

#    Scenarios that check that something "isn't" there can lead to false positives.
  Scenario: Removing a task
    Given I have gone to the angular todo mvc page
    And I have entered "task not worth doing" into the todo entry box
    And I have hit enter
    When I remove the "task not worth doing"
    Then I should not see "task not worth doing" in the todo list
