
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Palette,
  Megaphone,
  CreditCard,
  Settings,
  ChevronDown,
  ArrowUpRight,
  Headphones,
  HelpCircle,
  X,
} from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Questions about custom software and development services.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Websites, web applications and technical support.",
    color: "bg-cyan-50 text-cyan-600",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Mobile app development and application support.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Cloud,
    title: "SaaS & Cloud",
    description: "Cloud platforms, SaaS products and integrations.",
    color: "bg-sky-50 text-sky-600",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description: "Product design, interfaces and user experience.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Digital campaigns, advertising and online visibility.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: CreditCard,
    title: "Payments & Billing",
    description: "Questions about quotations, invoices and payments.",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: Settings,
    title: "General Support",
    description: "General enquiries and assistance with our services.",
    color: "bg-slate-100 text-slate-600",
  },
];

const faqs = [
  {
    category: "General",
    question: "What services does Easeon Technologies provide?",
    answer:
      "Easeon Technologies offers software development, web development, mobile application development, SaaS development, AI solutions, UI/UX design, digital marketing, performance marketing and cloud-related services.",
  },
  {
    category: "General",
    question: "How can I get started with Easeon Technologies?",
    answer:
      "Visit our Contact page and share your project requirements. Our team can discuss your objectives, requirements and possible next steps.",
  },
  {
    category: "Projects",
    question: "How do I request a project quotation?",
    answer:
      "Submit your project details through our contact form. Include your requirements, expected deliverables and any relevant timelines so our team can understand your project.",
  },
  {
    category: "Projects",
    question: "Can I request changes during development?",
    answer:
      "Project changes can be discussed with the assigned team. Their scope, timeline and any additional costs will depend on the agreed project terms.",
  },
  {
    category: "Development",
    question: "Do you develop both websites and mobile applications?",
    answer:
      "Yes. Our development services cover websites, web applications, Android and iOS applications, and custom digital products.",
  },
  {
    category: "Development",
    question: "Can you improve or redesign an existing website?",
    answer:
      "Yes. We can discuss website redesigns, interface improvements, performance enhancements and additional functionality based on your requirements.",
  },
  {
    category: "Payments",
    question: "How are project payments handled?",
    answer:
      "Payment schedules and commercial terms are defined in the relevant proposal, quotation or written project agreement.",
  },
  {
    category: "Support",
    question: "How can I contact the support team?",
    answer:
      "You can reach our team through the Contact page on the website. Please include your project details and the nature of your enquiry.",
  },
];

const filters = ["All", "General", "Projects", "Development", "Payments", "Support"];

