
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Database,
  Layers3,
  Monitor,
  ShieldCheck,
  Workflow,
  Zap,
  Settings2,
  Building2,
  ShoppingCart,
  BarChart3,
  Cpu,
  Rocket,
} from "lucide-react";

const capabilities = [
  {
    icon: Building2,
    title: "Enterprise Software",
    desc: "Business-focused systems designed to manage complex operations, teams, data and workflows.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    desc: "Reduce repetitive manual work with connected systems and automated business processes.",
  },
  {
    icon: Database,
    title: "Database & Backend Systems",
    desc: "Structured, secure and scalable backend architecture built around your application requirements.",
  },
  {
    icon: Layers3,
    title: "Custom Application Development",
    desc: "Purpose-built applications designed around your unique business logic and operational needs.",
  },
  {
    icon: Settings2,
    title: "Software Modernization",
    desc: "Improve existing software with better architecture, functionality and modern technology.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    desc: "Ongoing improvements, performance monitoring, security updates and technical support.",
  },
];

const solutions = [
  {
    icon: BarChart3,
    title: "Business Management Systems",
    desc: "Manage business operations, reporting, customers and internal processes from one platform.",
  },
  {
    icon: ShoppingCart,
    title: "CRM & ERP Solutions",
    desc: "Organize customer relationships, resources, sales and business activities.",
  },
  {
    icon: Monitor,
    title: "Admin & Management Portals",
    desc: "Centralized dashboards that give teams better visibility and control over operations.",
  },
  {
    icon: Cpu,
    title: "Industry-Specific Software",
    desc: "Software designed around the workflows and requirements of your industry.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover & Understand",
    desc: "We begin by understanding your business, existing challenges, users and project objectives.",
  },
  {
    number: "02",
    title: "Plan & Architect",
    desc: "We define the requirements, application structure, technology choices and development roadmap.",
  },
  {
    number: "03",
    title: "Design & Develop",
    desc: "Our team develops the solution with a focus on functionality, usability and maintainable code.",
  },
  {
    number: "04",
    title: "Test & Refine",
    desc: "We test features, identify issues and refine the software before deployment.",
  },
  {
    number: "05",
    title: "Deploy & Support",
    desc: "We help launch the solution and provide ongoing support as your business evolves.",
  },
];

const technologies = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "JavaScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Express.js", "REST APIs"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"],
  },
  {
    category: "Cloud & Tools",
    items: ["AWS", "Docker", "Git", "CI/CD"],
  },
];

const faqs = [
  {
    question: "What is custom software development?",
    answer:
      "Custom software development involves creating applications specifically around your business requirements, workflows and objectives instead of relying entirely on generic off-the-shelf products.",
  },
  {
    question: "Can you develop software for an existing business?",
    answer:
      "Yes. We can understand your existing processes and develop new systems, improve current applications or integrate software into your existing business environment.",
  },
  {
    question: "How long does a software development project take?",
    answer:
      "The timeline depends on the project's scope, features, integrations and technical complexity. We define milestones and a development roadmap after understanding your requirements.",
  },
  {
    question: "Will the software be scalable?",
    answer:
      "We consider future requirements while planning the architecture so the software can be extended as your business, users and operational needs grow.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes. Maintenance can include bug fixes, updates, performance improvements, security enhancements and additional features.",
  },
];

