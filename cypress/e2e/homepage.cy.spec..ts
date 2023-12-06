describe("Home page test", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");
  });

  it("opens the blog page", () => {
    cy.visit("http://localhost:3000/ui/pages/blog");
  });

  it("opens the about page", () => {
    cy.visit("http://localhost:3000/ui/pages/about");
  });

  it("opens the contact page", () => {
    cy.visit("http://localhost:3000/ui/pages/contact");
  });
});
