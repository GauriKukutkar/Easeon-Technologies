
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Layers3,
  PenTool,
  Smartphone,
  MousePointer2,
  LayoutDashboard,
  Palette,
  Check,
} from "lucide-react";

const services = [
  {
    icon: LayoutDashboard,
    title: "Web Design",
    desc: "Modern, responsive website experiences built around your brand and audience.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Design",
    desc: "Intuitive mobile interfaces designed for seamless everyday interactions.",
  },
  {
    icon: Layers3,
    title: "Product & SaaS Design",
    desc: "Clear dashboards and product interfaces that simplify complex workflows.",
  },
  {
    icon: PenTool,
    title: "Brand & Visual Design",
    desc: "Consistent visual systems that make your digital identity recognizable.",
  },
];

const steps = [
  ["01", "Discover", "Understand your users, goals and product requirements."],
  ["02", "Structure", "Create user flows, wireframes and clear information architecture."],
  ["03", "Design", "Build polished interfaces with a consistent visual language."],
  ["04", "Refine", "Test, improve and prepare designs for development."],
];

export default function UIUXDesign() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is included in UI/UX design services?",
      a: "Our design process can include user research, wireframes, user flows, interface design, prototyping and design systems.",
    },
    {
      q: "Do you design both websites and mobile apps?",
      a: "Yes. We design responsive websites, mobile applications, SaaS platforms and custom digital products.",
    },
    {
      q: "Can you redesign an existing product?",
      a: "Yes. We can review your existing interface, identify usability improvements and create a refreshed design experience.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-[#10213E]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071D46] text-white">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute -bottom-40 left-1/4 h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-32 xl:px-16">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
              <Palette size={15} />
              UI / UX Design
            </div>

            <h1 className="max-w-xl text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              Design that makes
              <span className="block text-[#51C9F0]">every interaction</span>
              meaningful.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-blue-100/75">
              We create intuitive digital experiences that bring together
              thoughtful design, effortless usability and your business goals.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#0866FF] px-7 py-4 font-medium text-white transition hover:bg-blue-500"
              >
                Start a Design Project <ArrowUpRight size={18} />
              </Link>

              <a
                href="#design-services"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-white transition hover:bg-white/10"
              >
                Explore Services <ArrowRight size={17} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-blue-100/70">
              <span className="flex items-center gap-2"><Check size={16} className="text-cyan-300" /> User-focused</span>
              <span className="flex items-center gap-2"><Check size={16} className="text-cyan-300" /> Modern interfaces</span>
              <span className="flex items-center gap-2"><Check size={16} className="text-cyan-300" /> Responsive design</span>
            </div>
          </div>

          {/* DESIGN PREVIEW */}
          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute -inset-6 rounded-[40px] bg-blue-500/20 blur-2xl" />

            <div className="relative rounded-[26px] border border-white/15 bg-[#102B58] p-4 shadow-2xl sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>
                <span className="text-xs tracking-wider text-blue-200/60">DESIGN STUDIO</span>
              </div>

              <div className="grid grid-cols-[65px_1fr] gap-3 sm:grid-cols-[90px_1fr]">
                <div className="space-y-4 rounded-xl bg-[#081B3B] p-3">
                  <div className="mx-auto h-8 w-8 rounded-lg bg-blue-500" />
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="mx-auto h-7 w-7 rounded-lg bg-white/10" />
                  ))}
                </div>

                <div className="min-w-0 rounded-xl bg-[#F4F7FC] p-3 text-[#142747] sm:p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-slate-400 sm:text-xs">WELCOME BACK</p>
                      <h3 className="mt-1 text-sm font-semibold sm:text-lg">Your Workspace</h3>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-blue-100" />
                  </div>

                  <div className="mt-5 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-4 text-white">
                    <p className="text-xs text-white/70">DESIGN OVERVIEW</p>
                    <h4 className="mt-2 text-xl font-semibold sm:text-2xl">Ideas into experience.</h4>
                    <div className="mt-5 h-1.5 w-2/3 rounded-full bg-white/30">
                      <div className="h-full w-3/4 rounded-full bg-white" />
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-white p-3 shadow-sm">
                      <div className="h-7 w-7 rounded-lg bg-blue-100" />
                      <div className="mt-3 h-2 w-3/4 rounded bg-slate-200" />
                      <div className="mt-2 h-2 w-1/2 rounded bg-slate-100" />
                    </div>
                    <div className="rounded-xl bg-white p-3 shadow-sm">
                      <div className="h-7 w-7 rounded-lg bg-cyan-100" />
                      <div className="mt-3 h-2 w-3/4 rounded bg-slate-200" />
                      <div className="mt-2 h-2 w-1/2 rounded bg-slate-100" />
                    </div>
                  </div>

                  <div className="mt-3 rounded-xl bg-white p-3 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="h-2 w-1/3 rounded bg-slate-200" />
                      <div className="h-5 w-12 rounded-full bg-blue-100" />
                    </div>
                    <div className="mt-4 flex h-12 items-end gap-2">
                      {[35, 60, 45, 85, 55, 95, 70, 100].map((height, i) => (
                        <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-blue-600 to-cyan-400" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-3 top-1/3 hidden items-center gap-2 rounded-xl border border-white/15 bg-[#173B70] px-4 py-3 shadow-xl sm:flex">
                <MousePointer2 size={17} className="text-cyan-300" />
                <span className="text-xs text-white">Thoughtful interactions</span>
              </div>

              <div className="absolute -bottom-5 -left-4 hidden items-center gap-2 rounded-xl border border-white/15 bg-[#173B70] px-4 py-3 shadow-xl sm:flex">
                <Palette size={17} className="text-cyan-300" />
                <span className="text-xs text-white">Consistent design system</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Design with purpose</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Good design is more than just how it looks.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-slate-600 md:justify-self-end">
            It is how people understand, navigate and connect with your product.
            We combine visual clarity with practical usability to create digital
            experiences that feel natural to use.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="design-services" className="bg-[#F3F7FD] py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">What we design</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Digital experiences, designed around people.</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="group rounded-2xl border border-blue-100 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={23} />
                  </div>
                  <p className="mt-7 text-sm font-semibold text-blue-500">0{index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
        <div className="mb-12 max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Our approach</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">From first idea to final interface.</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, desc], index) => (
            <div key={number} className="relative border-t-2 border-blue-100 pt-6">
              <span className="text-sm font-semibold text-blue-600">{number}</span>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{desc}</p>
              {index !== 3 && (
                <ArrowRight className="absolute right-0 top-6 hidden text-blue-300 lg:block" size={19} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071D46] py-20 text-white lg:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-12 xl:px-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Let's create something meaningful</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Have a product idea? Let's design its next experience.
            </h2>
            <p className="mt-4 leading-7 text-blue-100/70">
              Tell us what you're building. We'll help shape the experience.
            </p>
          </div>
          <Link to="/contact" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#0866FF] px-7 py-4 font-medium text-white transition hover:bg-blue-500">
            Discuss Your Project <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-[900px] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">FAQs</p>
          <h2 className="mt-3 text-3xl font-semibold">A few things you may want to know.</h2>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, index) => (
            <div key={faq.q} className="py-5">
              <button
                type="button"
                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                className="flex w-full items-center justify-between gap-5 text-left"
                aria-expanded={activeFaq === index}
              >
                <span className="font-semibold">{faq.q}</span>
                <span className="text-2xl font-light text-blue-600">{activeFaq === index ? "−" : "+"}</span>
              </button>
              {activeFaq === index && (
                <p className="max-w-2xl pt-4 text-sm leading-7 text-slate-500">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
