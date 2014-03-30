@disable-bundler
Feature: Update saffron
  As a user
  I want to easily update my Saffron files
  So I can maintain the most up-to-date functionality

  Scenario: Updating Saffron
    Given Saffron already exists
    When I modify saffron at "saffron/" with "modification text"
    And I run `bundle exec saffron update`
    Then the output should contain "Saffron succesfully updated in saffron/"
    And a directory named "saffron" should exist
    And the sub directories should exist inside "saffron/"
    And the following files should exist:
      | saffron/saffron.scss |
      | saffron/_variables.scss  |

    Given Saffron was installed into a specific directory
    When I modify saffron at "path/to/directory/saffron/" with "modification text"
    And I run `bundle exec saffron update`
    Then saffron at "path/to/directory/saffron/" should still be modified with "modification text"
    And the output should contain "Saffron not found. No updates occured."
    And I run `bundle exec saffron update -p path/to/directory`
    Then the output should contain "Saffron succesfully update in path/to/directory/saffron"
    And a directory named "path/to/directory/saffron" should exist
    And the sub directories should exist inside "path/to/directory/saffron/"
    And the following files should exist:
      | path/to/directory/saffron/saffron.scss |
      | path/to/directory/saffron/_variables.scss  |

    Given Saffron does not yet exist
    When I run `bundle exec saffron update`
    Then the output should contain "Saffron not found. No updates occured."
    And a directory named "saffron/" should not exist
