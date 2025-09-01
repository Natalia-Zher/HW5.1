describe("SQL Verifier Website", () => {
  it("should load the SQL Verifier page successfully", () => {
    // Переходим на страницу SQL Verifier
    cy.visit("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/");

    // Ждем загрузки страницы и проверяем, что она загрузилась успешно
    cy.url().should("include", "sqlverifier-live-6e21ca0ed768.herokuapp.com");
    // Проверка что страница полностью загрузилась
    cy.get("body").should("be.visible");
  });
});
