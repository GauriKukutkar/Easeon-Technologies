import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import HeroLogo from "../assets/Logos/Easeon_logo.png";
import Majuidli from "../assets/Logos/maju_idli.jpeg";
import ansh from "../assets/Logos/ansh.png";
import Dhanishta from "../assets/Logos/dhanishta.png";
import Haircrown from "../assets/Logos/Hair_crown_logo.png";
import Sewa from "../assets/Logos/sewa.jpeg";
import { CheckCircle2, Play, } from "lucide-react";

import RelaxMode1 from "../assets/images/relax_home.png";
import Globe from "../assets/images/globe.png";
import { ShieldCheck, BriefcaseBusiness, Boxes, Headphones, } from "lucide-react";
import { Database, Building2, UsersRound, MonitorSmartphone, Bot, Smartphone, } from "lucide-react";
import { HeartPulse, Scissors, GraduationCap, Store, Hotel, Landmark, Factory, Plane, HardHat,} from "lucide-react";
import { Search, ClipboardList, PencilRuler, Code2, Rocket,} from "lucide-react";
import TechStack from "../Sections/tech_stack";
import Marketing from "../Sections/Marketing";
import CTA from "../Sections/CTA";

const Home = () => {

  

const services = [
  {
    title: "CRM",
    description:
      "Manage leads, sales & customer relationships in one place.",
    icon: Database,
  },
  {
    title: "ERP",
    description:
      "Streamline operations and boost productivity across departments.",
    icon: Building2,
  },
  {
    title: "HRMS",
    description:
      "Automate HR processes from recruitment to employee engagement.",
    icon: UsersRound,
  },
  {
    title: "Custom Software",
    description:
      "Tailored software solutions that fit your unique business needs.",
    icon: MonitorSmartphone,
  },
  {
    title: "AI & Automation",
    description:
      "Intelligent automation to save time and increase efficiency.",
    icon: Bot,
  },
  {
    title: "Mobile Apps",
    description:
      "High-performance mobile applications for Android & iOS.",
    icon: Smartphone,
  },
];

// globe 
const industries = [
  { title: "Healthcare", icon: HeartPulse },
  { title: "Beauty & Salon", icon: Scissors },
  { title: "Education", icon: GraduationCap },
  { title: "Retail", icon: Store },
  { title: "Real Estate", icon: Building2 },
  { title: "Hospitality", icon: Hotel },
  { title: "Finance", icon: Landmark },
  { title: "Manufacturing", icon: Factory },
  { title: "Travel", icon: Plane },
  { title: "Construction", icon: HardHat },
];

const process = [
  {
    number: "01",
    title: "Discover",
    desc: "Understand your vision, business goals and user requirements.",
    icon: Search,
  },
  {
    number: "02",
    title: "Plan",
    desc: "Create a strategic roadmap with milestones and timelines.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Design",
    desc: "Craft intuitive UI/UX experiences with modern design principles.",
    icon: PencilRuler,
  },
  {
    number: "04",
    title: "Develop",
    desc: "Build scalable web, mobile and SaaS applications.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Test",
    desc: "Ensure quality through testing, optimization and security checks.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Launch",
    desc: "Deploy, monitor and continuously improve your product.",
    icon: Rocket,
  },
];

  return (
    <>
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-white">

        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute left-[-150px] top-[-120px] h-[420px] w-[420px] rounded-full bg-blue-100 blur-[120px] opacity-60"></div>

          <div className="absolute right-[-120px] bottom-[-120px] h-[380px] w-[380px] rounded-full bg-cyan-100 blur-[130px] opacity-70"></div>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.05),transparent_70%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-24">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 border border-blue-100">
                ● WE BUILD. YOU GROW.
              </span>

              <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                We Build
                <br />
                Digital Products
                <br />
                That{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Drive Growth
                </span>
              </h1>

              <p className="mt-8 text-gray-600 text-lg leading-8 max-w-xl">
                Easeon Tech is a premium software company building
                next-generation SaaS solutions, mobile apps, websites,
                AI products and digital experiences that help businesses
                automate, scale and succeed in the digital era.
              </p>

              <div className="mt-10 flex flex-wrap gap-5">

                <button className="group rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-4 text-white font-semibold shadow-xl transition-all hover:scale-105">
                  Book a Free Consultation
                </button>

                <button className="group rounded-xl border border-gray-200 bg-white px-7 py-4 font-semibold text-gray-700 shadow-sm hover:shadow-lg transition">
                  Explore Solutions
                  <ArrowRight
                    className="ml-2 inline transition group-hover:translate-x-1"
                    size={18}
                  />
                </button>

              </div>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex justify-center"
            >

              {/* Rings */}

              <div className="absolute h-[420px] w-[420px] rounded-full border border-blue-100"></div>
              <div className="absolute h-[360px] w-[360px] rounded-full border border-blue-50"></div>
              <div className="absolute h-[300px] w-[300px] rounded-full border border-blue-50"></div>

              {/* Floating squares */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute right-16 top-10"
              >
                {/* <div className="grid grid-cols-2 gap-3">
                  <div className="w-5 h-5 bg-blue-500 rounded-sm"></div>
                  <div className="w-4 h-4 bg-cyan-400 rounded-sm"></div>
                  <div className="w-4 h-4 bg-cyan-400 rounded-sm"></div>
                  <div className="w-5 h-5 bg-blue-500 rounded-sm"></div>
                </div> */}
              </motion.div>

              {/* Logo */}

              <motion.img
                src={HeroLogo}
                alt="Easeon Tech"
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="relative w-[340px] lg:w-[420px] object-contain drop-shadow-2xl"
              />

            </motion.div>

          </div>

        </div>

      </section>

{/* ===================== TRUSTED CLIENTS ===================== */}

<section className="py-14 bg-white -mt-15">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}
    <div className="text-center">
      {/* <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
        TRUSTED BY INNOVATIVE BUSINESSES
      </p> */}

      <h3 className="mt-2 text-2xl font-bold  text-black-600">
 TRUSTED BY INNOVATIVE BUSINESSES      </h3>

      {/* <p className="mt-3 max-w-2xl mx-auto text-gray-500">
        From startups to established businesses, we build software that powers
        growth through modern technology.
      </p> */}
    </div>

    {/* Logos */}
    <div className="mt-10 border-y border-gray-100 py-10">

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 items-center justify-items-center gap-y-10">

        {/* Maju Idli */}
        <div className="group flex items-center justify-center">
          <img
            src={Majuidli}
            alt="Maju Idli"
            className="max-h-20 md:max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Ansh */}
        <div className="group flex items-center justify-center">
          <img
            src={ansh}
            alt="Ansh"
            className="max-h-20 md:max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Dhanishta */}
        <div className="group flex items-center justify-center">
          <img
            src={Dhanishta}
            alt="Dhanishta"
            className="max-h-20 md:max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Hair Crown */}
        <div className="group flex items-center justify-center">
          <img
            src={Haircrown}
            alt="Hair Crown"
            className="max-h-20 md:max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Sewa Infrastructure */}
        <div className="group flex items-center justify-center">
          <img
            src={Sewa}
            alt="Sewa Infrastructure"
            className="max-h-20 md:max-h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>

      </div>

    </div>

  </div>
</section>

{/* ===================== MINI STATS ===================== */}

<section className="py-14 bg-white -mt-15">
  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="rounded-3xl border border-gray-100 bg-white shadow-sm">

      <div className="grid grid-cols-2 lg:grid-cols-4">

        {/* Item */}

        <div className="flex items-center gap-4 p-8 lg:border-r border-gray-100">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
            <BriefcaseBusiness
              size={20}
              className="text-blue-600"
              strokeWidth={2}
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              100+
            </h3>

            <p className="text-sm text-gray-500">
              Projects Delivered
            </p>
          </div>
        </div>

        {/* Item */}

        <div className="flex items-center gap-4 p-8 lg:border-r border-gray-100">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
            <ShieldCheck
              size={20}
              className="text-blue-600"
              strokeWidth={2}
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              98%
            </h3>

            <p className="text-sm text-gray-500">
              Client Satisfaction
            </p>
          </div>
        </div>

        {/* Item */}

        <div className="flex items-center gap-4 p-8 lg:border-r border-gray-100">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
            <Boxes
              size={20}
              className="text-blue-600"
              strokeWidth={2}
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              40+
            </h3>

            <p className="text-sm text-gray-500">
              SaaS Products
            </p>
          </div>
        </div>

        {/* Item */}

        <div className="flex items-center gap-4 p-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
            <Headphones
              size={20}
              className="text-blue-600"
              strokeWidth={2}
            />
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              24/7
            </h3>

            <p className="text-sm text-gray-500">
              Support Available
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>


{/* ===================== FLAGSHIP PRODUCT ===================== */}

<section className="relative overflow-hidden py-24 bg-gradient-to-b from-white to-blue-50/40">

  {/* Background Blur */}

  <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-[140px] opacity-50"></div>

  <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-100 blur-[150px] opacity-40"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left */}

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >

        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-blue-700">
          Our Flagship Product
        </span>

        <h2 className="mt-6 text-5xl font-bold text-gray-900">
          Relax Mode
        </h2>

        <p className="mt-5 text-xl text-gray-600 leading-8">
          India's next-generation salon booking ecosystem designed for
          customers and salon owners with AI-powered scheduling,
          seamless appointment management and smart business tools.
        </p>

        <div className="mt-10 space-y-5">

          {[
            "Book appointments in seconds",
            "Live stylist & slot availability",
            "AI-powered recommendations",
            "Digital salon management",
            "Rewards & loyalty programs",
          ].map((item) => (
            <div key={item} className="flex items-center gap-4">

              <CheckCircle2
                className="text-blue-600"
                size={22}
              />

              <span className="text-gray-700 text-lg">
                {item}
              </span>

            </div>
          ))}

        </div>

        <div className="mt-12 flex flex-wrap gap-5">

          <button className="rounded-xl bg-blue-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-blue-700 transition">
            Explore Relax Mode
          </button>

          <button className="rounded-xl border border-gray-200 bg-white px-8 py-4 font-semibold flex items-center gap-2 hover:shadow-md">

            <Play size={18} />

            Google Play

          </button>

        </div>

      </motion.div>
{/* Right */}

<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative flex items-center justify-center min-h-[650px]"
>
  {/* Background Glow */}
  <div className="absolute h-[550px] w-[550px] rounded-full bg-blue-100/60 blur-[120px]" />

  {/* Decorative Ring */}
  <div className="absolute h-[450px] w-[450px] rounded-full border border-blue-100" />

  {/* Product Image */}
  <img
    src={RelaxMode1}
    alt="Relax Mode App"
    className="relative z-10 h-[400px] w-[520px] lg:w-[620px] xl:w-[700px] object-contain drop-shadow-[0_35px_80px_rgba(0,0,0,0.18)]"
  />

  {/* Floating Heart */}
  <div className="absolute left-6 top-1/2 z-20 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl">
    ❤️
  </div>

  {/* Floating Sparkle */}
  <div className="absolute right-8 top-1/3 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-xl text-xl">
    ✨
  </div>
</motion.div>

    </div>

  </div>

</section>

{/* ===================== SERVICES ===================== */}

<section className="relative overflow-hidden py-28 bg-white">

  {/* Background Blur */}

  <div className="absolute -left-28 top-0 h-72 w-72 rounded-full bg-blue-100 blur-[130px] opacity-40" />

  {/* Animated Wave */}

  <motion.div
    animate={{
      y: [0, -12, 0],
      x: [0, 8, 0],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-0 right-0 opacity-70"
  >
    <svg
      width="700"
      height="350"
      viewBox="0 0 700 350"
      fill="none"
    >
      <defs>
        <linearGradient id="wave" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#60A5FA" stopOpacity=".22" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {Array.from({ length: 18 }).map((_, i) => (
        <path
          key={i}
          d={`M0 ${340 - i * 14}
             C180 ${260 - i * 10},
             350 ${380 - i * 10},
             700 ${240 - i * 14}`}
          stroke="url(#wave)"
          strokeWidth="1.2"
        />
      ))}
    </svg>
  </motion.div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

    <p className="text-blue-600 text-xs font-semibold uppercase tracking-[0.25em]">
      WHAT WE DO
    </p>

    <h2 className="mt-4 text-5xl font-bold text-gray-900">
      SaaS Solutions That Solve Real Problems
    </h2>

    <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {services.map((service, index) => {
        const Icon = service.icon;

        return (
          <motion.div
            key={index}
            whileHover={{
              y: -6,
            }}
            transition={{
              duration: .25,
            }}
            className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all hover:border-blue-200 hover:shadow-xl"
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 bg-blue-50">

              <Icon
                className="text-blue-600"
                size={22}
              />

            </div>

            <h3 className="mt-6 text-xl font-semibold text-gray-900">
              {service.title}
            </h3>

            <p className="mt-3 leading-7 text-gray-500">
              {service.description}
            </p>

          </motion.div>
        );
      })}

    </div>

    <div className="mt-16 flex justify-center">

      <button className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-8 py-4 font-semibold shadow-sm transition hover:border-blue-200 hover:shadow-lg">

        View All Solutions

        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />

      </button>

    </div>

  </div>

</section>


{/* Industry we empower */}
<section className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50/30 py-28">

  {/* Blur */}
  <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-100 blur-[120px] opacity-40" />

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="grid lg:grid-cols-[40%_60%] gap-20 items-center">

      {/* Left */}

      <div>
<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>

  <motion.span
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.2 }}
    className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-blue-600"
  >
    Industries We Empower
  </motion.span>

  <motion.h2
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: 0.35 }}
    className="mt-4 text-5xl font-bold leading-tight text-gray-900"
  >
    Solutions Across
    <br />
    Every Industry
  </motion.h2>

  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: 120 }}
    viewport={{ once: true }}
    transition={{ delay: .8, duration: .8 }}
    className="mt-5 h-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
  />

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: .55 }}
    className="mt-6 text-lg leading-8 text-gray-500"
  >
    We build intelligent digital products that help businesses
    innovate, automate and grow faster across multiple industries.
  </motion.p>

