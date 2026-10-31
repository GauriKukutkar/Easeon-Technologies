
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Globe,
  Monitor,
  Smartphone,
  LayoutDashboard,
  ShoppingCart,
  Layers3,
  Search,
  Gauge,
  ShieldCheck,
  Workflow,
  PenTool,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    desc: "Professional websites that communicate your brand, services and business value with clarity.",
  },
  {
    icon: LayoutDashboard,
    title: "Web Applications",
    desc: "Interactive browser-based applications designed around your business workflows and requirements.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    desc: "Online stores with product catalogs, shopping experiences and integrated business functionality.",
  },
  {
    icon: Monitor,
    title: "Corporate Portals",
    desc: "Centralized web platforms for employees, customers, partners and business operations.",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    desc: "Web experiences that adapt seamlessly to desktops, tablets and mobile devices.",
  },
  {
    icon: Workflow,
    title: "Custom Web Solutions",
    desc: "Purpose-built websites and platforms with custom features, integrations and functionality.",
  },
];

const features = [
  {
    icon: PenTool,
    title: "UI-focused Experiences",
    desc: "Clean layouts, intuitive navigation and thoughtfully structured interfaces.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    desc: "Efficient implementation focused on loading speed and smooth interactions.",
  },
  {
    icon: Search,
    title: "SEO-friendly Structure",
    desc: "Organized page structures and technical foundations that support search visibility.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Development",
    desc: "Maintainable code, validation and careful implementation of website functionality.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    desc: "We understand your business, audience, objectives and website requirements.",
  },
  {
    number: "02",
    title: "Plan & Design",
    desc: "We structure the website and plan its visual experience, content and functionality.",
  },
  {
    number: "03",
    title: "Develop",
    desc: "We turn the approved design into a responsive and functional web experience.",
  },
  {
    number: "04",
    title: "Test",
    desc: "We review responsiveness, functionality, compatibility and performance.",
  },
  {
    number: "05",
    title: "Launch",
    desc: "We prepare the website for deployment and help bring your digital presence online.",
  },
];

const technologies = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Python", "REST APIs"],
  },
  {
    category: "Database",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  },
  {
    category: "Development Tools",
    items: ["Git", "GitHub", "Vite", "Tailwind CSS", "Docker"],
  },
];

const faqs = [
  {
    question: "What types of websites do you develop?",
    answer:
      "We can develop business websites, corporate websites, e-commerce platforms, web applications, portals and custom web solutions based on project requirements.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. We design and develop responsive websites that adapt to different screen sizes, including desktops, tablets and smartphones.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can review your existing website and work on its design, usability, structure, functionality and technical implementation.",
  },
  {
    question: "Can you integrate third-party services?",
    answer:
      "Where supported by the required services and APIs, we can integrate payment gateways, CRM systems, communication tools and other business platforms.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Maintenance requirements can include content updates, bug fixes, technical improvements, security updates and additional functionality.",
  },
];

