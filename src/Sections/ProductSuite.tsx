import { motion } from "framer-motion";
import {
  UserRound,
  LayoutDashboard,
  Smartphone,
  Check,
  CalendarDays,
  Users,
  Home,
  Bell,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
// import Customer from "../assets/images/customer-app.jpeg";
// import PartnerDashboard from "../assets/images/dashboard-preview.png";
// import VendorApp from "../assets/images/owner-app.jpeg";

// const products = [
//   {
//     title: "Customer App",
//     subtitle: "For Salon Clients",
//     description:
//       "Discover nearby salons, explore services, choose your specialist and manage your bookings — all in one place.",
//     icon: UserRound,
//     image: Customer,
//     accent: "blue",
//   },
//   {
//     title: "Partner Web Dashboard",
//     subtitle: "For Salon Partners",
//     description:
//       "Manage appointments, staff, services, customers and business performance from one powerful workspace.",
//     icon: CalendarDays,
//     image: PartnerDashboard,
//     accent: "indigo",
//   },
//   {
//     title: "Partner Mobile App",
//     subtitle: "For Salon Partners",
//     description:
//       "Run your salon business on the go. Manage bookings, schedules, notifications and growth from anywhere.",
//     icon: Smartphone,
//     image: VendorApp,
//     accent: "cyan",
//   },
// ];

const ProductSuite = () => {
  return (

    <>

   {/* ================================================= */}
{/* PRODUCT SUITE */}
{/* ================================================= */}

<section
  id="ProductSuite"
  className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
>
  {/* Background */}

  <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-blue-100/50 blur-[120px]" />
  <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-100/40 blur-[120px]" />

  <div className="relative mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">

    {/* Header */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-blue-600">
        Our Product Suite
      </span>

      <h2 className="mt-5 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        One Ecosystem.
        <br />
        <span className="text-blue-600">
          Multiple Experiences.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
        Relax Mode brings salon customers and salon partners together
        through connected digital experiences built for the modern
        beauty industry.
      </p>
    </motion.div>

    {/* Product Cards */}

    <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">

      {/* Customer App */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group relative flex flex-col overflow-hidden rounded-[26px] border border-gray-100 bg-white p-7 shadow-[0_15px_45px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_25px_55px_rgba(37,99,235,0.10)]"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-500">
            01 / CUSTOMER
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
            <UserRound size={22} />
          </div>
        </div>

        <h3 className="mt-8 text-2xl font-bold text-[#071D46]">
          Customer App
        </h3>

        <p className="mt-3 min-h-[72px] text-sm leading-7 text-gray-500">
          Discover nearby salons, explore services, choose your
          specialist and manage your bookings — all in one place.
        </p>

        {/* Abstract Visual */}

        <div className="relative mt-8 flex h-[190px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-[#F7FAFF] to-cyan-50">

          <div className="absolute h-36 w-36 rounded-full border border-blue-200/60" />
          <div className="absolute h-28 w-28 rounded-full border border-blue-200/60" />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-[24px] bg-blue-600 text-white shadow-[0_15px_40px_rgba(37,99,235,0.25)] transition-transform duration-500 group-hover:scale-110">
            <UserRound size={34} />
          </div>

          <span className="absolute left-5 top-5 h-2 w-2 rounded-full bg-blue-400" />
          <span className="absolute bottom-7 right-8 h-3 w-3 rounded-full bg-cyan-400" />

          <span className="absolute bottom-5 text-[9px] font-bold uppercase tracking-[0.25em] text-blue-400">
            Your Salon Experience
          </span>
        </div>

        <div className="mt-7 space-y-3">
          {[
            "Discover nearby salons",
            "Choose services and stylists",
            "Book and manage appointments",
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-3 text-sm text-gray-600">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Check size={12} />
              </span>
              {feature}
            </div>
          ))}
        </div>

        <a
          href="https://relaxmode.in"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-semibold text-blue-600"
        >
          Learn More
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>

      {/* Partner Web Dashboard */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.12 }}
        className="group relative flex flex-col overflow-hidden rounded-[26px] border border-gray-100 bg-white p-7 shadow-[0_15px_45px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_25px_55px_rgba(37,99,235,0.10)]"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-500">
            02 / PARTNER
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
            <LayoutDashboard size={22} />
          </div>
        </div>

        <h3 className="mt-8 text-2xl font-bold text-[#071D46]">
          Partner Web Dashboard
        </h3>

        <p className="mt-3 min-h-[72px] text-sm leading-7 text-gray-500">
          Manage appointments, staff, services, customers and
          business performance from one powerful workspace.
        </p>

        {/* Abstract Dashboard Visual */}

        <div className="relative mt-8 h-[190px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#071D46] to-[#103C80] p-5">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-[10px] font-semibold text-white">
                Business Overview
              </span>
            </div>

            <span className="rounded-md bg-white/10 px-2 py-1 text-[8px] text-blue-100">
              Dashboard
            </span>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2">
            {[
              { label: "Bookings", value: "128" },
              { label: "Customers", value: "86" },
              { label: "Revenue", value: "₹42K" },
            ].map((item) => (
              <div key={item.label} className="rounded-lg border border-white/10 bg-white/[0.08] p-3">
                <p className="text-[8px] text-blue-100/60">{item.label}</p>
                <p className="mt-2 text-lg font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 flex h-10 items-end gap-1.5 rounded-lg bg-white/[0.06] px-3 py-2">
            {[30, 55, 40, 75, 50, 85, 65, 95, 60, 80, 45, 100].map((height, i) => (
              <span
                key={i}
                style={{ height: `${height}%` }}
                className="flex-1 rounded-t-sm bg-cyan-400/80"
              />
            ))}
          </div>
        </div>

        <div className="mt-7 space-y-3">
          {[
            "Appointment and staff management",
            "Customer and service management",
            "Business reports and insights",
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-3 text-sm text-gray-600">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Check size={12} />
              </span>
              {feature}
            </div>
          ))}
        </div>

        <a
          href="https://relaxmode.in"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-semibold text-blue-600"
        >
          Learn More
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>

      {/* Partner Mobile App */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.24 }}
        className="group relative flex flex-col overflow-hidden rounded-[26px] border border-gray-100 bg-white p-7 shadow-[0_15px_45px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-[0_25px_55px_rgba(37,99,235,0.10)]"
      >
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold tracking-[0.2em] text-blue-500">
            03 / PARTNER
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
            <Smartphone size={22} />
          </div>
        </div>

        <h3 className="mt-8 text-2xl font-bold text-[#071D46]">
          Partner Mobile App
        </h3>

        <p className="mt-3 min-h-[72px] text-sm leading-7 text-gray-500">
          Run your salon business on the go. Manage bookings,
          schedules, notifications and growth from anywhere.
        </p>

        {/* Abstract Mobile Visual */}

        <div className="relative mt-8 flex h-[190px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-[#F7FAFF] to-cyan-50">

          <div className="absolute h-36 w-36 rounded-full border border-blue-200/60" />

          <div className="relative h-[165px] w-[105px] rounded-[22px] border-[5px] border-[#071D46] bg-white p-2 shadow-[0_15px_35px_rgba(15,23,42,0.15)] transition-transform duration-500 group-hover:-translate-y-2">

            <div className="mx-auto h-1 w-9 rounded-full bg-gray-200" />

            <p className="mt-3 text-[8px] font-bold text-[#071D46]">
              Today's Overview
            </p>

            <div className="mt-2 grid grid-cols-2 gap-1.5">
              <div className="rounded-md bg-blue-50 p-2">
                <CalendarDays size={11} className="text-blue-600" />
                <p className="mt-1 text-[7px] text-gray-500">Bookings</p>
                <p className="text-xs font-bold text-[#071D46]">12</p>
              </div>

              <div className="rounded-md bg-cyan-50 p-2">
                <Users size={11} className="text-cyan-600" />
                <p className="mt-1 text-[7px] text-gray-500">Staff</p>
                <p className="text-xs font-bold text-[#071D46]">06</p>
              </div>
            </div>

            <div className="mt-2 rounded-md bg-[#071D46] px-2 py-2">
              <p className="text-[7px] text-blue-100">Business status</p>
              <p className="mt-1 text-[9px] font-semibold text-white">Active</p>
            </div>

            <div className="mt-2 flex justify-between px-1">
              <Home size={11} className="text-blue-600" />
              <CalendarDays size={11} className="text-gray-400" />
              <Bell size={11} className="text-gray-400" />
              <UserRound size={11} className="text-gray-400" />
            </div>
          </div>

          <span className="absolute bottom-5 right-5 rounded-full bg-white px-3 py-1.5 text-[8px] font-bold text-blue-600 shadow-sm">
            Manage Anywhere
          </span>
        </div>

        <div className="mt-7 space-y-3">
          {[
            "Manage appointments on the go",
            "Stay updated with notifications",
            "Monitor salon activities",
          ].map((feature) => (
            <div key={feature} className="flex items-center gap-3 text-sm text-gray-600">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <Check size={12} />
              </span>
              {feature}
            </div>
          ))}
        </div>

        <a
          href="https://relaxmode.in"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-2 pt-8 text-xs font-semibold text-blue-600"
        >
          Learn More
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>

    </div>

    {/* Bottom Statement */}

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[24px] border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-cyan-50 px-7 py-7 text-center sm:flex-row sm:text-left sm:px-10"
    >
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-blue-600">
          Built for the Modern Salon Industry
        </p>

        <h3 className="mt-2 text-xl font-bold text-gray-900 sm:text-2xl">
          Connecting customers, salons and technology.
        </h3>
      </div>

      <a
        href="https://relaxmode.in"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
      >
        Explore Relax Mode
        <ArrowUpRight size={17} />
      </a>
    </motion.div>

  </div>
</section>

      </>
  );
};

export default ProductSuite;