</motion.div>

      </div>

      {/* ================= Right ================= */}

<motion.div
  initial={{ opacity: 0, scale: .85, x: 80 }}
  whileInView={{ opacity: 1, scale: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 1,
    type: "spring",
    stiffness: 80,
  }}
  className="relative flex items-center justify-center min-h-[420px]"
> 

  {/* Soft Glow */}
  <div className="absolute h-[420px] w-[420px] rounded-full bg-blue-100/60 blur-[90px]" />

  {/* Orbit Ring 1 */}
  <div className="absolute h-[420px] w-[420px] rounded-full border border-blue-200/70 animate-[spin_60s_linear_infinite]" />

  {/* Orbit Ring 2 */}
  <div className="absolute h-[380px] w-[380px] rounded-full border border-blue-100 rotate-45 animate-[spin_40s_linear_infinite_reverse]" />

  {/* Orbit Ring 3 */}
  <div className="absolute h-[460px] w-[460px] rounded-full border border-blue-100/60 -rotate-12 animate-[spin_80s_linear_infinite]" />

  {/* Globe */}
  <motion.img
    src={Globe}
    alt="Global Industries"
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 90,
      repeat: Infinity,
      ease: "linear",
    }}
    className="relative z-10 h-[420px] w-[300px] md:w-[340px] lg:w-[380px] object-contain drop-shadow-[0_20px_60px_rgba(37,99,235,0.18)]"
  />

