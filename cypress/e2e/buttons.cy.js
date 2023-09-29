describe('Context: My First Tests', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit('/multiple_buttons');
    })
    it('Check different Button Actions',() => {
        // select a button with text
        cy.contains('Button 2').should('be.visible').click();
        cy.contains('Clicked on button two!').should('be.visible');
    })

})