const WebDevelopment = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="w-full overflow-x-clip bg-white text-[#101828]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071D46] py-20 text-white sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-cyan-300/10" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-[320px] w-[320px] rounded-full border border-blue-300/15" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 xl:px-16">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-300">
              <Globe size={14} />
              Web Development
            </div>

            <h1 className="mt-7 text-4xl font-semibold leading-[1.1] tracking-[-0.045em] sm:text-5xl lg:text-[64px]">
              Your business deserves
              <span className="block text-cyan-300">
                a powerful web presence.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-blue-100/75 sm:text-base">
              From professional business websites to advanced web
              applications, we create digital experiences that connect
              businesses with people and turn ideas into functional
              online platforms.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#08B9D2] px-7 py-4 text-sm font-semibold text-[#071D46] transition hover:bg-white"
              >
                Discuss Your Website
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#web-services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Explore Services
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-7">
              {["Responsive layouts", "User-focused design", "Business-ready solutions"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-xs text-blue-100/70">
                  <Check size={14} className="text-cyan-300" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* HERO WEBSITE VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative mx-auto w-full max-w-[540px]"
          >
            <div className="absolute inset-10 rounded-full bg-blue-500/20 blur-[90px]" />

            <div className="relative overflow-hidden rounded-[24px] border border-white/15 bg-white p-3 shadow-2xl sm:p-4">
              <div className="flex items-center gap-2 border-b border-gray-100 px-3 pb-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <div className="ml-3 flex-1 rounded-full bg-gray-100 px-4 py-2 text-[9px] text-gray-400">
                  www.yourbusiness.com
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                      <Globe size={17} />
                    </div>
                    <span className="text-xs font-bold text-[#101828]">
                      YOUR BRAND
                    </span>
                  </div>
                  <div className="hidden gap-4 sm:flex">
                    {["Home", "About", "Services"].map((item) => (
                      <span key={item} className="text-[9px] font-medium text-gray-400">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="h-7 w-16 rounded-full bg-blue-600" />
                </div>

                <div className="mt-9 grid items-center gap-5 sm:grid-cols-[1fr_0.8fr]">
                  <div>
                    <div className="h-2 w-16 rounded-full bg-cyan-400" />
                    <div className="mt-4 h-5 w-full rounded bg-[#0B3B8F]" />
                    <div className="mt-2 h-5 w-4/5 rounded bg-[#0B3B8F]" />
                    <div className="mt-4 space-y-2">
                      <div className="h-2 w-full rounded bg-gray-200" />
                      <div className="h-2 w-5/6 rounded bg-gray-200" />
                      <div className="h-2 w-4/6 rounded bg-gray-200" />
                    </div>
                    <div className="mt-5 h-9 w-28 rounded-full bg-blue-600" />
                  </div>

                  <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400">
                    <div className="absolute h-40 w-40 rounded-full border border-white/20" />
                    <div className="absolute h-28 w-28 rounded-full border border-white/30" />
                    <Monitor size={60} strokeWidth={1.2} className="relative text-white" />
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="rounded-xl border border-gray-100 p-3">
                      <div className="h-7 w-7 rounded-lg bg-blue-50" />
                      <div className="mt-3 h-2 w-4/5 rounded bg-gray-200" />
                      <div className="mt-2 h-2 w-full rounded bg-gray-100" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/20 bg-[#0B2B60] p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
                  <Smartphone size={21} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Responsive Design</p>
                  <p className="mt-1 text-[10px] text-blue-100/50">Across every screen</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12 xl:px-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              Your Digital Foundation
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              More than a website.
              <span className="block text-blue-600">
                An experience for your audience.
              </span>
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-8 text-gray-500 sm:text-base">
            <p>
              Your website is often the first interaction people have
              with your business. It should communicate what you do,
              establish credibility and make it easy for visitors
              to take the next step.
            </p>
            <p>
              At Easeon Technologies, we approach web development
              by combining thoughtful design with practical functionality.
              Every website is planned around its purpose, audience
              and business requirements.
            </p>
            <p>
              Whether you need a corporate website, an online store
              or a custom web platform, we focus on creating an
              experience that works across devices and supports
              your digital objectives.
            </p>
          </div>
        </div>
      </section>

      {/* WEB SERVICES */}
      <section id="web-services" className="bg-[#F4F8FE] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              Our Web Development Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Web solutions for different business needs.
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-500">
              From your first business website to complex digital
              platforms, we develop around what your business needs.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group rounded-[22px] border border-blue-100 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WEBSITE FEATURES */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">

            <div className="relative overflow-hidden rounded-[28px] bg-[#071D46] p-8 text-white sm:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-cyan-300/15" />

              <div className="relative z-10">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                  Built With Purpose
                </p>
                <h3 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                  Every detail has a role to play.
                </h3>
                <p className="mt-5 text-sm leading-7 text-blue-100/65">
                  A good website brings together design, content,
                  performance and functionality. We consider these
                  elements together to create a consistent digital
                  experience.
                </p>

                <div className="mt-9 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold">Website Experience</span>
                    <Layers3 size={19} className="text-cyan-300" />
                  </div>
                  <div className="mt-5 space-y-4">
                    {[
                      "Visual design & layout",
                      "Content & navigation",
                      "Responsive functionality",
                      "Technical performance",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-3 text-xs text-blue-100/70">
                        <Check size={15} className="text-cyan-300" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
                What Makes a Difference
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Designed to look good.
                <span className="block text-blue-600">
                  Developed to work well.
                </span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-gray-500">
                We consider the complete website experience,
                from the first visual impression to the functionality
                visitors interact with.
              </p>

              <div className="mt-9 space-y-7">
                {features.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon size={21} />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-gray-500">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#071D46] py-20 text-white sm:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
              Our Development Process
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              From first discussion to website launch.
            </h2>
            <p className="mt-4 text-sm leading-7 text-blue-100/60">
              A clear workflow that keeps design, development and
              business requirements aligned.
            </p>
          </div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {process.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="border-t border-white/15 pt-6"
              >
                <span className="text-4xl font-semibold text-cyan-300/80">
                  {item.number}
                </span>
                <h3 className="mt-5 text-base font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-xs leading-7 text-blue-100/55">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="bg-[#F4F8FE] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              Our Technology Stack
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Modern technologies. Flexible solutions.
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-500">
              We select technologies according to the website's
              requirements, functionality and technical scope.
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

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12 xl:px-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              Frequently Asked Questions
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything about web development.
            </h2>
            <p className="mt-5 text-sm leading-7 text-gray-500">
              Some common questions about creating and developing
              websites for businesses.
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
                Let's Create Your Digital Presence
              </p>

              <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Ready to build your
                <span className="block text-cyan-300">
                  next website?
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-blue-100/70">
                Tell us what you have in mind. Let's discuss how
                the right website can support your business goals.
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

export default WebDevelopment;
