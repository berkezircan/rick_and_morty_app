import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Navbar } from "components/Navbar/";

test("renders Navbar component", () => {
  const setLight = jest.fn(); // Mock the function passed as a prop

  const { getByText, getByTestId } = render(<Navbar setLight={setLight} />);

  // Ensure that the component renders properly
  const titleElement = getByText("Rick And Morty Characters");
  const toggleButton = getByText("Toggle Theme");

  expect(titleElement).toBeInTheDocument();
  expect(toggleButton).toBeInTheDocument();

  // Simulate a click event on the "Toggle Theme" button
  fireEvent.click(toggleButton);

  // Check if the setLight function has been called when the button is clicked
  expect(setLight).toHaveBeenCalled();
});
