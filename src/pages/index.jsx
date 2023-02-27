import React from "react";

import { createBrowserRouter } from "react-router-dom";

import Home from "./Home.page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default router;
