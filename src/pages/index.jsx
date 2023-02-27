import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Layouts
import { Base } from "@layouts";

// Pages
import Home from "./Home.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Base>
        <Home />
      </Base>
    ),
  },
]);

export default router;
