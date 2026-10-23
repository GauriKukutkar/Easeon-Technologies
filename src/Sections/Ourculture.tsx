import {
  UsersRound,
  BookOpen,
  Heart,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import OfficeCulture from "../assets/images/office-image.png";

const Ourculture = () => {
  return (
    <>
     {/* ========================================================= */}
{/* OUR CULTURE */}
{/* ========================================================= */}

<section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

  {/* ===================================================== */}
  {/* ANIMATED BACKGROUND */}
  {/* ===================================================== */}

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
    className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-blue-100/60 blur-[120px]"
  />

  <motion.div
    animate={{
      x: [0, -60, 0],
      y: [0, 40, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 16,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-100/50 blur-[120px]"
  />

  {/* ===================================================== */}
  {/* SUBTLE NETWORK BACKGROUND */}
  {/* ===================================================== */}

  <svg
    className="pointer-events-none absolute right-0 top-0 h-[500px] w-[700px] opacity-[0.12]"
    viewBox="0 0 700 500"
    fill="none"
  >

    <motion.path
      d="M50 380 C180 250 240 430 360 280 C470 140 540 240 690 70"
      stroke="#2563EB"
      strokeWidth="1"
      strokeDasharray="5 8"
      animate={{
        strokeDashoffset: [0, -120],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "linear",
      }}
    />

    <motion.path
      d="M100 100 C230 200 300 80 420 180 C530 280 590 160 700 300"
      stroke="#06B6D4"
      strokeWidth="1"
      strokeDasharray="4 10"
      animate={{
        strokeDashoffset: [0, 120],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      }}
    />

  </svg>


  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

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
    >

      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-600 sm:text-xs">
        How We Work
      </span>

      <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
        Our Culture
      </h2>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
        We foster a culture of creativity, collaboration and continuous
        learning. Our people are our greatest strength.
      </p>

    </motion.div>


    {/* ================================================= */}
    {/* MAIN CONTENT */}
    {/* ================================================= */}

    <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-20">


      {/* ================================================= */}
      {/* LEFT — CULTURE PRINCIPLES */}
      {/* ================================================= */}

      <div className="space-y-3 sm:space-y-4">

        {[
          {
            icon: UsersRound,
            title: "Collaborative Environment",
            description:
              "Open communication and knowledge sharing are at the heart of our culture.",
          },
          {
            icon: BookOpen,
            title: "Learning & Growth",
            description:
              "We invest in our people and encourage continuous learning and improvement.",
          },
          {
            icon: Heart,
            title: "Work-Life Balance",
            description:
              "We believe happy, balanced people build stronger teams and better products.",
          },
          {
            icon: Sparkles,
            title: "Diversity & Inclusion",
            description:
              "We celebrate different perspectives and create a culture of respect and inclusion.",
          },
        ].map((item, index) => {

          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
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
                margin: "-50px",
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              whileHover={{
                x: 6,
              }}
              className="group flex gap-4 rounded-2xl p-3 transition-all duration-300 hover:bg-blue-50/50 sm:gap-5 sm:p-4"
            >

              {/* Icon */}

              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 4,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-blue-50 sm:h-12 sm:w-12"
              >

                <Icon
                  size={21}
                  strokeWidth={1.8}
                  className="text-blue-600"
                />

              </motion.div>


              {/* Content */}

              <div>

                <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                  {item.title}
                </h3>

                <p className="mt-1.5 max-w-xl text-xs leading-6 text-gray-500 sm:text-sm">
                  {item.description}
                </p>

              </div>

            </motion.div>
          );

        })}

      </div>


      {/* ================================================= */}
      {/* RIGHT — IMAGE */}
      {/* ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          x: 40,
          scale: 0.96,
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
          ease: "easeOut",
        }}
        className="relative mx-auto w-full max-w-[470px]"
      >

        {/* Image Glow */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -inset-8 rounded-[40px] bg-blue-100 blur-3xl"
        />


        {/* Image */}

        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-2xl"
        >

          <img
            src={OfficeCulture}
            alt="Easeon Technologies team"
            className="h-[380px] w-full object-cover sm:h-[430px]"
          />

          {/* Image Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

        </motion.div>


        {/* ================================================= */}
        {/* FLOATING BADGE */}
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
          className="absolute -bottom-5 left-4 z-20 flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-600 px-5 py-4 text-white shadow-xl sm:-left-6"
        >

          {/* Heart Circle */}

          <motion.div
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15"
          >

            <Heart
              size={19}
              fill="currentColor"
              className="text-white"
            />

          </motion.div>


          <div>

            <p className="text-[9px] uppercase tracking-[0.15em] text-blue-100">
              Our Belief
            </p>

            <p className="mt-0.5 text-sm font-semibold">
              People Make The Difference
            </p>

          </div>

        </motion.div>


        {/* ================================================= */}
        {/* FLOATING DOTS */}
        {/* ================================================= */}

        <motion.span
          animate={{
            y: [0, -12, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="absolute -right-4 top-12 z-20 h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,.5)]"
        />

        <motion.span
          animate={{
            y: [0, 10, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: 1,
          }}
          className="absolute -left-3 top-28 z-20 h-2 w-2 rounded-full bg-cyan-400"
        />

      </motion.div>

    </div>

  </div>

</section>

 </>
  );
};

export default Ourculture;