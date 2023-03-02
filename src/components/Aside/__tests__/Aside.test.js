import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { usePodcast } from "@features/podcast";
import Aside from "../Aside.component";

jest.mock("@features/podcast");

describe("Aside component", () => {
  it("renders the podcast title", () => {
    const podcast = {
      id: "123",
      title: "Test Podcast",
      author: "Test Author",
      description: "Test Description",
      image: "https://test.com/podcast.jpg",
    };
    usePodcast.mockReturnValue({ podcast, loading: false });

    render(
      <BrowserRouter>
        <Aside />
      </BrowserRouter>
    );

    const titleElement = screen.getByText("Test Podcast");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the podcast author", () => {
    const podcast = {
      id: "123",
      title: "Test Podcast",
      author: "Test Author",
      description: "Test Description",
      image: "https://test.com/podcast.jpg",
    };
    usePodcast.mockReturnValue({ podcast, loading: false });

    render(
      <BrowserRouter>
        <Aside />
      </BrowserRouter>
    );

    const authorElement = screen.getByText("Test Author");
    expect(authorElement).toBeInTheDocument();
  });

  it("renders the podcast description", () => {
    const podcast = {
      id: "123",
      title: "Test Podcast",
      author: "Test Author",
      description: "<p>Test Description</p>",
      image: "https://test.com/podcast.jpg",
    };
    usePodcast.mockReturnValue({ podcast, loading: false });

    render(
      <BrowserRouter>
        <Aside />
      </BrowserRouter>
    );

    const descriptionElement = screen.getByText("Test Description");
    expect(descriptionElement).toBeInTheDocument();
  });
});
