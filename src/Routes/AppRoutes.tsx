import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Main_layout/MainLayout";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Product from "@/Pages/Product";
import Portfolio from "../Pages/Portfolio";
import Contact from "../Pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: "About",
        element: <About />,
      },

      {
        path: "Product",
        element: <Product />,
 
      },

      {
        path: "Portfolio",
        element: <Portfolio />,
      },

      {
        path: "Contact",
        element: <Contact />,
      },
    ],
  },
]);