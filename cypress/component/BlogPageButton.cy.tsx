import { Button } from "@/app/ui/components/blog/Button";

describe("BlogPageButton.cy.tsx", () => {
  it("Renders the button", () => {
    cy.mount(<Button text="exampleText" />);
  });
  it("Renders the button with the correct text", () => {
    cy.mount(<Button text="exampleText" />);

    cy.contains("exampleText");
  });

  it("Opens modal when clicked", () => {
    cy.mount(<Button text="Add post" />);

    cy.get("button").click();
    cy.contains("Add post");
  });
});
