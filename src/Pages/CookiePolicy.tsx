
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Cookie,
  ShieldCheck,
  Settings,
  BarChart3,
  Globe,
  LockKeyhole,
  ChevronRight,
  ArrowUpRight,
  Mail,
  Menu,
  X,
  Info,
} from "lucide-react";

const sections = [
  { id: "introduction", title: "Introduction", icon: Info },
  { id: "what-are-cookies", title: "What Are Cookies?", icon: Cookie },
  { id: "types", title: "Types of Cookies", icon: Settings },
  { id: "purpose", title: "Why We Use Cookies", icon: BarChart3 },
  { id: "third-party", title: "Third-Party Cookies", icon: Globe },
  { id: "management", title: "Managing Cookies", icon: LockKeyhole },
  { id: "retention", title: "Cookie Duration", icon: ShieldCheck },
  { id: "updates", title: "Policy Updates", icon: Info },
  { id: "contact", title: "Contact Us", icon: Mail },
];

const cookieTypes = [
  {
    icon: LockKeyhole,
    title: "Essential Cookies",
    label: "Required",
    description:
      "These cookies support core website functions, security and navigation. Without them, some parts of the website may not work properly.",
    examples: "Session management and security preferences.",
  },
  {
    icon: Settings,
    title: "Functional Cookies",
    label: "Optional",
    description:
      "These cookies may remember preferences and settings to provide a more convenient browsing experience.",
    examples: "Language preferences and saved website settings.",
  },
  {
    icon: BarChart3,
    title: "Analytics Cookies",
    label: "Optional",
    description:
      "These cookies may help us understand how visitors interact with our website so we can improve its performance and usability.",
    examples: "Page visits, traffic sources and usage patterns.",
  },
  {
    icon: Globe,
    title: "Marketing Cookies",
    label: "Optional",
    description:
      "If used, these cookies may help measure advertising campaigns or support relevant promotional content.",
    examples: "Advertising performance and campaign measurement.",
  },
];

