import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"

import Favorites from "../pages/Favourite";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/favourite",
    element: <Favorites/>,
  },
]);