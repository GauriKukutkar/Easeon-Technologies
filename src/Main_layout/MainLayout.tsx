import { Outlet } from "react-router-dom";

import Header from "../Components/Layout/Header";
import Footer from "../Components/Layout/Footer";
import ScrollToTop from "../Components/common/ScrollToTop";

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />

      <Header />

      <main className="pt-20">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;