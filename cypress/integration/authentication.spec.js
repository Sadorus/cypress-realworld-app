describe("Sign up and login", function () {
  beforeEach(function () {
    cy.visit("/signin");
  });
  it("Should register new user", function () {
    cy.get("[data-test=signup]").click()

    cy.get("#firstName").type("testName")
    cy.get("#lastName").type("testLastName")
    cy.get("#username").type("testUserName")
    cy.get("#password").type("testPassword123")
    cy.get("#confirmPassword").type("testPassword123")
    cy.get("[data-test=signup-submit]").click()
  });
  xit("Should login using the data from register", function () {
    cy.get("#username").type("testUserName")
    cy.get("#password").type("testPassword123")
    //cy.get('[data-test=signin-submit]').click() - need to add additonal code for the creating banka account to logout.
  });

  it("Should show login errors", function () {
    cy.get("#username").type("testWrongUserName")
    cy.get("#password").type("testWrongPassword123")
    cy.get("[data-test=signin-submit]").click()
    cy.get("[data-test=signin-error]").should("be.visible").and("contain", "Username or password is invalid")

    cy.get("#username").click()
    .get(".makeStyles-root-1").click(15, 40)
    .get("#username-helper-text").should("be.visible").and("contain", "Username is required")

    cy.get("#password").type("ch")
    .get(".makeStyles-root-1").click(15, 40)
    .get("#password-helper-text").should("be.visible").and("contain", "Password must contain at least 4 characters")

    cy.get('[data-test=signin-submit]').should("be.disabled")
  });
});
