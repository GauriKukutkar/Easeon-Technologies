
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Smartphone,
  Cloud,
  Layers3,
  Megaphone,
  TrendingUp,
//   Workflow,
//   Palette,
//   ShieldCheck,
  CheckCircle2,
//   ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    number: "01",
    title: "Technology Solutions",
    subtitle: "Build. Innovate. Scale.",
    description:
      "We create digital experiences and technology platforms that help businesses modernise their operations and deliver better customer experiences.",
    icon: Code2,
    services: [
      "Website Design & Development",
      "Custom Software Development",
      "Web Applications",
      "Mobile Application Development",
      "UI/UX Design",
      "Business Automation",
    ],
    color: "from-blue-600 to-cyan-500",
  },
  {
    number: "02",
    title: "SaaS Products",
    subtitle: "Products Designed for Progress.",
    description:
      "Our product ecosystem focuses on simplifying business processes and creating connected digital experiences.",
    icon: Layers3,
    services: [
      "Relax Mode",
      "Easeon Nexus",
      "Digital Product Development",
      "Platform Management",
      "Product Innovation",
      "Scalable Solutions",
    ],
    color: "from-cyan-600 to-blue-700",
  },
  {
    number: "03",
    title: "Digital Marketing",
    subtitle: "Build a Stronger Digital Presence.",
    description:
      "We help brands establish their online identity, communicate effectively and reach the right audience through digital channels.",
    icon: Megaphone,
    services: [
      "Social Media Management",
      "Content Strategy",
      "Creative Design",
      "Brand Communication",
      "Digital Campaigns",
      "Online Brand Presence",
    ],
    color: "from-indigo-600 to-blue-600",
  },
  {
    number: "04",
    title: "Performance Marketing",
    subtitle: "Marketing Focused on Results.",
    description:
      "Create data-informed campaigns designed to improve audience reach, generate leads and support business growth.",
    icon: TrendingUp,
    services: [
      "Paid Advertising",
      "Meta Ads",
      "Google Ads",
      "Lead Generation",
      "Campaign Optimisation",
      "Performance Analytics",
    ],
    color: "from-blue-700 to-cyan-500",
  },
];

const process = [
  {
    title: "Understand",
    description: "We understand your business, goals and challenges.",
  },
  {
    title: "Strategise",
    description: "We identify the right approach and technology.",
  },
  {
    title: "Build",
    description: "We design, develop and implement the solution.",
  },
  {
    title: "Grow",
    description: "We refine and improve as your business evolves.",
  },
];

