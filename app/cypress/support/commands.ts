/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
import "@testing-library/cypress/add-commands";

Cypress.Commands.add("login", () => {
  const TEST_USER = "test@griffindow.com";
  const TEST_PASSWORD = "thisisthepassword";
  // Setup page
  cy.viewport(1920, 1080);

  // Visit login page
  cy.visit("http://localhost:3000");
  cy.wait(1000);
  cy.get("h1").contains("Tasks").should("exist");

  // Login with test credentials
  cy.get('[name="email"]').type(TEST_USER).should("have.value", TEST_USER);
  cy.get('[name="password"]')
    .type(TEST_PASSWORD)
    .should("have.value", TEST_PASSWORD);
  cy.get("button[data-testid='login-btn']").contains("Login").click();
  cy.wait(1000);
  cy.get("header[data-testid='app-bar']").should("exist");
});

Cypress.Commands.add("setupLists", () => {
  // Create new list
  cy.get('button[data-testid="add-new-list"]').should("exist");
  cy.get('button[data-testid="add-new-list"]').click();
  cy.findByText("New List").should("exist");

  // List should be selected
  const TASK_1_NAME = "test task 1";
  const TASK_2_NAME = "test task 2";
  const TASK_3_NAME = "test task 3";

  cy.get('input[data-testid="task-input"]').should("exist");
  cy.get('input[data-testid="task-input"]').type(`${TASK_1_NAME}{enter}`);
  cy.get('input[data-testid="task-input"]').type(`${TASK_2_NAME}{enter}`);
  cy.get('input[data-testid="task-input"]').type(`${TASK_3_NAME}{enter}`);
});