</motion.div>

    </div>

    {/* Cards */}

    <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

  {industries.map((item, i) => {
    const Icon = item.icon;

    return (
      <motion.div
        key={i}
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: i * 0.08,
          ease: "easeOut",
        }}
        whileHover={{
          y: -12,
          scale: 1.04,
        }}
        className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-2xl"
      >
        {/* Animated Background Glow */}

        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-100 blur-2xl"
        />

        {/* Icon */}

        <motion.div
          whileHover={{
            rotate: 12,
            scale: 1.15,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
          className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-blue-100 bg-blue-50"
        >
          <Icon
            size={24}
            className="text-blue-600"
          />
        </motion.div>

        {/* Title */}

        <h3 className="relative mt-6 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600">
          {item.title}
        </h3>

        {/* Bottom Accent */}

        <motion.div
          initial={{ width: 0 }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.35 }}
          className="mt-4 h-[3px] rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
        />
      </motion.div>
    );
  })}

</div>

  </div>

</section>


{/* Our Process */}
<section className="relative overflow-hidden bg-white py-28">

  {/* Background Blur */}
  <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-100 blur-[120px] opacity-50" />
<motion.div
  animate={{
    x: [0, 20, 0],
    y: [0, -15, 0],
    rotate: [0, 2, 0],
  }}
  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute right-0 top-0 w-[700px] h-[350px] opacity-30"
