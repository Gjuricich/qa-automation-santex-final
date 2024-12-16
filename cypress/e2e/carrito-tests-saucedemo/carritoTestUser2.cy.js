describe("Test Cases Carrito - Problem User", { testIsolation: true }, () => {

    beforeEach(() => {
      cy.visit('https://www.saucedemo.com');
      cy.fixture("users").then((users) => {
        cy.login(users.problemUser.username, users.problemUser.password);
      });
      cy.url().should('include', '/inventory.html');
      cy.get('.inventory_list', { timeout: 10000 }).should('be.visible');
    });
    
    it('C-01: Agregar productos al carrito desde Products', () => {
      cy.addProductToCart('Sauce Labs Backpack');
      cy.get('.shopping_cart_badge').should('contain', '1');
    });
    
    it('C-02: Agregar productos al carrito desde detalle', () => {
        cy.get('.inventory_item').contains('Sauce Labs Bike Light').click();
        cy.get('.inventory_details_desc_container').find('[data-test^="add-to-cart"]').click();
        cy.get('.shopping_cart_badge', { timeout: 10000 }).should('contain', '1');
    });
    
    it('C-03: Eliminar producto del carrito', () => {

        cy.addProductToCart('Sauce Labs Backpack');
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.url().should('include', '/cart.html');
        cy.get('.cart_item').should('contain', 'Sauce Labs Backpack');
        cy.removeProductFromCart('Sauce Labs Backpack');
        cy.get('.cart_item').should('not.exist');
    });
  
    it('C-04: Modificar la cantidad de un producto en el carrito', () => {
      cy.addProductToCart('Sauce Labs Backpack');
      cy.get('[data-test="shopping-cart-link"]').click();
      cy.url().should('include', '/cart.html');
      cy.get('.cart_item').should('contain', 'Sauce Labs Backpack');
      cy.get('.cart_item').contains('Sauce Labs Backpack').parents('.cart_item')
        .find('.cart_quantity')
        .should('exist') 
        .and('be.enabled') 
        .clear()
        .type('3');
    });

    it('C-05: Vaciar carrito', () => { 
        cy.addProductToCart('Sauce Labs Backpack');
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.url().should('include', '/cart.html');
        cy.get('.cart_item').should('contain', 'Sauce Labs Backpack');
        cy.removeProductFromCart('Sauce Labs Backpack');
        cy.get('.cart_item').should('not.exist');
    });

   
    it('C-06: Avanzar al pago', () => {
        cy.addProductToCart('Sauce Labs Backpack');
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.url().should('include', '/cart.html');
        cy.get('.cart_item').should('contain', 'Sauce Labs Backpack');
        cy.get('[data-test="checkout"]').should('be.enabled').click();
        cy.url().should('include', '/checkout-step-one.html');
    });
  
    it('C-07: No avanzar al pago con carrito vacío', () => {
        cy.get('[data-test="shopping-cart-link"]').click();
        cy.url().should('include', '/cart.html');
        cy.get('[data-test="checkout"]').click();
        cy.get('.error-message-container').should('contain', 'Your cart is empty');
    });
    
  });