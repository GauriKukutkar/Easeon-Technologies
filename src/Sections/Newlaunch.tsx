import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const NewLaunch = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <motion.div
        animate={{
          x: [0, 70, 0],
          y: [0, -30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-blue-100/70 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-cyan-100/60 blur-[130px]"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#2563eb 1px, transparent 1px),
            linear-gradient(90deg, #2563eb 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />


      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">


          {/* ================================================= */}
          {/* LEFT CONTENT */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
          >

            {/* Badge */}

            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2"
            >

              <Sparkles
                size={14}
                className="text-blue-600"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600 sm:text-xs">
                New Product • Coming Soon
              </span>

            </motion.div>


            {/* Heading */}

            <h2 className="mt-7 text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">

              We're Building

              <br />

              <span className="text-blue-600">
                What's Next.
              </span>

            </h2>


            {/* Description */}

            <p className="mt-6 max-w-xl text-base leading-7 text-gray-500 sm:text-lg">
              Something new is taking shape at Easeon Technologies.
              We're combining technology, automation and business
              intelligence into our next product experience.
            </p>


            {/* CTA */}

            <div className="mt-8 flex flex-wrap items-center gap-4">

              <button className="group flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:shadow-xl">

                Stay Tuned

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />

              </button>


              <div className="flex items-center gap-2 text-sm text-gray-400">

                <span className="relative flex h-2.5 w-2.5">

                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" />

                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-600" />

                </span>

                In development

              </div>

            </div>

          </motion.div>


          {/* ================================================= */}
          {/* RIGHT — GROWTH VISUAL */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative"
          >

            {/* Glow */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.2, 0.35, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200 blur-[100px]"
            />


            {/* Main Analytics Card */}

            <div className="relative z-10 overflow-hidden rounded-[30px] border border-gray-100 bg-white p-5 shadow-[0_30px_90px_rgba(37,99,235,0.12)] sm:p-7">

              {/* Card Header */}

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-xs font-medium text-gray-400">
                    Product Growth
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-gray-900 sm:text-3xl">
                    What's Next
                  </h3>

                </div>


                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">

                  <TrendingUp
                    size={21}
                    className="text-blue-600"
                  />

                </div>

              </div>


              {/* Growth indicator */}

              <div className="mt-7 flex items-end justify-between">

                <div>

                  <p className="text-4xl font-bold text-gray-900 sm:text-5xl">
                    ∞
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Possibilities ahead
                  </p>

                </div>

                <div className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-600">

                  <TrendingUp size={13} />

                  Growing

                </div>

              </div>


              {/* ================================================= */}
              {/* CHART */}
              {/* ================================================= */}

              <div className="relative mt-8 h-[230px] overflow-hidden rounded-2xl bg-gradient-to-b from-blue-50/80 to-white">

                {/* Grid */}

                <div className="absolute inset-0">

                  {[0, 1, 2, 3, 4].map((line) => (

                    <div
                      key={line}
                      className="absolute left-0 right-0 border-t border-blue-100/70"
                      style={{
                        top: `${line * 25}%`,
                      }}
                    />

                  ))}

                </div>


                {/* Bars */}

                <div className="absolute bottom-0 left-0 right-0 flex h-[75%] items-end justify-around px-5 sm:px-10">

                  {[32, 45, 38, 58, 65, 76, 92].map(
                    (height, index) => (

                      <motion.div
                        key={index}
                        initial={{
                          height: 0,
                        }}
                        whileInView={{
                          height: `${height}%`,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.8,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        className="relative w-5 overflow-hidden rounded-t-md bg-gradient-to-t from-blue-600 to-cyan-400 sm:w-7"
                      >

                        <motion.div
                          animate={{
                            opacity: [0.3, 0.7, 0.3],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                          className="absolute inset-0 bg-white/20"
                        />

                      </motion.div>

                    )
                  )}

                </div>


                {/* ================================================= */}
                {/* RISING LINE */}
                {/* ================================================= */}

                <svg
                  viewBox="0 0 600 230"
                  className="absolute inset-0 h-full w-full"
                  preserveAspectRatio="none"
                >

                  <motion.path
                    d="M20 190 C100 175 120 160 190 155 C260 150 280 120 340 130 C410 140 430 80 480 90 C530 100 550 55 585 35"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{
                      pathLength: 0,
                    }}
                    whileInView={{
                      pathLength: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 2,
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Glow line */}

                  <motion.path
                    d="M20 190 C100 175 120 160 190 155 C260 150 280 120 340 130 C410 140 430 80 480 90 C530 100 550 55 585 35"
                    fill="none"
                    stroke="#60A5FA"
                    strokeWidth="8"
                    strokeLinecap="round"
                    opacity="0.12"
                    initial={{
                      pathLength: 0,
                    }}
                    whileInView={{
                      pathLength: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 2,
                      delay: 0.5,
                    }}
                  />

                </svg>


                {/* Moving endpoint */}

                <motion.div
                  animate={{
                    x: [0, 18, 0],
                    y: [0, -12, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                  className="absolute right-[6%] top-[12%] h-3 w-3 rounded-full bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,.6)]"
                />

              </div>


              {/* Bottom Metrics */}

              <div className="mt-5 grid grid-cols-3 gap-3">

                {[
                  {
                    label: "Build",
                    value: "01",
                  },
                  {
                    label: "Ideas",
                    value: "∞",
                  },
                  {
                    label: "Launch",
                    value: "Soon",
                  },
                ].map((item, index) => (

                  <motion.div
                    key={item.label}
                    initial={{
                      opacity: 0,
                      y: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: 0.6 + index * 0.1,
                    }}
                    className="rounded-xl bg-gray-50 p-3"
                  >

                    <p className="text-[10px] font-medium text-gray-400">
                      {item.label}
                    </p>

                    <p className="mt-1 text-sm font-bold text-gray-900">
                      {item.value}
                    </p>

                  </motion.div>

                ))}

              </div>

            </div>


            {/* ================================================= */}
            {/* FLOATING CARD */}
            {/* ================================================= */}

            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-5 -left-4 z-20 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white px-4 py-3 shadow-xl sm:-left-7"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">

                <Zap
                  size={18}
                  className="text-blue-600"
                />

              </div>

              <div>

                <p className="text-[9px] uppercase tracking-[0.15em] text-gray-400">
                  Status
                </p>

                <p className="mt-0.5 text-xs font-bold text-gray-900">
                  Building Something New
                </p>

              </div>

            </motion.div>


            {/* Floating spark */}

            <motion.div
              animate={{
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute -right-3 -top-4 z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-100 bg-white shadow-lg"
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
  );
};

export default NewLaunch;