>
  <svg
    viewBox="0 0 700 350"
    className="h-full w-full"
  >
    <path
      d="M30 250 C160 90 350 300 540 120 C610 60 660 80 690 40"
      stroke="#60A5FA"
      strokeWidth="1.5"
      fill="none"
      strokeDasharray="7 7"
    />

    {[150, 340, 520, 660].map((x, i) => (
      <motion.circle
        key={i}
        cx={x}
        cy={i % 2 === 0 ? 120 : 70}
        r="9"
        fill="#2563EB"
        animate={{
          r: [8, 13, 8],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: i * 0.4,
        }}
      />
    ))}
  </svg>
</motion.div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

    <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>

  {/* Badge */}

  <motion.span
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-blue-600"
  >
    OUR PROCESS
  </motion.span>

  {/* Heading */}

  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.7,
      delay: 0.15,
    }}
    className="mt-4 text-5xl font-bold leading-tight text-gray-900"
  >
    From Idea to Impact,
    <br />
    We Make It Happen
  </motion.h2>

  {/* Description */}

  <motion.p
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.7,
      delay: 0.35,
    }}
    className="mt-6 max-w-2xl text-lg leading-8 text-gray-500"
  >
    Our proven development process transforms ideas into scalable,
    high-performance digital products.
  </motion.p>

