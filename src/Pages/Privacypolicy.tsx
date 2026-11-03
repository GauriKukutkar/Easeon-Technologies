
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  LockKeyhole,
  Database,
  Cookie,
  Share2,
  UserCheck,
  Clock,
  Mail,
  ChevronRight,
  ArrowUpRight,
  FileText,
  Menu,
  X,
} from "lucide-react";

const sections = [
  { id: "introduction", title: "Introduction", icon: FileText },
  { id: "information", title: "Information We Collect", icon: Database },
  { id: "usage", title: "How We Use Information", icon: UserCheck },
  { id: "cookies", title: "Cookies & Tracking", icon: Cookie },
  { id: "sharing", title: "Information Sharing", icon: Share2 },
  { id: "security", title: "Data Security", icon: LockKeyhole },
  { id: "retention", title: "Data Retention", icon: Clock },
  { id: "rights", title: "Your Privacy Rights", icon: ShieldCheck },
  { id: "contact", title: "Contact Us", icon: Mail },
];

export default function Privacypolicy() {
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
              <ShieldCheck size={16} />
              Privacy & Data Protection
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Your privacy.
              <span className="block text-[#51C9F0]">Our responsibility.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/70 sm:text-lg">
              We believe trust starts with transparency. Learn how Easeon
              Technologies collects, uses and protects information when you
              interact with our website and services.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5 text-sm text-blue-100/60">
              <span className="flex items-center gap-2">
                <FileText size={16} className="text-cyan-300" />
                Privacy Policy
              </span>
              <span className="h-1 w-1 rounded-full bg-blue-300/50" />
              <span>Last updated: 3 November 2026</span>
            </div>
          </div>

          <div className="absolute right-12 top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-blue-300/20 bg-blue-400/5">
              <div className="absolute inset-5 rounded-full border border-cyan-300/20" />
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 shadow-[0_0_60px_rgba(8,185,210,0.15)]">
                <ShieldCheck size={53} strokeWidth={1.3} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-b border-slate-100 bg-[#F5F8FD]">
        <div className="mx-auto grid max-w-[1280px] gap-6 px-5 py-8 sm:grid-cols-3 sm:px-8 lg:px-12 xl:px-16">
          {[
            { icon: LockKeyhole, title: "Data Protection", text: "Responsible handling of information." },
            { icon: ShieldCheck, title: "Transparency", text: "Clear information about our practices." },
            { icon: UserCheck, title: "User Control", text: "Understand your privacy choices." },
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
                aria-label="Toggle policy navigation"
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
              Contact our team if you have questions about your privacy.
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
              Welcome to Easeon Technologies. We respect your privacy and are
              committed to handling personal information responsibly. This
              Privacy Policy explains how information may be collected, used,
              stored and disclosed when you visit our website or interact with
              our services.
            </p>
            <p className="policy-text">
              By using our website, you acknowledge that you have read this
              policy. Where consent is legally required, we will seek it
              separately.
            </p>
          </article>

          <article id="information" className="scroll-mt-28">
            <SectionHeading number="02" title="Information We Collect" />
            <p className="policy-text">
              Depending on how you interact with us, we may collect the
              following categories of information:
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <InfoCard
                icon={UserCheck}
                title="Information You Provide"
                text="Name, email address, phone number, company details and information submitted through contact or enquiry forms."
              />
              <InfoCard
                icon={Database}
                title="Technical Information"
                text="Browser type, device information, IP address, pages visited and basic website usage information."
              />
            </div>
            <p className="policy-text mt-5">
              We collect information only where it is relevant to the purpose
              for which it is being processed.
            </p>
          </article>

          <article id="usage" className="scroll-mt-28">
            <SectionHeading number="03" title="How We Use Information" />
            <p className="policy-text">
              Information collected may be used for purposes such as:
            </p>
            <PolicyList items={[
              "Responding to enquiries and communication requests.",
              "Providing information about our services and solutions.",
              "Operating, maintaining and improving our website.",
              "Understanding website usage and improving user experience.",
              "Protecting our systems and preventing unauthorized activity.",
              "Meeting applicable legal and regulatory obligations.",
            ]} />
            <p className="policy-text mt-5">
              We will not use personal information for purposes that are
              incompatible with the reason it was collected, unless permitted
              by applicable law.
            </p>
          </article>

          <article id="cookies" className="scroll-mt-28">
            <SectionHeading number="04" title="Cookies & Tracking Technologies" />
            <p className="policy-text">
              Our website may use cookies or similar technologies to support
              essential website functionality, remember preferences and
              understand how visitors use our website.
            </p>
            <p className="policy-text">
              You can manage or disable cookies through your browser settings.
              Some website features may not function as intended if certain
              cookies are disabled.
            </p>
          </article>

          <article id="sharing" className="scroll-mt-28">
            <SectionHeading number="05" title="Information Sharing" />
            <p className="policy-text">
              We do not sell personal information. Information may be shared
              with appropriate parties only where necessary, including:
            </p>
            <PolicyList items={[
              "Service providers who help operate our website or deliver services.",
              "Professional advisers where reasonably necessary.",
              "Government authorities or law enforcement when legally required.",
              "Relevant parties in connection with a business restructuring or transfer, subject to applicable law.",
            ]} />
            <p className="policy-text mt-5">
              Any sharing of information should be limited to what is
              reasonably necessary for the relevant purpose.
            </p>
          </article>

          <article id="security" className="scroll-mt-28">
            <SectionHeading number="06" title="Data Security" />
            <p className="policy-text">
              We take reasonable technical and organizational measures designed
              to protect information against unauthorized access, alteration,
              disclosure or destruction.
            </p>
            <p className="policy-text">
              However, no method of internet transmission or electronic storage
              is completely secure. We cannot guarantee absolute security.
            </p>
          </article>

          <article id="retention" className="scroll-mt-28">
            <SectionHeading number="07" title="Data Retention" />
            <p className="policy-text">
              Personal information is retained only for as long as reasonably
              necessary to fulfil the purposes for which it was collected,
              including service delivery, record keeping, dispute resolution
              and compliance with applicable legal obligations.
            </p>
              <p className="policy-text">
              When information is no longer required, it will be securely
              deleted or anonymized where reasonably practicable and legally
              appropriate.
            </p>
          </article>

          <article id="rights" className="scroll-mt-28">
            <SectionHeading number="08" title="Your Privacy Rights" />
            <p className="policy-text">
              Depending on applicable law and your location, you may have
              rights regarding your personal information, including:
            </p>
            <PolicyList items={[
              "Request access to personal information held about you.",
              "Request correction of inaccurate or incomplete information.",
              "Request deletion of information where legally applicable.",
              "Withdraw consent where processing is based on consent.",
              "Raise a concern or submit a privacy-related complaint.",
            ]} />
            <p className="policy-text mt-5">
              To exercise an applicable right, please contact us using the
              details below. We may need to verify your identity before
              processing a request.
            </p>
          </article>

          <article id="contact" className="scroll-mt-28">
            <SectionHeading number="09" title="Contact Us" />
            <p className="policy-text">
              If you have questions, concerns or requests regarding this
              Privacy Policy or the handling of your personal information,
              please contact Easeon Technologies.
            </p>

            <div className="mt-7 rounded-2xl border border-blue-100 bg-[#F3F7FD] p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Mail size={23} />
              </div>
              <h3 className="mt-5 text-xl font-semibold">
                Privacy-related enquiries
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                Please use our contact page to submit your privacy-related
                questions or requests.
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
              We may update this Privacy Policy from time to time to reflect
              changes in our practices, services or applicable requirements.
              Any updated version will be published on this page with a revised
              date.
            </p>
            <p className="mt-4 text-xs text-slate-400">
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
              We're here to help
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Your questions deserve clear answers.
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

function InfoCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 p-5 transition hover:border-blue-200 hover:shadow-lg">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        <Icon size={20} />
      </div>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-500">{text}</p>
    </div>
  );
}

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate-600">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
          {item}
        </li>
      ))}
    </ul>
  );
}
