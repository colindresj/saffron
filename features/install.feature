@disable-bundler
Feature: Install saffron
  As a user
  I want to easily generate the Saffron files and directories
  So I can use them in my project

  Scenario: Installing Saffron by default
    When I run `bundle exec saffron install`
    Then the output should contain "Saffron succesfully installed in saffron/"
    And a directory named "saffron" should exist
    And the sub directories should exist inside "saffron/"
    And the following files should exist:
      | saffron/saffron.scss |
      | saffron/_variables.scss  |

  Scenario: Installing Saffron into a specific directory
    When I run `bundle exec saffron install -p path/to/directory`
    Then the output should contain "Saffron succesfully installed in path/to/directory/saffron"
    And a directory named "path/to/directory/saffron" should exist
    And the sub directories should exist inside "path/to/directory/saffron/"
    And the following files should exist:
      | path/to/directory/saffron/saffron.scss |
      | path/to/directory/saffron/_variables.scss  |

  Scenario: Saffron is already installed
    When I run `bundle exec saffron install`
    And I run `bundle exec saffron install`
    Then the output should contain "Saffron already exists"
