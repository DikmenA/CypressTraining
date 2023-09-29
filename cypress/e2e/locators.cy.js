/// <reference types="cypress" />

describe("Find or Get Elements by Using Different Locators", () => {
    beforeEach(() => {
        // run before each test case, beforeMethod in TestNG
        cy.clearCookies();
        cy.visit('/login');
      })

      // Open Cypress | Set ".only"
      it('Check different locators strategies', () => {
        // By CSS locator
        cy.get("input[name='username']").type("CydeoStudent");  // every statement creates an object to be interactived,, and next command makes operation to the ovject created at the previous statement.
        // attribute name and value 
        // cy.get(':nth-child(1) > .large-6 > input').clear();  // clear what is typed
        cy.get("[type='text']").clear();

        // tagName
        cy.get("input").each((item, index, list) => {
            // assert the lengtht of the list is 2
            expect(list).to.have.length(2);
            expect(item).to.have.attr("type");

        })
        // by attribute Name
        cy.get('[type]');

        // by className
        cy.get('.btn.btn-primary');  // class attribute den önce nokta koy ve boşluk varsa sil ve nokta koy

        // By id/*  */
        cy.get('#wooden_spoon');   // id value'dan önce # konulur.

        // if I want to use text: no xpath in cypress, but it is still possible with a different approcach ---> Login is text and button is tag name.
        cy.get('button').should('contain','Login').click();
      })
    })