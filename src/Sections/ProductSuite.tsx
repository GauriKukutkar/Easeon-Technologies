import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Smartphone,
  UserRound,
} from "lucide-react";

const products = [
  {
    title: "Customer App",
    subtitle: "For Salon Clients",
    description:
      "Discover nearby salons, explore services, choose your specialist and manage your bookings — all in one place.",
    icon: UserRound,
    image: "/images/relax-customer-app.png",
    accent: "blue",
  },
  {
    title: "Partner Web Dashboard",
    subtitle: "For Salon Partners",
    description:
      "Manage appointments, staff, services, customers and business performance from one powerful workspace.",
    icon: CalendarDays,
    image: "/images/relax-partner-dashboard.png",
    accent: "indigo",
  },
  {
    title: "Partner Mobile App",
    subtitle: "For Salon Partners",
    description:
      "Run your salon business on the go. Manage bookings, schedules, notifications and growth from anywhere.",
    icon: Smartphone,
    image: "/images/relax-partner-mobile.png",
    accent: "cyan",
  },
];

const ProductSuite = () => {
  return (

    <>

    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

      {/* BACKGROUND */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -25, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-52 top-20 h-[450px] w-[450px] rounded-full bg-blue-100/50 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-52 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-100/40 blur-[130px]"
      />

      {/* Subtle grid */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(#2563eb 1px, transparent 1px),
            linear-gradient(90deg, #2563eb 1px, transparent 1px)
          `,
          backgroundSize: "55px 55px",
        }}
      />

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
          className="mx-auto max-w-2xl text-center"
        >

          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-blue-600 sm:text-xs">
            Our Product Suite
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            One Ecosystem.
            <br />
            <span className="text-blue-600">
              Multiple Experiences.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Relax Mode brings salon customers and salon partners together
            through connected digital experiences built for the modern
            beauty industry.
          </p>

        </motion.div>


        {/* ================================================= */}
        {/* PRODUCT CARDS */}
        {/* ================================================= */}

        <div className="mt-14 grid gap-6 lg:grid-cols-3">

          {products.map((product, index) => {

            const Icon = product.icon;

            return (
              <motion.div
                key={product.title}
                initial={{
                  opacity: 0,
                  y: 45,
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
                  duration: 0.65,
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.06)] transition-shadow duration-500 hover:shadow-[0_25px_70px_rgba(37,99,235,0.12)]"
              >

                {/* Top gradient */}

                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />


                {/* ================================================= */}
                {/* PRODUCT INFO */}
                {/* ================================================= */}

                <div className="p-6 sm:p-7">

                  <div className="flex items-start justify-between">

                    <div className="flex items-center gap-3">

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 transition-all duration-300 group-hover:bg-blue-600">

                        <Icon
                          size={20}
                          className="text-blue-600 transition-colors duration-300 group-hover:text-white"
                        />

                      </div>

                      <div>

                        <h3 className="text-lg font-bold text-gray-900">
                          {product.title}
                        </h3>

                        <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-blue-600">
                          {product.subtitle}
                        </p>

                      </div>

                    </div>

                  </div>


                  <p className="mt-5 min-h-[72px] text-sm leading-6 text-gray-500">
                    {product.description}
                  </p>

                </div>


                {/* ================================================= */}
                {/* PRODUCT VISUAL */}
                {/* ================================================= */}

                <div className="relative mx-5 overflow-hidden rounded-[22px] border border-gray-100 bg-gradient-to-b from-blue-50/70 to-gray-50 sm:mx-6">

                  {/* Glow */}

                  <div className="pointer-events-none absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/40 blur-3xl" />


                  {/* Product image */}

                  <motion.img
                    src={product.image}
                    alt={product.title}
                    initial={{
                      y: 18,
                      opacity: 0.85,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.12 + 0.15,
                    }}
                    className={
                      index === 1
                        ? "relative z-10 mx-auto mt-8 h-[220px] w-[92%] object-contain object-bottom drop-shadow-[0_20px_30px_rgba(15,23,42,0.14)] transition-transform duration-700 group-hover:scale-[1.03]"
                        : "relative z-10 mx-auto mt-5 h-[250px] w-[70%] object-contain object-bottom drop-shadow-[0_20px_30px_rgba(15,23,42,0.16)] transition-transform duration-700 group-hover:scale-[1.04]"
                    }
                  />

                </div>


                {/* ================================================= */}
                {/* FOOTER */}
                {/* ================================================= */}

                <div className="flex items-center justify-between px-6 py-6 sm:px-7">

                  <button className="group/link flex items-center gap-2 text-xs font-semibold text-blue-600">

                    Learn More

                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover/link:translate-x-1"
                    />

                  </button>

                  <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-gray-300">
                    Relax Mode
                  </span>

                </div>

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
          className="relative mt-10 overflow-hidden rounded-[24px] border border-blue-100 bg-gradient-to-r from-blue-50/70 via-white to-cyan-50/60 px-6 py-7 sm:px-10"
        >

          <div className="relative z-10 flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

            <div>

              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600">
                Built for the Modern Salon Industry
              </p>

              <h3 className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl">
                Connecting customers, salons and technology.
              </h3>

            </div>


            <div className="flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-3 shadow-sm">

              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />

              <span className="text-xs font-semibold text-gray-600">
                One connected ecosystem
              </span>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

      </>
  );
};

export default ProductSuite;