</motion.div>


    {/* Timeline */}

<div className="relative mt-24">

  {/* Animated Line */}

  <motion.div
    animate={{
      backgroundPosition: ["0% 50%", "100% 50%"],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute left-0 right-0 top-10 h-[3px] rounded-full
    bg-[linear-gradient(90deg,#DBEAFE,#2563EB,#DBEAFE)]
    bg-[length:200%_100%]"
  />

  {/* Moving Dot */}

  <motion.div
    className="absolute top-[34px] h-5 w-5 rounded-full bg-blue-600 shadow-[0_0_25px_#2563EB]"
    animate={{
      left: ["2%", "97%"],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    }}
  />

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">

    {process.map((item, index) => {
      const Icon = item.icon;

      return (

        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: .6,
            delay: index * .12,
          }}
          whileHover={{
            y: -12,
          }}
          className="relative text-center group"
        >

          {/* Icon */}

          <motion.div

            animate={{
              boxShadow: [
                "0 0 0px rgba(37,99,235,.15)",
                "0 0 28px rgba(37,99,235,.35)",
                "0 0 0px rgba(37,99,235,.15)",
              ],
            }}

            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * .4,
            }}

            className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-blue-200 bg-white shadow-lg"

          >

            <motion.div

              whileHover={{
                rotate: 15,
                scale: 1.15,
              }}

              transition={{
                type: "spring",
                stiffness: 300,
              }}

            >

              <Icon
                size={30}
                className="text-blue-600"
              />

            </motion.div>

            {/* Pulse */}

            <motion.div

              animate={{
                scale: [1, 1.4, 1],
                opacity: [.25, .05, .25],
              }}

              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * .3,
              }}

              className="absolute inset-0 rounded-full border border-blue-200"

            />

          </motion.div>

          {/* Number */}

          <motion.div

            animate={{
              color: [
                "#2563EB",
                "#60A5FA",
                "#2563EB",
              ],
            }}

            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * .3,
            }}

            className="mt-5 font-bold"

          >
            {item.number}
          </motion.div>

          {/* Title */}

          <h3 className="mt-2 text-xl font-semibold text-gray-900">
            {item.title}
          </h3>

          {/* Description */}

          <p className="mt-3 text-sm leading-7 text-gray-500">
            {item.desc}
          </p>

          {/* Arrow */}

          {index !== process.length - 1 && (

            <motion.div

              animate={{
                x: [0, 10, 0],
              }}

              transition={{
                duration: 1.2,
                repeat: Infinity,
              }}

              className="absolute hidden lg:flex -right-6 top-8 text-blue-500"

            >
              →
            </motion.div>

          )}

        </motion.div>

      );
    })}

  </div>

</div>

  </div>

</section>

<TechStack />

<Marketing />

<CTA />

    </>
  );
};

export default Home;