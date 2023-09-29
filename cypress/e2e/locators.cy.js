/// <reference types="cypress" />

describe("Find or Get Elements by Using Different Locators", () => {
    beforeEach(() => {
        // run before each test case, beforeMethod in TestNG
        cy.clearCookies();
        cy.visit('/login');
      })

      // Open Cypress | Set ".only"
      xit('Check different locators strategies', () => {
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
      it('Check finding elements by traveling through DOM', () => {
        // travel to find the login button: locate username box- go to parent form -then find button
        cy.get('input[name="username"]').parents('form').find('button').should('contain', 'Login').click();

      })
      it.only('Check Different Type of Assertions'), () => {
        // Cypress itself bundles assertions provided by Chai, Sinon and jQuery libraries
        // Should Assertion: does the assertion directly on the object itself
        cy.get('#wooden_spoon')
        .should('contain', 'Login')
        .and('have.class','btn btn-primary');
        // expect assertion: creates a subject of our test, then you implement different actions
        cy.get('#wooden_spoon').then((buttonElement) => {
            expect(buttonElement).to.have.text('Login');
            expect(buttonElement).to.have.class('btn btn-primary');
        })


      }  
      })