Feature: Creating a new todo task
  As a person with multiple things to do
  I'd like a way to manage my tasks
  So that I see what I'm getting done

  Scenario: Adding a new task
    Given I have gone to the angular todo mvc page
    And I have entered "mow the lawn" into the todo entry box
    When I hit enter
    Then I should see "mow the lawn" in the todo list
