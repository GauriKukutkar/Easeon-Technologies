
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Layers3,
  Users,
  CreditCard,
  BarChart3,
  ShieldCheck,
  Zap,
  Settings2,

  ChevronDown,
  Check,
  Globe2,
} from "lucide-react";

const services = [
  {
    icon: Layers3,
    title: "SaaS Product Development",
    desc: "Build subscription-based software products around your business idea and market requirements.",
  },
  {
    icon: Users,
    title: "Multi-Tenant Platforms",
    desc: "Create platforms where multiple businesses or users operate through separate accounts and workspaces.",
  },
  {
    icon: CreditCard,
    title: "Subscription Management",
    desc: "Support subscription plans, billing workflows and membership-based product functionality.",
  },
  {
    icon: BarChart3,
    title: "SaaS Dashboards",
    desc: "Centralized dashboards for managing users, activities, reports and business performance.",
  },
];

const benefits = [
  {
    icon: Globe2,
    title: "Accessible Anywhere",
    desc: "Give users access to their applications through the web.",
  },
  {
    icon: Zap,
    title: "Flexible & Scalable",
    desc: "Build a foundation that can evolve with your product.",
  },
  {
    icon: ShieldCheck,
    title: "Structured Access",
    desc: "Organize users, roles and permissions around platform requirements.",
  },
  {
    icon: Settings2,
    title: "Centralized Management",
    desc: "Manage product functionality and operations from one platform.",
  },
];

const faqs = [
  {
    q: "What is SaaS development?",
    a: "SaaS development involves creating software products that users access through the internet, typically through subscriptions or account-based access.",
  },
  {
    q: "Can you build a SaaS product from scratch?",
    a: "Yes. We can work from your product concept and requirements to plan, design and develop a custom SaaS platform.",
  },
  {
    q: "Can a SaaS platform support multiple businesses?",
    a: "Yes. Multi-tenant architecture can be implemented to support multiple organizations with appropriately separated data and access.",
  },
  {
    q: "Can you add subscription plans and payment integrations?",
    a: "Subscription plans and payment gateway integrations can be included based on your business model and the selected payment provider.",
  },
];

