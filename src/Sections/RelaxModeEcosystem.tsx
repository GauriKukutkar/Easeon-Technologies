import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  CalendarCheck,
  Clock3,
  ExternalLink,
  MapPin,
  Scissors,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

import { BorderBeam } from "@/Components/UI/border-beam";

const features = [
  {
    icon: MapPin,
    label: "DISCOVER",
    title: "Find the right salon",
    text: "Explore nearby salons, services, specialists, ratings and availability in one place.",
    className: "lg:col-span-2",
  },
  {
    icon: CalendarCheck,
    label: "BOOK",
    title: "Book without the wait",
    text: "Choose your service, specialist and preferred time slot — then confirm instantly.",
    className: "lg:col-span-1",
  },
  {
    icon: Clock3,
    label: "PREDICT",
    title: "Smarter scheduling",
    text: "Make salon visits more predictable with service duration, availability and booking intelligence.",
    className: "lg:col-span-1",
  },
  {
    icon: Users,
    label: "MANAGE",
    title: "Everything in one place",
    text: "Salon partners can manage customers, staff, services and appointments from connected tools.",
    className: "lg:col-span-1",
  },
  {
    icon: BarChart3,
    label: "GROW",
    title: "Turn data into growth",
    text: "Track appointments, revenue, customer activity and business performance with useful insights.",
    className: "lg:col-span-1",
  },
];

const RelaxModeEcosystem = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

      {/* ANIMATED BACKGROUND */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-64 top-20 h-[520px] w-[520px] rounded-full bg-blue-100/60 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-64 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-100/50 blur-[140px]"
      />

      {/* Animated dots */}

      <div className="pointer-events-none absolute inset-0">

        {[...Array(18)].map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -12, 0],
              opacity: [0.15, 0.5, 0.15],
            }}
            transition={{
              duration: 3 + (index % 4),
              repeat: Infinity,
              delay: index * 0.15,
            }}
            className="absolute h-1 w-1 rounded-full bg-blue-500"
            style={{
              left: `${(index * 17) % 100}%`,
              top: `${(index * 29) % 100}%`,
            }}
          />
        ))}

      </div>


      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* HEADER */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          className="mx-auto max-w-3xl text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">

            <Sparkles
              size={14}
              className="text-blue-600"
            />

            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-blue-600 sm:text-xs">
              Inside Relax Mode
            </span>

          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">

            One platform.

            <br />

            <span className="text-blue-600">
              Every salon experience.
            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base sm:leading-8">
            From discovering a salon to managing appointments and
            understanding business performance, Relax Mode connects
            customers and salon partners through one digital ecosystem.
          </p>

        </motion.div>


        {/* ================================================= */}
        {/* CENTRAL ECOSYSTEM */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-[32px] border border-blue-100 bg-white p-6 shadow-[0_25px_90px_rgba(37,99,235,0.09)] sm:p-10"
        >

          <BorderBeam
            size={180}
            duration={10}
            colorFrom="#2563eb"
            colorTo="#06b6d4"
          />

          {/* background glow */}

          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/50 blur-[90px]" />


          <div className="relative z-10">

            {/* ecosystem heading */}

            <div className="text-center">

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-600">
                Connected Beauty Ecosystem
              </p>

              <h3 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
                Customers. Salons. Growth.
              </h3>

            </div>


            {/* ecosystem nodes */}

            <div className="relative mx-auto mt-10 max-w-3xl">

              {/* connection lines */}

              <div className="absolute left-1/2 top-1/2 hidden h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-blue-100 via-blue-400 to-blue-100 lg:block" />


              <div className="grid items-center gap-5 lg:grid-cols-[1fr_180px_1fr]">

                {/* Customer */}

                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  className="relative rounded-2xl border border-blue-100 bg-blue-50/50 p-5"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">

                      <Scissors
                        size={20}
                        className="text-blue-600"
                      />

                    </div>

                    <div>

                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-600">
                        Customer
                      </p>

                      <p className="mt-1 text-sm font-bold text-gray-900">
                        Beauty Experience
                      </p>

                    </div>

                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">

                    {[
                      "Discover",
                      "Book",
                      "Relax",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white px-3 py-1 text-[9px] font-semibold text-gray-500 shadow-sm"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </motion.div>


                {/* CENTER */}

                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative z-20 mx-auto flex h-[140px] w-[140px] items-center justify-center rounded-full border border-blue-100 bg-white shadow-[0_15px_50px_rgba(37,99,235,0.15)]"
                >

                  <div className="flex h-[76px] w-[76px] items-center justify-center rounded-2xl bg-blue-600 shadow-lg shadow-blue-600/20">

                    <Zap
                      size={32}
                      className="text-white"
                    />

                  </div>

                </motion.div>


                {/* Salon */}

                <motion.div
                  whileHover={{
                    y: -5,
                  }}
                  className="relative rounded-2xl border border-cyan-100 bg-cyan-50/50 p-5"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">

                      <BarChart3
                        size={20}
                        className="text-cyan-600"
                      />

                    </div>

                    <div>

                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-600">
                        Salon Partner
                      </p>

                      <p className="mt-1 text-sm font-bold text-gray-900">
                        Business Growth
                      </p>

                    </div>

                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">

                    {[
                      "Manage",
                      "Analyze",
                      "Grow",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white px-3 py-1 text-[9px] font-semibold text-gray-500 shadow-sm"
                      >
                        {item}
                      </span>
                    ))}

                  </div>

                </motion.div>

              </div>

            </div>

          </div>

        </motion.div>


        {/* ================================================= */}
        {/* FEATURE BENTO */}
        {/* ================================================= */}

        <div className="mt-8 grid gap-5 lg:grid-cols-3">

          {features.map((feature, index) => {

            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                }}
                className={`group relative overflow-hidden rounded-[26px] border border-gray-100 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition-shadow duration-300 hover:shadow-[0_20px_60px_rgba(37,99,235,0.1)] ${feature.className}`}
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-blue-600">

                    <Icon
                      size={20}
                      className="text-blue-600 transition-colors group-hover:text-white"
                    />

                  </div>

                  <ArrowUpRight
                    size={17}
                    className="text-gray-300 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600"
                  />

                </div>

                <p className="mt-6 text-[9px] font-bold uppercase tracking-[0.25em] text-blue-600">
                  {feature.label}
                </p>

                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
                  {feature.text}
                </p>

              </motion.div>
            );
          })}

        </div>


        {/* ================================================= */}
        {/* CTA */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
          className="mt-10 flex flex-col items-center justify-between gap-6 rounded-[26px] border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-cyan-50 px-7 py-7 sm:flex-row sm:px-10"
        >

          <div>

            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-blue-600">
              Explore the real product
            </p>

            <h3 className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl">
              See what Relax Mode can do.
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Explore the platform, features and complete salon experience.
            </p>

          </div>


          <a
            href="https://relaxmode.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
          >

            Explore Relax Mode

            <ExternalLink
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />

          </a>

        </motion.div>


        {/* Small URL */}

        <p className="mt-4 text-center text-[10px] font-medium tracking-wider text-gray-300">
          relaxmode.in
        </p>

      </div>

    </section>
  );
};

export default RelaxModeEcosystem;