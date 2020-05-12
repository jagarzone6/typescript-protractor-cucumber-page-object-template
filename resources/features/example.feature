@example-feature
Feature: Example feature
    As a user
    I would like to
    So that I can

    Background:
        Given I access example site

    Scenario: Search scenario
        When I search "super bowl" in the search box
        And select the first result
        Then I should be in wikipedia SB page
