import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { OrbitingCircles } from "../Components/UI/orbiting-circles";
import Ourjourney from "@/Sections/ourjourney";
import Corevalues from "@/Sections/Corevalues";
import Ourculture from "@/Sections/Ourculture";
import Team from "@/Sections/Team";
import Newlaunch from "@/Sections/Newlaunch";

const About = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-white pt-36 pb-24">

        {/* Background Blur */}
        <motion.div
          animate={{
            x: [0, 25, 0],
            y: [0, -20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-blue-100 blur-[130px] opacity-60"
        />

        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-cyan-100 blur-[120px] opacity-50"
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left */}

            <div>

              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: .5 }}
                className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-600"
              >
                About Easeon Technologies
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: .15 }}
                className="mt-8 text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
              >
                Building Digital
                <br />
                Solutions That
                <span className="text-blue-600"> Create Impact.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: .3 }}
                className="mt-8 max-w-xl text-lg leading-8 text-gray-500"
              >
                Easeon Technologies helps startups and businesses transform
                ideas into scalable software, AI-powered products, mobile
                applications and digital experiences that drive measurable
                growth.
              </motion.p>

              {/* Buttons */}

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: .45 }}
                className="mt-10 flex flex-wrap gap-5"
              >

                <button className="group flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-2xl">
                  Book a Free Consultation
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>

                <button className="group flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600">
                  <PlayCircle size={18} />
                  Watch Our Story
                </button>

              </motion.div>

            </div>

           {/* Right */}

