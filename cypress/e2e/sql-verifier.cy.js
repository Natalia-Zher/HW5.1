describe("SQL Verifier Website", () => {
  it("should load the SQL Verifier page successfully", () => {
    // Переходим на страницу SQL Verifier
    cy.visit(
      "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc"
    );

    // Ждем загрузки страницы и проверяем, что она загрузилась успешно
    cy.url().should("include", "sqlverifier-live-6e21ca0ed768.herokuapp.com");

    // Проверяем, что страница полностью загрузилась
    cy.get("body").should("be.visible");

    // Проверяем, что HTML содержит базовую структуру
    cy.get("html").should("exist");

    // Дополнительная проверка - что страница имеет title
    cy.title().should("not.be.empty");
  });
});
