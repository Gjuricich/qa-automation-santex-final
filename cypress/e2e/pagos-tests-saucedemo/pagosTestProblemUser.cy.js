describe("Test Cases Pagos - Problem User", { testIsolation: true }, () => {

    const user = {
        firstName: "Jorge",
        lastName: "Lopez",
        postalCode: "1200"
    };

    const informationForm = () => {
        cy.get("[data-test=firstName]").type(user.firstName);
        cy.get("[data-test=lastName]").type(user.lastName);
        cy.get("[data-test=postalCode]").type(user.postalCode);
        cy.get("[data-test=continue]").click();
    };

    beforeEach(() => {
      cy.visit('https://www.saucedemo.com');
      cy.fixture("users").then((users) => {
        cy.login(users.problemUser.username, users.problemUser.password);
      });
      cy.url().should('include', '/inventory.html');
      cy.get('.inventory_list', { timeout: 10000 }).should('be.visible');
      cy.addProductToCart('Sauce Labs Backpack');
      cy.get('[data-test="shopping-cart-link"]').click();
      cy.url().should('include', '/cart.html');
      cy.get('[data-test="checkout"]').should('be.enabled').click();
    });

   
    it('P-01: Ingresar información en pagos happy path - usuario standard_user', () => {
        informationForm();
        cy.url().should("include", "/checkout-step-two.html");
    });

    it('P-02: Ingresar información en pagos campos vacíos - usuario standard_user', () => {
        cy.get("[data-test=continue]").click();
        cy.get("[data-test=error]").should("contain", "Error: First Name is required");
    });

    it("P-03: Verificar que el precio más impuestos coincidan con el total", () => {
        informationForm();
        cy.get(".inventory_item_price").first().invoke("text")
          .then((productPriceText) => {
            const productPrice = parseFloat(productPriceText.replace("$", "").trim());
            cy.get(".summary_tax_label").invoke("text").then((taxText) => {
             const taxAmount = parseFloat(taxText.replace("Tax: $", "").trim());
              cy.get(".summary_total_label").invoke("text").then((totalText) => {
                  const totalAmount = parseFloat(totalText.replace("Total: $", "").trim());
                  const expectedTotal = productPrice + taxAmount;
                  expect(expectedTotal).to.eq(totalAmount);
                });
            });
          });
      });

      it("P-04: Verificar que el pago fue exitoso y realizar logout", () => {
        informationForm();
        cy.get("[data-test=finish]").click();
        cy.url().should("include", "/checkout-complete.html");
        cy.get("#react-burger-menu-btn").click();
        cy.get("#logout_sidebar_link").click();
        cy.url().should("eq", "https://www.saucedemo.com/");
      });
    
  });