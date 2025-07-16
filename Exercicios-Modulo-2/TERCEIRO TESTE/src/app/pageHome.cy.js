import React from 'react'
import Home from './page'

describe('<Home />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home name="GABRIEL"/>)
    cy.get('#name').should('have.text', 'Olá GABRIEL!')
  })
})