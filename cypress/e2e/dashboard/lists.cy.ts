describe("lists", () => {
  beforeEach(() => {
    cy.login();
    cy.setupLists();
  });

  it("should be able to add new list and tasks", () => {
    cy.contains("test task 1").should("exist");
    cy.contains("test task 2").should("exist");
    cy.contains("test task 3").should("exist");
  });

  it("should be able to rename new list and tasks", () => {
    cy.get("button[data-testid='test task 1 edit button']").click();
    cy.get("input[data-testid='test task 1 input']").type(" updated{enter}");

    cy.get("button[data-testid='test task 2 edit button']").click();
    cy.get("input[data-testid='test task 2 input']").type(" updated{enter}");

    cy.get("button[data-testid='test task 3 edit button']").click();
    cy.get("input[data-testid='test task 3 input']").type(" updated{enter}");

    cy.contains("test task 1 updated").should("exist");
    cy.contains("test task 2 updated").should("exist");
    cy.contains("test task 3 updated").should("exist");

    // When I get back do the same as above for the lists
    cy.get("button[data-testid='New List edit button']").click();
    cy.get("input[data-testid='New List input']").type(" updated{enter}");

    cy.contains("New List updated").should("exist");
  });

  it("should be able to delete new list and tasks", () => {
    cy.get("button[data-testid='test task 1 edit button']").click();
    cy.get("button[data-testid='test task 1 delete button']").click();

    cy.get("button[data-testid='test task 2 edit button']").click();
    cy.get("button[data-testid='test task 2 delete button']").click();

    cy.get("button[data-testid='test task 3 edit button']").click();
    cy.get("button[data-testid='test task 3 delete button']").click();

    cy.contains("test task 1").should("not.exist");
    cy.contains("test task 2").should("not.exist");
    cy.contains("test task 3").should("not.exist");

    cy.get("button[data-testid='New List edit button']").click();
    cy.get("button[data-testid='New List delete button']").click();
    cy.contains("New List").should("not.exist");
  });
});
