import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import About from "./pages/about";
import Contact from "./pages/contact";
import Project from "./pages/projects";
import Work from "./pages/work";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "projects",
    element: <Project />
  },
  {
    path: "work",
    element: <Work />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
