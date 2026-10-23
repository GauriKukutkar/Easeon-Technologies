import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import MegaMenu from "../Layout/MegaMenu";
import { navItems } from "./navigation";

const DesktopNav = () => {
  return (
    <nav className="hidden lg:flex items-center gap-10">

      {navItems.slice(0, 2).map((item) => (
        <NavLink
          key={item.title}
          to={item.path}
          className={({ isActive }) =>
            `relative text-[15px] font-medium transition ${
              isActive
                ? "text-[#007BFF]"
                : "text-slate-700 hover:text-[#007BFF]"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {item.title}

              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#007BFF]"
                />
              )}
            </>
          )}
        </NavLink>
      ))}

      {/* Solutions Mega Menu */}

      <MegaMenu />

      {navItems.slice(2).map((item) => (
        <NavLink
          key={item.title}
          to={item.path}
          className={({ isActive }) =>
            `relative text-[15px] font-medium transition ${
              isActive
                ? "text-[#007BFF]"
                : "text-slate-700 hover:text-[#007BFF]"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {item.title}

              {isActive && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-[#007BFF]"
                />
              )}
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default DesktopNav;