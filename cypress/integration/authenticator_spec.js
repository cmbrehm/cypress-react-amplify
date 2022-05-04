// authenticator_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Authenticator:', function() {
  // Step 1: setup the application state
  beforeEach(function() {
    cy.visit('/');
  });

  describe('Sign In:', () => {
    it('allows a user to signin', () => {
      // Step 2: Take an action (Sign in)
      cy.get(selectors.usernameInput).type("clay");
      cy.get(selectors.signInPasswordInput).type("clayclay");
      cy.get(selectors.signInButton).contains('Sign in').click();
      // Step 3: Make an assertion (Check for sign-out text)
      cy.get(selectors.signOutButton).contains('Sign out');
    });
  });

});
export const selectors = {
  // Auth component classes
  usernameInput: 'input[name="username"]',
  signInPasswordInput: 'input[type="password"]',
  signInButton: '[data-variation="primary"]',
  signOutButton: '#signout'
}
