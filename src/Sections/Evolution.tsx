import { motion, useInView } from "framer-motion";
import {
  Search,
  Code2,
  Lightbulb,
  Sparkles,
  Rocket,
  ArrowUpRight,
} from "lucide-react";
import { useRef } from "react";

const journey = [
  {
    number: "01",
    year: "2024",
    label: "UNDERSTAND",
    title: "We started by listening.",
    description:
      "Before building products, we spent time understanding businesses, people and the problems they face every day.",
    icon: Search,
  },
  {
    number: "02",
    year: "2025",
    label: "BUILD",
    title: "We started solving real problems.",
    description:
      "From websites and digital experiences to business software, every project helped us understand technology from a different perspective.",
    icon: Code2,
  },
  {
    number: "03",
    year: "2025",
    label: "LEARN",
    title: "Every project became a lesson.",
    description:
      "Ansh Solar Electricals, Sewa Infrastructure, Haircrown Clinic, Maju Idli and other projects helped us discover patterns across completely different industries.",
    icon: Lightbulb,
  },
  {
    number: "04",
    year: "2025",
    label: "RESEARCH",
    title: "Then we looked deeper.",
    description:
      "We spent time on the field, observing workflows and understanding how businesses actually operate beyond what software screens show.",
    icon: Search,
  },
  {
    number: "05",
    year: "2025",
    label: "IDEA",
    title: "One problem kept coming back.",
    description:
      "The salon industry had disconnected experiences for customers and salon owners. That observation became the beginning of something much bigger.",
    icon: Sparkles,
  },
  {
    number: "06",
    year: "2025 →",
    label: "RELAX MODE",
    title: "We started building our own product.",
    description:
      "Relax Mode became our move from project-based solutions to building a technology ecosystem designed specifically for the salon industry.",
    icon: Rocket,
  },
];

