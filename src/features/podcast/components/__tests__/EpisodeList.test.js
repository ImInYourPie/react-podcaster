import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import EpisodesList from "../EpisodesList.component";
import { usePodcast } from "../../hooks";

import podcastMock from "./podcast.mock.json";

jest.mock("../../hooks", () => ({
  usePodcast: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(),
  useNavigate: jest.fn(),
}));

describe("EpisodesList", () => {
  beforeEach(() => {
    usePodcast.mockReturnValue(podcastMock);
    const navigate = jest.fn();
    useNavigate.mockReturnValue(navigate);

    render(
      <BrowserRouter>
        <EpisodesList />
      </BrowserRouter>
    );
  });

  it("renders episode list table with correct headings", async () => {
    await waitFor(() => {
      const headings = screen
        .getAllByRole("columnheader")
        .map((h) => h.textContent);
      expect(headings).toEqual(["Title", "Date", "Duration"]);
    });
  });

  it("renders episode titles as links to individual episode pages", () => {
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute("href", "/episode/1");
    expect(links[0]).toHaveTextContent("Episode 1");
    expect(links[1]).toHaveAttribute("href", "/episode/2");
    expect(links[1]).toHaveTextContent("Episode 2");
  });

  it("renders episode list with correct data", async () => {
    const rows = screen.getAllByTestId("episode-row");
    expect(rows).toHaveLength(2);

    const title1 = screen.getAllByTestId("row-title")[0];
    const date1 = screen.getAllByTestId("row-date")[0];
    const duration1 = screen.getAllByTestId("row-duration")[0];
    expect(title1).toHaveTextContent("Episode 1");
    expect(date1).toHaveTextContent("2022-01-01");
    expect(duration1).toHaveTextContent("00:30:00");

    const title2 = screen.getAllByTestId("row-title")[1];
    const date2 = screen.getAllByTestId("row-date")[1];
    const duration2 = screen.getAllByTestId("row-duration")[1];
    expect(title2).toHaveTextContent("Episode 2");
    expect(date2).toHaveTextContent("2022-01-02");
    expect(duration2).toHaveTextContent("00:45:00");
  });
});
