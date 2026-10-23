import RelaxModeSection from "@/Sections/RelaxModeSection";
import ProductSuite from "@/Sections/ProductSuite";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  ChartNoAxesCombined,
  Layers3,
  Sparkles,
  Zap,
} from "lucide-react";
import DownloadRelaxMode from "@/Sections/DownloadRelaxMode";
import RelaxModeEcosystem from "@/Sections/RelaxModeEcosystem";

const Product = () => {
  return (
    <>
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">

      {/* BACKGROUND */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-48 h-[550px] w-[550px] rounded-full bg-blue-100/60 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-48 -right-48 h-[500px] w-[500px] rounded-full bg-cyan-100/50 blur-[140px]"
      />

      {/* Subtle Grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(#2563eb 1px, transparent 1px),
            linear-gradient(90deg, #2563eb 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />


      {/* MAIN CONTAINER */}

      <div className="relative mx-auto max-w-7xl px-6 -mt-20 lg:px-10">

        <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">


          {/* LEFT CONTENT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            {/* Eyebrow */}

            <motion.div
              initial={{
                opacity: 0,
                x: -15,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.1,
              }}
              className="flex items-center gap-3"
            >

              <span className="h-px w-8 bg-blue-600" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 sm:text-xs">
                EASEON PRODUCTS
              </span>

            </motion.div>


            {/* Main Heading */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 0.7,
              }}
              className="mt-7 text-4xl font-bold leading-[1.03] tracking-tight text-gray-900 sm:text-5xl lg:text-[64px]"
            >

              We Don't Just
              <br />

              <span className="text-blue-600">
                Build Software.
              </span>

              <br />

              We Build Products.

            </motion.h1>


            {/* Description */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.35,
              }}
              className="mt-7 max-w-xl text-base leading-8 text-gray-500 sm:text-lg"
            >
              From SaaS platforms to intelligent business applications,
              our products are designed to solve real problems, simplify
              complexity and create lasting business value.
            </motion.p>


            {/* Buttons */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
              }}
              className="mt-9 flex flex-wrap gap-4"
            >

              <button className="group flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-xl">

                Explore Our Products

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />

              </button>


              <button className="group flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-7 py-3.5 text-sm font-semibold text-gray-700 transition-all hover:border-blue-200 hover:text-blue-600">

                Our Approach

                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />

              </button>

            </motion.div>


            {/* Bottom Technology Statement */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.7,
              }}
              className="mt-10 flex items-center gap-3 border-t border-gray-100 pt-6"
            >

              <div className="flex -space-x-2">

                {[
                  BrainCircuit,
                  Layers3,
                  ChartNoAxesCombined,
                ].map((Icon, index) => (

                  <div
                    key={index}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-blue-50"
                  >

                    <Icon
                      size={15}
                      className="text-blue-600"
                    />

                  </div>

                ))}

              </div>


              <p className="text-xs leading-5 text-gray-400 sm:text-sm">
                SaaS · AI · Automation · Digital Products
              </p>

            </motion.div>

          </motion.div>

          {/* RIGHT — SCROLLING PRODUCT SHOWCASE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="relative mx-auto w-full max-w-[560px]"
          >

            {/* Background Glow */}

            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.2, 0.35, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200 blur-[110px]"
            />


            {/* MAIN PRODUCT WINDOW */}

            <div className="relative z-10 overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_35px_100px_rgba(37,99,235,0.14)]">


              {/* WINDOW HEADER */}

              <div className="relative z-30 flex items-center justify-between border-b border-gray-100 bg-white/90 px-5 py-4 backdrop-blur-xl">

                {/* Window dots */}

                <div className="flex items-center gap-2">

                  <span className="h-2.5 w-2.5 rounded-full bg-red-300" />

                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />

                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                </div>


                {/* Window title */}

                <div className="flex items-center gap-2">

                  <motion.span
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="h-2 w-2 rounded-full bg-blue-500"
                  />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Easeon Product Lab
                  </span>

                </div>


                <div className="h-7 w-7 rounded-lg bg-gray-50" />

              </div>

              {/* SCROLLING AREA */}

              <div className="relative h-[480px] overflow-hidden bg-gradient-to-b from-gray-50 to-white">


                {/* Top fade */}

                <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-28 bg-gradient-to-b from-gray-50 to-transparent" />


                {/* Bottom fade */}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-gradient-to-t from-white to-transparent" />


                {/* ================================================= */}
                {/* SCROLLING PRODUCT CARDS */}
                {/* ================================================= */}

                <motion.div
                  animate={{
                    y: [0, -620],
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute left-5 right-5 top-8 space-y-5 sm:left-8 sm:right-8"
                >


                  {/* ================================================= */}
                  {/* PRODUCT 1 — SAAS */}
                  {/* ================================================= */}

                  <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_15px_40px_rgba(37,99,235,0.08)]">

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">

                          <Layers3
                            size={21}
                            className="text-white"
                          />

                        </div>

                        <div>

                          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                            SaaS Platform
                          </p>

                          <h3 className="mt-1 text-lg font-bold text-gray-900">
                            Business Suite
                          </h3>

                        </div>

                      </div>


                      <ArrowUpRight
                        size={18}
                        className="text-gray-300"
                      />

                    </div>


                    {/* Mini Dashboard */}

                    <div className="mt-5 grid grid-cols-3 gap-3">

                      <div className="rounded-xl bg-blue-50 p-3">

                        <p className="text-[9px] text-gray-400">
                          Users
                        </p>

                        <p className="mt-1 text-sm font-bold text-gray-900">
                          Active
                        </p>

                      </div>


                      <div className="rounded-xl bg-gray-50 p-3">

                        <p className="text-[9px] text-gray-400">
                          Growth
                        </p>

                        <p className="mt-1 text-sm font-bold text-blue-600">
                          Rising
                        </p>

                      </div>


                      <div className="rounded-xl bg-gray-50 p-3">

                        <p className="text-[9px] text-gray-400">
                          Status
                        </p>

                        <p className="mt-1 text-sm font-bold text-green-600">
                          Live
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* PRODUCT 2 — AI */}

                  <div className="rounded-2xl border border-purple-100 bg-white p-5 shadow-[0_15px_40px_rgba(124,58,237,0.08)]">

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-600">

                          <BrainCircuit
                            size={21}
                            className="text-white"
                          />

                        </div>

                        <div>

                          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                            Intelligence
                          </p>

                          <h3 className="mt-1 text-lg font-bold text-gray-900">
                            AI Solutions
                          </h3>

                        </div>

                      </div>


                      <Sparkles
                        size={18}
                        className="text-purple-400"
                      />

                    </div>


                    {/* AI Visualization */}

                    <div className="relative mt-5 h-28 overflow-hidden rounded-xl bg-purple-50">

                      <motion.div
                        animate={{
                          x: ["-20%", "100%"],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute top-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                      />


                      <div className="absolute inset-0 flex items-center justify-center gap-3">

                        {[1, 2, 3, 4, 5].map((item) => (

                          <motion.div
                            key={item}
                            animate={{
                              y: [0, -10, 0],
                              opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: item * 0.2,
                            }}
                            className="h-3 w-3 rounded-full bg-purple-500"
                          />

                        ))}

                      </div>

                    </div>

                  </div>

                  {/* PRODUCT 3 — ANALYTICS */}

                  <div className="rounded-2xl border border-cyan-100 bg-white p-5 shadow-[0_15px_40px_rgba(6,182,212,0.08)]">

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500">

                          <ChartNoAxesCombined
                            size={21}
                            className="text-white"
                          />

                        </div>

                        <div>

                          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                            Intelligence
                          </p>

                          <h3 className="mt-1 text-lg font-bold text-gray-900">
                            Analytics
                          </h3>

                        </div>

                      </div>


                      <span className="rounded-full bg-cyan-50 px-3 py-1 text-[9px] font-semibold text-cyan-600">
                        INSIGHTS
                      </span>

                    </div>


                    {/* Analytics Bars */}

                    <div className="mt-5 flex h-28 items-end gap-3 rounded-xl bg-cyan-50 px-5 pb-4">

                      {[35, 48, 42, 62, 58, 76, 92].map(
                        (height, index) => (

                          <motion.div
                            key={index}
                            initial={{
                              height: 0,
                            }}
                            animate={{
                              height: `${height}%`,
                            }}
                            transition={{
                              duration: 1,
                              delay: index * 0.08,
                            }}
                            className="flex-1 rounded-t-md bg-gradient-to-t from-cyan-500 to-blue-400"
                          />

                        )
                      )}

                    </div>

                  </div>


                  {/* ================================================= */}
                  {/* PRODUCT 4 — AUTOMATION */}
                  {/* ================================================= */}

                  <div className="rounded-2xl border border-orange-100 bg-white p-5 shadow-[0_15px_40px_rgba(249,115,22,0.08)]">

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500">

                        <Zap
                          size={21}
                          className="text-white"
                        />

                      </div>

                      <div>

                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                          Operations
                        </p>

                        <h3 className="mt-1 text-lg font-bold text-gray-900">
                          Automation
                        </h3>

                      </div>

                    </div>


                    {/* Automation Flow */}

                    <div className="mt-5 flex items-center justify-center gap-2">

                      {[1, 2, 3].map((item) => (

                        <div
                          key={item}
                          className="flex items-center"
                        >

                          <motion.div
                            animate={{
                              scale: [1, 1.08, 1],
                              opacity: [0.6, 1, 0.6],
                            }}
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              delay: item * 0.2,
                            }}
                            className="h-10 w-10 rounded-xl bg-orange-50"
                          />

                          {item !== 3 && (

                            <motion.div
                              animate={{
                                width: [10, 25, 10],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                              }}
                              className="h-px bg-orange-300"
                            />

                          )}

                        </div>

                      ))}

                    </div>

                  </div>


                  {/* ================================================= */}
                  {/* LOOP CARD */}
                  {/* ================================================= */}

                  <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_15px_40px_rgba(37,99,235,0.08)]">

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">

                        <Layers3
                          size={21}
                          className="text-white"
                        />

                      </div>

                      <div>

                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                          Product Ecosystem
                        </p>

                        <h3 className="mt-1 text-lg font-bold text-gray-900">
                          Built to Scale
                        </h3>

                      </div>

                    </div>

                  </div>


                </motion.div>

              </div>

            </div>


            {/* ================================================= */}
            {/* FLOATING STATUS CARD */}
            {/* ================================================= */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-4 z-40 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl sm:-left-7"
            >

              <div className="flex items-center gap-3">

                <span className="relative flex h-3 w-3">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-40" />

                  <span className="relative h-3 w-3 rounded-full bg-blue-600" />

                </span>

                <div>

                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400">
                    Product Lab
                  </p>

                  <p className="mt-0.5 text-xs font-bold text-gray-900">
                    Always Building
                  </p>

                </div>

              </div>

            </motion.div>


            {/* ================================================= */}
            {/* FLOATING SPARK */}
            {/* ================================================= */}

            <motion.div
              animate={{
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.12, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -right-3 -top-4 z-40 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-white shadow-lg"
            >

              <Sparkles
                size={19}
                className="text-blue-600"
              />

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>

    <RelaxModeSection />
    <ProductSuite />
    <DownloadRelaxMode />
    <RelaxModeEcosystem />

     </>
  );
};

export default Product;