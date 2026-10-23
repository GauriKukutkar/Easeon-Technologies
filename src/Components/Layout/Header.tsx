import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import DesktopNav from "../Layout/DesktopNav"
import MobileMenu from "../Layout/MobileMenu";
import logo from "../../assets/Logos/Easeon_logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <div
            className={`flex h-20 items-center justify-between rounded-2xl px-6 transition-all duration-500 ${
              isScrolled
                ? "border border-slate-200 bg-white/80 backdrop-blur-2xl shadow-xl"
                : "border border-slate-200/60 bg-white/90 backdrop-blur-xl shadow-sm"
            }`}
          >
            {/* Logo */}

           <NavLink
  to="/"
  className="flex items-center gap-3"
>
  <img
    src={logo}
    alt="Easeon Technologies"
    className="h-14 w-auto object-contain"
  />

  <div className="flex flex-col leading-none">
    <span className="text-xl font-bold tracking-tight text-slate-900">
      Easeon
    </span>

    <span className="text-sm font-medium uppercase tracking-[0.25em] text-[#004895]">
      Technologies
    </span>
  </div>
</NavLink>

            {/* Desktop Navigation */}

            <DesktopNav />

            {/* Desktop CTA */}

            <NavLink
              to="/contact"
              className="hidden lg:flex items-center rounded-full bg-gradient-to-r from-[#00A8FF] to-[#005CFF] px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Let's Talk
            </NavLink>

            {/* Mobile Button */}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 transition-all duration-300 hover:bg-slate-100 lg:hidden"
            >
              <motion.div
                animate={{
                  rotate: mobileMenuOpen ? 90 : 0,
                }}
                transition={{
                  duration: 0.25,
                }}
              >
                <Menu size={24} />
              </motion.div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;