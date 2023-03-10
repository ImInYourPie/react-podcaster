import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Layouts
import { Base, LeftPanel } from "@layouts";

// Pages
import Home from "./Home.page";
import Podcast from "./Podcast.page";
import Episode from "./Episode.page";

// Context
import { PodcastsProvider } from "@features/podcasts";
import { PodcastProvider } from "@features/podcast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
    children: [
      {
        index: true,
        element: (
          <PodcastsProvider>
            <Home />
          </PodcastsProvider>
        ),
      },
      {
        path: "podcast/:podcastId",
        element: (
          <PodcastProvider>
            <LeftPanel />
          </PodcastProvider>
        ),
        children: [
          {
            index: true,
            element: <Podcast />,
          },
          {
            path: "episode/:episodeId",
            element: <Episode />,
          },
        ],
      },
    ],
  },
]);

export default router;