export default function HelpCenter() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const filteredFaqs = useMemo(() => {
    const query = search.trim().toLowerCase();

    return faqs.filter((faq) => {
      const matchesFilter =
        activeFilter === "All" || faq.category === activeFilter;

      const matchesSearch =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        faq.category.toLowerCase().includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [search, activeFilter]);

  const selectCategory = (title: string) => {
    setSearch(title);
    setActiveFilter("All");
    setActiveFaq(null);
    document.getElementById("popular-questions")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="overflow-hidden bg-white text-[#10213E]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071D46] text-white">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute -bottom-40 left-1/4 h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[110px]" />

        <div className="relative mx-auto max-w-[1280px] px-5 py-24 text-center sm:px-8 lg:px-12 lg:py-32 xl:px-16">
          <div className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
            <HelpCircle size={16} />
            Easeon Support Center
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            How can we
            <span className="block text-[#51C9F0]">help you today?</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-blue-100/70 sm:text-lg">
            Find answers, explore support topics and get the information you
            need to move forward with Easeon Technologies.
          </p>

          <div className="mx-auto mt-10 flex max-w-2xl items-center gap-3 rounded-2xl border border-white/15 bg-white p-2 shadow-2xl shadow-blue-950/30">
            <Search className="ml-3 shrink-0 text-blue-600" size={22} />
            <input
              type="search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setActiveFaq(null);
                setActiveFilter("All");
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  document.getElementById("popular-questions")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
              placeholder="Search for answers, services or topics..."
              className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm text-[#10213E] outline-none placeholder:text-slate-400"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
              >
                <X size={18} />
              </button>
            )}
            <button
              type="button"
              onClick={() =>
                document.getElementById("popular-questions")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="rounded-xl bg-[#0866FF] px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Search
            </button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs text-blue-100/55">
            <span>Popular:</span>
            {["Project enquiry", "Website development", "Payments"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setSearch(item);
                  setActiveFilter("All");
                  document.getElementById("popular-questions")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="transition hover:text-cyan-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT CATEGORIES */}
      <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Browse by topic
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Explore our help categories.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-500">
            Select a topic to find relevant information and frequently asked
            questions.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                type="button"
                key={category.title}
                onClick={() => selectCategory(category.title)}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="flex items-center justify-between">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${category.color}`}>
                    <Icon size={23} />
                  </div>
                  <ArrowUpRight
                    size={19}
                    className="text-slate-300 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-600"
                  />
                </div>

                <h3 className="mt-6 text-lg font-semibold">{category.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-500">
                  {category.description}
                </p>
              </button>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section id="popular-questions" className="scroll-mt-20 bg-[#F3F7FD] py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                Knowledge base
              </p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Frequently asked questions.
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-500">
                Browse common questions about our services, projects and
                working process.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    type="button"
                    key={filter}
                    onClick={() => {
                      setActiveFilter(filter);
                      setActiveFaq(null);
                    }}
                    className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                      activeFilter === filter
                        ? "bg-blue-600 text-white"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-blue-600"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div>
              {search && (
                <div className="mb-5 flex items-center justify-between gap-3 rounded-xl border border-blue-100 bg-white px-4 py-3">
                  <p className="text-sm text-slate-600">
                    Results for: <strong>{search}</strong>
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setActiveFilter("All");
                    }}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Clear
                  </button>
                </div>
              )}

              <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white px-5 sm:px-7">
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq, index) => (
                    <div key={faq.question} className="py-5">
                      <button
                        type="button"
                        onClick={() =>
                          setActiveFaq(activeFaq === index ? null : index)
                        }
                        aria-expanded={activeFaq === index}
                        className="flex w-full items-center justify-between gap-5 text-left"
                      >
                        <div>
                          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-wider text-blue-500">
                            {faq.category}
                          </span>
                          <span className="font-semibold leading-7">
                            {faq.question}
                          </span>
                        </div>
                        <ChevronDown
                          size={20}
                          className={`shrink-0 text-blue-600 transition-transform ${
                            activeFaq === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {activeFaq === index && (
                        <p className="max-w-2xl pt-4 text-sm leading-7 text-slate-500">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="py-14 text-center">
                    <Search className="mx-auto text-slate-300" size={30} />
                    <h3 className="mt-4 font-semibold">No matching questions</h3>
                    <p className="mt-2 text-sm text-slate-500">
                      Try another keyword or contact our team for assistance.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSearch("");
                        setActiveFilter("All");
                      }}
                      className="mt-5 text-sm font-semibold text-blue-600 hover:text-blue-800"
                    >
                      View all questions
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT CTA */}
      <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
        <div className="relative overflow-hidden rounded-[28px] bg-[#071D46] px-7 py-12 text-white sm:px-12 sm:py-16">
          <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full bg-blue-500/20 blur-[100px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                <Headphones size={24} />
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Still need assistance?
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Let's get your questions answered.
              </h2>
              <p className="mt-4 text-sm leading-7 text-blue-100/65">
                Can't find what you're looking for? Get in touch with our team
                and tell us how we can help.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#0866FF] px-7 py-4 text-sm font-medium text-white transition hover:bg-blue-500"
              >
                Contact Support <ArrowUpRight size={17} />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
