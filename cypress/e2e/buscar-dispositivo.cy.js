//const { describe } = require("mocha");

//const { expect } = require("chai");

//const { expect } = require("chai");

//const { beforeEach } = require("mocha")

describe("Buscar dispositivos", ()=> {

    it("Buscar dispositivo específicos", ()=> {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/7',           
            
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.id).to.equal('7');
        });
    });

    it("Buscar dispositivo inexistente", ()=> {
        cy.request({
            method: 'GET',
            url: 'https://api.restful-api.dev/objects/NÃOEXISTE',
            failOnStatusCode: false 
          }).then((response) => {
            expect(response.status).to.equal(404);
            expect(response.body.error).to.equal('Oject with id=NÃOEXISTE was not found.');
        });
      
    });
});