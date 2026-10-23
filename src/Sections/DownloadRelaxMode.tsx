import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  ScanLine,
  Sparkles,
} from "lucide-react";

const DownloadRelaxMode = () => {
  return (
    <section className="relative overflow-hidden -mt-15 bg-white py-20 sm:py-24 lg:py-28">

      {/* ================================================= */}
      {/* ANIMATED BACKGROUND */}
      {/* ================================================= */}

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-48 top-5 h-[480px] w-[480px] rounded-full bg-blue-100/60 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -45, 0],
          y: [0, 35, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-48 bottom-0 h-[430px] w-[430px] rounded-full bg-cyan-100/50 blur-[120px]"
      />

      {/* subtle grid */}

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


      {/* ================================================= */}
      {/* CONTAINER */}
      {/* ================================================= */}

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
              duration: 0.75,
            }}
          >

            {/* Eyebrow */}

            <div className="flex items-center gap-3">

              <span className="h-px w-8 bg-blue-600" />

              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 sm:text-xs">
                Relax Mode
              </span>

            </div>


            {/* Heading */}

            <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-[56px]">

              Experience Relax Mode 
<br />
              <span className="text-blue-600">
                 on the go.
              </span>

            </h2>


            {/* Description */}

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-500 sm:text-lg">
              Discover salons, explore services, choose your specialist
              and book your next appointment — all from one simple
              mobile experience.
            </p>


            {/* ================================================= */}
            {/* BENEFITS */}
            {/* ================================================= */}

            <div className="mt-7 space-y-3">

              {[
                "Discover nearby salons",
                "Choose services & specialists",
                "Book appointments instantly",
              ].map((item, index) => (

                <motion.div
                  key={item}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="flex items-center gap-3"
                >

                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50">

                    <CheckCircle2
                      size={14}
                      className="text-blue-600"
                    />

                  </div>

                  <span className="text-sm font-medium text-gray-600">
                    {item}
                  </span>

                </motion.div>

              ))}

            </div>


            {/* ================================================= */}
            {/* QR DOWNLOAD CARD */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.35,
              }}
              className="mt-9 flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_15px_50px_rgba(15,23,42,0.06)] sm:flex-row sm:items-center"
            >

              {/* QR */}

              <div className="flex h-[115px] w-[115px] shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50/50 p-2">

                <img
                  src="/images/relax-mode-qr.png"
                  alt="Scan to download Relax Mode"
                  className="h-full w-full object-contain"
                />

              </div>


              {/* QR Content */}

              <div>

                <div className="flex items-center gap-2">

                  <ScanLine
                    size={17}
                    className="text-blue-600"
                  />

                  <span className="text-sm font-bold text-gray-900">
                    Scan & Download
                  </span>

                </div>

                <p className="mt-2 max-w-xs text-xs leading-5 text-gray-400">
                  Scan the QR code with your phone to get the Relax Mode
                  app and start booking your next salon visit.
                </p>

                <div className="mt-3 flex items-center gap-2">

                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                    Available on Android & iOS
                  </span>

                </div>

              </div>

            </motion.div>


            {/* ================================================= */}
            {/* STORE BUTTONS */}
            {/* ================================================= */}

            <div className="mt-5 flex flex-wrap gap-3">

              {/* Google Play */}

              <a
                href="#"
                className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">

                  <Download
                    size={16}
                    className="text-blue-600"
                  />

                </div>

                <div>

                  <p className="text-[9px] uppercase tracking-wider text-gray-400">
                    Available on
                  </p>

                  <p className="text-xs font-bold text-gray-900">
                    Google Play
                  </p>

                </div>

              </a>


              {/* App Store */}

              <a
                href="#"
                className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-5 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
              >

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">

                  <Sparkles
                    size={16}
                    className="text-blue-600"
                  />

                </div>

                <div>

                  <p className="text-[9px] uppercase tracking-wider text-gray-400">
                    Download on
                  </p>

                  <p className="text-xs font-bold text-gray-900">
                    App Store
                  </p>

                </div>

              </a>

            </div>

          </motion.div>


          {/* ================================================= */}
          {/* RIGHT — PHONE SHOWCASE */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.94,
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
            className="relative mx-auto h-[510px] w-full max-w-[520px]"
          >

            {/* Blue glow */}

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.18, 0.28, 0.18],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200 blur-[100px]"
            />


            {/* ================================================= */}
            {/* BACK PHONE */}
            {/* ================================================= */}

            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [-7, -5, -7],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[8%] top-16 z-10 h-[420px] w-[210px] overflow-hidden rounded-[34px] border-[6px] border-gray-800 bg-black shadow-2xl"
            >

              <img
                src="/images/relax-phone-screen-2.png"
                alt="Relax Mode mobile application"
                className="h-full w-full object-cover"
              />

            </motion.div>


            {/* ================================================= */}
            {/* FRONT PHONE */}
            {/* ================================================= */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[7%] top-3 z-20 h-[460px] w-[230px] overflow-hidden rounded-[37px] border-[6px] border-gray-800 bg-black shadow-[0_35px_80px_rgba(37,99,235,0.2)]"
            >

              <img
                src="/images/relax-phone-screen-1.png"
                alt="Relax Mode booking application"
                className="h-full w-full object-cover"
              />

            </motion.div>


            {/* ================================================= */}
            {/* FLOATING BLUE CARD */}
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
              className="absolute bottom-8 left-0 z-30 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">

                  <SmartphoneIcon />

                </div>

                <div>

                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400">
                    Relax Mode
                  </p>

                  <p className="mt-0.5 text-xs font-bold text-gray-900">
                    Your beauty, simplified.
                  </p>

                </div>

              </div>

            </motion.div>


            {/* ================================================= */}
            {/* FLOATING ARROW */}
            {/* ================================================= */}

            <motion.div
              animate={{
                y: [0, -7, 0],
                rotate: [0, 4, -4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute right-2 top-20 z-30 flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-white shadow-lg"
            >

              <ArrowRight
                size={18}
                className="text-blue-600"
              />

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};


/* Small reusable icon */

const SmartphoneIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-blue-600"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect
        x="6"
        y="2.5"
        width="12"
        height="19"
        rx="2.5"
      />

      <path d="M10 18.5h4" />
    </svg>
  );
};

export default DownloadRelaxMode;