
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FileText,
  Scale,
  ShieldCheck,
  BriefcaseBusiness,
  CreditCard,
  Copyright,
  AlertCircle,
  Ban,
  RefreshCw,
  Mail,
  ChevronRight,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

const sections = [
  { id: "acceptance", title: "Acceptance of Terms", icon: FileText },
  { id: "services", title: "Our Services", icon: BriefcaseBusiness },
  { id: "responsibilities", title: "User Responsibilities", icon: ShieldCheck },
  { id: "intellectual-property", title: "Intellectual Property", icon: Copyright },
  { id: "payments", title: "Payments & Engagements", icon: CreditCard },
  { id: "third-party", title: "Third-Party Services", icon: Scale },
  { id: "liability", title: "Limitation of Liability", icon: AlertCircle },
  { id: "termination", title: "Termination", icon: Ban },
  { id: "changes", title: "Changes to Terms", icon: RefreshCw },
  { id: "contact", title: "Contact Us", icon: Mail },
];

export default function Termsconditions() {
  const [activeSection, setActiveSection] = useState("acceptance");
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
              <Scale size={16} />
              Legal Information
            </div>

            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Clear terms.
              <span className="block text-[#51C9F0]">Transparent relationships.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/70 sm:text-lg">
              These Terms & Conditions explain the rules and responsibilities
              that apply when you access the Easeon Technologies website or
              engage with our services.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5 text-sm text-blue-100/60">
              <span className="flex items-center gap-2">
                <FileText size={16} className="text-cyan-300" />
                Terms & Conditions
              </span>
              <span className="h-1 w-1 rounded-full bg-blue-300/50" />
              <span>Last updated: 3 November 2026</span>
            </div>
          </div>

          <div className="absolute right-12 top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-blue-300/20 bg-blue-400/5">
              <div className="absolute inset-5 rounded-full border border-cyan-300/20" />
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 shadow-[0_0_60px_rgba(8,185,210,0.15)]">
                <Scale size={49} strokeWidth={1.3} />
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
              title: "Fair Usage",
              text: "Clear expectations for website visitors.",
            },
            {
              icon: BriefcaseBusiness,
              title: "Service Clarity",
              text: "Understand how our services are engaged.",
            },
            {
              icon: Scale,
              title: "Transparency",
              text: "Defined rights and responsibilities.",
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

      {/* CONTENT */}
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
                aria-label="Toggle terms navigation"
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
            <h3 className="mt-4 font-semibold">Need clarification?</h3>
            <p className="mt-2 text-sm leading-6 text-blue-100/65">
              Contact our team if you have questions about these terms.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 hover:text-white"
            >
              Contact Us <ArrowUpRight size={16} />
            </Link>
          </div>
        </aside>

        {/* TERMS DETAILS */}
        <div className="min-w-0 max-w-[850px] space-y-14">

          <article id="acceptance" className="scroll-mt-28">
            <SectionHeading number="01" title="Acceptance of Terms" />
            <p className="terms-text">
              Welcome to Easeon Technologies. By accessing or using our website,
              you agree to comply with these Terms & Conditions and any
              applicable laws and regulations.
            </p>
            <p className="terms-text">
              If you do not agree with these terms, please discontinue use of
              our website. These terms apply to website visitors and users of
              our online services. Specific client engagements may be governed
              by separate written agreements.
            </p>
          </article>

          <article id="services" className="scroll-mt-28">
            <SectionHeading number="02" title="Our Services" />
            <p className="terms-text">
              Easeon Technologies provides technology and digital services.
              Depending on the project and agreed scope, these may include:
            </p>
            <PolicyList items={[
              "Software and web application development.",
              "Website and mobile application development.",
              "SaaS and AI-based solutions.",
              "UI/UX and digital product design.",
              "Digital marketing and performance marketing.",
              "Cloud, DevOps and related technology services.",
            ]} />
            <p className="terms-text mt-5">
              Service descriptions on this website are provided for general
              information. Actual deliverables, timelines, pricing and
              responsibilities will be defined in the relevant proposal,
              quotation, statement of work or written agreement.
            </p>
          </article>

          <article id="responsibilities" className="scroll-mt-28">
            <SectionHeading number="03" title="User Responsibilities" />
            <p className="terms-text">
              When using our website, you agree to:
            </p>
            <PolicyList items={[
              "Provide accurate information when submitting enquiries or forms.",
              "Use the website only for lawful purposes.",
              "Avoid attempting unauthorized access to our systems or services.",
              "Not upload or transmit malicious code, harmful files or disruptive content.",
              "Not misuse website content, forms or communication channels.",
              "Respect the intellectual property and rights of others.",
            ]} />
          </article>

          <article id="intellectual-property" className="scroll-mt-28">
            <SectionHeading number="04" title="Intellectual Property" />
            <p className="terms-text">
              Unless otherwise stated, the website's design, branding, text,
              graphics, visual elements, logos and other original content are
              owned by or licensed to Easeon Technologies and are protected by
              applicable intellectual property laws.
            </p>
            <p className="terms-text">
              You may not reproduce, distribute, modify, publish or commercially
              exploit website content without prior written permission, except
              where permitted by law.
            </p>
            <p className="terms-text">
              Ownership and permitted use of project-specific deliverables,
              source code and other work created for clients will be governed
              by the applicable client agreement.
            </p>
          </article>

          <article id="payments" className="scroll-mt-28">
            <SectionHeading number="05" title="Payments & Service Engagements" />
            <p className="terms-text">
              Commercial engagements with Easeon Technologies may involve
              project fees, subscriptions, milestone payments or other agreed
              charges.
            </p>
            <p className="terms-text">
              The applicable proposal, quotation, invoice or written agreement
              will specify the payment amount, due dates, scope, deliverables
              and any applicable cancellation or refund conditions.
            </p>
            <p className="terms-text">
              No payment, refund or delivery terms should be assumed from
              general website descriptions alone.
            </p>
          </article>

          <article id="third-party" className="scroll-mt-28">
            <SectionHeading number="06" title="Third-Party Services & Links" />
            <p className="terms-text">
              Our website may contain links to third-party websites, platforms
              or services. These are provided for convenience or informational
              purposes.
            </p>
            <p className="terms-text">
              Easeon Technologies does not control all third-party services
              and is not responsible for their content, availability, security
              or privacy practices. Your use of those services is subject to
              their own terms and policies.
            </p>
          </article>

          <article id="liability" className="scroll-mt-28">
            <SectionHeading number="07" title="Limitation of Liability" />
            <p className="terms-text">
              We make reasonable efforts to provide accurate website
              information and maintain availability. However, the website and
              its general content are provided on an "as available" basis.
            </p>
            <p className="terms-text">
              To the extent permitted by applicable law, Easeon Technologies
              will not be liable for indirect, incidental or consequential
              losses arising from the use of, or inability to use, the website.
            </p>
            <p className="terms-text">
              Nothing in these terms excludes or limits liability where such
              exclusion or limitation is prohibited by applicable law.
              Project-specific liability will be governed by the relevant
              written agreement.
            </p>
          </article>

          <article id="termination" className="scroll-mt-28">
            <SectionHeading number="08" title="Suspension & Termination" />
            <p className="terms-text">
              We reserve the right to restrict or suspend access to our website
              where reasonably necessary to protect our systems, users or
              services, investigate misuse, or comply with legal obligations.
            </p>
            <p className="terms-text">
              Termination of a client engagement, including the consequences
              of termination, will be governed by the relevant client
              agreement.
            </p>
          </article>

          <article id="changes" className="scroll-mt-28">
            <SectionHeading number="09" title="Changes to These Terms" />
            <p className="terms-text">
              We may update these Terms & Conditions from time to time to
              reflect changes in our services, business practices or legal
              requirements.
            </p>
            <p className="terms-text">
              Updated terms will be published on this page with a revised
              date. Your continued use of the website after an update means
              that you are using the website under the revised terms, subject
              to applicable law.
            </p>
          </article>

          <article id="contact" className="scroll-mt-28">
            <SectionHeading number="10" title="Contact Us" />
            <p className="terms-text">
              For questions or clarification about these Terms & Conditions,
              please contact Easeon Technologies through our contact page.
            </p>

            <div className="mt-7 rounded-2xl border border-blue-100 bg-[#F3F7FD] p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <Mail size={23} />
              </div>
              <h3 className="mt-5 text-xl font-semibold">
                Get in touch with our team
              </h3>
              <p className="mt-2 text-sm leading-7 text-slate-500">
                Send us your questions about website usage, services or these
                terms.
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
              These terms should be read together with our Privacy Policy.
              Additional written agreements may apply to specific services
              and client engagements.
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
              Let's build together
            </p>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Have a project in mind?
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#0866FF] px-7 py-4 font-medium transition hover:bg-blue-500"
          >
            Start a Conversation <ArrowUpRight size={18} />
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
