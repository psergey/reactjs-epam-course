describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('counter updates value when increase or decrease', () => {
    cy.get('input:read-only').then($input => {
      const inputValue = +$input.val();

      cy.contains('Increase').click();
      cy.get('input:read-only').should('have.value', inputValue + 1);

      cy.contains('Decrease').click();
      cy.get('input:read-only').should('have.value', inputValue);
    });
  });

  it('genre selector highlights selected link', () => {
    cy.findAllByTestId('genre-link').find('span[class*=selected]').should('have.length', 1);
    cy.findAllByTestId('genre-link')
      .find('span[class*=selected]')
      .first()
      .parent()
      .then($button => {
        const initialSelection = $button.text();
        const element = cy.findAllByTestId('genre-link').find('span').not('span[class*=selected]').first().parent();

        element.click();

        element.should('not.have.text', initialSelection);
      });
  });
});
