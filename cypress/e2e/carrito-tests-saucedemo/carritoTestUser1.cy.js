describe("Test Cases Carrito - Standard USer", {testIsolation:false}, () => {

    before(() => {
      cy.visit('https://www.saucedemo.com');
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
    })
  
    it('C-01: Agregar productos al carrito desde Products', () => {
      cy.addProductToCart('Sauce Labs Backpack');
      cy.get('.shopping_cart_badge').should('contain', '1');
    });
  
    it('C-02: Agregar productos al carrito desde detalle', () => {
      cy.get('[data-test="product"]').contains('Sauce Labs Bike Light').click();
      cy.get('[data-test="add-to-cart"]').click();
      cy.get('.shopping_cart_badge').should('contain', '1');
    });
  
    it('C-03: Eliminar producto del carrito', () => {
      cy.addProductToCart('Sauce Labs Backpack');
      cy.removeProductFromCart();
      cy.get('.shopping_cart_badge').should('not.exist');
    });
  
    it('C-04: Modificar la cantidad de un producto en el carrito', () => {
      cy.addProductToCart('Sauce Labs Backpack');
      cy.updateProductQuantity('Sauce Labs Backpack', 3);
      cy.get('.cart_quantity_input').should('have.value', '3');
    });
  
    it('C-05: Vaciar carrito', () => {
      cy.addProductToCart('Sauce Labs Backpack');
      cy.emptyCart();
      cy.get('.shopping_cart_badge').should('not.exist');
    });
  
    it('C-06: Avanzar al pago', () => {
      cy.addProductToCart('Sauce Labs Backpack');
      cy.proceedToCheckout();
      cy.url().should('include', '/checkout-step-one.html');
    });
  
    it('C-07: Avanzar al pago con carrito vacío', () => {
      cy.proceedToCheckout();
      cy.get('.cart_quantity').should('not.exist');
      cy.get('.error-message-container').should('contain', 'Your cart is empty');
    });
  });