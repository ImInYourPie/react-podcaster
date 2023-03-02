import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Base from "../Base.layout";
import { LoadingProvider } from "@context";

jest.mock("@components/Header/Header.hook", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({ loading: false }),
}));

describe("Base", () => {
  it("renders Header component with brand", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Base />
      </BrowserRouter>
    );

    const header = getByTestId("header");

    expect(header).toBeInTheDocument();
    expect(header).toContainElement(document.querySelector("#brand"));
  });
});
