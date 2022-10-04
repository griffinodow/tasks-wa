declare namespace Cypress {
  interface Chainable {
    login(): Chainable<void>;
    setupLists(): Chainable<void>;
  }
}
