import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header.component";

jest.mock("../Header.hook", () => ({
  __esModule: true,
  default: () => ({ loading: true }),
}));

describe("Header", () => {
  it("renders the brand name", () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const brand = getByText("Podcaster");
    expect(brand).toBeInTheDocument();
  });

  it("renders a loading spinner when loading is true", () => {
    jest.mock("../Header.hook", () => ({
      __esModule: true,
      default: () => ({ loading: true }),
    }));
    const { getByRole } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    const spinner = getByRole("progressbar");
    expect(spinner).toBeInTheDocument();
  });
});
