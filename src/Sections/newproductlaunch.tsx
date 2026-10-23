import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Layers3,
  Sparkles,
  Activity,
  Box,
} from "lucide-react";

const newproductlaunch = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-28 sm:py-36 lg:py-44">

      {/* ================================================= */}
      {/* BACKGROUND GRID */}
      {/* ================================================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(#1677ff 1px, transparent 1px),
            linear-gradient(90deg, #1677ff 1px, transparent 1px)
          `,
          backgroundSize: "65px 65px",
        }}
      />

      {/* ================================================= */}
      {/* SOFT BACKGROUND LIGHT */}
      {/* ================================================= */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-48 bottom-10 h-[450px] w-[450px] rounded-full bg-cyan-100/50 blur-[120px]"
      />


      {/* ================================================= */}
      {/* MAIN */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
          }}
          className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
        >

          <div>

            <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-blue-600">
              04 / What's Next
            </p>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
              Some ideas start as sketches.
              Some become products.
            </p>

          </div>


          <div>

            <h2 className="text-5xl font-semibold leading-[0.9] tracking-[-0.055em] text-[#101828] sm:text-6xl lg:text-8xl">

              Something

              <br />

              <span className="text-gray-300">
                is taking shape.
              </span>

            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              We're working on a new product built around
              a problem we've been exploring closely.
              It's not ready to be revealed yet.
            </p>

          </div>

        </motion.div>


        {/* ================================================= */}
        {/* PRODUCT BLUEPRINT */}
        {/* ================================================= */}

        <div className="relative mx-auto mt-20 h-[540px] max-w-6xl sm:mt-24 sm:h-[620px]">

          {/* ----------------------------------------------- */}
          {/* Blueprint outer frame */}
          {/* ----------------------------------------------- */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.94,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1,
            }}
            className="absolute inset-0 overflow-hidden rounded-[36px] border border-blue-100 bg-[#f9fbff]"
          >

            {/* Blueprint grid */}

            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage: `
                  linear-gradient(#1677ff 1px, transparent 1px),
                  linear-gradient(90deg, #1677ff 1px, transparent 1px)
                `,
                backgroundSize: "45px 45px",
              }}
            />


            {/* Corner labels */}

            <span className="absolute left-6 top-6 text-[8px] font-bold uppercase tracking-[0.3em] text-blue-400 sm:left-8 sm:top-8">
              PRODUCT / 01
            </span>

            <span className="absolute right-6 top-6 text-[8px] font-bold uppercase tracking-[0.3em] text-gray-300 sm:right-8 sm:top-8">
              IN DEVELOPMENT
            </span>


            {/* Blueprint center lines */}

            <div className="absolute left-1/2 top-0 h-full w-px bg-blue-200/40" />

            <div className="absolute left-0 top-1/2 h-px w-full bg-blue-200/40" />


            {/* --------------------------------------------- */}
            {/* CENTER OBJECT */}
            {/* --------------------------------------------- */}

            <motion.div
              animate={{
                rotate: [0, 2, -2, 0],
                y: [0, -8, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 sm:h-[250px] sm:w-[250px]"
            >

              {/* Outer ring */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-35px] rounded-[42px] border border-dashed border-blue-300/50"
              />


              {/* Second ring */}

              <motion.div
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-18px] rounded-[35px] border border-blue-200/70"
              />


              {/* Product core */}

              <div className="absolute inset-0 flex items-center justify-center rounded-[38px] border border-blue-200 bg-white shadow-[0_30px_80px_rgba(37,99,235,0.15)]">

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-400 shadow-[0_15px_40px_rgba(37,99,235,0.3)] sm:h-24 sm:w-24"
                >

                  <Layers3
                    size={34}
                    className="text-white"
                  />

                </motion.div>

              </div>

            </motion.div>


            {/* --------------------------------------------- */}
            {/* FLOATING DATA POINTS */}
            {/* --------------------------------------------- */}

            <motion.div
              animate={{
                y: [0, -18, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute left-[18%] top-[28%] h-2 w-2 rounded-full bg-blue-500"
            />

            <motion.div
              animate={{
                y: [0, 15, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute right-[18%] top-[35%] h-2 w-2 rounded-full bg-cyan-500"
            />

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
              }}
              className="absolute bottom-[25%] left-[25%] h-1.5 w-1.5 rounded-full bg-blue-400"
            />

            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute bottom-[28%] right-[24%] h-1.5 w-1.5 rounded-full bg-cyan-400"
            />


            {/* --------------------------------------------- */}
            {/* LEFT INFO */}
            {/* --------------------------------------------- */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
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
                delay: 0.3,
              }}
              className="absolute bottom-10 left-7 hidden max-w-[180px] sm:block lg:left-10"
            >

              <div className="flex items-center gap-2">

                <Activity
                  size={14}
                  className="text-blue-600"
                />

                <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-blue-600">
                  Research
                </span>

              </div>

              <p className="mt-3 text-xs leading-5 text-gray-400">
                Observing. Testing.
                Understanding.
              </p>

            </motion.div>


            {/* --------------------------------------------- */}
            {/* RIGHT INFO */}
            {/* --------------------------------------------- */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
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
                delay: 0.5,
              }}
              className="absolute right-7 top-24 hidden max-w-[180px] text-right sm:block lg:right-10"
            >

              <div className="flex items-center justify-end gap-2">

                <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-blue-600">
                  Building
                </span>

                <Box
                  size={14}
                  className="text-blue-600"
                />

              </div>

              <p className="mt-3 text-xs leading-5 text-gray-400">
                Turning the idea
                into something real.
              </p>

            </motion.div>


            {/* --------------------------------------------- */}
            {/* BOTTOM STATUS */}
            {/* --------------------------------------------- */}

            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-blue-100 pt-4 sm:bottom-8 sm:left-8 sm:right-8">

              <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-gray-400">
                Easeon Technologies
              </span>

              <span className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.25em] text-blue-600">

                <motion.span
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="h-1.5 w-1.5 rounded-full bg-blue-600"
                />

                Building quietly

              </span>

            </div>

          </motion.div>

        </div>


        {/* ================================================= */}
        {/* REVEAL MESSAGE */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto mt-14 max-w-2xl text-center"
        >

          <div className="flex items-center justify-center gap-3">

            <span className="h-px w-10 bg-blue-200" />

            <Sparkles
              size={14}
              className="text-blue-500"
            />

            <span className="h-px w-10 bg-blue-200" />

          </div>

          <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-[#101828] sm:text-3xl">
            You’ll know when it’s ready.
          </h3>

          <p className="mt-4 text-sm leading-7 text-gray-400">
            For now, we're keeping the details under wraps.
          </p>

          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.25em] text-blue-600">

            Launching Soon

            <ArrowUpRight size={12} />

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default newproductlaunch;