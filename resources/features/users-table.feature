@users-table
Feature: Users table
    As an Engr. Candidate
    I need to automate http://www.way2automation.com/angularjs-protractor/webtables/
    So I can show my automation capabilities

    Scenario: Add a user and validate the user has been added to the table (UI)
        Given Juan access the webtables application in his web browser
        When attempts to create a new user
        Then can see the new user in the table

    Scenario: Delete user User Name: novak and validate user has been deleted (UI)
        Given Juan access the webtables application in his web browser
        When attempts to delete user 'novak'
        Then can not see the user 'novak' in the table

    Scenario: Add a user and validate the user has been persisted
        Given Juan access the webtables application in his web browser
        When attempts to create a new user
        And reloads the page
        Then can see the new user in the table

    Scenario: Delete user User Name: novak and validate user has been deleted and the change is persisted
        Given Juan access the webtables application in his web browser
        When attempts to delete user 'novak'
        And reloads the page
        Then can not see the user 'novak' in the table        