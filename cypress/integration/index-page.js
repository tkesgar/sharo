/// <reference types="cypress" />

it("should show repo card containing information about sharo", () => {
  cy.visit("/");

  cy.contains("It works!");

  cy.get('[data-cy="repo-title"]').contains("sharo");
  cy.get('a[data-cy="repo-url"]')
    .contains("tkesgar/sharo")
    .should("have.attr", "href", "https://github.com/tkesgar/sharo");
});
