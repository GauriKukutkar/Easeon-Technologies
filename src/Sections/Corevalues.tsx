
import { motion } from "framer-motion";
import {
  HeartHandshake,
  Lightbulb,
  Users,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

const Corevalues = () => {

return (
    <>
   {/* ========================================================= */}
{/* CORE VALUES */}
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
    className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-blue-600/15 blur-[120px]"
  />

  <motion.div
    animate={{
      x: [0, -60, 0],
      y: [0, 40, 0],
      scale: [1, 1.15, 1],
    }}
    transition={{
      duration: 16,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[120px]"
  />

  {/* Animated Light */}

  <motion.div
    animate={{
      x: ["-100%", "200%"],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
  />

  {/* Grid */}

  <div
    className="absolute inset-0 opacity-[0.035]"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)
      `,
      backgroundSize: "42px 42px",
    }}
  />


  <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">

    {/* ================================================= */}
    {/* HEADER */}
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
      className="mx-auto max-w-2xl text-center"
    >

      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-400 sm:text-xs">
        Our Core Values
      </span>

      <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[42px]">
        The Principles
        <span className="text-blue-400">
          {" "}Behind Our Work.
        </span>
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400">
        The values that shape how we think, collaborate, build products
        and create lasting relationships with our customers.
      </p>

    </motion.div>


    {/* ================================================= */}
    {/* VALUES GRID */}
    {/* ================================================= */}

    <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

      {[
        {
          number: "01",
          title: "Customer First",
          description:
            "We begin with understanding the customer and building solutions around what truly matters.",
          icon: HeartHandshake,
        },
        {
          number: "02",
          title: "Innovation",
          description:
            "We continuously explore new ideas, technologies and smarter ways to solve problems.",
          icon: Lightbulb,
        },
        {
          number: "03",
          title: "Teamwork",
          description:
            "We believe great outcomes come from collaboration, shared knowledge and mutual support.",
          icon: Users,
        },
        {
          number: "04",
          title: "Accountability",
          description:
            "We take ownership of our decisions, commitments and the results we deliver.",
          icon: ShieldCheck,
        },
        {
          number: "05",
          title: "Excellence",
          description:
            "We focus on quality, attention to detail and continuous improvement in everything we do.",
          icon: Sparkles,
        },
        {
          number: "06",
          title: "Impact",
          description:
            "We measure our work by the meaningful difference it creates for businesses and people.",
          icon: Target,
        },
      ].map((value, index) => {

        const Icon = value.icon;

        return (
          <motion.div
            key={value.number}
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
              margin: "-50px",
            }}
            transition={{
              duration: 0.55,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            whileHover={{
              y: -7,
              transition: {
                duration: 0.25,
              },
            }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/30 hover:bg-white/[0.07] hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] sm:p-6"
          >

            {/* Card Glow */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileHover={{
                opacity: 1,
              }}
              className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/15 blur-3xl"
            />


            {/* Top */}

            <div className="relative flex items-center justify-between">

              {/* Icon */}

              <motion.div
                whileHover={{
                  rotate: [0, -8, 8, 0],
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10"
              >

                <Icon
                  size={21}
                  strokeWidth={1.8}
                  className="text-blue-400"
                />

              </motion.div>


              {/* Number */}

              <span className="text-[10px] font-semibold tracking-[0.15em] text-slate-600">
                {value.number}
              </span>

            </div>


            {/* Content */}

            <div className="relative">

              <h3 className="mt-5 text-base font-semibold text-white sm:text-lg">
                {value.title}
              </h3>

              <p className="mt-2 text-xs leading-6 text-slate-400 sm:text-sm">
                {value.description}
              </p>

            </div>


            {/* Animated Bottom Accent */}

            <motion.div
              initial={{
                width: "18%",
              }}
              whileHover={{
                width: "55%",
              }}
              transition={{
                duration: 0.35,
              }}
              className="relative mt-5 h-[2px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
            />

          </motion.div>
        );
      })}

    </div>


    {/* ================================================= */}
    {/* BOTTOM STATEMENT */}
    {/* ================================================= */}

    <motion.div
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
        delay: 0.5,
      }}
      className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-3"
    >

      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />

      <span className="text-center text-[10px] font-medium text-slate-500 sm:text-xs">
        Values that turn ideas into meaningful outcomes.
      </span>

      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />

    </motion.div>

  </div>

</section>

    </>
  );
};

export default Corevalues;