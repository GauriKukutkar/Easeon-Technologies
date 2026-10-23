import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
} from "lucide-react";

const Contact = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">

      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#1769ff 1px, transparent 1px),
            linear-gradient(90deg, #1769ff 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Blue glow */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-48 top-[45%] h-[450px] w-[450px] rounded-full bg-cyan-100/40 blur-[120px]"
      />


      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative z-10 px-6 pb-16 pt-16 sm:px-10 sm:pb-20 lg:px-16 lg:pt-20">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-5xl"
          >

            <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-blue-600">
              Let's connect
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-[0.9] tracking-[-0.055em] text-[#101828] sm:text-6xl lg:text-8xl">

              Let's build

              <br />

              <span className="text-gray-300">
                something meaningful.
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              Have an idea, a business challenge or a product
              you want to build? Tell us about it. We'd love to
              understand what you're working on.
            </p>

          </motion.div>

        </div>

      </section>


      {/* ================================================= */}
      {/* CONTACT AREA */}
      {/* ================================================= */}

      <section className="relative z-10 px-6 pb-24 sm:px-10 lg:px-16 lg:pb-32">

        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">

          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

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
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="flex flex-col justify-between"
          >

            {/* Visual */}

            <div className="relative min-h-[360px] overflow-hidden rounded-[32px] bg-[#07101c] p-8 sm:p-10">

              {/* Grid */}

              <div
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage: `
                    linear-gradient(#ffffff 1px, transparent 1px),
                    linear-gradient(90deg, #ffffff 1px, transparent 1px)
                  `,
                  backgroundSize: "45px 45px",
                }}
              />

              {/* Glow */}

              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.15, 0.3, 0.15],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 blur-[100px]"
              />

              {/* Center visual */}

              <div className="relative z-10 flex h-full min-h-[300px] items-center justify-center">

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-56 w-56 rounded-full border border-blue-400/20"
                />

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute h-40 w-40 rounded-full border border-blue-300/20"
                />

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
                  className="relative flex h-24 w-24 items-center justify-center rounded-[28px] bg-blue-600 shadow-[0_20px_70px_rgba(37,99,235,0.4)]"
                >

                  <Send
                    size={32}
                    className="text-white"
                  />

                </motion.div>

              </div>

              {/* Text */}

              <div className="absolute bottom-8 left-8 right-8 z-10 flex items-end justify-between">

                <div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-400">
                    Start a conversation
                  </p>

                  <p className="mt-2 text-sm text-white">
                    Your idea starts here.
                  </p>

                </div>

                <ArrowUpRight
                  size={18}
                  className="text-blue-400"
                />

              </div>

            </div>


            {/* Contact details */}

            <div className="mt-8 space-y-5">

              <a
                href="mailto:hello@easeontech.com"
                className="group flex items-center gap-4"
              >

                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  <Mail
                    size={17}
                    className="text-blue-600"
                  />
                </span>

                <div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
                    Email
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#101828] group-hover:text-blue-600">
                    hello@easeontech.com
                  </p>

                </div>

              </a>


              <a
                href="tel:+917841067968"
                className="group flex items-center gap-4"
              >

                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  <Phone
                    size={17}
                    className="text-blue-600"
                  />
                </span>

                <div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
                    Phone
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#101828] group-hover:text-blue-600">
                    +91 78410 67968
                  </p>

                </div>

              </a>


              <div className="flex items-center gap-4">

                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  <MapPin
                    size={17}
                    className="text-blue-600"
                  />
                </span>

                <div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
                    Office
                  </p>

                  <p className="mt-1 max-w-xs text-sm font-medium leading-6 text-[#101828]">
                    Nagpur, Maharashtra, India
                  </p>

                </div>

              </div>


              <div className="flex items-center gap-4">

                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                  <Clock3
                    size={17}
                    className="text-blue-600"
                  />
                </span>

                <div>

                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
                    Working Hours
                  </p>

                  <p className="mt-1 text-sm font-medium text-[#101828]">
                    Mon – Sat · 10:00 AM – 7:00 PM
                  </p>

                </div>

              </div>

            </div>

          </motion.div>


          {/* ================================================= */}
          {/* FORM */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="rounded-[32px] border border-gray-100 bg-white p-7 shadow-[0_25px_80px_rgba(15,23,42,0.06)] sm:p-10 lg:p-12"
          >

            <div className="mb-10">

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-600">
                Tell us about it
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#101828] sm:text-4xl">
                Start a conversation.
              </h2>

            </div>


            <form className="space-y-7">

              {/* Name */}

              <div>

                <label className="mb-2 block text-xs font-medium text-gray-500">
                  Your name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border-0 border-b border-gray-200 bg-transparent px-0 py-3 text-sm text-[#101828] outline-none transition-colors placeholder:text-gray-300 focus:border-blue-600"
                />

              </div>


              {/* Email */}

              <div>

                <label className="mb-2 block text-xs font-medium text-gray-500">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border-0 border-b border-gray-200 bg-transparent px-0 py-3 text-sm text-[#101828] outline-none transition-colors placeholder:text-gray-300 focus:border-blue-600"
                />

              </div>


              {/* Phone */}

              <div>

                <label className="mb-2 block text-xs font-medium text-gray-500">
                  Phone number
                </label>

                <input
                  type="tel"
                  placeholder="+91"
                  className="w-full border-0 border-b border-gray-200 bg-transparent px-0 py-3 text-sm text-[#101828] outline-none transition-colors placeholder:text-gray-300 focus:border-blue-600"
                />

              </div>


              {/* Requirement */}

              <div>

                <label className="mb-2 block text-xs font-medium text-gray-500">
                  What can we help you with?
                </label>

                <select
                  defaultValue=""
                  className="w-full border-0 border-b border-gray-200 bg-transparent px-0 py-3 text-sm text-[#101828] outline-none focus:border-blue-600"
                >

                  <option value="" disabled>
                    Select an option
                  </option>

                  <option>
                    Website / Digital Experience
                  </option>

                  <option>
                    Software Development
                  </option>

                  <option>
                    SaaS Product
                  </option>

                  <option>
                    Digital Marketing
                  </option>

                  <option>
                    Custom Technology Solution
                  </option>

                  <option>
                    Something else
                  </option>

                </select>

              </div>


              {/* Message */}

              <div>

                <label className="mb-2 block text-xs font-medium text-gray-500">
                  Tell us a little more
                </label>

                <textarea
                  rows={4}
                  placeholder="Tell us about your idea, project or challenge..."
                  className="w-full resize-none border-0 border-b border-gray-200 bg-transparent px-0 py-3 text-sm text-[#101828] outline-none transition-colors placeholder:text-gray-300 focus:border-blue-600"
                />

              </div>


              {/* Submit */}

              <div className="pt-3">

                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#101828] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
                >

                  Send enquiry

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 transition-transform group-hover:rotate-45">

                    <ArrowUpRight size={14} />

                  </span>

                </motion.button>

              </div>


              <p className="text-center text-[10px] leading-5 text-gray-400">
                We'll get back to you as soon as possible.
              </p>

            </form>

          </motion.div>

        </div>

      </section>


      {/* ================================================= */}
      {/* BOTTOM CTA */}
      {/* ================================================= */}

      <section className="relative z-10 border-t border-gray-100 bg-[#f8fbff] px-6 py-20 sm:px-10 lg:px-16">

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">

          <div>

            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-600">
              Prefer a direct conversation?
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-[#101828]">
              Let's talk about your next idea.
            </h3>

          </div>

          <a
            href="mailto:hello@easeontech.com"
            className="group inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-[#101828] shadow-sm transition-all hover:border-blue-200 hover:text-blue-600"
          >

            Email us

            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:rotate-45"
            />

          </a>

        </div>

      </section>

    </main>
  );
};

export default Contact;