// ***********************************************
// This example commands.js shows you how to
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

Cypress.Commands.add("login", (username, password) => {
    if (username) {
      cy.get("[data-test=username]").clear().type(username);
    } else {
      cy.get("[data-test=username]").clear();
    }
  
    if (password) {
      cy.get("[data-test=password]").clear().type(password);
    } else {
      cy.get("[data-test=password]").clear();
    }
  
    cy.get("[data-test=login-button]").click();
  });

  Cypress.Commands.add('removeProductFromCart', () => {
    cy.get('.cart_item').first().find('.cart_button').click();
  });
  
  Cypress.Commands.add('updateProductQuantity', (productName, quantity) => {
    cy.get('.cart_item').contains(productName)
      .parents('.cart_item')
      .find('.cart_quantity_input')
      .clear()
      .type(quantity);
  });
  
  Cypress.Commands.add('emptyCart', () => {
    cy.get('.cart_item').each(($item) => {
      cy.wrap($item).find('.cart_button').click();
    });
  });
  
  Cypress.Commands.add('proceedToCheckout', () => {
    cy.get('[data-test="checkout"]').click();
  });
   


