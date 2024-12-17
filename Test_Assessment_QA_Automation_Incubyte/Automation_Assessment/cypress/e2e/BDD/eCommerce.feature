Feature: User Registration

    Scenario: Verify user registration with valid details
        Given The user is on the registration page
        When The user enters their name, email, and password
        And I submit the registration form
        Then The user should be registered successfully
        And The user should be redirected to the welcome page