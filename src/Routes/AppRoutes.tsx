import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Main_layout/MainLayout";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Product from "@/Pages/Product";
import Portfolio from "../Pages/Portfolio";
import Contact from "../Pages/Contact";
import Career from "@/Pages/Career";
import Blog from "@/Pages/Blog";
import SoftwareDevelopment from "@/Pages/SoftwareDevelopment";
import WebDevelopment from "@/Pages/WebDevelopment";
import UIUXDesign from "@/Pages/UIUXDesign";
import AISolutions from "@/Pages/AISolutions";
import MobileAppDevelopment from "@/Pages/MobileAppDevelopment";
import PerformanceMarketing from "@/Pages/PerformanceMarketing";
import SaaSDevelopment from "@/Pages/SaaSDevelopment";
import DigitalMarketing from "@/Pages/DigitalMarketing";

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

      {
        path: "Career",
        element: <Career />,
      },

      {
        path: "Blog",
        element: <Blog />,
      },

      {
        path: "SoftwareDevelopment",
        element: <SoftwareDevelopment />,
      },
      {
        path: "WebDevelopment",
        element: <WebDevelopment />,
      },

      {
        path: "UIUXDesign",
        element: <UIUXDesign />,
      },

      {
        path: "MobileAppDevelopment",
        element: <MobileAppDevelopment />,
      },

      {
        path: "PerformanceMarketing",
        element: <PerformanceMarketing />,
      },

      {
        path: "SaaSDevelopment",
        element: <SaaSDevelopment />,
      },

      {
        path: "AISolutions",
        element: <AISolutions />,
      },

      {
        path: "DigitalMarketing",
        element: <DigitalMarketing />,
      },


    ],
  },
]);