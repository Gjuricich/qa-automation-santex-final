describe("Test Cases Login",{ testIsolation: true }, () => {
    
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/");
    });

    it("L-01: Inicio de sesión happy path - usuario standard_user", () => {
      cy.fixture("users").then((users) => {
        cy.login(users.standardUser.username, users.standardUser.password);
        cy.url().should("include", "/inventory.html");
      });
    });

    it("L-02: Inicio de sesión usuario happy path - problem_user", () => {
      cy.fixture("users").then((users) => {
        cy.login(users.problemUser.username, users.problemUser.password);
        cy.url().should("include", "/inventory.html");
      });
    });
  
    it("L-03: Inicio de sesión usuario existente y contraseña incorrecta", () => {
      cy.fixture("users").then((users) => {
        cy.login(users.invalidPassword.username, users.invalidPassword.password);
        cy.get("[data-test=error]").should("contain","Username and password do not match" );
      });
    });
  
    it("L-04: Inicio de sesión usuario no registrado", () => {
      cy.fixture("users").then((users) => {
        cy.login(users.invalidUser.username, users.invalidUser.password);
        cy.get("[data-test=error]").should("contain","Username and password do not match");
      });
    });
  
    it("L-05: Inicio de sesión con usuario vacío", () => {
      cy.login("", "secret_sauce");
      cy.get("[data-test=error]").should("contain", "Username is required");
    });
  
    it("L-06: Inicio de sesión con contraseña vacía", () => {
      cy.login("standard_user", "");
      cy.get("[data-test=error]").should("contain", "Password is required");
    });
  
    it("L-07: Inicio de sesión con usuario y contraseña vacíos", () => {
      cy.login("", "");
      cy.get("[data-test=error]").should("contain", "Username is required");
    });
    
  });