
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Smartphone,
  Apple,
  Layers3,
  ShieldCheck,
  Zap,
  Code2,
  ChevronDown,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Android App Development",
    desc: "Feature-rich Android applications designed for performance and usability.",
  },
  {
    icon: Apple,
    title: "iOS App Development",
    desc: "Intuitive iPhone applications with polished and consistent experiences.",
  },
  {
    icon: Layers3,
    title: "Cross-Platform Apps",
    desc: "Applications designed to serve multiple platforms efficiently.",
  },
];

const faqs = [
  {
    q: "Can you develop both Android and iOS applications?",
    a: "Yes. We can develop applications for Android, iOS or both, depending on your project requirements.",
  },
  {
    q: "Can you build an app from an idea?",
    a: "Yes. We can help define the requirements, plan the features and develop the application based on your concept.",
  },
  {
    q: "Do you provide app maintenance?",
    a: "Maintenance can include bug fixes, updates, performance improvements and additional features.",
  },
  {
    q: "Can the app connect with an existing website or software?",
    a: "Yes. Where suitable APIs and integrations are available, mobile applications can connect with existing systems and services.",
  },
];

const MobileAppDevelopment = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="w-full overflow-x-clip bg-white text-[#101828]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071D46] py-20 text-white sm:py-24 lg:py-28">
        <div className="absolute -right-32 -top-40 h-[480px] w-[480px] rounded-full border border-cyan-300/10" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]" />

        <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 xl:px-16">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              <Smartphone size={14} />
              Mobile App Development
            </span>

            <h1 className="mt-7 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[64px]">
              Great ideas.
              <span className="block text-cyan-300">
                Powerful apps.
              </span>
              Better experiences.
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-blue-100/70 sm:text-base">
              We transform business ideas into mobile applications
              that connect people, simplify everyday tasks and
              create meaningful digital experiences.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-4 text-sm font-semibold text-[#071D46] transition hover:bg-white"
              >
                Build Your App
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#app-services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Explore Services
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-7">
              {["Android", "iOS", "Cross-platform"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-xs text-blue-100/70">
                  <Check size={14} className="text-cyan-300" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* MOBILE APP VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto flex w-full max-w-[510px] items-center justify-center py-5"
          >
            <div className="absolute h-80 w-80 rounded-full bg-blue-500/20 blur-[90px]" />

            {/* Floating card */}
            <div className="absolute left-0 top-20 z-20 hidden rounded-2xl border border-white/10 bg-[#10366D] p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
                  <Zap size={21} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Smart Features</p>
                  <p className="mt-1 text-[10px] text-blue-100/50">Built around your users</p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="relative z-10 w-[245px] rounded-[38px] border-[5px] border-[#263D60] bg-white p-2 shadow-[0_30px_90px_rgba(0,0,0,.4)]">
              <div className="overflow-hidden rounded-[29px] bg-[#F3F7FD]">
                <div className="mx-auto mt-2 h-5 w-20 rounded-full bg-[#101828]" />

                <div className="px-4 pb-5 pt-7">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] text-gray-400">WELCOME BACK</p>
                      <h3 className="mt-1 text-lg font-bold text-[#101828]">Hello, Alex!</h3>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400" />
                  </div>

                  <div className="mt-6 rounded-2xl bg-gradient-to-br from-[#0B3B8F] to-[#08B9D2] p-4 text-white">
                    <p className="text-[9px] text-white/70">YOUR DIGITAL SPACE</p>
                    <p className="mt-2 text-lg font-semibold">Everything in one place.</p>
                    <div className="mt-4 h-1.5 w-20 rounded-full bg-white/40" />
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-xs font-bold text-[#101828]">Explore Features</p>
                    <span className="text-[9px] text-blue-600">View all</span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {[
                      { icon: Layers3, label: "Services" },
                      { icon: Code2, label: "Solutions" },
                      { icon: Zap, label: "Activity" },
                      { icon: ShieldCheck, label: "Security" },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.label} className="rounded-xl border border-gray-100 bg-white p-3">
                          <Icon size={18} className="text-blue-600" />
                          <p className="mt-3 text-[10px] font-semibold text-gray-700">
                            {item.label}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-5 flex justify-around rounded-xl bg-white p-3 text-gray-400">
                    <Smartphone size={15} className="text-blue-600" />
                    <Layers3 size={15} />
                    <Zap size={15} />
                    <ShieldCheck size={15} />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute bottom-14 right-0 z-20 hidden rounded-2xl border border-white/10 bg-[#10366D] p-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <Apple size={21} className="text-white" />
                <div>
                  <p className="text-xs font-semibold text-white">Android & iOS</p>
                  <p className="mt-1 text-[10px] text-blue-100/50">Mobile experiences</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12 xl:px-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              Beyond the Screen
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Designed for people.
              <span className="block text-blue-600">Built for possibilities.</span>
            </h2>
          </div>

          <p className="text-sm leading-8 text-gray-500 sm:text-base">
            A mobile application should do more than simply function.
            It should make everyday interactions easier and help
            businesses deliver better services. We focus on combining
            useful features, intuitive interfaces and dependable
            technology to build applications around real user needs.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="app-services" className="bg-[#F3F8FF] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              What We Develop
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Mobile solutions for every idea.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-[24px] border border-blue-100 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-7 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-500">{item.desc}</p>
                  <div className="mt-7 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all group-hover:w-24" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HIGHLIGHT */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-r from-[#0B3B8F] via-[#0866FF] to-[#08B9D2] px-7 py-12 text-white sm:px-12 sm:py-16">
            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/20" />

            <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div className="max-w-2xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/65">
                  The Right Mobile Experience
                </p>
                <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                  One idea. Multiple possibilities.
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/75">
                  From user experience and application functionality
                  to integrations and ongoing improvements, every
                  part of the app is considered as one connected product.
                </p>
              </div>

              <div className="flex gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/25 bg-white/10">
                  <Smartphone size={29} />
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/25 bg-white/10">
                  <Layers3 size={29} />
                </div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/25 bg-white/10">
                  <Zap size={29} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F3F8FF] py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12 xl:px-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              FAQs
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              A few things you may want to know.
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={faq.q} className="overflow-hidden rounded-2xl border border-blue-100 bg-white">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                >
                  <span className="text-sm font-semibold">{faq.q}</span>
                  <ChevronDown
                    size={19}
                    className={`shrink-0 text-blue-600 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <p className="border-t border-gray-100 px-5 pb-5 pt-4 text-sm leading-7 text-gray-500 sm:px-6">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="rounded-[28px] bg-[#071D46] px-7 py-14 text-center text-white sm:px-12 sm:py-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
              Have an App Idea?
            </p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">
              Let's make it
              <span className="text-cyan-300"> happen.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-blue-100/65">
              Have an idea for your next mobile application?
              Let's discuss how to turn it into a digital product.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-blue-700 transition hover:bg-cyan-100"
            >
              Start Your Project
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MobileAppDevelopment;
