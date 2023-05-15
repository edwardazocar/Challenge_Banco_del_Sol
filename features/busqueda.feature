Feature: Search for products on a Website

  Scenario Outline: As a user, I can search a product on ebay

    Given I am on the home page of ebay
    When I search the <product> in the search field
    Then A list of batteries is displayed on the screen

    Examples:
      | product |
      | Pilas   |
