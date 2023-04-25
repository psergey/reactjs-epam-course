import { movies } from '../fixtures/test';

const stylePrefix = 'MovieDetails_';

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shows list of movies', () => {
    cy.intercept('GET', '/movies*', movies).as('getMovies');

    cy.findAllByTestId('genre-link').find('span[class*=selected]').should('have.length', 1);

    cy.findAllByTestId('genre-link').find('span[class*=selected]').first().parent().should('have.text', 'All');
    cy.findByTestId('movie-count').should('have.text', '231 movies found');
  });

  it('show movie details', () => {
    cy.intercept('GET', '/movies*', movies).as('getMovies');

    cy.findAllByTestId('movie-item').first().click();

    cy.findByTestId('movie-details').as('details');

    cy.get('@details').find('img');
    cy.get('@details').find(`span[class*=${stylePrefix}name]`).should('have.text', 'Zootopia');
    cy.get('@details').find(`div[class*=${stylePrefix}rating]`).should('have.text', '7.7');
    cy.get('@details').find(`div[class*=${stylePrefix}time]`).should('contains.text', '2016');
    cy.get('@details').find(`div[class*=${stylePrefix}time]`).should('contains.text', '1h 48m');
  });

  // it('counter updates value when increase or decrease', () => {
  //   cy.get('input:read-only').then($input => {
  //     const inputValue = +$input.val();

  //     cy.contains('Increase').click();
  //     cy.get('input:read-only').should('have.value', inputValue + 1);

  //     cy.contains('Decrease').click();
  //     cy.get('input:read-only').should('have.value', inputValue);
  //   });
  // });

  // it('genre selector highlights selected link', () => {
  //   cy.findAllByTestId('genre-link').find('span[class*=selected]').should('have.length', 1);
  //   cy.findAllByTestId('genre-link')
  //     .find('span[class*=selected]')
  //     .first()
  //     .parent()
  //     .then($button => {
  //       const initialSelection = $button.text();
  //       const element = cy.findAllByTestId('genre-link').find('span').not('span[class*=selected]').first().parent();

  //       element.click();

  //       element.should('not.have.text', initialSelection);
  //     });
  // });
});
