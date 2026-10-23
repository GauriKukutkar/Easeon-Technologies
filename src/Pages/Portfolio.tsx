import Evolution from "@/Sections/Evolution";
import FounderStory from "@/Sections/founderstory";
import Newproductlaunch from "@/Sections/newproductlaunch";
import Projects from "@/Sections/Projects";
import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Layers3,
  Sparkles,
} from "lucide-react";

const Portfolio = () => {
  return (
    <> 
    <section className="relative overflow-hidden bg-[#101114] text-white">

      {/* Ambient background */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-400/10 blur-[130px]"
      />

      {/* subtle grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#ffffff 1px, transparent 1px),
            linear-gradient(90deg, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-36 lg:px-10 lg:pb-32">

        {/* top label */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-10 bg-blue-400" />

          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500">
            Our Work / Our Story
          </span>
        </motion.div>


        {/* Hero */}

        <div className="mt-10 grid items-end gap-12 lg:grid-cols-[1.3fr_.7fr]">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >

            <h1 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">

              We don't just
              <br />

              <span className="text-gray-500">
                build projects.
              </span>

              <br />

              <span className=" text-blue-500">
                We build stories.
              </span>

            </h1>

          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md lg:pb-2"
          >

            <p className="text-base leading-8 text-gray-400 sm:text-lg">
              From business websites and digital experiences to
              products designed for real-world problems — every
              project has been a step toward what Easeon is becoming.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm font-medium text-white">

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
                <ArrowDownRight size={17} />
              </span>

              <span>
                Scroll to explore our journey
              </span>

            </div>

          </motion.div>

        </div>


        {/* project strip */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 border-y border-white/10 py-6"
        >

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-6">

            {[
              ["2025", "Company"],
              ["06+", "Projects"],
              ["01", "SaaS Product"],
              ["02+", "Years Research"],
              ["04+", "Industries"],
              ["∞", "Ideas Ahead"],
            ].map(([value, label]) => (

              <div key={label}>

                <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  {value}
                </p>

                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-gray-500">
                  {label}
                </p>

              </div>

            ))}

          </div>

        </motion.div>


        {/* Story intro */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 grid gap-10 lg:grid-cols-[.7fr_1.3fr]"
        >

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500">
              01 / The Beginning
            </p>

          </div>


          <div>

            <h2 className="max-w-4xl text-3xl font-medium leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">

              A small beginning.
              <span className="text-gray-500">
                {" "}
                A much bigger direction.
              </span>

            </h2>

            <p className="mt-7 max-w-3xl text-sm leading-8 text-gray-400 sm:text-base">
              Easeon started with a simple idea — technology should
              solve actual business problems, not simply look impressive.
              We spent time understanding businesses, working on the
              ground, researching workflows and learning what people
              actually needed.
            </p>

          </div>

        </motion.div>


        {/* Founder story card */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-16 overflow-hidden rounded-[32px] border border-white/10 bg-[#18191d]"
        >

          {/* decorative number */}

          <div className="absolute right-8 top-5 select-none text-[120px] font-bold leading-none text-white/[0.025] sm:text-[180px]">
            01
          </div>


          <div className="grid lg:grid-cols-[.8fr_1.2fr]">

            {/* left */}

            <div className="relative flex min-h-[360px] flex-col justify-between border-b border-white/10 p-8 sm:p-10 lg:border-b-0 lg:border-r">

              <div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-300 text-black">
                  <Sparkles size={20} />
                </div>

                <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500">
                  Founder Story
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                  Rahul Borkar
                </h3>

                <p className="mt-2 text-sm text-blue-500">
                  Founder — Easeon Technologies
                </p>

              </div>


              <div className="flex items-center gap-3 text-sm text-gray-500">

                <Layers3 size={16} />

                <span>
                  From idea to ecosystem
                </span>

              </div>

            </div>


            {/* right */}

            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-14">

              <p className="text-xl leading-9 text-gray-300 sm:text-2xl">

                “The goal was never to build one more
                software company. It was to understand
                problems deeply enough to build something
                people actually need.”

              </p>

              <div className="mt-8 h-px w-16 bg-blue-500" />

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500">
                That thinking shaped the way Easeon approaches
                every project — understand first, design with purpose,
                build carefully and keep improving after launch.
              </p>

              <button
                className="group mt-8 flex w-fit items-center gap-3 text-sm font-semibold text-white"
              >

                Read the story

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 transition-all group-hover:bg-white group-hover:text-black">

                  <ArrowUpRight size={15} />

                </span>

              </button>

            </div>

          </div>

        </motion.div>

      </div>
    </section>

    <FounderStory />

    <Projects />
    <Evolution />
    <Newproductlaunch />

    </>
  );
};

export default Portfolio;