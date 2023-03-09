import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { useNavigate, useParams } from "react-router-dom";
import Episode from "../Episode.component";
import { usePodcast } from "../..";

jest.mock("react-router-dom", () => ({
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

jest.mock("../../hooks", () => ({
  usePodcast: jest.fn(),
}));

describe("Episode component", () => {
  beforeEach(() => {
    useParams.mockReturnValue({
      podcastId: "1",
      episodeId: "1",
    });
  });

  it("renders episode details", async () => {
    usePodcast.mockReturnValue({
      episodes: [
        {
          id: "1",
          title: "Episode 1",
          description: "<p>Description 1</p>",
          episodeUrl: "http://example.com/episode1.mp3",
        },
        {
          id: "2",
          title: "Episode 2",
          description: "<p>Description 2</p>",
          episodeUrl: "http://example.com/episode2.mp3",
        },
      ],
      loading: false,
    });

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
