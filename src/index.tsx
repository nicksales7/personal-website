import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./about";
import Contact from "./contact";
import Project from "./projects";
import Work from "./work";
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
