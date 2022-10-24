describe("dashboard", () => {
  beforeEach(() => {
    cy.login();
  });

  it("should see dashboard page", () => {
    // Menu bar
    cy.get('header[data-testid="app-bar"]').should("exist");

    // Input form
    cy.get("input[data-testid='task-input']").should("exist");
  });

  it("should be able to open and close user menu", () => {
    cy.get('div[data-testid="user-panel"]').should("be.not.visible");
    cy.get('button[data-testid="toggle-user"]').click();
    cy.get('div[data-testid="user-panel"]').should("be.visible");
    cy.get('div[data-testid="user-panel"]').click();
    cy.get('div[data-testid="user-panel"]').should("be.not.visible");
  });
});