export default function Solutions() {
  return (
    <main className="overflow-hidden bg-white text-[#152B45]">

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#073C87] text-white">

        <div className="absolute inset-0 -z-10">
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-[#08B9D0]/20 blur-[120px]" />
          <div className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-blue-400/20 blur-[100px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#073C87] via-[#073C87]/95 to-[#073C87]/50" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:px-12 lg:grid-cols-2 lg:py-32">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-[0.2em] text-[#7DE8F4]">
              <span className="h-2 w-2 rounded-full bg-[#08B9D0]" />
              OUR SOLUTIONS
            </span>

            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Technology That
              <span className="block text-[#08B9D0]">
                Moves You Forward.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-blue-100/80">
              We combine technology, digital products and marketing
              expertise to help businesses build, innovate and grow
              in a connected world.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#our-solutions"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#08B9D0] px-7 py-4 text-sm font-bold text-[#062B55] shadow-lg transition hover:-translate-y-1 hover:bg-white"
              >
                Explore Solutions
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

              <a
                href="https://calendly.com/borkar-rahul002/30min?back=1&month=2026-11"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl border border-white/30 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-[#073C87]"
              >
                Book a Consultation
                <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/images/solutions-hero.jpg"
              alt="Technology and digital innovation"
              className="h-[330px] w-full rounded-3xl border border-white/10 object-cover shadow-2xl md:h-[450px]"
            />

            <div className="absolute -bottom-6 left-5 right-5 rounded-2xl border border-white/20 bg-white/95 p-5 text-[#152B45] shadow-xl backdrop-blur-lg md:left-10 md:right-10">
              <p className="text-xs font-bold tracking-widest text-[#08B9D0]">
                THE EASEON APPROACH
              </p>
              <p className="mt-2 text-lg font-extrabold">
                One Partner. Multiple Possibilities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold tracking-[0.2em] text-[#08AFC6]">
            WHAT WE BRING TO THE TABLE
          </span>

          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
            More Than Services.
            <span className="block text-[#073C87]">
              Complete Digital Capabilities.
            </span>
          </h2>

          <p className="mt-5 leading-8 text-gray-500">
            From building digital products to creating brand experiences
            and marketing strategies, we bring different capabilities
            together to support your business objectives.
          </p>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section
        id="our-solutions"
        className="bg-[#F3F5F8] px-6 py-20 md:px-12"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#08AFC6]">
                OUR EXPERTISE
              </span>

              <h2 className="mt-3 text-3xl font-black md:text-5xl">
                Solutions Built Around
                <span className="text-[#073C87]"> Your Business.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-500">
              Explore our core service areas and discover how we can
              support your next stage of growth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group overflow-hidden rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl md:p-9"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black tracking-widest text-gray-300">
                      {item.number}
                    </span>

                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} text-white shadow-lg`}
                    >
                      <Icon size={27} />
                    </div>
                  </div>

                  <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#08AFC6]">
                    {item.subtitle}
                  </p>

                  <h3 className="mt-3 text-2xl font-black text-[#152B45] md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-500">
                    {item.description}
                  </p>

                  <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {item.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center gap-2 text-sm font-medium text-[#42566E]"
                      >
                        <CheckCircle2
                          size={16}
                          className="shrink-0 text-[#08B9D0]"
                        />
                        {service}
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="mt-9 inline-flex items-center gap-3 text-sm font-bold text-[#073C87] transition-all hover:gap-5"
                  >
                    Discuss This Solution
                    <ArrowUpRight size={17} />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* SAAS PRODUCTS */}
      <section className="bg-white px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#08AFC6]">
                OUR PRODUCT ECOSYSTEM
              </span>

              <h2 className="mt-4 text-3xl font-black md:text-5xl">
                Building Products
                <span className="block text-[#073C87]">
                  Beyond Possibilities.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-gray-500">
                We also develop our own digital products, bringing
                technology and practical business needs together.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="h-1 w-12 rounded-full bg-[#08B9D0]" />
                <span className="text-sm font-bold text-[#073C87]">
                  Powered by Easeon Technologies
                </span>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-3xl bg-[#073C87] p-7 text-white">
                <Smartphone size={30} className="text-[#08B9D0]" />
                <h3 className="mt-8 text-2xl font-black">Relax Mode</h3>
                <p className="mt-3 text-sm leading-7 text-blue-100/75">
                  A salon and beauty business platform designed to
                  connect customers and salon owners.
                </p>
                <a
                  href="https://relaxmode.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#08D4E9]"
                >
                  Explore Product <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="rounded-3xl border border-[#073C87]/10 bg-[#F3F5F8] p-7">
                <Cloud size={30} className="text-[#08AFC6]" />
                <h3 className="mt-8 text-2xl font-black text-[#073C87]">
                  Easeon Nexus
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-500">
                  A SaaS product in the Easeon Technologies ecosystem.
                </p>
                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#073C87]"
                >
                  Know More <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#F3F5F8] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-xs font-bold tracking-[0.2em] text-[#08AFC6]">
              HOW WE WORK
            </span>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              From Idea to Impact.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, index) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <span className="text-3xl font-black text-[#08B9D0]">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-xl font-extrabold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-[#073C87] px-6 py-20 text-white md:px-12">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#08B9D0]/20 blur-[100px]" />

        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#08D4E9]">
              HAVE A PROJECT IN MIND?
            </span>

            <h2 className="mt-4 text-3xl font-black md:text-5xl">
              Let's Build Something
              <span className="block text-[#08B9D0]">
                That Matters.
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-blue-100/75">
              Tell us about your business goals. Let's explore the right
              technology and digital solutions together.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-xl bg-[#08B9D0] px-7 py-4 font-bold text-[#073C87] transition hover:-translate-y-1 hover:bg-white"
            >
              Start Your Project
              <ArrowUpRight size={18} />
            </Link>

            <a
              href="https://calendly.com/borkar-rahul002/30min?back=1&month=2026-11"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-[#073C87]"
            >
              Book a Meeting
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
