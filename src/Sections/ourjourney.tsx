
import { motion } from "framer-motion";
import React from "react";

const ourjourney = () => {


return (
    <>
  {/* ========================================================= */}
{/* OUR JOURNEY */}
{/* ========================================================= */}

<section className="relative overflow-hidden bg-[#06142d] py-16 sm:py-20 lg:py-24">

  {/* ===================================================== */}
  {/* ANIMATED BACKGROUND */}
  {/* ===================================================== */}

  <motion.div
    animate={{
      x: [0, 80, 0],
      y: [0, -30, 0],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-blue-600/15 blur-[120px]"
  />

  <motion.div
    animate={{
      x: [0, -70, 0],
      y: [0, 40, 0],
      scale: [1, 1.15, 1],
    }}
    transition={{
      duration: 16,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[120px]"
  />

  {/* Grid */}

  <div
    className="absolute inset-0 opacity-[0.035]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)
      `,
      backgroundSize: "45px 45px",
    }}
  />


  <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

    {/* ================================================= */}
    {/* HEADER */}
    {/* ================================================= */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-3xl text-center"
    >

      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-400 sm:text-xs">
        Our Journey
      </span>

      <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
        From Research
        <br />
        <span className="text-blue-400">
          to Real-World Solutions.
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
        What started with research and field learning is evolving into
        digital products, SaaS solutions and technology-driven growth systems.
      </p>

    </motion.div>


    {/* ================================================= */}
    {/* JOURNEY FLOW */}
    {/* ================================================= */}

    <div className="relative mt-12">

      {/* Connecting Line */}

      <div className="absolute left-[8%] right-[8%] top-[42px] hidden h-px bg-gradient-to-r from-blue-500/10 via-blue-400/50 to-blue-500/10 lg:block" />


      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

        {[
          {
            number: "01",
            year: "Before 2025",
            title: "Research",
            text: "Nearly two years of research, experimentation and field learning.",
          },
          {
            number: "02",
            year: "2025",
            title: "Easeon Begins",
            text: "Turning our learnings into a technology company focused on real problems.",
          },
          {
            number: "03",
            year: "Projects",
            title: "Real-World Work",
            text: "Building solutions for businesses across different industries.",
          },
          {
            number: "04",
            year: "Product R&D",
            title: "From Projects to Products",
            text: "Using real-world insights to research and build our own products.",
          },
          {
            number: "05",
            year: "2026",
            title: "Building the Ecosystem",
            text: "SaaS, AI, software and digital growth solutions under one ecosystem.",
          },
        ].map((item, i) => (

          <motion.div
            key={item.number}
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
              margin: "-60px",
            }}
            transition={{
              delay: i * 0.1,
              duration: 0.6,
            }}
            whileHover={{
              y: -6,
            }}
            className="group relative rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.07]"
          >

            {/* Number */}

            <div className="relative z-10 flex items-center justify-between">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10">

                <span className="text-xs font-bold text-blue-400">
                  {item.number}
                </span>

              </div>

              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-slate-500">
                {item.year}
              </span>

            </div>


            <h3 className="mt-5 text-lg font-semibold text-white">
              {item.title}
            </h3>


            <p className="mt-2 text-xs leading-6 text-slate-400">
              {item.text}
            </p>


            {/* Bottom Accent */}

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "35%" }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5 + i * 0.08,
                duration: 0.6,
              }}
              className="mt-5 h-[2px] rounded-full bg-blue-500"
            />

          </motion.div>

        ))}

      </div>

    </div>


    {/* ================================================= */}
    {/* PROJECTS */}
    {/* ================================================= */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-8 rounded-2xl border border-white/10 bg-white/[0.035] p-5 sm:p-6"
    >

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div className="lg:max-w-xs">

          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-400">
            Selected Work
          </span>

          <h3 className="mt-2 text-lg font-semibold text-white">
            Learning Through Real Projects
          </h3>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            Every project helped us understand a new business,
            industry or technology challenge.
          </p>

        </div>


        {/* Projects */}

        <div className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">

          {[
            "Ansh Solar Electricals",
            "Sewa Infrastructure",
            "Haircrown Clinic",
            "Maju Idli",
            "Gym Software",
          ].map((project, i) => (

            <motion.div
              key={project}
              whileHover={{
                y: -3,
                borderColor: "rgba(96,165,250,.35)",
              }}
              className="rounded-xl border border-white/10 bg-white/[0.035] px-3 py-3"
            >

              <span className="text-[9px] font-bold text-blue-400">
                {String(i + 1).padStart(2, "0")}
              </span>

              <p className="mt-1.5 text-[11px] font-medium leading-4 text-slate-300">
                {project}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </motion.div>


    {/* ================================================= */}
    {/* FINAL EVOLUTION */}
    {/* ================================================= */}

    <motion.div
      initial={{
        opacity: 0,
        scale: 0.97,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      className="relative mt-8 overflow-hidden rounded-2xl border border-blue-400/20 bg-gradient-to-r from-blue-600/15 via-blue-500/10 to-cyan-400/10 px-6 py-6 sm:px-8"
    >

      {/* Moving Glow */}

      <motion.div
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
      />


      <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        {/* Text */}

        <div>

          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-400">
            Where We Are Going
          </span>

          <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
            Building an Ecosystem, Not Just Projects.
          </h3>

          <p className="mt-2 max-w-2xl text-xs leading-6 text-slate-400 sm:text-sm">
            Our next chapter brings together SaaS products, AI solutions,
            custom software, mobile applications, advanced SEO and
            performance marketing.
          </p>

        </div>


        {/* Flow */}

        <div className="flex shrink-0 flex-wrap items-center gap-2">

          {[
            "SaaS",
            "AI",
            "Software",
            "Growth",
          ].map((item, i) => (

            <React.Fragment key={item}>

              <motion.span
                animate={{
                  y: [0, -3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeInOut",
                }}
                className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-[10px] font-semibold text-blue-300"
              >
                {item}
              </motion.span>

              {i < 3 && (
                <span className="text-xs text-blue-500">
                  →
                </span>
              )}

            </React.Fragment>

          ))}

        </div>

      </div>

    </motion.div>


  </div>

</section>

    </>
  );
};

export default ourjourney;