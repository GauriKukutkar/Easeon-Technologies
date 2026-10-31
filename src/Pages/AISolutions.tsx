
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Bot,
  Workflow,
  MessageSquare,
  ScanSearch,
  Sparkles,
  Cpu,
  ChevronDown,
  Check,
  Network,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI-Powered Applications",
    desc: "Intelligent applications that use AI capabilities to improve digital experiences.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    desc: "Automate repetitive processes and simplify everyday business operations.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbots & Assistants",
    desc: "Conversational assistants that help users access information and interact with systems.",
  },
  {
    icon: ScanSearch,
    title: "AI Data Analysis",
    desc: "Turn business data into useful insights through intelligent analysis.",
  },
];

const applications = [
  "Customer support automation",
  "Intelligent document processing",
  "Workflow automation",
  "AI-powered search",
  "Business data analysis",
  "System integrations",
];

const faqs = [
  {
    q: "What kind of AI solutions do you develop?",
    a: "Solutions can include AI-powered applications, chatbots, workflow automation, data analysis and integrations based on your business requirements.",
  },
  {
    q: "Can AI be integrated into existing software?",
    a: "Yes. AI capabilities can be integrated into existing applications where the architecture, APIs and selected AI services support the required functionality.",
  },
  {
    q: "Can you automate our business processes?",
    a: "We can evaluate repetitive workflows and identify opportunities for automation using suitable software and AI technologies.",
  },
  {
    q: "Do I need an AI model developed from scratch?",
    a: "Not necessarily. Depending on the use case, we can explore existing AI models, APIs or custom model development.",
  },
];

const AISolutions = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="w-full overflow-x-clip bg-white text-[#101828]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06152F] py-20 text-white sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full border border-cyan-300/10" />
        <div className="pointer-events-none absolute right-10 top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[110px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 xl:px-16">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-cyan-300">
              <BrainCircuit size={15} />
              AI Solutions
            </span>

            <h1 className="mt-7 text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-[64px]">
              Make technology
              <span className="block text-cyan-300">think smarter.</span>
              Work better.
            </h1>

            <p className="mt-7 max-w-xl text-sm leading-8 text-blue-100/70 sm:text-base">
              Bring intelligence into your business with AI-powered
              applications, automation and smart integrations
              designed around real-world challenges.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-4 text-sm font-semibold text-[#06152F] transition hover:bg-white"
              >
                Explore AI Possibilities
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#ai-services"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Our Capabilities
                <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 border-t border-white/10 pt-7">
              {["Intelligent systems", "Smart automation", "AI integration"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-xs text-blue-100/70">
                  <Check size={14} className="text-cyan-300" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* AI VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto flex min-h-[390px] w-full max-w-[500px] items-center justify-center"
          >
            <div className="absolute h-72 w-72 rounded-full bg-blue-500/20 blur-[90px]" />

            <div className="absolute h-[310px] w-[310px] rounded-full border border-cyan-300/15" />
            <div className="absolute h-[230px] w-[230px] rounded-full border border-blue-300/20" />
            <div className="absolute h-[150px] w-[150px] rounded-full border border-cyan-300/20" />

            <div className="absolute left-[12%] top-[22%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_#08B9D2]" />
            <div className="absolute right-[13%] top-[30%] h-2 w-2 rounded-full bg-blue-300 shadow-[0_0_20px_#0866FF]" />
            <div className="absolute bottom-[20%] left-[25%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_#08B9D2]" />
            <div className="absolute bottom-[22%] right-[22%] h-3 w-3 rounded-full bg-blue-300 shadow-[0_0_20px_#0866FF]" />

            <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-[38px] border border-cyan-300/30 bg-gradient-to-br from-blue-500/30 to-cyan-400/10 shadow-[0_0_80px_rgba(8,185,210,0.2)] backdrop-blur-xl">
              <BrainCircuit size={75} strokeWidth={1.2} className="text-cyan-300" />
            </div>

            <div className="absolute left-0 top-[12%] rounded-2xl border border-white/10 bg-[#10294E] p-4 shadow-xl">
              <Bot size={23} className="text-cyan-300" />
              <p className="mt-2 text-[10px] font-semibold text-white">AI Assistant</p>
            </div>

            <div className="absolute right-0 top-[18%] rounded-2xl border border-white/10 bg-[#10294E] p-4 shadow-xl">
              <Network size={23} className="text-blue-300" />
              <p className="mt-2 text-[10px] font-semibold text-white">AI Integration</p>
            </div>

            <div className="absolute bottom-[9%] left-[5%] rounded-2xl border border-white/10 bg-[#10294E] p-4 shadow-xl">
              <Workflow size={23} className="text-cyan-300" />
              <p className="mt-2 text-[10px] font-semibold text-white">Automation</p>
            </div>

            <div className="absolute bottom-[7%] right-[4%] rounded-2xl border border-white/10 bg-[#10294E] p-4 shadow-xl">
              <Cpu size={23} className="text-blue-300" />
              <p className="mt-2 text-[10px] font-semibold text-white">Intelligence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-12 xl:px-16">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              Beyond Traditional Technology
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Intelligence that
              <span className="block text-blue-600">creates possibilities.</span>
            </h2>
          </div>

          <p className="text-sm leading-8 text-gray-500 sm:text-base">
            Artificial intelligence can help businesses process
            information, automate repetitive tasks and create
            more intuitive digital experiences. We focus on identifying
            practical opportunities where AI can support your
            products, services and business operations.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="ai-services" className="bg-[#F3F8FF] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
            What We Offer
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Practical AI solutions for modern businesses.
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

      {/* USE CASES */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:gap-20 lg:px-12 xl:px-16">

          <div className="relative overflow-hidden rounded-[28px] bg-[#071D46] p-8 text-white sm:p-10">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-cyan-300/15" />

            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                <Sparkles size={27} />
              </div>
              <p className="mt-12 text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                Where AI Makes a Difference
              </p>
              <h3 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
                Less repetitive work. More intelligent workflows.
              </h3>
              <p className="mt-5 text-sm leading-7 text-blue-100/65">
                Explore how AI can become part of your existing
                systems and everyday business processes.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-600">
              Possible Applications
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              AI that fits your business needs.
            </h2>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {applications.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-[#F8FAFD] p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                    <Check size={16} />
                  </div>
                  <span className="text-xs font-semibold text-gray-700">{item}</span>
                </div>
              ))}
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
                Let's Explore What's Possible
              </p>
              <h2 className="mt-5 text-3xl font-semibold sm:text-5xl">
                Bring intelligence
                <span className="block text-cyan-100">into your next idea.</span>
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/75">
                Tell us about your challenges and let's explore
                where AI can make a meaningful difference.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-blue-700 transition hover:bg-cyan-100"
              >
                Discuss Your Project
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
              Questions about AI solutions.
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

export default AISolutions;