const SoftwareDevelopment = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="w-full overflow-x-clip bg-white text-[#101828]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071D46] py-20 text-white sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full border border-blue-300/10" />
        <div className="pointer-events-none absolute -right-20 -top-20 h-[350px] w-[350px] rounded-full border border-cyan-300/15" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[110px]" />

        <div className="relative mt-5 mx-auto grid w-full max-w-[1280px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 xl:px-16">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-300">
              <Code2 size={14} />
              Software Development
            </div>

            <h1 className="mt-7 text-4xl font-semibold leading-[1.1] tracking-[-0.045em] sm:text-5xl lg:text-[64px]">
              Software built around
              <span className="block text-cyan-300">
                your business.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-blue-100/75 sm:text-base">
              Turn complex business requirements into practical digital
              solutions. We build custom software that helps businesses
              streamline operations, connect processes and move forward
              with confidence.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#08B9D2] px-7 py-4 text-sm font-semibold text-[#071D46] transition hover:bg-white"
              >
                Discuss Your Project
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#our-process"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Explore Our Process
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">
              {["Business-focused", "Scalable architecture", "Built around your needs"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-xs text-blue-100/70">
                  <Check size={14} className="text-cyan-300" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* HERO VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="absolute inset-8 rounded-full bg-blue-500/20 blur-[80px]" />

            <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-[#0B2B60] p-5 shadow-2xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <span className="text-xs font-semibold tracking-wide text-white/80">
                    SOFTWARE / SYSTEM ARCHITECTURE
                  </span>
                </div>
                <Code2 size={19} className="text-cyan-300" />
              </div>

              <div className="mt-7 space-y-4">
                <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-cyan-200">
                      Business Application
                    </span>
                    <Monitor size={19} className="text-cyan-300" />
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="rounded-xl bg-white/5 p-3">
                        <div className="h-2 w-8 rounded-full bg-cyan-300/50" />
                        <div className="mt-3 h-5 w-full rounded bg-white/10" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="h-8 w-px bg-gradient-to-b from-cyan-300 to-blue-400" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Database className="text-cyan-300" size={22} />
                    <p className="mt-3 text-xs font-semibold text-white">Data Layer</p>
                    <p className="mt-1 text-[10px] text-blue-100/50">Structured & secure</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <Workflow className="text-cyan-300" size={22} />
                    <p className="mt-3 text-xs font-semibold text-white">Business Logic</p>
                    <p className="mt-1 text-[10px] text-blue-100/50">Connected workflows</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-blue-300/20 bg-blue-500/10 p-4">
                  <div className="flex items-center gap-3">
                    <ShieldCheck size={20} className="shrink-0 text-cyan-300" />
                    <div>
                      <p className="text-xs font-semibold text-white">Designed for your requirements</p>
                      <p className="mt-1 text-[10px] text-blue-100/55">Architecture · Functionality · Integration</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-[9px] uppercase tracking-[0.2em] text-blue-100/40">
                  From concept to deployment
                </span>
                <Zap size={16} className="text-cyan-300" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12 xl:px-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              A Better Way to Build
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Your business is unique.
              <span className="block text-blue-600">
                Your software should be too.
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-8 text-gray-500 sm:text-base">
            <p>
              Every business has its own way of working. Standard software
              may solve some problems, but it doesn't always fit the way
              your team operates.
            </p>
            <p>
              At Easeon Technologies, we approach software development by
              understanding your requirements first. We focus on building
              solutions around your workflows, users and long-term business
              objectives.
            </p>
            <p>
              From individual business applications to connected enterprise
              systems, our goal is to make technology useful, reliable and
              easier to work with.
            </p>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-[#F4F8FE] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              What We Do
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Software development capabilities
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-500">
              The right technical approach for the challenges your business
              needs to solve.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group rounded-[22px] border border-blue-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOFTWARE TYPES */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid items-end gap-6 lg:grid-cols-[1fr_0.7fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
                What We Build
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Solutions designed for real business needs.
              </h2>
            </div>
            <p className="text-sm leading-7 text-gray-500">
              We develop different types of business software based on
              your requirements, industry and operational goals.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {solutions.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-[22px] border border-gray-100 bg-white p-6 transition hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 sm:p-8"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F0F6FF] text-blue-600">
                    <Icon size={23} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-gray-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section id="our-process" className="bg-[#071D46] py-20 text-white sm:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
              How We Work
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A clear process. A purposeful outcome.
            </h2>
            <p className="mt-4 text-sm leading-7 text-blue-100/60">
              A structured development approach that keeps your project
              aligned with its goals at every stage.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative border-t border-white/15 pt-6"
              >
                <span className="text-4xl font-semibold tracking-tight text-cyan-300/80">
                  {item.number}
                </span>
                <h3 className="mt-5 text-base font-semibold">{item.title}</h3>
                <p className="mt-3 text-xs leading-7 text-blue-100/55">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="bg-[#F4F8FE] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              Technology Stack
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              The right tools for the right solution.
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-500">
              Technology choices are based on the needs, scale and
              architecture of each project.
            </p>
          </div>

          <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {technologies.map((tech) => (
              <div
                key={tech.category}
                className="rounded-[20px] border border-blue-100 bg-white p-6"
              >
                <h3 className="text-sm font-bold text-blue-700">
                  {tech.category}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {tech.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-gray-100 bg-[#F8FAFD] px-3 py-2 text-[11px] font-medium text-gray-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EASEON */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12 xl:px-16">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#0B3B8F] via-[#0866FF] to-[#08B9D2] p-8 text-white sm:p-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/20" />
            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                <Rocket size={27} />
              </div>
              <p className="mt-16 text-[10px] font-bold uppercase tracking-[0.25em] text-white/60">
                The Easeon Approach
              </p>
              <h3 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                Technology should solve problems, not create more.
              </h3>
              <p className="mt-6 text-sm leading-7 text-white/70">
                We focus on understanding the reason behind every
                requirement and building software with a clear purpose.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              Why Easeon Technologies
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              More than development.
              <span className="block text-blue-600">
                A thoughtful technology partnership.
              </span>
            </h2>

            <div className="mt-9 space-y-6">
              {[
                ["Requirement-first approach", "We understand your business and its challenges before deciding what to build."],
                ["Practical technical decisions", "We focus on suitable technologies and solutions rather than unnecessary complexity."],
                ["Focus on usability", "We consider the people who will actually use the software every day."],
                ["Long-term perspective", "We plan with future improvements, maintenance and business growth in mind."],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-600">
                    <Check size={15} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-500">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F4F8FE] py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12 xl:px-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              Common Questions
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Frequently asked questions.
            </h2>
            <p className="mt-5 text-sm leading-7 text-gray-500">
              Have a question about building custom software?
              Here are some things businesses commonly ask.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-blue-100 bg-white"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenFaq(openFaq === index ? null : index)
                  }
                  aria-expanded={openFaq === index}
                  className="flex w-full items-center justify-between gap-5 p-5 text-left sm:p-6"
                >
                  <span className="text-sm font-semibold text-[#101828]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={19}
                    className={`shrink-0 text-blue-600 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaq === index && (
                  <div className="px-5 pb-6 sm:px-6">
                    <p className="border-t border-gray-100 pt-5 text-sm leading-7 text-gray-500">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="relative overflow-hidden rounded-[28px] bg-[#0B3B8F] px-7 py-14 text-center text-white sm:px-12 sm:py-16">
            <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full border border-white/10" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                Have a Project in Mind?
              </p>
              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Let's build something
                <span className="block text-cyan-300">that works for you.</span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-blue-100/70">
                Tell us about your business challenges and software
                requirements. Let's explore the right solution together.
              </p>
              <a
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-blue-700 transition hover:bg-cyan-100"
              >
                Start a Conversation
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SoftwareDevelopment;
