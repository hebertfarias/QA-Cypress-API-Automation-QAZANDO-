describe("Buscar dispositivos", () => {
  it("retorna um dispositivo existente", () => {
    cy.request("GET", "https://api.restful-api.dev/objects/7").then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("id", "7");
      expect(response.body).to.have.property("name").and.be.a("string");
    });
  });

  it("retorna 404 para um dispositivo inexistente", () => {
    cy.request({
      method: "GET",
      url: "https://api.restful-api.dev/objects/NÃOEXISTE",
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(404);
      expect(response.body.error).to.include("NÃOEXISTE");
    });
  });
});
