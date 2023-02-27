import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Layouts
import { Base } from "@layouts";

// Pages
import Home from "./Home.page";

// Context
import { PodcastsProvider } from "@features/podcasts";

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
    ],
  },
  {
    path: "/podcast/:podcastId",
    errorElement: <div>Oops!</div>,
    element: (
      <Base>
        <PodcastsProvider>
          <Home />
        </PodcastsProvider>
      </Base>
    ),
  },
]);

export default router;
