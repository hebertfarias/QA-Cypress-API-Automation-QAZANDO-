describe("Cadastrar dispositivos", ()=> {

    it("Cadastro de dispositivo", ()=> {
        cy.request({
            method: 'POST',
            url: 'https://api.restful-api.dev/objects',
            body: {
                name: "Apple MacBook Pro 16",
                data: {
                   "year": 2025,
                   "price": 18849.99,
                   "CPU model": "Intel Core i9",
                   "Hard disk size": "1 TB"
                },
             },
            failOnStatusCode: false 
          }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.name).to.equal('Apple MacBook Pro 16');
        });
      
    });
});