describe("API Test Suite", () => {
    it('Should make and API GET request and verify response', () => {
        cy.request('GET', 'https://jsonplaceholder.cypress.io/comments')
        .then((response) => {
            expect(response.status).to.eq(200);

            expect(response.body[0]).to.have.property('postId');
            expect(response.body[0]).to.have.property('id');
            expect(response.body[0]).to.have.property('name');
            expect(response.body[0]).to.have.property('email');
            expect(response.body[0]).to.have.property('body');
            
            expect(response.body.length).to.eq(500);
        })
    })
})