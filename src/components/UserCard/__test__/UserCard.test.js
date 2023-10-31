import React from "react";
import { render } from "@testing-library/react";
import { UserCard } from "..";
import { BrowserRouter } from "react-router-dom";

const mockItem = {
  id: 1,
  name: "Test User",
  image: "test-image-url",
  status: "Alive",
  gender: "Male",
};

test("UserCard renders correctly", () => {
  const { getByText, getByAltText } = render(
    <BrowserRouter>
      <UserCard item={mockItem} />
    </BrowserRouter>
  );

  expect(getByText("Test User")).toBeInTheDocument();
  expect(getByText("Alive")).toBeInTheDocument();
  expect(getByText("Male")).toBeInTheDocument();
});