export default function CookiePolicy() {
  const [activeSection, setActiveSection] = useState("introduction");
  const [mobileMenu, setMobileMenu] = useState(false);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenu(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <main className="bg-white text-[#10213E]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071D46] text-white">
        <div className="absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute -bottom-40 left-1/4 h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[110px]" />

        <div className="relative mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28 xl:px-16">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
              <Cookie size={16} />
              Website Preferences & Privacy
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your experience.
              <span className="block text-[#51C9F0]">Your preferences.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/70 sm:text-lg">
              Learn how Easeon Technologies may use cookies and similar
              technologies to support website functionality, understand
              visitor interactions and improve your browsing experience.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5 text-sm text-blue-100/60">
              <span className="flex items-center gap-2">
                <Cookie size={16} className="text-cyan-300" />
                Cookie Policy
              </span>
              <span className="h-1 w-1 rounded-full bg-blue-300/50" />
              <span>Last updated: 3 November 2026</span>
            </div>
          </div>

          <div className="absolute right-12 top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-blue-300/20 bg-blue-400/5">
              <div className="absolute inset-5 rounded-full border border-cyan-300/20" />
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 shadow-[0_0_60px_rgba(8,185,210,0.15)]">
                <Cookie size={49} strokeWidth={1.3} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-b border-slate-100 bg-[#F5F8FD]">
        <div className="mx-auto grid max-w-[1280px] gap-6 px-5 py-8 sm:grid-cols-3 sm:px-8 lg:px-12 xl:px-16">
          {[
            {
              icon: ShieldCheck,
              title: "Transparency",
              text: "Understand how cookies may be used.",
            },
            {
              icon: Settings,
              title: "User Preferences",
              text: "Manage your browser cookie settings.",
            },
            {
              icon: LockKeyhole,
              title: "Privacy Awareness",
              text: "Learn about website data practices.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Icon size={21} />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="mx-auto grid max-w-[1280px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-12 lg:py-24 xl:px-16">

        {/* TABLE OF CONTENTS */}
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">On this page</h2>

              <button
                type="button"
                onClick={() => setMobileMenu(!mobileMenu)}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
                aria-label="Toggle cookie policy navigation"
              >
                {mobileMenu ? <X size={19} /> : <Menu size={19} />}
              </button>
            </div>

            <nav className={`${mobileMenu ? "mt-5 block" : "hidden"} space-y-1 lg:mt-5 lg:block`}>
              {sections.map((section) => {
                const Icon = section.icon;

                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => scrollToSection(section.id)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm transition ${
                      activeSection === section.id
                        ? "bg-blue-50 font-semibold text-blue-700"
                        : "text-slate-500 hover:bg-slate-50 hover:text-blue-700"
                    }`}
                  >
                    <Icon size={17} />
                    <span className="flex-1">{section.title}</span>
                    {activeSection === section.id && (
                      <ChevronRight size={15} />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="mt-5 rounded-2xl bg-[#071D46] p-6 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
              <Mail size={20} />
            </div>

            <h3 className="mt-4 font-semibold">Have a question?</h3>

            <p className="mt-2 text-sm leading-6 text-blue-100/65">
              Contact our team if you have questions about our website
              privacy practices.
            </p>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-white"
            >
              Contact Us <ArrowUpRight size={16} />
            </Link>
          </div>
        </aside>

        {/* POLICY DETAILS */}
        <div className="min-w-0 max-w-[850px] space-y-14">

          <article id="introduction" className="scroll-mt-28">
            <SectionHeading number="01" title="Introduction" />

            <p className="policy-text">
              This Cookie Policy explains how Easeon Technologies may use
              cookies and similar technologies when you visit our website.
              It describes what cookies are, why websites use them and how
              you can manage them.
            </p>

            <p className="policy-text">
              This policy should be read together with our Privacy Policy
              and Terms & Conditions.
            </p>
          </article>

          <article id="what-are-cookies" className="scroll-mt-28">
            <SectionHeading number="02" title="What Are Cookies?" />

            <p className="policy-text">
              Cookies are small text files that websites may store in your
              browser or on your device when you visit a website. They can
              help websites remember certain information about a visit.
            </p>

            <p className="policy-text">
              Cookies may be temporary, lasting only while your browser
              session is active, or persistent, remaining on your device
              for a defined period or until you delete them.
            </p>

            <div className="mt-7 rounded-2xl border border-blue-100 bg-[#F3F7FD] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <Info size={21} />
                </div>
                <div>
                  <h3 className="font-semibold">Cookies and similar technologies</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    Websites may also use local storage, tracking pixels and
                    similar technologies. These tools may serve purposes
                    similar to cookies, depending on how they are configured.
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article id="types" className="scroll-mt-28">
            <SectionHeading number="03" title="Types of Cookies" />

            <p className="policy-text">
              Websites commonly use different categories of cookies. The
              categories below describe possible uses; they do not confirm
              that every category is currently active on the Easeon website.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {cookieTypes.map((cookie) => {
                const Icon = cookie.icon;

                return (
                  <div
                    key={cookie.title}
                    className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-200 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon size={21} />
                      </div>

                      <span
                        className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                          cookie.label === "Required"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {cookie.label}
                      </span>
                    </div>

                    <h3 className="mt-5 font-semibold">{cookie.title}</h3>

                    <p className="mt-2 text-sm leading-7 text-slate-500">
                      {cookie.description}
                    </p>

                    <p className="mt-4 border-t border-slate-100 pt-4 text-xs leading-6 text-slate-400">
                      Examples: {cookie.examples}
                    </p>
                  </div>
                );
              })}
            </div>
          </article>

          <article id="purpose" className="scroll-mt-28">
            <SectionHeading number="04" title="Why We Use Cookies" />

            <p className="policy-text">
              Depending on the technologies enabled on our website, cookies
              may be used to:
            </p>

            <PolicyList items={[
              "Support essential website functions and navigation.",
              "Remember visitor preferences and selected settings.",
              "Understand how visitors interact with website pages.",
              "Identify technical issues and improve website performance.",
              "Measure the effectiveness of marketing activities, where applicable.",
            ]} />
          </article>

          <article id="third-party" className="scroll-mt-28">
            <SectionHeading number="05" title="Third-Party Cookies" />

            <p className="policy-text">
              Some website features may rely on third-party services.
              Depending on which services are integrated, these providers
              may place their own cookies or use similar technologies.
            </p>

            <p className="policy-text">
              Examples may include analytics tools, embedded media,
              advertising platforms or social media integrations.
            </p>

            <p className="policy-text">
              Third-party providers operate under their own privacy and
              cookie policies. We recommend reviewing their policies when
              using embedded or linked services.
            </p>
          </article>

          <article id="management" className="scroll-mt-28">
            <SectionHeading number="06" title="Managing Cookies" />

            <p className="policy-text">
              You can manage or delete cookies through your web browser
              settings. Most browsers allow you to view stored cookies,
              block certain categories or remove existing cookies.
            </p>

            <PolicyList items={[
              "Review cookie settings in your browser.",
              "Block or restrict cookies where your browser supports it.",
              "Delete cookies already stored on your device.",
              "Review preferences before using third-party embedded services.",
            ]} />

            <p className="policy-text mt-5">
              Please note that blocking certain cookies may affect website
              functionality. If we introduce a cookie preference tool,
              available choices can also be managed through that tool.
            </p>
          </article>

          <article id="retention" className="scroll-mt-28">
            <SectionHeading number="07" title="Cookie Duration" />

            <p className="policy-text">
              Cookie duration depends on the cookie's purpose and how it is
              configured by the website or relevant third-party provider.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-semibold">Session Cookies</h3>
                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Generally expire when you close your browser or when the
                  browsing session ends.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="font-semibold">Persistent Cookies</h3>
                <p className="mt-2 text-sm leading-7 text-slate-500">
                  Remain stored for a defined period or until they are
                  manually deleted.
                </p>
              </div>
            </div>

            <p className="policy-text mt-5">
              Actual expiry periods should be confirmed against the cookies
              and technologies deployed on the website.
            </p>
          </article>

          <article id="updates" className="scroll-mt-28">
            <SectionHeading number="08" title="Policy Updates" />

            <p className="policy-text">
              We may update this Cookie Policy when our website technologies,
              services, operational practices or applicable requirements
              change.
            </p>

            <p className="policy-text">
              Any revised version will be published on this page with an
              updated revision date. We encourage visitors to review this
              page periodically.
            </p>
          </article>

          <article id="contact" className="scroll-mt-28">
            <SectionHeading number="09" title="Contact Us" />

            <p className="policy-text">
              If you have questions about this Cookie Policy or how cookies
              and similar technologies may be used on our website, please
              contact Easeon Technologies.
            </p>

            <div className="mt-7 rounded-2xl border border-blue-100 bg-[#F3F7FD] p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Mail size={23} />
              </div>

              <h3 className="mt-5 text-xl font-semibold">
                Cookie-related enquiries
              </h3>

              <p className="mt-2 text-sm leading-7 text-slate-500">
                Send your questions to our team through the contact page.
              </p>

              <Link
                to="/contact"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0866FF] px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-500"
              >
                Contact Easeon Technologies <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>

          <div className="border-t border-slate-200 pt-8">
            <p className="text-sm leading-7 text-slate-500">
              This Cookie Policy should be read alongside the Easeon
              Technologies Privacy Policy and Terms & Conditions.
            </p>

            <div className="mt-5 flex flex-wrap gap-5 text-sm font-medium text-blue-600">
              <Link to="/privacy-policy" className="hover:text-blue-800">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="hover:text-blue-800">
                Terms & Conditions
              </Link>
            </div>

            <p className="mt-5 text-xs text-slate-400">
              Last updated: 3 November 2026
            </p>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-[#071D46] py-16 text-white">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-7 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-12 xl:px-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Your privacy matters
            </p>

            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Browse with clarity and confidence.
            </h2>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#0866FF] px-7 py-4 font-medium transition hover:bg-blue-500"
          >
            Get in Touch <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="mb-5 flex items-center gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-600">
        {number}
      </span>

      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-sm leading-7 text-slate-600"
        >
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
          {item}
        </li>
      ))}
    </ul>
  );
}
