// before( () => {
//   cy.fixture('example.json').as('test_data')
// }

describe('template spec', () => {

beforeEach(() => {
  // cy.fixture('example.json').then((data) => {
  //   cy.log(data.url);
  // })

  cy.visit('https://example.cypress.io');
  cy.url().should('eq', 'https://example.cypress.io/')
})

  it('passes', () => {
    cy.visit('https://example.cypress.io') //{url}

    // cy.fixture('example.json').then((data) => {
    //   cy.log(data.url)
    // })

    cy.contains('Kitchen Sink')
    // cy.contains('Querying').click()

    cy.contains('get').click()
    cy.get('#query-btn')
    // cy.get('div').eq(1)
    cy.get('.query-list')
    .contains('bananas').should('have.class', 'third')

    cy.get('.query-form').within(() => {
      cy.get('input:first').should('have.attr', 'placeholder', 'Email')
      cy.get('input:last').should('have.attr', 'placeholder', 'Password')
    })
  })

  // describe("Homepage", () => {
  //   it("should navigate to the window section when clicked", () => {
  //     cy.fixture('urls').then((urls) => {
  //       const windowPageUrl = urls.windowPageUrl;

  //       cy.visit("https://example.cypress.io/");

  //       cy.contains("Window").click();

  //       cy.url().should("include", windowPageUrl);
  //     });
  //   });
  // });

  // describe("My Test Suite", () => {
  //   it('should retrieve all links including paraentheses', () => {
  //     cy.visit("https://example.com");
  //     cy.getLinksIncludingParantheses();
  //   })
  // })

  describe("My Test Suite", () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);

    });

// describe('My test Suite', () => {

//   let tokens;

//   beforeEach(() => {
//     cy.fixture('tokens').then((data) => {
//       tokens = data;
//     })
//   })

//   beforeEach(() => {
//     cy.setCookie('token1', 'value1');
//     cy.setCookie('token2', 'value2');
//     cy.setCookie('toaken3', 'value3');

//     cy.visit('https://example.cypress,io/');

//     cy.getCookie('token1').should('exist');
//     cy.getCookie('token2').should('exist');
//     cy.getCookie('token3').should('exist');
//   })

  // it('should test something', () => {

  // })

//   it('should clear cookies after deletion', () => {
//     cy.clearCookies();

//     cy.getCookie('token1').should('not.exist');
//     cy.getCookie('token2').should('not.exist');
//     cy.getCookie('token3').should('not.exist');
//   })
// })


  })
})