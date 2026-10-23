import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Layers3 } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    number: "01",
    title: "Ansh Solar Electricals",
    category: "Website / Digital Experience",
    description:
      "A professional digital presence designed to communicate solar solutions clearly and build trust with potential customers.",
    year: "2025",
    accent: "from-[#062044] via-[#0b3154] to-[#07111f]",
    tag: "ENERGY",
  },
  {
    number: "02",
    title: "Sewa Infrastructure",
    category: "Brand Website / Business Experience",
    description:
      "A structured digital experience built around infrastructure, construction and business credibility.",
    year: "2025",
    accent: "from-[#071b32] via-[#103c5c] to-[#07121f]",
    tag: "INFRASTRUCTURE",
  },
  {
    number: "03",
    title: "Haircrown Clinic",
    category: "Healthcare / Digital Experience",
    description:
      "A modern digital identity focused on presenting services, building confidence and creating a better online patient journey.",
    year: "2025",
    accent: "from-[#081d38] via-[#123c68] to-[#071321]",
    tag: "HEALTHCARE",
  },
  {
    number: "04",
    title: "Maju Idli",
    category: "Food Brand / Digital Marketing",
    description:
      "A regional food brand experience combining visual identity, promotional creatives and digital communication.",
    year: "2025",
    accent: "from-[#06263a] via-[#0b4560] to-[#071522]",
    tag: "FOOD & BRAND",
  },
  {
    number: "05",
    title: "Gym Software",
    category: "Software / Business Management",
    description:
      "A software solution concept focused on helping fitness businesses manage their everyday operations digitally.",
    year: "2025",
    accent: "from-[#061d38] via-[#10466e] to-[#071321]",
    tag: "On-Going Project",
  },
  {
    number: "06",
    title: "Resturant Software",
    category: "Software / Business Management",
    description:
      "A software solution concept focused on Multi-Branch Restaurant Billing & Management Software.",
    year: "2025",
    accent: "from-[#061d38] via-[#10466e] to-[#071321]",
    tag: "On-Going Project",
  },
  {
    number: "07",
    title: "Relax Mode",
    category: "SaaS Product / Beauty Technology",
    description:
      "Our transition from building individual digital solutions to creating a complete technology ecosystem for the salon industry.",
    year: "2025 →",
    accent: "from-[#041d3d] via-[#075985] to-[#061426]",
    tag: "OUR PRODUCT",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // KEEPING YOUR ORIGINAL ANIMATION
  const scale = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [0.92, 1, 0.96]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.35, 1, 1, 0.45]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.45, 1],
    [70, 0, -30]
  );

  return (
    <div
      ref={ref}
      className="sticky top-24 h-[76vh] min-h-[520px] sm:h-[78vh]"
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
          y,
        }}
        className={`relative mx-auto h-full max-w-6xl overflow-hidden rounded-[30px] bg-gradient-to-br ${project.accent} shadow-[0_30px_100px_rgba(0,0,0,0.25)]`}
      >
        {/* Background grid */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(#60a5fa 1px, transparent 1px),
              linear-gradient(90deg, #60a5fa 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
          }}
        />

        {/* Ambient glow */}

        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-blue-400/[0.07] blur-[100px]"
        />

        {/* Content */}

        <div className="relative flex h-full flex-col justify-between p-7 sm:p-10 lg:p-14">

          {/* Top */}

          <div className="flex items-start justify-between">

            <div className="flex items-center gap-3">

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-300/20 bg-blue-400/[0.03] text-xs font-semibold text-white">
                {project.number}
              </span>

              <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-[9px] font-bold tracking-[0.2em] text-gray-400">
                {project.tag}
              </span>

            </div>

            <span className="text-xs text-gray-500">
              {project.year}
            </span>

          </div>


          {/* Middle */}

          <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.65fr]">

            <div>

              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.28em] text-blue-400">
                {project.category}
              </p>

              <h3 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
                {project.title}
              </h3>

            </div>


            <div className="max-w-sm">

              <p className="text-sm leading-7 text-gray-400 sm:text-base">
                {project.description}
              </p>

              <button
                type="button"
                className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold text-white"
              >
                Explore project

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all group-hover:border-blue-400 group-hover:bg-blue-500 group-hover:text-white">

                  <ArrowUpRight
                    size={15}
                  />

                </span>

              </button>

            </div>

          </div>


          {/* Bottom */}

          <div className="flex items-end justify-between border-t border-white/10 pt-5">

            <div className="flex items-center gap-2 text-xs text-gray-500">

              <Layers3 size={14} />

              <span>
                Easeon Technologies
              </span>

            </div>

            <span className="text-[9px] uppercase tracking-[0.25em] text-gray-600">
              Selected Work
            </span>

          </div>

        </div>

      </motion.div>
    </div>
  );
};


const Projects = () => {
  return (
    <section className="relative bg-[#07101c] px-5 py-24 text-white sm:px-8 lg:px-10">

      {/* ============================================= */}
      {/* SOFT BLUE BACKGROUND */}
      {/* ============================================= */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-blue-600/[0.06] blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-48 bottom-20 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.05] blur-[140px]"
      />


      <div className="relative mx-auto max-w-7xl">


        {/* ============================================= */}
        {/* CURIOUSITY HEADER */}
        {/* ============================================= */}

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
            duration: 0.7,
          }}
          className="mb-16 grid gap-8 lg:grid-cols-[0.65fr_1.35fr]"
        >

          {/* LEFT */}

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
              02 / A Look Behind the Work
            </p>

            <div className="mt-7 flex items-center gap-3 text-gray-500">

              <span className="h-px w-8 bg-blue-500/60" />

              <span className="text-xs">
                Keep scrolling
              </span>

            </div>

          </div>


          {/* RIGHT */}

          <div>

            <h2 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">

              Curious about
              <br />

              <span className="text-gray-500">
                what we've built?
              </span>

            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">

              Take a look at the ideas, businesses and products
              that shaped the Easeon journey.

              <span className="text-gray-300">
                {" "}
                The last one is a little different.
              </span>

            </p>

          </div>

        </motion.div>


        {/* ============================================= */}
        {/* STACKED PROJECTS */}
        {/* ============================================= */}

        <div className="space-y-8">

          {projects.map((project, index) => (

            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />

          ))}

        </div>


        {/* ============================================= */}
        {/* ENDING */}
        {/* ============================================= */}

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
          className="mx-auto max-w-3xl py-32 text-center"
        >

          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400">
            And we're not done yet
          </p>

          <h3 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">

            From projects

            <span className="text-gray-500">
              {" "}
              to products.
            </span>

          </h3>

        </motion.div>

      </div>

    </section>
  );
};

export default Projects;