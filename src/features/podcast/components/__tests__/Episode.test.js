import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Episode from "../Episode.component";
import { usePodcast } from "../..";

import paramsMock from "./params.mock.json";
import podcastMock from "./podcast.mock.json";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

jest.mock("../../hooks", () => ({
  usePodcast: jest.fn(),
}));

describe("Episode component", () => {
  beforeEach(() => {
    useParams.mockReturnValue(paramsMock);
  });

  it("renders episode details", async () => {
    usePodcast.mockReturnValue(podcastMock);

    render(<Episode />);

    await waitFor(() => {
      expect(screen.getByText("Episode 1")).toBeInTheDocument();
      expect(
        screen.getByText("Description 1", { selector: "p" })
      ).toBeInTheDocument();
      expect(screen.getByRole("audio")).toBeInTheDocument();
    });
  });

  it("navigates to podcast page if episode is not found", async () => {
    usePodcast.mockReturnValue({
      episodes: [],
      loading: false,
    });

    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    render(<Episode />);

    await waitFor(() => {
      expect(navigate).toHaveBeenCalledWith("/podcast/1");
    });
  });
});
