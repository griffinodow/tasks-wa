describe("desktop and mobile mode", () => {
  beforeEach(() => {
    cy.login();
  });

  describe("desktop mode", () => {
    it("should see lists panel", () => {
      cy.get('div[data-testid="lists-panel"]').should("exist");
    });
  });

  describe("mobile mode", () => {
    it("should not see lists panel", () => {
      cy.viewport(500, 700);
      cy.get('div[data-testid="lists-panel"]').should("not.exist");
    });

    it("should be able to open and close lists menu", () => {
      cy.viewport(500, 700);
      cy.get('div[data-testid="lists-panel"]').should("not.exist");
      cy.get('button[data-testid="toggle-menu"]').click();
      cy.get('div[data-testid="lists-panel"]').should("exist");
      cy.get('button[data-testid="toggle-menu"]').click();
      cy.get('div[data-testid="lists-panel"]').should("not.exist");
    });
  });
});
