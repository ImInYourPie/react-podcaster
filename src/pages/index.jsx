import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Layouts
import { Base, LeftPanel } from "@layouts";

// Pages
import Home from "./Home.page";
import Podcast from "./Podcast.page";

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
        path: "/podcast/:podcastId",
        element: <LeftPanel />,
        children: [
          {
            index: true,
            element: (
              <PodcastProvider>
                <Podcast />
              </PodcastProvider>
            ),
          },
        ],
      },
    ],
  },
]);

export default router;
