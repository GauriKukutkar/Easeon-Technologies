
import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
  Palette,
  Phone,
  Users,
  UserRoundCog,
  TrendingUp,
  X,
  Upload,
  Send,
  Sparkles,
  Building2,
  Lightbulb,
  Globe2,
} from "lucide-react";

// Replace this with Easeon's official recruitment email before publishing.
const CAREERS_EMAIL = "your-careers-email@company.com";

const jobs = [
  {
    id: "01",
    title: "Sales Executive",
    department: "Sales & Revenue",
    type: "Full-time",
    icon: TrendingUp,
    description:
      "Be part of our sales team and help businesses discover technology solutions that support their growth.",
    about:
      "As a Sales Executive, you will connect with potential customers, understand their business requirements and introduce relevant Easeon services. This role is ideal for someone who enjoys communication, networking and achieving business targets.",
    responsibilities: [
      "Identify and connect with potential customers.",
      "Generate leads through calls, networking and outreach.",
      "Present company services and explain their business value.",
      "Follow up with prospects and maintain sales records.",
      "Work towards individual and team sales targets.",
    ],
    skills: [
      "Good communication and presentation skills",
      "Lead generation and negotiation",
      "Customer handling",
      "Confidence and a target-oriented mindset",
    ],
    experience: "Experience in sales is preferred.",
  },
  {
    id: "02",
    title: "Relationship Manager",
    department: "Client Relations",
    type: "Full-time",
    icon: Users,
    description:
      "Build lasting client relationships and ensure customers receive a smooth and professional experience.",
    about:
      "You will act as an important connection between clients and internal teams. The role involves understanding client expectations, coordinating requirements and maintaining strong professional relationships.",
    responsibilities: [
      "Build and maintain relationships with existing clients.",
      "Understand client requirements and expectations.",
      "Coordinate with internal teams for project updates.",
      "Manage client communication and follow-ups.",
      "Identify opportunities for continued client engagement.",
    ],
    skills: [
      "Excellent interpersonal skills",
      "Client relationship management",
      "Problem-solving and coordination",
      "Professional communication",
    ],
    experience: "Relevant client-facing experience is preferred.",
  },
  {
    id: "03",
    title: "Graphic Designer",
    department: "Creative & Design",
    type: "Full-time",
    icon: Palette,
    description:
      "Turn ideas into engaging visual experiences through creative designs, branding and digital communication.",
    about:
      "We are looking for a creative designer who understands visual storytelling and can create consistent, impactful designs for digital platforms, marketing campaigns and brand communication.",
    responsibilities: [
      "Create social media posts and digital marketing creatives.",
      "Design brochures, presentations and promotional materials.",
      "Develop visual concepts for brand communication.",
      "Collaborate with marketing and development teams.",
      "Maintain design quality and brand consistency.",
    ],
    skills: [
      "Adobe Photoshop and Illustrator",
      "Figma and Canva",
      "Typography, layout and colour theory",
      "Creative thinking and attention to detail",
    ],
    experience: "A design portfolio is preferred.",
  },
  {
    id: "04",
    title: "Business Development Manager",
    department: "Business Development",
    type: "Full-time",
    icon: BriefcaseBusiness,
    description:
      "Discover new business opportunities, build strategic partnerships and contribute to company expansion.",
    about:
      "This role focuses on identifying potential markets, developing business relationships and creating opportunities for growth across Easeon's technology services.",
    responsibilities: [
      "Research markets and identify business opportunities.",
      "Develop new client and partner relationships.",
      "Prepare proposals, presentations and business plans.",
      "Manage the business development pipeline.",
      "Coordinate with sales and delivery teams.",
      "Work towards business growth objectives.",
    ],
    skills: [
      "Business communication and negotiation",
      "Market research and lead generation",
      "Strategic thinking",
      "Team coordination and leadership",
    ],
    experience: "Previous business development experience is preferred.",
  },
  {
    id: "05",
    title: "Telecaller",
    department: "Customer Communication",
    type: "Full-time",
    icon: Phone,
    description:
      "Connect with prospective customers, understand their enquiries and introduce them to relevant services.",
    about:
      "You will support customer outreach by making calls, sharing information about company services and maintaining organised enquiry and follow-up records.",
    responsibilities: [
      "Make outbound calls to prospective customers.",
      "Respond to customer enquiries professionally.",
      "Explain company services and offerings.",
      "Schedule follow-ups and maintain call records.",
      "Coordinate qualified enquiries with the sales team.",
    ],
    skills: [
      "Clear verbal communication",
      "Confidence over phone conversations",
      "Active listening",
      "Basic computer and data-entry skills",
    ],
    experience: "Freshers with good communication skills may apply.",
  },
  {
    id: "06",
    title: "HR Manager",
    department: "Human Resources",
    type: "Full-time",
    icon: UserRoundCog,
    description:
      "Support the people behind our work through recruitment, employee engagement and effective HR operations.",
    about:
      "The HR Manager will oversee recruitment coordination, employee onboarding, HR documentation and workplace processes while supporting a positive and productive working environment.",
    responsibilities: [
      "Manage recruitment and candidate screening.",
      "Coordinate interviews and hiring processes.",
      "Handle employee onboarding and documentation.",
      "Support attendance and HR administration.",
      "Coordinate employee engagement initiatives.",
      "Maintain employee records and HR processes.",
    ],
    skills: [
      "Recruitment and talent acquisition",
      "Communication and people management",
      "Organisation and documentation",
      "Confidentiality and problem-solving",
    ],
    experience: "Previous HR or recruitment experience is preferred.",
  },
];