const SaaSDevelopment = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="w-full overflow-x-clip bg-white text-[#101828]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071D46] py-20 text-white sm:py-24 lg:py-28">
        <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-cyan-300/10" />
        <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]" />

        <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 xl:px-16">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-300">
              <Cloud size={14} />
              SaaS Development
            </span>

            <h1 className="mt-7 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[64px]">
              Build your idea.
              <span className="block text-cyan-300">
                Scale your product.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-blue-100/70 sm:text-base">
              Turn your software concept into a cloud-based product.
              We develop SaaS platforms designed around users,
              subscriptions, business workflows and evolving
              product requirements.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-4 text-sm font-semibold text-[#071D46] transition hover:bg-white"
              >
                Discuss Your SaaS Idea
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#saas-services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Explore Solutions
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-7">
              {["Cloud-based", "Subscription-ready", "Product-focused"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-xs text-blue-100/70">
                  <Check size={14} className="text-cyan-300" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* SAAS DASHBOARD VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-[540px]"
          >
            <div className="absolute inset-10 rounded-full bg-cyan-500/20 blur-[90px]" />

            <div className="relative overflow-hidden rounded-[24px] border border-white/15 bg-white p-3 shadow-2xl sm:p-4">
              <div className="flex items-center justify-between border-b border-gray-100 px-3 pb-4">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <Layers3 size={17} />
                  </div>
                  <span className="text-xs font-bold text-[#101828]">SAAS WORKSPACE</span>
                </div>
                <div className="h-7 w-7 rounded-full bg-cyan-100" />
              </div>

              <div className="grid grid-cols-[75px_1fr] gap-4 pt-5">
                <div className="space-y-4 border-r border-gray-100 pr-3">
                  {[Layers3, BarChart3, Users, Settings2].map((Icon, i) => (
                    <div
                      key={i}
                      className={`flex h-9 items-center justify-center rounded-lg ${
                        i === 0 ? "bg-blue-600 text-white" : "text-gray-400"
                      }`}
                    >
                      <Icon size={17} />
                    </div>
                  ))}
                </div>

                <div className="min-w-0">
                  <p className="text-[9px] text-gray-400">OVERVIEW</p>
                  <h3 className="mt-1 text-lg font-bold text-[#101828]">
                    Dashboard
                  </h3>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {[
                      ["Active Users", "2,480"],
                      ["Subscriptions", "1,240"],
                      ["Total Projects", "86"],
                      ["Growth", "+24%"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-xl border border-gray-100 p-3">
                        <p className="text-[9px] text-gray-400">{label}</p>
                        <p className="mt-2 text-lg font-bold text-[#0B3B8F]">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-xl border border-gray-100 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-gray-700">Platform Activity</span>
                      <BarChart3 size={16} className="text-blue-600" />
                    </div>
                    <div className="mt-5 flex h-20 items-end gap-2">
                      {[35, 55, 42, 75, 58, 90, 68, 100, 76, 85].map((height, i) => (
                        <div
                          key={i}
                          style={{ height: `${height}%` }}
                          className="flex-1 rounded-t bg-gradient-to-t from-blue-700 to-cyan-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between rounded-xl bg-[#F1F7FF] p-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck size={20} className="text-blue-600" />
                  <span className="text-[10px] font-semibold text-gray-700">Workspace Management</span>
                </div>
                <span className="rounded-full bg-cyan-100 px-3 py-1 text-[9px] font-bold text-cyan-700">
                  ACTIVE
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12 xl:px-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              Software as a Service
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              One platform.
              <span className="block text-blue-600">Endless possibilities.</span>
            </h2>
          </div>

          <p className="text-sm leading-8 text-gray-500 sm:text-base">
            SaaS products bring software, users and business processes
            together through a centralized online platform. Whether
            you're building a new product or transforming an existing
            application into a subscription-based service, we focus
            on creating a practical foundation for your product journey.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="saas-services" className="bg-[#F3F8FF] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
            Our Capabilities
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything your SaaS product needs to take shape.
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-[22px] border border-blue-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={23} />
                  </div>
                  <h3 className="mt-6 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-500">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="relative overflow-hidden rounded-[28px] bg-[#071D46] p-8 text-white sm:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-cyan-300/15" />
              <div className="relative z-10">
                <Cloud size={38} className="text-cyan-300" />
                <p className="mt-12 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                  Product Infrastructure
                </p>
                <h3 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                  Built for the way modern software works.
                </h3>
                <p className="mt-5 text-sm leading-7 text-blue-100/65">
                  Bring your users, features, data and business
                  operations together through a connected platform.
                </p>
                <div className="mt-9 flex flex-wrap gap-2">
                  {["Users", "Cloud", "Data", "Subscriptions"].map((item) => (
                    <span key={item} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[10px] text-blue-100/80">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
                Built Around Your Product
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                A smarter foundation for your software business.
              </h2>

              <div className="mt-9 grid gap-7 sm:grid-cols-2">
                {benefits.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title}>
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon size={21} />
                      </div>
                      <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
                      <p className="mt-2 text-xs leading-6 text-gray-500">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F3F8FF] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-r from-[#0B3B8F] via-[#0866FF] to-[#08B9D2] px-7 py-14 text-center text-white sm:px-12 sm:py-16">
            <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border border-white/20" />
            <div className="relative z-10 mx-auto max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
                Have a Product Idea?
              </p>
              <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">
                Let's build your next
                <span className="block text-cyan-100">SaaS product.</span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/75">
                From product planning to platform development,
                let's discuss what you want to create.
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
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20 lg:px-12 xl:px-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              FAQs
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              SaaS development questions.
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
    </main>
  );
};

export default SaaSDevelopment;
