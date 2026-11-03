import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Lightbulb,
  Target,
  Code2,
  Rocket,
  Headphones,
  Quote,
  GraduationCap,
  HeartPulse,
  ShoppingBag,
  Landmark,
  Factory,
  Building2,
  ChevronDown,
  Clock3,
  Send,
  Mail,
  Phone,
  MapPin,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    
    <main className="relative min-h-screen overflow-hidden bg-white">

      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(#1769ff 1px, transparent 1px),
            linear-gradient(90deg, #1769ff 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Blue glow */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-48 top-20 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-48 top-[45%] h-[450px] w-[450px] rounded-full bg-cyan-100/40 blur-[120px]"
      />


      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative mt-10 z-10 px-6 pb-16 pt-16 sm:px-10 sm:pb-20 lg:px-16 lg:pt-20">

        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-5xl"
          >

            <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-blue-600">
              Let's connect
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-[0.9] tracking-[-0.055em] text-[#101828] sm:text-6xl lg:text-8xl">

              Let's build

              <br />

              <span className="text-gray-300">
                something meaningful.
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              Have an idea, a business challenge or a product
              you want to build? Tell us about it. We'd love to
              understand what you're working on.
            </p>

          </motion.div>

        </div>

      </section>

{/* ================================================= */}
{/* CONTACT AREA */}
{/* ================================================= */}

<section className="relative z-10 px-5 pb-16 sm:px-8 lg:px-12 lg:pb-20">
  <div className="mx-auto grid max-w-[1280px] items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] xl:gap-12">

    {/* ================================================= */}
    {/* LEFT SIDE */}
    {/* ================================================= */}

    <motion.div
      initial={{ opacity: 0, x: -35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col gap-8"
    >
      {/* Visual Card */}

      <div className="relative h-[300px] overflow-hidden rounded-[28px] bg-[#07101c] p-7 sm:p-8">

        {/* Grid Background */}

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `
              linear-gradient(#ffffff 1px, transparent 1px),
              linear-gradient(90deg, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "45px 45px",
          }}
        />

        {/* Glow */}

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 blur-[100px]"
        />

        {/* Center Visual */}

        <div className="relative z-10 flex h-full items-center justify-center">

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-56 w-56 rounded-full border border-blue-400/20"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-40 w-40 rounded-full border border-blue-300/20"
          />

          <motion.div
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex h-24 w-24 items-center justify-center rounded-[28px] bg-blue-600 shadow-[0_20px_70px_rgba(37,99,235,0.4)]"
          >
            <Send size={32} className="text-white" />
          </motion.div>

        </div>

        {/* Card Text */}

        <div className="absolute bottom-7 left-7 right-7 z-10 flex items-end justify-between">

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-400">
              Start a conversation
            </p>

            <p className="mt-2 text-sm text-white">
              Your idea starts here.
            </p>
          </div>

          <ArrowUpRight size={18} className="text-blue-400" />

        </div>
      </div>

      {/* Contact Details */}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">

        {/* Email */}

        <a
          href="mailto:easeontechofficial@gmail.com"
          className="group flex items-center gap-4"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-blue-100">
            <Mail size={17} className="text-blue-600" />
          </span>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
              Email
            </p>

            <p className="mt-1 break-all text-sm font-medium text-[#101828] transition-colors group-hover:text-blue-600">
              easeontechofficial@gmail.com
            </p>
          </div>
        </a>

        {/* Phone */}

        <a
          href="tel:+919623910069"
          className="group flex items-center gap-4"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-blue-100">
            <Phone size={17} className="text-blue-600" />
          </span>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
              Phone
            </p>

            <p className="mt-1 text-sm font-medium text-[#101828] transition-colors group-hover:text-blue-600">
              +91 96239 10069
            </p>
          </div>
        </a>

        {/* Office */}

        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
            <MapPin size={17} className="text-blue-600" />
          </span>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
              Office
            </p>

            <p className="mt-1 text-sm font-medium leading-6 text-[#101828]">
              Nagpur, Maharashtra, India
            </p>
          </div>
        </div>

        {/* Working Hours */}

        <div className="flex items-center gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50">
            <Clock3 size={17} className="text-blue-600" />
          </span>

          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-400">
              Working Hours
            </p>

            <p className="mt-1 text-sm font-medium text-[#101828]">
              Mon – Sat · 10:00 AM – 7:00 PM
            </p>
          </div>
        </div>

      </div>
    </motion.div>

    {/* ================================================= */}
    {/* CONTACT FORM */}
    {/* ================================================= */}

    <motion.div
      initial={{ opacity: 0, x: 35 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="rounded-[28px] border border-gray-100 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-8 lg:p-9"
    >

      {/* Form Heading */}

      <div className="mb-6">
        <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-600">
          Tell us about it
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#101828] sm:text-4xl">
          Start a conversation.
        </h2>
      </div>

      {/* Form */}

      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();

          const form = e.currentTarget;
          const formData = new FormData(form);

          const name = String(formData.get("name") || "");
          const email = String(formData.get("email") || "");
          const phone = String(formData.get("phone") || "");
          const requirement = String(formData.get("requirement") || "");
          const message = String(formData.get("message") || "");

          const subject = encodeURIComponent(
            `New Website Enquiry - ${name}`
          );

          const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nRequirement: ${requirement}\n\nMessage:\n${message}`
          );

          window.location.href = `mailto:easeontechofficial@gmail.com?subject=${subject}&body=${body}`;
        }}
      >

        {/* Name */}

        <div>
          <label className="mb-2 block text-xs font-medium text-gray-500">
            Your name
          </label>

          <input
            type="text"
            name="name"
            required
            placeholder="Enter your name"
            className="w-full border-0 border-b border-gray-200 bg-transparent px-0 py-2.5 text-sm text-[#101828] outline-none transition-colors placeholder:text-gray-300 focus:border-blue-600"
          />
        </div>

        {/* Email */}

        <div>
          <label className="mb-2 block text-xs font-medium text-gray-500">
            Email address
          </label>

          <input
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            className="w-full border-0 border-b border-gray-200 bg-transparent px-0 py-2.5 text-sm text-[#101828] outline-none transition-colors placeholder:text-gray-300 focus:border-blue-600"
          />
        </div>

        {/* Phone */}

        <div>
          <label className="mb-2 block text-xs font-medium text-gray-500">
            Phone number
          </label>

          <input
            type="tel"
            name="phone"
            placeholder="+91"
            className="w-full border-0 border-b border-gray-200 bg-transparent px-0 py-2.5 text-sm text-[#101828] outline-none transition-colors placeholder:text-gray-300 focus:border-blue-600"
          />
        </div>

        {/* Requirement */}

        <div>
          <label className="mb-2 block text-xs font-medium text-gray-500">
            What can we help you with?
          </label>

          <select
            name="requirement"
            defaultValue=""
            required
            className="w-full border-0 border-b border-gray-200 bg-transparent px-0 py-2.5 text-sm text-[#101828] outline-none focus:border-blue-600"
          >
            <option value="" disabled>
              Select an option
            </option>

            <option>Website / Digital Experience</option>
            <option>Software Development</option>
            <option>SaaS Product</option>
            <option>Digital Marketing</option>
            <option>Custom Technology Solution</option>
            <option>Something else</option>
          </select>
        </div>

        {/* Message */}

        <div>
          <label className="mb-2 block text-xs font-medium text-gray-500">
            Tell us a little more
          </label>

          <textarea
            name="message"
            rows={3}
            required
            placeholder="Tell us about your idea, project or challenge..."
            className="w-full resize-none border-0 border-b border-gray-200 bg-transparent px-0 py-2.5 text-sm text-[#101828] outline-none transition-colors placeholder:text-gray-300 focus:border-blue-600"
          />
        </div>

        {/* Submit */}

        <div className="pt-1">
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#101828] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600"
          >
            Send enquiry

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 transition-transform group-hover:rotate-45">
              <ArrowUpRight size={14} />
            </span>
          </motion.button>
        </div>

        <p className="text-center text-[10px] leading-5 text-gray-400">
          We'll get back to you as soon as possible.
        </p>

      </form>
    </motion.div>

  </div>
</section>

{/* ================================================= */}
{/* OUR WORKING PROCESS */}
{/* ================================================= */}

<section className="relative overflow-hidden bg-[#071D46] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

  <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

  <div className="relative mx-auto max-w-[1280px]">

    <div className="mx-auto mb-16 max-w-2xl text-center">
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#51C9F0]">
        How We Work
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        From First Idea to
        <span className="text-[#51C9F0]"> Final Launch.</span>
      </h2>

      <p className="mt-5 text-sm leading-7 text-blue-100/65 sm:text-base">
        A structured approach that turns your business challenges into
        meaningful digital solutions.
      </p>
    </div>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

      {[
        {
          number: "01",
          title: "Discover",
          description: "We understand your goals, audience, requirements and business challenges.",
          icon: Lightbulb,
        },
        {
          number: "02",
          title: "Strategise",
          description: "We define the right approach, technology and roadmap for your project.",
          icon: Target,
        },
        {
          number: "03",
          title: "Develop",
          description: "Our team transforms the strategy into a functional digital solution.",
          icon: Code2,
        },
        {
          number: "04",
          title: "Launch",
          description: "We test, refine and prepare your solution for a successful launch.",
          icon: Rocket,
        },
        {
          number: "05",
          title: "Support",
          description: "We help you maintain, improve and scale your digital experience.",
          icon: Headphones,
        },
      ].map((step, index) => {
        const Icon = step.icon;

        return (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#51C9F0]/50 hover:bg-white/[0.08]"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold tracking-widest text-[#51C9F0]">
                {step.number}
              </span>

              <Icon
                size={23}
                className="text-blue-200 transition-colors group-hover:text-[#51C9F0]"
              />
            </div>

            <h3 className="mt-10 text-xl font-semibold text-white">
              {step.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-blue-100/60">
              {step.description}
            </p>

            <div className="mt-7 h-[2px] w-10 bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:bg-[#51C9F0]" />
          </motion.div>
        );
      })}

    </div>
  </div>
</section>
{/* ================================================= */}
{/* CLIENT TESTIMONIALS */}
{/* ================================================= */}

<section className="bg-[#F7FAFF] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

  <div className="mx-auto max-w-[1280px]">

    {/* Heading */}

    <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">
          Client Experiences
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#071D46] sm:text-5xl">
          Built on Trust.
          <span className="text-blue-600"> Proven Through Work.</span>
        </h2>

        <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
          Strong partnerships. Meaningful collaborations.
          Real experiences from businesses we've worked with.
        </p>
      </div>

      <div className="flex items-center gap-2 text-sm font-medium text-blue-600">
        <Quote size={20} />
        Our Client Stories
      </div>
    </div>

    {/* Testimonials */}

    <div className="grid gap-6 md:grid-cols-3">

      {/* SEWA INFRASTRUCTURE */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="group flex flex-col rounded-[26px] border border-blue-100/70 bg-white p-7 shadow-[0_15px_50px_rgba(7,29,70,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(8,102,255,0.09)] sm:p-8"
      >
        <div className="flex items-center justify-between">
          <Quote size={30} className="text-blue-500" />

          <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-300">
            01 / 03
          </span>
        </div>

        <span className="mt-6 inline-block w-fit rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-blue-600">
          Website Development
        </span>

        <p className="mt-5 flex-1 text-sm leading-8 text-gray-600">
          "The team understood our business requirements and
          translated them into a professional digital presence.
          Their approach to design, development and communication
          made the overall experience smooth and productive."
        </p>

        <div className="mt-8 flex items-center gap-3 border-t border-gray-100 pt-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#071D46] text-sm font-bold text-white">
            S
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#071D46]">
              Sewa Infrastructure
            </h3>
            <p className="mt-1 text-xs text-gray-400">
              Website Development Client
            </p>
          </div>
        </div>
      </motion.div>

      {/* MAJU IDLI */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.12 }}
        className="group flex flex-col rounded-[26px] border border-blue-100/70 bg-white p-7 shadow-[0_15px_50px_rgba(7,29,70,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(8,102,255,0.09)] sm:p-8"
      >
        <div className="flex items-center justify-between">
          <Quote size={30} className="text-blue-500" />

          <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-300">
            02 / 03
          </span>
        </div>

        <span className="mt-6 inline-block w-fit rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-blue-600">
          Performance & Digital Marketing
        </span>

        <p className="mt-5 flex-1 text-sm leading-8 text-gray-600">
          "Working with Easeon has helped us strengthen our digital
          presence and approach marketing more strategically.
          The team's focus on creative campaigns and consistent
          communication has made the collaboration valuable."
        </p>

        <div className="mt-8 flex items-center gap-3 border-t border-gray-100 pt-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#071D46] text-sm font-bold text-white">
            L
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#071D46]">
              Limesh
            </h3>
            <p className="mt-1 text-xs text-gray-400">
              Maju Idli
            </p>
          </div>
        </div>
      </motion.div>

      {/* HAIRCROWN CLINIC */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.24 }}
        className="group flex flex-col rounded-[26px] border border-blue-100/70 bg-white p-7 shadow-[0_15px_50px_rgba(7,29,70,0.04)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(8,102,255,0.09)] sm:p-8"
      >
        <div className="flex items-center justify-between">
          <Quote size={30} className="text-blue-500" />

          <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-300">
            03 / 03
          </span>
        </div>

        <span className="mt-6 inline-block w-fit rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-blue-600">
          Digital Solutions
        </span>

        <p className="mt-5 flex-1 text-sm leading-8 text-gray-600">
          "The collaboration has been professional and well
          coordinated. Easeon understood our requirements and
          helped us present our clinic with a stronger digital
          presence. The communication throughout the process
          has been clear and organised."
        </p>

        <div className="mt-8 flex items-center gap-3 border-t border-gray-100 pt-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#071D46] text-sm font-bold text-white">
            N
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#071D46]">
              Dr. Nikhil Rao
            </h3>
            <p className="mt-1 text-xs text-gray-400">
              Haircrown Clinic
            </p>
          </div>
        </div>
      </motion.div>

    </div>

  </div>
</section>

{/* ================================================= */}
{/* INDUSTRIES WE SERVE */}
{/* ================================================= */}

<section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

  <div className="mx-auto max-w-[1280px]">

    <div className="mx-auto mb-16 max-w-2xl text-center">
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">
        Industries We Empower
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#071D46] sm:text-5xl">
        Technology That Moves
        <span className="text-blue-600"> Industries Forward.</span>
      </h2>

      <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
        We create digital experiences and technology solutions
        designed around different business needs.
      </p>
    </div>

    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

      {[
        {
          title: "Education",
          description: "Digital platforms, learning management systems and education technology.",
          icon: GraduationCap,
          number: "01",
        },
        {
          title: "Healthcare",
          description: "Digital experiences and software solutions for healthcare organisations.",
          icon: HeartPulse,
          number: "02",
        },
        {
          title: "Retail & E-commerce",
          description: "Online stores, digital commerce experiences and business platforms.",
          icon: ShoppingBag,
          number: "03",
        },
        {
          title: "Finance",
          description: "Business applications and digital solutions for financial operations.",
          icon: Landmark,
          number: "04",
        },
        {
          title: "Manufacturing",
          description: "Technology solutions that support business processes and operations.",
          icon: Factory,
          number: "05",
        },
        {
          title: "Startups & Enterprises",
          description: "Scalable digital products and custom solutions for growing businesses.",
          icon: Building2,
          number: "06",
        },
      ].map((industry, index) => {
        const Icon = industry.icon;

        return (
          <motion.div
            key={industry.number}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group rounded-[24px] border border-gray-100 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_20px_55px_rgba(8,102,255,0.09)]"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition-colors group-hover:bg-blue-600">
                <Icon
                  size={25}
                  className="text-blue-600 transition-colors group-hover:text-white"
                />
              </div>

              <span className="text-xs font-semibold tracking-widest text-gray-300">
                {industry.number}
              </span>
            </div>

            <h3 className="mt-7 text-xl font-semibold text-[#071D46]">
              {industry.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              {industry.description}
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-blue-600 transition-all group-hover:gap-3"
            >
              Discuss your project
              <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        );
      })}

    </div>
  </div>
</section>

{/* ================================================= */}
{/* FAQ SECTION */}
{/* ================================================= */}

<section className="bg-[#F7FAFF] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

  <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">
        Frequently Asked Questions
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#071D46] sm:text-5xl">
        Questions?
        <span className="text-blue-600"> We've Got Answers.</span>
      </h2>

      <p className="mt-5 max-w-md text-sm leading-7 text-gray-500">
        Find answers to common questions about our services,
        project process and technology solutions.
      </p>

      <div className="mt-9 rounded-2xl bg-[#071D46] p-6 text-white">
        <h3 className="text-lg font-semibold">
          Still have questions?
        </h3>

        <p className="mt-2 text-sm leading-6 text-blue-100/65">
          Tell us what you are looking for. Our team can help
          you understand the next steps.
        </p>

        <Link
          to="/contact"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#51C9F0] hover:gap-3"
        >
          Contact our team
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>

    <div className="space-y-3">

      {[
        {
          question: "What services does Easeon Technologies offer?",
          answer: "We offer software development, website development, mobile application development, SaaS development, AI solutions, UI/UX design and digital marketing services.",
        },
        {
          question: "How do I start a project with Easeon?",
          answer: "You can contact us through our enquiry form. Share your requirements, and our team can discuss your goals and the appropriate next steps.",
        },
        {
          question: "Do you develop custom software solutions?",
          answer: "Yes. We work on custom software solutions based on business requirements, workflows and project objectives.",
        },
        {
          question: "How long does a project take?",
          answer: "Project timelines depend on the scope, features, complexity and requirements. We discuss the expected timeline during project planning.",
        },
        {
          question: "Can you work with startups and established businesses?",
          answer: "Yes. Our services can support businesses at different stages, from early-stage product development to digital transformation initiatives.",
        },
        {
          question: "Do you provide support after project delivery?",
          answer: "Post-launch support and maintenance can be discussed according to the project's requirements and agreed service scope.",
        },
        {
          question: "How can I get a project estimate?",
          answer: "Share your project details through the contact form. We can review your requirements and discuss an appropriate estimate.",
        },
      ].map((faq, index) => (
        <details
          key={index}
          className="group rounded-2xl border border-blue-100/70 bg-white px-6 py-5 transition-all open:border-blue-200 open:shadow-[0_10px_35px_rgba(8,102,255,0.06)]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-semibold text-[#071D46] sm:text-base">
            {faq.question}

            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-transform group-open:rotate-180">
              <ChevronDown size={17} />
            </span>
          </summary>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-500">
            {faq.answer}
          </p>
        </details>
      ))}

    </div>
  </div>
</section>

{/* ================================================= */}
{/* FINAL CALL TO ACTION */}
{/* ================================================= */}

<section className="relative overflow-hidden bg-[#071D46] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

  <div className="pointer-events-none absolute -left-32 -top-40 h-96 w-96 rounded-full bg-blue-600/25 blur-[120px]" />

  <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-[120px]" />

  <div className="relative mx-auto max-w-[1050px] text-center">

    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
      <Zap size={25} className="text-[#51C9F0]" />
    </div>

    <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.35em] text-[#51C9F0]">
      Let's Build Something Meaningful
    </p>

    <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
      Have an Idea?
      <br />
      <span className="text-[#51C9F0]">
        Let's Make It Happen.
      </span>
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-blue-100/65 sm:text-base">
      Every great digital solution starts with a conversation.
      Tell us what you have in mind, and let's explore what's possible.
    </p>

    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

      <Link
        to="/contact"
        className="group inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(8,102,255,0.3)] transition-all hover:-translate-y-1 hover:bg-blue-500"
      >
        Start Your Project

        <ArrowUpRight
          size={18}
          className="transition-transform group-hover:rotate-45"
        />
      </Link>

      <Link
        to="/portfolio"
        className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-[#51C9F0] hover:bg-white/5"
      >
        Explore Our Work
        <ArrowRight size={17} />
      </Link>

    </div>

    <div className="mx-auto mt-14 h-px max-w-xl bg-gradient-to-r from-transparent via-white/20 to-transparent" />

    <p className="mt-6 text-xs tracking-wide text-blue-100/40">
      Think. Create. Innovate. Grow.
    </p>

  </div>
</section>

{/* ================================================= */}
{/* INSIGHTS & LATEST UPDATES */}
{/* ================================================= */}

<section className="bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

  <div className="mx-auto max-w-[1280px]">

    <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

      <div className="max-w-2xl">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">
          Insights & Perspectives
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#071D46] sm:text-5xl">
          Ideas That Inspire.
          <span className="text-blue-600"> Insights That Matter.</span>
        </h2>

        <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
          Explore ideas, trends and perspectives shaping the future
          of technology and digital business.
        </p>
      </div>

      <Link
        to="/contact"
        className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition-all hover:gap-3"
      >
        Discuss an idea
        <ArrowUpRight size={17} />
      </Link>

    </div>

    <div className="grid gap-7 md:grid-cols-3">

      {[
        {
          category: "Technology",
          title: "How Digital Transformation Is Reshaping Modern Businesses",
          description: "Explore how businesses can rethink processes and customer experiences through technology.",
          date: "Technology Insights",
          number: "01",
          icon: Zap,
        },
        {
          category: "Software Development",
          title: "Why Custom Software Matters for Growing Businesses",
          description: "Understand how tailored software can address unique workflows and operational needs.",
          date: "Development Insights",
          number: "02",
          icon: Code2,
        },
        {
          category: "Digital Strategy",
          title: "Building a Strong Digital Presence in a Competitive Market",
          description: "Discover the role of digital experiences, visibility and consistent brand communication.",
          date: "Business Insights",
          number: "03",
          icon: Target,
        },
      ].map((article, index) => {
        const Icon = article.icon;

        return (
          <motion.article
            key={article.number}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group overflow-hidden rounded-[24px] border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_55px_rgba(7,29,70,0.08)]"
          >
            <div className="relative flex h-52 items-center justify-center overflow-hidden bg-[#071D46]">

              <div className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)
                  `,
                  backgroundSize: "35px 35px",
                }}
              />

              <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-blue-500/30 blur-3xl" />

              <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-white/15 bg-white/10 shadow-xl transition-transform duration-500 group-hover:scale-110">
                <Icon size={35} className="text-[#51C9F0]" />
              </div>

              <span className="absolute bottom-5 left-6 text-xs font-semibold tracking-[0.2em] text-white/40">
                EASEON / {article.number}
              </span>

              <span className="absolute right-6 top-5 text-xs font-semibold text-white/50">
                {article.number}
              </span>

            </div>

            <div className="p-7">

              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-semibold text-blue-600">
                  {article.category}
                </span>

                <span className="text-[10px] text-gray-400">
                  {article.date}
                </span>
              </div>

              <h3 className="mt-5 text-xl font-semibold leading-8 text-[#071D46] transition-colors group-hover:text-blue-600">
                {article.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                {article.description}
              </p>

              {/* <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 text-xs font-semibold text-blue-600 transition-all group-hover:gap-3"
              >
                Discuss this topic
                <ArrowUpRight size={15} />
              </Link> */}

            </div>
          </motion.article>
        );
      })}

    </div>
  </div>
</section>



    </main>
  );
};

export default Contact;