const companyHighlights = [
  {
    icon: Code2,
    title: "Technology & Development",
    description:
      "Work around software development, websites, applications and digital products.",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Ideas",
    description:
      "Contribute ideas, explore new approaches and solve real business challenges.",
  },
  {
    icon: Globe2,
    title: "Digital Possibilities",
    description:
      "Be part of projects involving SaaS solutions, AI products and digital experiences.",
  },
  {
    icon: Users,
    title: "Collaborative Work",
    description:
      "Coordinate with different teams and contribute to shared project goals.",
  },
];

type ApplicationForm = {
  name: string;
  email: string;
  phone: string;
  experience: string;
  location: string;
  skills: string;
  portfolio: string;
  message: string;
};

const initialForm: ApplicationForm = {
  name: "",
  email: "",
  phone: "",
  experience: "",
  location: "",
  skills: "",
  portfolio: "",
  message: "",
};

export default function Career() {
  const [selectedJob, setSelectedJob] = useState<(typeof jobs)[number] | null>(
    null
  );
  const [form, setForm] = useState<ApplicationForm>(initialForm);
  const [resume, setResume] = useState<File | null>(null);

  const updateField = (field: keyof ApplicationForm, value: string) => {
    setForm((previous) => ({ ...previous, [field]: value }));
  };

  const openApplication = (job: (typeof jobs)[number]) => {
    setForm(initialForm);
    setResume(null);
    setSelectedJob(job);
    document.body.style.overflow = "hidden";
  };

  const closeApplication = () => {
    setSelectedJob(null);
    document.body.style.overflow = "";
  };

  const handleResume = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const validTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!validTypes.includes(file.type)) {
      alert("Please upload your resume in PDF or Word format.");
      event.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Resume size must be 5 MB or less.");
      event.target.value = "";
      return;
    }

    setResume(file);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedJob) return;

    const emailBody = [
      "JOB APPLICATION – EASEON TECHNOLOGIES",
      "",
      `Position: ${selectedJob.title}`,
      `Candidate Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Experience: ${form.experience}`,
      `Location: ${form.location}`,
      `Skills: ${form.skills}`,
      `Portfolio: ${form.portfolio || "Not provided"}`,
      `Additional Information: ${form.message || "Not provided"}`,
      `Resume Filename: ${resume?.name || "Not provided"}`,
      "",
      "Application Deadline: 25 March 2027",
      "",
      "Please find my resume attached if applicable.",
    ].join("\n");

    const subject = encodeURIComponent(
      `Job Application - ${selectedJob.title} - ${form.name}`
    );

    const body = encodeURIComponent(emailBody);

    window.location.href = `mailto:${CAREERS_EMAIL}?subject=${subject}&body=${body}`;

    closeApplication();
  };

  return (
    <div className="overflow-hidden bg-white text-[#111827]">

      {/* HERO - LIGHT */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F5FAFF] via-white to-[#EAF7FF] px-6 py-24 md:px-12 md:py-32">
        <div className="pointer-events-none absolute -right-32 -top-20 h-[520px] w-[520px] rounded-full border border-[#0866FF]/10" />
        <div className="pointer-events-none absolute -right-12 top-10 h-[350px] w-[350px] rounded-full border border-[#08B9D2]/15" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#0866FF]/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0866FF]/15 bg-white px-4 py-2 text-xs font-bold tracking-widest text-[#0866FF]">
              <span className="h-2 w-2 rounded-full bg-[#08B9D2]" />
              CAREERS AT EASEON
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-[1.13] tracking-tight text-[#111827] md:text-6xl lg:text-[68px]">
              Build Your Career.
              <span className="block bg-gradient-to-r from-[#0866FF] to-[#08B9D2] bg-clip-text text-transparent">
                Shape The Future.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#586579] md:text-lg">
              At Easeon Technologies, we believe great ideas become powerful
              solutions when talented people come together. Bring your skills,
              creativity and ambition to a team building next-generation
              digital products.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#open-positions"
                className="inline-flex items-center gap-3 rounded-full bg-[#0866FF] px-7 py-4 font-bold text-white shadow-lg shadow-[#0866FF]/20 transition hover:-translate-y-1 hover:bg-[#0755D4]"
              >
                Explore Open Positions
                <ArrowRight size={18} />
              </a>

              <div className="flex items-center gap-3 rounded-full border border-[#DCE7F5] bg-white px-5 py-4 text-sm font-semibold text-[#35445A]">
                <CalendarDays size={19} className="text-[#0866FF]" />
                Apply by 25 March 2027
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-7 text-sm text-[#64748B]">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#08A9C6]" />
                Multiple Opportunities
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#08A9C6]" />
                Different Career Paths
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[490px]">
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#0866FF]/20 to-[#08B9D2]/20 blur-3xl" />

            <div className="relative rounded-[32px] border border-white bg-white/80 p-5 shadow-[0_25px_80px_rgba(8,102,255,0.12)] backdrop-blur md:p-8">
              <div className="rounded-[24px] bg-gradient-to-br from-[#0B3B8F] via-[#0866FF] to-[#08B9D2] p-8 text-white md:p-10">
                <Sparkles size={32} className="text-white/80" />

                <p className="mt-10 text-xs font-bold tracking-[0.22em] text-white/70">
                  THE NEXT CHAPTER
                </p>

                <h2 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
                  Your talent.
                  <br />
                  Our technology.
                  <br />
                  Endless possibilities.
                </h2>

                <div className="mt-10 flex items-center justify-between border-t border-white/20 pt-6">
                  <span className="text-sm text-white/75">
                    Let's build something meaningful.
                  </span>
                  <ArrowUpRight size={24} />
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {["CREATE", "INNOVATE", "GROW"].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-[#F0F7FF] px-2 py-4 text-center text-[10px] font-extrabold tracking-widest text-[#0866FF] md:text-xs"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY INTRO - DARK */}
      <section className="bg-[#0A1428] px-6 py-20 text-white md:px-12 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold tracking-[0.2em] text-[#08B9D2]">
              GET TO KNOW EASEON
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">
              We build digital products
              <span className="text-[#08B9D2]"> that drive growth.</span>
            </h2>

            <p className="mt-6 leading-8 text-white/65">
              Easeon Technologies is a software company focused on building
              next-generation SaaS solutions, mobile applications, websites,
              AI products and digital solutions.
            </p>

            <p className="mt-4 leading-8 text-white/65">
              Our work brings together technology, design and business
              understanding to create digital experiences that help businesses
              move forward.
            </p>

            <p className="mt-4 leading-8 text-white/65">
              We welcome people from different professional backgrounds who
              are interested in contributing their knowledge, ideas and
              abilities to meaningful work.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {companyHighlights.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-[#08B9D2]/50 hover:bg-white/[0.07]"
              >
                <Icon size={27} className="text-[#08B9D2]" />
                <h3 className="mt-6 text-lg font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* JOB OPENINGS - LIGHT */}
      <section
        id="open-positions"
        className="scroll-mt-24 bg-[#F6FAFF] px-6 py-20 md:px-12 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold tracking-[0.2em] text-[#0866FF]">
                EXPLORE OPPORTUNITIES
              </p>

              <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
                Find your role.
                <span className="block text-[#0866FF]">
                  Make your mark.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-[#64748B]">
                Explore our current openings, understand the responsibilities
                and apply for the opportunity that matches your strengths.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-[#DCE8F6] bg-white px-5 py-4">
              <BriefcaseBusiness className="text-[#0866FF]" size={23} />
              <div>
                <p className="text-2xl font-extrabold text-[#111827]">06</p>
                <p className="text-xs text-[#64748B]">Open positions</p>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {jobs.map((job) => {
              const Icon = job.icon;

              return (
                <article
                  key={job.id}
                  className="group flex flex-col rounded-2xl border border-[#E1EAF5] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#0866FF]/40 hover:shadow-xl hover:shadow-[#0866FF]/5 md:p-8"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EDF5FF] text-[#0866FF] transition group-hover:bg-[#0866FF] group-hover:text-white">
                      <Icon size={26} />
                    </div>
                    <span className="text-sm font-bold tracking-widest text-[#A4B4C8]">
                      {job.id}
                    </span>
                  </div>

                  <p className="mt-7 text-xs font-bold uppercase tracking-widest text-[#08A9C6]">
                    {job.department}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold text-[#111827]">
                    {job.title}
                  </h3>

                  <span className="mt-4 w-fit rounded-full bg-[#F0F6FF] px-3 py-1.5 text-xs font-semibold text-[#0866FF]">
                    {job.type}
                  </span>

                  <p className="mt-5 flex-1 text-sm leading-7 text-[#64748B]">
                    {job.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => openApplication(job)}
                    className="mt-7 flex w-full items-center justify-between rounded-xl bg-[#0866FF] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#0B3B8F]"
                  >
                    Apply for this Job
                    <ArrowUpRight size={18} />
                  </button>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* WORK CULTURE - DARK */}
      <section className="bg-[#0B3B8F] px-6 py-20 text-white md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-[0.2em] text-[#8CEBFA]">
              MORE THAN A JOB
            </p>

            <h2 className="mt-5 text-4xl font-extrabold md:text-5xl">
              Bring your perspective.
              <span className="block text-[#8CEBFA]">
                Create your possibilities.
              </span>
            </h2>

            <p className="mt-5 leading-8 text-white/70">
              We believe professional growth comes from learning, collaboration
              and taking ownership of the work we do.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Keep Learning",
                text: "Build your knowledge, explore new skills and stay curious.",
              },
              {
                number: "02",
                title: "Share Ideas",
                text: "Bring your perspective and contribute to better solutions.",
              },
              {
                number: "03",
                title: "Take Initiative",
                text: "Own your responsibilities and make a meaningful contribution.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border border-white/15 bg-white/[0.07] p-8"
              >
                <span className="text-sm font-extrabold text-[#8CEBFA]">
                  {item.number}
                </span>
                <h3 className="mt-7 text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS - LIGHT */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-[0.2em] text-[#0866FF]">
              HOW TO APPLY
            </p>
            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Your application journey.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Choose a Position",
                text: "Explore the available roles and select the position that matches your profile.",
              },
              {
                number: "02",
                title: "Share Your Profile",
                text: "Complete the application form with your contact details, experience and resume.",
              },
              {
                number: "03",
                title: "Our Team Connects",
                text: "Our recruitment team can review your application and contact you regarding the next steps.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="border-l-2 border-[#08B9D2] pl-7"
              >
                <span className="text-sm font-extrabold text-[#0866FF]">
                  STEP {step.number}
                </span>
                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#64748B]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - LIGHT */}
      <section className="bg-gradient-to-r from-[#EAF4FF] to-[#E9FBFF] px-6 py-20 text-center md:px-12 md:py-24">
        <div className="mx-auto max-w-3xl">
          <Building2 size={34} className="mx-auto text-[#0866FF]" />

          <h2 className="mt-6 text-4xl font-extrabold md:text-5xl">
            Ready to build with Easeon?
          </h2>

          <p className="mt-5 leading-8 text-[#64748B]">
            Find your opportunity, share your profile and take the next step in
            your professional journey.
          </p>

          <a
            href="#open-positions"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#0866FF] px-8 py-4 font-bold text-white shadow-lg shadow-[#0866FF]/20 transition hover:-translate-y-1 hover:bg-[#0B3B8F]"
          >
            Explore Open Positions <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* DEADLINE - DARK */}
      <section className=" m-0 bg-[#0A1428] px-6 py-16 text-white md:px-12 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-9 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-[0.2em] text-[#08B9D2]">
              DON'T MISS THE OPPORTUNITY
            </p>

            <h2 className="mt-5 text-4xl font-extrabold md:text-5xl">
              Your next move could start here.
            </h2>

            <p className="mt-5 leading-8 text-white/60">
              Explore the available positions and submit your application
              before the recruitment deadline.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-7 md:min-w-[290px]">
            <CalendarDays size={28} className="text-[#08B9D2]" />
            <p className="mt-5 text-xs font-bold tracking-[0.18em] text-white/50">
              LAST DATE TO APPLY
            </p>
            <p className="mt-2 text-3xl font-extrabold text-[#8CEBFA]">
              25 March
            </p>
            <p className="mt-1 text-lg font-semibold text-white">2027</p>
          </div>
        </div>
      </section>


      {/* APPLICATION MODAL */}
      {selectedJob && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#061329]/75 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeApplication();
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="application-title"
            className="relative flex max-h-[94vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="relative shrink-0 bg-gradient-to-r from-[#0B3B8F] via-[#0866FF] to-[#08B9D2] px-6 py-7 text-white sm:px-9">
              <button
                type="button"
                onClick={closeApplication}
                aria-label="Close application form"
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/30"
              >
                <X size={19} />
              </button>

              <p className="text-xs font-bold tracking-[0.2em] text-white/70">
                EASEON TECHNOLOGIES · CAREERS
              </p>

              <h2
                id="application-title"
                className="mt-3 pr-10 text-2xl font-extrabold sm:text-3xl"
              >
                Apply for {selectedJob.title}
              </h2>

              <p className="mt-2 text-sm text-white/75">
                Complete your details to apply for this opportunity.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="overflow-y-auto px-6 py-7 sm:px-9"
            >
              <div className="mb-6 rounded-xl border border-[#DCEBFA] bg-[#F3F8FF] p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-[#0866FF]">
                  Selected position
                </p>
                <p className="mt-1 font-bold text-[#111827]">
                  {selectedJob.title}
                </p>
                <p className="mt-1 text-xs text-[#64748B]">
                  {selectedJob.department} · {selectedJob.type}
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Full Name *
                  </label>
                  <input
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded-lg border border-[#DCE4EF] px-4 py-3 text-sm outline-none transition focus:border-[#0866FF] focus:ring-2 focus:ring-[#0866FF]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-[#DCE4EF] px-4 py-3 text-sm outline-none transition focus:border-[#0866FF] focus:ring-2 focus:ring-[#0866FF]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9+\-\s()]{10,16}"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="Enter contact number"
                    className="w-full rounded-lg border border-[#DCE4EF] px-4 py-3 text-sm outline-none transition focus:border-[#0866FF] focus:ring-2 focus:ring-[#0866FF]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Total Experience *
                  </label>
                  <select
                    required
                    value={form.experience}
                    onChange={(e) => updateField("experience", e.target.value)}
                    className="w-full rounded-lg border border-[#DCE4EF] bg-white px-4 py-3 text-sm outline-none focus:border-[#0866FF]"
                  >
                    <option value="">Select experience</option>
                    <option>Fresher</option>
                    <option>Less than 1 year</option>
                    <option>1–2 years</option>
                    <option>2–4 years</option>
                    <option>4–6 years</option>
                    <option>6+ years</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Current Location *
                  </label>
                  <input
                    required
                    value={form.location}
                    onChange={(e) => updateField("location", e.target.value)}
                    placeholder="City, State"
                    className="w-full rounded-lg border border-[#DCE4EF] px-4 py-3 text-sm outline-none focus:border-[#0866FF]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Key Skills *
                  </label>
                  <input
                    required
                    value={form.skills}
                    onChange={(e) => updateField("skills", e.target.value)}
                    placeholder="Your relevant skills"
                    className="w-full rounded-lg border border-[#DCE4EF] px-4 py-3 text-sm outline-none focus:border-[#0866FF]"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold">
                  Portfolio / LinkedIn URL
                  <span className="ml-1 font-normal text-[#94A3B8]">
                    (Optional)
                  </span>
                </label>
                <input
                  type="url"
                  value={form.portfolio}
                  onChange={(e) => updateField("portfolio", e.target.value)}
                  placeholder="https://..."
                  className="w-full rounded-lg border border-[#DCE4EF] px-4 py-3 text-sm outline-none focus:border-[#0866FF]"
                />
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold">
                  Upload Resume
                  <span className="ml-1 font-normal text-[#94A3B8]">
                    (PDF or Word, max 5 MB)
                  </span>
                </label>

                <label className="flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-[#AFC8E9] bg-[#F6FAFF] p-5 transition hover:border-[#0866FF]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#0866FF]">
                    <Upload size={21} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-[#24334A]">
                      {resume ? resume.name : "Choose your resume"}
                    </p>
                    <p className="mt-1 text-xs text-[#8492A6]">
                      {resume
                        ? "File selected"
                        : "Click here to browse files"}
                    </p>
                  </div>

                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={handleResume}
                  />
                </label>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold">
                  Tell us a little about yourself
                  <span className="ml-1 font-normal text-[#94A3B8]">
                    (Optional)
                  </span>
                </label>
                <textarea
                  rows={3}
                  maxLength={1000}
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder="Why are you interested in this role?"
                  className="w-full resize-y rounded-lg border border-[#DCE4EF] px-4 py-3 text-sm outline-none focus:border-[#0866FF]"
                />
              </div>

              <div className="mt-6 rounded-xl bg-[#F1F7FF] p-4 text-xs leading-6 text-[#64748B]">
                Application deadline:{" "}
                <strong className="text-[#0866FF]">
                  25 March 2027
                </strong>
                <br />
                Your email application will open with the details filled in.
                You will need to attach your resume manually before sending.
              </div>

              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#0866FF] px-6 py-4 font-bold text-white shadow-lg shadow-[#0866FF]/15 transition hover:bg-[#0B3B8F]"
              >
                Prepare Application <Send size={18} />
              </button>

              <button
                type="button"
                onClick={closeApplication}
                className="mt-3 w-full py-3 text-sm font-semibold text-[#64748B] transition hover:text-[#0866FF]"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
