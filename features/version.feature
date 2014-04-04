Feature: Output version
  As a user
  I want to know the current version of Saffron I have installed
  So I can keep it up to date

  Scenario: Viewing the current version of Saffron
    When I run `bundle exec saffron version`
    Then the output should contain the current version number

