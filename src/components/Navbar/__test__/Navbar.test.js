import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Navbar } from "components/Navbar/";

test("renders Navbar component", () => {
  const setLight = jest.fn();

  const { getByText, getByTestId } = render(<Navbar setLight={setLight} />);

  const titleElement = getByText("Rick And Morty Characters");
  const toggleButton = getByText("Toggle Theme");

  expect(titleElement).toBeInTheDocument();
  expect(toggleButton).toBeInTheDocument();

  fireEvent.click(toggleButton);

  expect(setLight).toHaveBeenCalled();
});