<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="relative flex h-[520px] items-center justify-center"
>
  {/* Soft Background Glow */}

  <motion.div
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.25, 0.4, 0.25],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute h-[300px] w-[300px] rounded-full bg-blue-100 blur-[90px]"
  />

  {/* Outer Decorative Ring */}

  <motion.div
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 45,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute h-[440px] w-[440px] rounded-full border border-blue-100/70"
  />

  {/* Inner Decorative Ring */}

  <motion.div
    animate={{
      rotate: -360,
    }}
    transition={{
      duration: 30,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute h-[320px] w-[320px] rounded-full border border-dashed border-blue-200/70"
  />

  {/* Center */}

  <motion.div
    animate={{
      y: [0, -8, 0],
      scale: [1, 1.04, 1],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative z-20 flex h-32 w-32 flex-col items-center justify-center rounded-[28px] border border-blue-100 bg-white shadow-[0_20px_60px_rgba(37,99,235,0.15)]"
  >
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
      <span className="text-2xl font-bold text-blue-600">
        E
      </span>
    </div>

    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
      Easeon
    </p>
  </motion.div>

  {/* First Orbit */}

  <OrbitingCircles
    radius={145}
    duration={20}
    iconSize={48}
  >
    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-white shadow-md">
      <span className="text-xl text-blue-600">✦</span>
    </div>

    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-white shadow-md">
      <span className="text-xl text-blue-600">◆</span>
    </div>

    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-white shadow-md">
      <span className="text-xl text-blue-600">✧</span>
    </div>
  </OrbitingCircles>

  {/* Second Orbit */}

  <OrbitingCircles
    radius={205}
    duration={32}
    reverse
    iconSize={42}
  >
    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-white shadow-sm">
      <span className="text-lg font-semibold text-blue-500">
        +
      </span>
    </div>

    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-white shadow-sm">
      <span className="text-lg font-semibold text-blue-500">
        ×
      </span>
    </div>

    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-100 bg-white shadow-sm">
      <span className="text-lg font-semibold text-blue-500">
        ○
      </span>
    </div>
  </OrbitingCircles>

  {/* Building Since Badge */}

  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-8 left-2 z-30 rounded-2xl border border-gray-100 bg-white px-6 py-4 shadow-xl"
  >
    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
      Building Since
    </p>

    <div className="mt-1 flex items-center gap-2">
      <span className="text-2xl font-bold text-blue-600">
        2022
      </span>

      <span className="h-2 w-2 rounded-full bg-blue-500" />
    </div>
  </motion.div>

  {/* Floating Status */}

  <motion.div
    animate={{
      y: [0, 8, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute right-2 top-16 z-30 rounded-2xl border border-blue-100 bg-white px-5 py-4 shadow-lg"
  >
    <div className="flex items-center gap-2">
      <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />

      <span className="text-sm font-semibold text-gray-800">
        Digital Innovation
      </span>
    </div>

    <p className="mt-1 text-xs text-gray-400">
      Building for tomorrow
    </p>
  </motion.div>
</motion.div>

          </div>

        </div>

      </section>


      {/* ===================== VISION & MISSION ===================== */}

<section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">

  {/* Background Glow */}

  <motion.div
    animate={{
      x: [0, 30, 0],
      y: [0, -20, 0],
      scale: [1, 1.12, 1],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-100/60 blur-[120px]"
  />

  <motion.div
    animate={{
      x: [0, -25, 0],
      y: [0, 20, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-100/50 blur-[120px]"
  />

  <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

    {/* ================= HEADER ================= */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-3xl text-center"
    >

      <motion.span
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex rounded-full bg-blue-50 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-600"
      >
        Our Vision & Mission
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="mt-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl"
      >
        Building Technology That
        <span className="text-blue-600"> Moves Businesses Forward.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg sm:leading-8"
      >
        We combine technology, product thinking and digital growth to help
        businesses build, launch and scale with confidence.
      </motion.p>

    </motion.div>


    {/* ================= MAIN CONTENT ================= */}

    <div className="mt-20 grid items-center gap-16 lg:grid-cols-[1fr_0.8fr_1fr] lg:gap-10">


      {/* ================= VISION ================= */}

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        whileHover={{ y: -8 }}
        className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-7 shadow-[0_15px_50px_rgba(37,99,235,0.07)] transition-shadow duration-500 hover:shadow-[0_25px_70px_rgba(37,99,235,0.12)] sm:p-9"
      >

        {/* Card glow */}

        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-50 blur-3xl transition-transform duration-700 group-hover:scale-150" />

        <div className="relative">

          <div className="flex items-center gap-4">

            <motion.div
              whileHover={{ rotate: 10, scale: 1.08 }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50"
            >
              <svg
                className="h-7 w-7 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </motion.div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Our Vision
              </p>

              <h3 className="mt-1 text-2xl font-bold text-gray-900">
                Think Beyond Today
              </h3>
            </div>

          </div>

          <p className="mt-7 text-sm leading-7 text-gray-500 sm:text-base">
            To become a trusted technology and growth partner for businesses,
            creating intelligent products, scalable SaaS solutions and digital
            experiences that shape the future.
          </p>

          <div className="mt-7 h-px w-full bg-gray-100" />

          <div className="mt-6 flex flex-wrap gap-2">

            {["Innovation", "Scale", "Future"].map((item, i) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="rounded-full border border-blue-100 bg-blue-50/60 px-3 py-1.5 text-xs font-medium text-blue-600"
              >
                {item}
              </motion.span>
            ))}

          </div>

        </div>

      </motion.div>

{/* ================= CENTER DIGITAL CORE ================= */}

<motion.div
  initial={{ opacity: 0, scale: 0.75 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.9, ease: "easeOut" }}
  className="relative flex h-[340px] items-center justify-center sm:h-[400px]"
>
  {/* Ambient Glow */}

  <motion.div
    animate={{
      scale: [1, 1.25, 1],
      opacity: [0.2, 0.4, 0.2],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute h-56 w-56 rounded-full bg-blue-200 blur-[100px]"
  />

  {/* Large Rotating Network */}

  <motion.div
    animate={{ rotate: 360 }}
    transition={{
      duration: 35,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute h-[290px] w-[290px] sm:h-[330px] sm:w-[330px]"
  >
    {/* Orbit Path */}

    <div className="absolute inset-0 rounded-full border border-blue-100" />

    {/* Nodes */}

    <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(37,99,235,0.55)]" />

    <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-300" />

    <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-blue-300" />

    <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-blue-500 shadow-[0_0_18px_rgba(37,99,235,0.55)]" />

    <span className="absolute left-[12%] top-[15%] h-2 w-2 rounded-full bg-blue-300" />

    <span className="absolute bottom-[15%] right-[12%] h-2 w-2 rounded-full bg-blue-300" />
  </motion.div>


  {/* Second Network Layer */}

  <motion.div
    animate={{ rotate: -360 }}
    transition={{
      duration: 24,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute h-[220px] w-[220px] sm:h-[250px] sm:w-[250px]"
  >
    <div className="absolute inset-0 rotate-45 rounded-[35%] border border-dashed border-blue-200/70" />

    <span className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-400" />

    <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-blue-400" />

    <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-blue-400" />

    <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-blue-400" />
  </motion.div>


  {/* Connecting Lines */}

  <svg
    viewBox="0 0 300 300"
    className="absolute h-[280px] w-[280px] sm:h-[320px] sm:w-[320px]"
  >
    <motion.path
      d="M150 35 L245 90 L265 210 L150 265 L40 205 L55 90 Z"
      fill="none"
      stroke="#DBEAFE"
      strokeWidth="1"
      strokeDasharray="5 8"
      animate={{
        strokeDashoffset: [0, -100],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
    />

    <motion.path
      d="M55 90 L150 150 L245 90"
      fill="none"
      stroke="#BFDBFE"
      strokeWidth="1"
      strokeDasharray="4 7"
      animate={{
        strokeDashoffset: [0, 80],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "linear",
      }}
    />

    <motion.path
      d="M40 205 L150 150 L265 210"
      fill="none"
      stroke="#DBEAFE"
      strokeWidth="1"
      strokeDasharray="4 7"
      animate={{
        strokeDashoffset: [0, -80],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  </svg>


  {/* Animated Data Particles */}

  {[...Array(8)].map((_, i) => (
    <motion.span
      key={i}
      className="absolute h-1.5 w-1.5 rounded-full bg-blue-500"
      animate={{
        opacity: [0, 1, 0],
        scale: [0.5, 1.4, 0.5],
        x: [0, (i % 2 === 0 ? 1 : -1) * (25 + i * 8)],
        y: [0, (i % 3 === 0 ? -1 : 1) * (20 + i * 6)],
      }}
      transition={{
        duration: 3 + i * 0.4,
        repeat: Infinity,
        delay: i * 0.35,
        ease: "easeInOut",
      }}
    />
  ))}


  {/* Central Core */}

  <motion.div
    animate={{
      y: [0, -7, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative z-20 flex h-32 w-32 items-center justify-center rounded-full border border-blue-100 bg-white shadow-[0_20px_70px_rgba(37,99,235,0.16)]"
  >
    {/* Inner Core */}

    <motion.div
      animate={{
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-3 rounded-full border border-dashed border-blue-200"
    />

    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-500 shadow-[0_12px_35px_rgba(37,99,235,0.3)]">
      <span className="text-3xl font-bold text-white">
        E
      </span>
    </div>
  </motion.div>


  {/* Core Pulse */}

  <motion.div
    animate={{
      scale: [1, 1.8],
      opacity: [0.5, 0],
    }}
    transition={{
      duration: 2.8,
      repeat: Infinity,
      ease: "easeOut",
    }}
    className="absolute h-32 w-32 rounded-full border border-blue-300"
  />

</motion.div>

      {/* ================= MISSION ================= */}

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        whileHover={{ y: -8 }}
        className="group relative overflow-hidden rounded-3xl border border-blue-100 bg-white p-7 shadow-[0_15px_50px_rgba(37,99,235,0.07)] transition-shadow duration-500 hover:shadow-[0_25px_70px_rgba(37,99,235,0.12)] sm:p-9"
      >

        <div className="absolute -bottom-20 -right-16 h-44 w-44 rounded-full bg-cyan-50 blur-3xl transition-transform duration-700 group-hover:scale-150" />

        <div className="relative">

          <div className="flex items-center gap-4">

            <motion.div
              whileHover={{ rotate: -10, scale: 1.08 }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50"
            >
              <svg
                className="h-7 w-7 text-blue-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M12 3v18" />
                <path d="M5 7h14" />
                <path d="M5 7l-3 6h6L5 7Z" />
                <path d="M19 7l-3 6h6l-3-6Z" />
              </svg>
            </motion.div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                Our Mission
              </p>

              <h3 className="mt-1 text-2xl font-bold text-gray-900">
                Build. Grow. Transform.
              </h3>
            </div>

          </div>

          <p className="mt-7 text-sm leading-7 text-gray-500 sm:text-base">
            To turn business challenges into practical digital solutions by
            combining software development, AI, automation, SaaS and
            performance marketing under one ecosystem.
          </p>

          <div className="mt-7 h-px w-full bg-gray-100" />

          <div className="mt-6 grid grid-cols-2 gap-3">

            {[
              "Software",
              "AI & Automation",
              "SaaS Products",
              "Digital Growth",
            ].map((item, i) => (

              <motion.div
                key={item}
                initial={{ opacity: 0, x: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-2 text-xs font-medium text-gray-600 sm:text-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                {item}
              </motion.div>

            ))}

          </div>

        </div>

      </motion.div>

    </div>


    {/* ================= BOTTOM SERVICES ================= */}

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.7 }}
      className="mt-16 rounded-3xl border border-gray-100 bg-gray-50/70 px-6 py-7 sm:px-10"
    >

      <p className="text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-400 sm:text-xs">
        One Technology & Growth Ecosystem
      </p>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12">

        {[
          "SaaS Products",
          "Custom Software",
          "AI & Automation",
          "Web & Mobile Apps",
          "SEO",
          "Performance Marketing",
        ].map((item, i) => (

          <motion.div
            key={item}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.3 + i * 0.08,
            }}
            whileHover={{
              y: -3,
              color: "#2563EB",
            }}
            className="flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            {item}
          </motion.div>

        ))}

      </div>

    </motion.div>

  </div>

</section>

<Ourjourney />
<Ourculture />
<Corevalues />
<Team />
<Newlaunch />

    </>
  );
};

export default About;