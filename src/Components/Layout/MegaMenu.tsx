import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

import { solutions } from "./navigation";

const MegaMenu = () => {
  const [open, setOpen] = useState(false);

  const timeoutRef = useRef<number | null>(null);

  const handleEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setOpen(false);
    }, 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Button */}

      <button className="flex items-center gap-2 text-[15px] font-medium text-slate-700 transition hover:text-[#007BFF]">
        Solutions

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 15,
              scale: 0.98,
            }}
            transition={{
              duration: 0.25,
            }}
            className="absolute left-1/2 top-[calc(100%+18px)] z-50 -translate-x-1/2"
          >
            <div className="w-[92vw] max-w-[1120px] max-h-[85vh] overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-[0_25px_60px_rgba(15,23,42,.12)]">
              <div className="grid lg:grid-cols-[2.6fr_1fr]">

                {/* LEFT */}

                <div className="p-8">

                  <div>

                    <h2 className="text-2xl font-bold text-slate-900">
                      Our Solutions
                    </h2>

                    <p className="mt-2 text-slate-500">
                      Empowering businesses with scalable digital solutions.
                    </p>

                  </div>

                  <div className="mt-8 grid grid-cols-3 gap-4">

                    {solutions.map((item) => {

                      const Icon = item.icon;

                      return (

                        <NavLink
                          key={item.title}
                          to={item.path}
                          className="group rounded-2xl border border-transparent p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:bg-[#F6FAFF]"
                        >

                          <div className="flex gap-4">

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EDF6FF] text-[#007BFF] transition-all duration-300 group-hover:bg-[#007BFF] group-hover:text-white">

                              <Icon size={22} />

                            </div>

                            <div className="flex-1">

                              <h4 className="font-semibold text-slate-900 transition group-hover:text-[#007BFF]">
                                {item.title}
                              </h4>

                              <p className="mt-2 text-sm leading-6 text-slate-500">
                                {item.desc}
                              </p>

                            </div>

                          </div>

                          <div className="mt-4 flex justify-end">

                            <ArrowRight className="h-4 w-4 text-[#007BFF] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />

                          </div>

                        </NavLink>

                      );

                    })}

                  </div>

                </div>

                {/* RIGHT CTA */}

                <div className="flex flex-col justify-between bg-gradient-to-br from-[#007BFF] via-[#008DFF] to-[#00B8FF] p-8 text-white">

                  <div>

                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
                      Easeon Technologies
                    </span>

                    <h3 className="mt-6 text-3xl font-bold leading-tight">
                      Let's Build
                      <br />
                      Your Next
                      <br />
                      Digital Product
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-blue-100">
                      We build custom software, SaaS platforms, mobile apps,
                      AI-powered systems and enterprise solutions that help
                      businesses scale faster.
                    </p>

                  </div>

                  <NavLink
                    to="/contact"
                    className="mt-8 rounded-full bg-white px-6 py-3 text-center font-semibold text-[#007BFF] transition-all duration-300 hover:scale-105"
                  >
                    Schedule Consultation
                  </NavLink>

                </div>

              </div>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MegaMenu;