import { render, screen } from "@testing-library/react";
import { UserStatus } from "..";

describe("UserStatus Component", () => {
  it("renders UserStatus component with different statuses", () => {
    const testProps = {
      status: "Alive",
    };
    render(<UserStatus {...testProps} />);
    const aliveElement = screen.getByText("Alive");
    const greenCircle = screen.getByTestId("green-circle");

    expect(aliveElement).toBeInTheDocument();
    expect(greenCircle).toBeInTheDocument();
  });

  it('renders UserStatus component with "Dead" status', () => {
    const testProps = {
      status: "Dead",
    };
    render(<UserStatus {...testProps} />);
    const deadElement = screen.getByText("Dead");
    const redCircle = screen.getByTestId("red-circle");

    expect(deadElement).toBeInTheDocument();
    expect(redCircle).toBeInTheDocument();
  });

  it('renders UserStatus component with "Unknown" status', () => {
    const testProps = {
      status: "Unknown",
    };
    render(<UserStatus {...testProps} />);
    const unknownElement = screen.getByText("Unknown");
    const grayCircle = screen.getByTestId("gray-circle");

    expect(unknownElement).toBeInTheDocument();
    expect(grayCircle).toBeInTheDocument();
  });
});