const JourneyCard = ({
  item,
}: {
  item: (typeof journey)[number];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: false,
    amount: 0.45,
  });

  const Icon = item.icon;

  return (
    <div
      ref={ref}
      className="relative flex min-h-[520px] items-center"
    >
      {/* Timeline dot */}

      <motion.div
        animate={{
          scale: isInView ? 1 : 0.7,
          opacity: isInView ? 1 : 0.35,
        }}
        transition={{
          duration: 0.45,
        }}
        className="absolute left-[25px] top-1/2 z-20 hidden h-4 w-4 -translate-y-1/2 rounded-full bg-blue-600 shadow-[0_0_0_8px_rgba(37,99,235,0.10),0_0_20px_rgba(37,99,235,0.35)] md:block"
      />

      {/* Card */}

      <motion.div
        animate={{
          opacity: isInView ? 1 : 0.35,
          scale: isInView ? 1 : 0.94,
          y: isInView ? 0 : 35,
          rotateX: isInView ? 0 : 5,
        }}
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative ml-0 w-full md:ml-20"
        style={{
          perspective: "1200px",
        }}
      >
        <div className="group relative overflow-hidden rounded-[32px] border border-blue-100 bg-white shadow-[0_25px_90px_rgba(37,99,235,0.08)]">

          {/* Animated top line */}

          <motion.div
            initial={{
              width: "0%",
            }}
            animate={{
              width: isInView ? "100%" : "0%",
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="absolute left-0 top-0 h-[3px] bg-gradient-to-r from-blue-600 via-cyan-400 to-transparent"
          />

          {/* Background glow */}

          <motion.div
            animate={{
              scale: isInView ? 1.2 : 1,
              opacity: isInView ? 0.7 : 0.3,
            }}
            transition={{
              duration: 1,
            }}
            className="pointer-events-none absolute -right-32 -top-32 h-[350px] w-[350px] rounded-full bg-blue-100 blur-[100px]"
          />

          {/* Giant number */}

          <div className="pointer-events-none absolute -right-5 -top-10 select-none text-[190px] font-black leading-none tracking-[-0.08em] text-blue-600/[0.035]">
            {item.number}
          </div>

          <div className="relative z-10 p-7 sm:p-10 lg:p-14">

            {/* Header */}

            <div className="flex items-start justify-between">

              <div className="flex items-center gap-4">

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-500 ${
                    isInView
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                      : "bg-blue-50 text-blue-600"
                  }`}
                >
                  <span className="text-xs font-bold">
                    {item.number}
                  </span>
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-600">
                    {item.label}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    {item.year}
                  </p>
                </div>

              </div>

              {/* Icon */}

              <motion.div
                animate={{
                  rotate: isInView ? 0 : -12,
                  scale: isInView ? 1 : 0.85,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50"
              >
                <Icon
                  size={24}
                  className="text-blue-600"
                />
              </motion.div>

            </div>

            {/* Main content */}

            <div className="mt-20 max-w-4xl sm:mt-24">

              <h3 className="text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-[#101828] sm:text-5xl lg:text-6xl">
                {item.title}
              </h3>

              <p className="mt-7 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                {item.description}
              </p>

            </div>

            {/* Footer */}

            <div className="mt-16 flex items-center justify-between border-t border-gray-100 pt-5">

              <div className="flex items-center gap-2">

                <div className="h-1.5 w-1.5 rounded-full bg-blue-600" />

                <span className="text-xs text-gray-400">
                  Easeon Technologies
                </span>

              </div>

              <motion.div
                animate={{
                  x: isInView ? 0 : -5,
                  opacity: isInView ? 1 : 0.5,
                }}
                className="flex items-center gap-2 text-xs font-semibold text-blue-600"
              >
                Chapter {item.number}
                <ArrowUpRight size={14} />
              </motion.div>

            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Evolution = () => {
  return (
    <section className="relative w-full overflow-x-clip bg-[#f6f9fd] py-28 sm:py-36">

      {/* ======================================== */}
      {/* BACKGROUND */}
      {/* ======================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#1677ff 1px, transparent 1px),
            linear-gradient(90deg, #1677ff 1px, transparent 1px)
          `,
          backgroundSize: "65px 65px",
        }}
      />

      {/* Floating blue light */}

      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-blue-200/30 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute right-[-200px] top-[45%] h-[500px] w-[500px] rounded-full bg-cyan-200/25 blur-[130px]"
      />


      {/* ======================================== */}
      {/* HEADER */}
      {/* ======================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
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
          className="max-w-4xl"
        >

          <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-blue-600">
            03 / Behind The Work
          </p>

          <h2 className="mt-6 text-4xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#101828] sm:text-6xl lg:text-7xl">

            Every project

            <br />

            <span className="text-gray-400">
              changed what came next.
            </span>

          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Our journey wasn't planned as a straight line.
            It evolved through projects, conversations,
            research and problems worth solving.
          </p>

        </motion.div>


        {/* ======================================== */}
        {/* TIMELINE */}
        {/* ======================================== */}

        <div className="relative mt-20 sm:mt-28">

          {/* Timeline line */}

          <div className="absolute bottom-0 left-[32px] top-0 hidden md:block">

            <div className="h-full w-px bg-gradient-to-b from-blue-200 via-blue-400/50 to-transparent" />

          </div>


          {journey.map((item, index) => (
            <JourneyCard
              key={item.number}
              item={item}
              index={index}
            />
          ))}

        </div>


        {/* ======================================== */}
        {/* END */}
        {/* ======================================== */}

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
          className="relative py-24 text-center sm:py-32"
        >

          <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-blue-600">
            Still evolving
          </p>

          <h3 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[#101828] sm:text-5xl">

            The story

            <span className="text-gray-400">
              {" "}
              isn't finished.
            </span>

          </h3>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-500">
            Relax Mode is only one chapter of what we're
            building at Easeon Technologies.
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default Evolution;