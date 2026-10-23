import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  MapPin,
  Scissors,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";

const RelaxModeSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

      {/* BACKGROUND */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-48 top-20 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-48 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-100/50 blur-[130px]"
      />

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

      <div className="relative mx-auto max-w-7xl -m-25 px-6 lg:px-10">

        {/* SECTION HEADER */}

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
          className="mb-14 max-w-3xl"
        >

          <div className="flex items-center gap-3">

            <span className="h-px w-8 bg-blue-600" />

            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 sm:text-xs">
              Featured Product
            </span>

          </div>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">

            Meet
            <span className="text-blue-600">
              {" "}Relax Mode.
            </span>

          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-gray-500 sm:text-lg">
            A smarter salon ecosystem designed to make discovering,
            booking and managing salon experiences simpler, more
            predictable and more connected.
          </p>

        </motion.div>


        {/* MAIN SHOWCASE */}

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">


          {/* LEFT — PRODUCT STORY */}

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
              duration: 0.8,
            }}
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">

              <Sparkles
                size={14}
                className="text-blue-600"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-600">
                Next-Gen Beauty Platform
              </span>

            </div>


            <h3 className="mt-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">

              Making every salon visit
              <span className="text-blue-600">
                {" "}more predictable.
              </span>

            </h3>


            <p className="mt-5 max-w-xl text-base leading-7 text-gray-500">
              Relax Mode connects customers and salon owners through
              one intelligent platform — helping customers find the
              right salon while giving businesses better control over
              appointments, staff and operations.
            </p>

            {/* FLOW */}

            <div className="mt-8 space-y-3">

              {[
                {
                  icon: MapPin,
                  title: "Discover",
                  text: "Find salons that match your needs.",
                },
                {
                  icon: Scissors,
                  title: "Choose",
                  text: "Select services and preferred specialists.",
                },
                {
                  icon: CalendarCheck,
                  title: "Book",
                  text: "Pick a convenient date and time.",
                },
                {
                  icon: Clock3,
                  title: "Predict",
                  text: "Know when your appointment fits.",
                },
              ].map((item, index) => {

                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      x: -20,
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
                    whileHover={{
                      x: 6,
                    }}
                    className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all hover:border-blue-100 hover:shadow-md"
                  >

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-blue-600">

                      <Icon
                        size={19}
                        className="text-blue-600 transition-colors group-hover:text-white"
                      />

                    </div>

                    <div className="flex-1">

                      <h4 className="text-sm font-bold text-gray-900">
                        {item.title}
                      </h4>

                      <p className="mt-0.5 text-xs text-gray-400">
                        {item.text}
                      </p>

                    </div>

                    <CheckCircle2
                      size={17}
                      className="text-gray-200 transition-colors group-hover:text-blue-500"
                    />

                  </motion.div>
                );
              })}

            </div>


            {/* CTA */}

            <button className="group mt-8 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700">

              Explore Relax Mode

              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />

            </button>

          </motion.div>

          {/* RIGHT — BOOKING EXPERIENCE */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
              scale: 0.95,
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
            className="relative"
          >

            {/* Glow */}

            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200 blur-[100px]"
            />

            {/* MAIN PRODUCT CARD */}

            <div className="relative z-10 rounded-[32px] border border-gray-100 bg-white p-5 shadow-[0_30px_90px_rgba(37,99,235,0.12)] sm:p-7">

              {/* Header */}

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                    Relax Mode
                  </p>

                  <h4 className="mt-1 text-xl font-bold text-gray-900">
                    Your next visit
                  </h4>

                </div>


                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">

                  <Scissors
                    size={20}
                    className="text-white"
                  />

                </div>

              </div>

              {/* APPOINTMENT CARD */}

              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="mt-6 rounded-2xl border border-blue-100 bg-blue-50/60 p-5"
              >

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs font-medium text-gray-400">
                      Appointment
                    </p>

                    <p className="mt-1 text-lg font-bold text-gray-900">
                      Hair Styling
                    </p>

                  </div>

                  <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-semibold text-green-600">
                    CONFIRMED
                  </span>

                </div>


                <div className="mt-5 grid grid-cols-2 gap-3">

                  <div className="rounded-xl bg-white p-3">

                    <p className="text-[9px] text-gray-400">
                      Date
                    </p>

                    <p className="mt-1 text-sm font-bold text-gray-900">
                      Tomorrow
                    </p>

                  </div>


                  <div className="rounded-xl bg-white p-3">

                    <p className="text-[9px] text-gray-400">
                      Time
                    </p>

                    <p className="mt-1 text-sm font-bold text-blue-600">
                      05:30 PM
                    </p>

                  </div>

                </div>

              </motion.div>


              {/* ================================================= */}
              {/* PREDICTIVE TIMELINE */}
              {/* ================================================= */}

              <div className="mt-6">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-xs font-semibold text-gray-900">
                      Visit Timeline
                    </p>

                    <p className="mt-1 text-[10px] text-gray-400">
                      Designed around your appointment
                    </p>

                  </div>

                  <Clock3
                    size={17}
                    className="text-blue-500"
                  />

                </div>


                <div className="relative mt-5">

                  {/* Line */}

                  <div className="absolute left-3 top-2 bottom-2 w-px bg-blue-100" />


                  {[
                    "Booking confirmed",
                    "Specialist assigned",
                    "Service begins",
                    "Appointment complete",
                  ].map((step, index) => (

                    <motion.div
                      key={step}
                      initial={{
                        opacity: 0.3,
                      }}
                      animate={{
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.6,
                      }}
                      className="relative mb-4 flex items-center gap-4 last:mb-0"
                    >

                      <div className="relative z-10 h-6 w-6 rounded-full border-4 border-white bg-blue-500 shadow-sm" />

                      <span className="text-xs font-medium text-gray-600">
                        {step}
                      </span>

                    </motion.div>

                  ))}

                </div>

              </div>


              {/* ================================================= */}
              {/* BOTTOM STATS */}
              {/* ================================================= */}

              <div className="mt-6 grid grid-cols-3 gap-3">

                <div className="rounded-xl bg-gray-50 p-3 text-center">

                  <Users
                    size={16}
                    className="mx-auto text-blue-500"
                  />

                  <p className="mt-2 text-[10px] text-gray-400">
                    Customers
                  </p>

                </div>


                <div className="rounded-xl bg-gray-50 p-3 text-center">

                  <CalendarCheck
                    size={16}
                    className="mx-auto text-blue-500"
                  />

                  <p className="mt-2 text-[10px] text-gray-400">
                    Bookings
                  </p>

                </div>


                <div className="rounded-xl bg-gray-50 p-3 text-center">

                  <Zap
                    size={16}
                    className="mx-auto text-blue-500"
                  />

                  <p className="mt-2 text-[10px] text-gray-400">
                    Smarter
                  </p>

                </div>

              </div>

            </div>


            {/* ================================================= */}
            {/* FLOATING LABEL */}
            {/* ================================================= */}

            <motion.div
              animate={{
                y: [0, -9, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -bottom-5 -left-4 z-20 rounded-2xl border border-gray-100 bg-white px-5 py-4 shadow-xl sm:-left-7"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50">

                  <CheckCircle2
                    size={18}
                    className="text-green-500"
                  />

                </div>

                <div>

                  <p className="text-[9px] uppercase tracking-[0.2em] text-gray-400">
                    Experience
                  </p>

                  <p className="mt-0.5 text-xs font-bold text-gray-900">
                    Simple. Connected. Predictable.
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default RelaxModeSection;