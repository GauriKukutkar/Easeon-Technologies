import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  ChevronDown,
  ArrowRight,
  X,
} from "lucide-react";

import { navItems, solutions } from "./navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  const [openSolutions, setOpenSolutions] = useState(false);

  return (
    <AnimatePresence>

      {open && (
        <>

          {/* Overlay */}

          <motion.div
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer */}

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-sm flex-col bg-white shadow-2xl lg:hidden"
          >

            {/* Header */}

            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

              <NavLink
                to="/"
                onClick={onClose}
              >
                <img
                  src="/logo.png"
                  alt="Easeon Technologies"
                  className="h-10"
                />
              </NavLink>

              <button
                onClick={onClose}
                className="rounded-xl p-2 transition hover:bg-slate-100"
              >
                <X size={24} />
              </button>

            </div>

            {/* Navigation */}

            <div className="flex-1 overflow-y-auto px-6 py-6">

              <div className="space-y-2">

                {navItems.slice(0, 2).map((item) => (

                  <NavLink
                    key={item.title}
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-[15px] font-medium transition ${
                        isActive
                          ? "bg-blue-50 text-[#007BFF]"
                          : "text-slate-700 hover:bg-slate-50"
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>

                ))}

                {/* Solutions */}

                <button
                  onClick={() => setOpenSolutions(!openSolutions)}
                  className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[15px] font-medium text-slate-700 transition hover:bg-slate-50"
                >

                  Solutions

                  <ChevronDown
                    className={`transition ${
                      openSolutions ? "rotate-180" : ""
                    }`}
                  />

                </button>

                <AnimatePresence>

                  {openSolutions && (

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      className="overflow-hidden"
                    >

                      <div className="ml-4 mt-2 border-l border-slate-200 pl-4">

                        {solutions.map((item) => {

                          const Icon = item.icon;

                          return (

                            <NavLink
                              key={item.title}
                              to={item.path}
                              onClick={onClose}
                              className="group flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-blue-50"
                            >

                              <div className="rounded-lg bg-blue-50 p-2 text-[#007BFF]">

                                <Icon size={18} />

                              </div>

                              <div className="flex-1">

                                <h4 className="text-sm font-semibold text-slate-800">

                                  {item.title}

                                </h4>

                                <p className="text-xs text-slate-500">

                                  {item.desc}

                                </p>

                              </div>

                              <ArrowRight
                                size={16}
                                className="opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100"
                              />

                            </NavLink>

                          );

                        })}

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

                {navItems.slice(2).map((item) => (

                  <NavLink
                    key={item.title}
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-[15px] font-medium transition ${
                        isActive
                          ? "bg-blue-50 text-[#007BFF]"
                          : "text-slate-700 hover:bg-slate-50"
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>

                ))}

              </div>

            </div>

            {/* Bottom CTA */}

            <div className="border-t border-slate-200 p-6">

              <NavLink
                to="/contact"
                onClick={onClose}
                className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#00A8FF] to-[#005CFF] px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Let's Talk
              </NavLink>

            </div>

          </motion.aside>

        </>
      )}

    </AnimatePresence>
  );
};

export default MobileMenu;