import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import ListingPageComponent from "../";
import { BrowserRouter } from "react-router-dom";

test("it should render without errors", () => {
  render(<ListingPageComponent />);
});

test("it should fetch and display characters on scroll", async () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <ListingPageComponent />
    </BrowserRouter>
  );
  const listContainer = getByTestId("list-container");
  expect(listContainer).toBeInTheDocument();

  const initialCharacterCount = listContainer.children.length;

  fireEvent.scroll(listContainer);

  await waitFor(() => {
    const updatedCharacterCount = listContainer.children.length;
    expect(updatedCharacterCount).toBeGreaterThan(initialCharacterCount);
  });
});
