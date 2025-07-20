import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AboutMe from "../src/pages/AboutMe.jsx";
import Projects from "../src/pages/Projects.jsx";
import ContactMe from "../src/pages/ContactMe.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/aboutme", element: <AboutMe /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contactme", element: <ContactMe /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);
