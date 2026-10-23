import {
  Mail,
  ArrowUpRight,
} from "lucide-react";

import { FaLinkedin } from "react-icons/fa";

import { motion } from "framer-motion";

const Team = () => {
  return (
    <>
      {/* TEAM */}

<section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

  {/* ===================================================== */}
  {/* ANIMATED BACKGROUND */}
  {/* ===================================================== */}

  <motion.div
    animate={{
      x: [0, 70, 0],
      y: [0, -30, 0],
      scale: [1, 1.15, 1],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -left-40 -top-40 h-[430px] w-[430px] rounded-full bg-blue-100/60 blur-[120px]"
  />

  <motion.div
    animate={{
      x: [0, -60, 0],
      y: [0, 40, 0],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 17,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -bottom-40 -right-40 h-[430px] w-[430px] rounded-full bg-cyan-100/50 blur-[120px]"
  />

  {/* Moving light */}

  <motion.div
    animate={{
      x: ["-100%", "200%"],
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
  />

  {/* ===================================================== */}
  {/* CONTAINER */}
  {/* ===================================================== */}

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

    {/* ================================================= */}
    {/* HEADER */}
    {/* ================================================= */}

    <motion.div
      initial={{
        opacity: 0,
        y: 25,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="mx-auto max-w-3xl text-center"
    >

      <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-600 sm:text-xs">
        Meet Our Team
      </span>

      <h2 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
        The People Behind
        <span className="text-blue-600">
          {" "}Easeon Technologies.
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
        A team of builders, thinkers and creators working together to
        turn ambitious ideas into meaningful digital products.
      </p>

    </motion.div>


    {/* ================================================= */}
    {/* FOUNDER FEATURE */}
    {/* ================================================= */}

    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-50px",
      }}
      transition={{
        duration: 0.7,
      }}
      className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-[28px] border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/60 p-5 shadow-[0_20px_70px_rgba(37,99,235,0.08)] sm:p-7"
    >

      {/* Card Glow */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-200 blur-[70px]"
      />


      <div className="relative grid items-center gap-7 md:grid-cols-[190px_1fr]">

        {/* Founder Image */}

        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          className="mx-auto overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-lg"
        >

          <img
            src="/team/rahul-borkar.jpg"
            alt="Rahul Borkar"
            className="h-[210px] w-[190px] object-cover"
          />

        </motion.div>


        {/* Founder Info */}

        <div className="text-center md:text-left">

          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-blue-600">
            Founder
          </span>

          <h3 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
            Rahul Borkar
          </h3>

          <p className="mt-1 text-sm font-medium text-blue-600">
            Founder & CEO
          </p>

          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500">
            Building Easeon Technologies around a simple belief:
            technology should solve real problems, create measurable
            value and help businesses move forward.
          </p>


          {/* Buttons */}

          <div className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-lg"
            >

              <FaLinkedin size={15} />

              LinkedIn

              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />

            </a>


            <a
              href="mailto:hello@easeontech.com"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-xs font-semibold text-gray-700 transition-all hover:border-blue-200 hover:text-blue-600"
            >

              <Mail size={15} />

              Email

            </a>

          </div>

        </div>

      </div>

    </motion.div>


    {/* ========================================================= */}
{/* LEADERSHIP — 3 CARDS */}
{/* ========================================================= */}

<div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2">

  {[
    // {
    //   name: "Rahul Borkar",
    //   role: "Founder",
    //   image: "/team/rahul-borkar.jpg",
    //   linkedin: "https://www.linkedin.com/",
    //   email: "mailto:rahul@easeontech.com",
    // },
    {
      name: "Minal Sonsare",
      role: "Co-Founder & CEO",
      image: "/team/minal-sonsare.jpg",
      linkedin: "https://www.linkedin.com/",
      email: "mailto:minal@easeontech.com",
    },
    {
      name: "Ritesh Selote",
      role: "CTO",
      image: "/team/ritesh-selote.jpg",
      linkedin: "https://www.linkedin.com/",
      email: "mailto:ritesh@easeontech.com",
    },
  ].map((member, index) => (

    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      whileHover={{ y: -7 }}
      className="group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition-all hover:shadow-xl"
    >

      <div className="overflow-hidden bg-gray-50">
        <motion.img
          src={member.image}
          alt={member.name}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="h-[270px] w-full object-cover object-top"
        />
      </div>

      <div className="p-5">

        <h3 className="font-bold text-gray-900">
          {member.name}
        </h3>

        <p className="mt-1 text-xs font-medium text-blue-600">
          {member.role}
        </p>

        <div className="mt-4 flex gap-2">

          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 flex-1 items-center justify-center gap-2 rounded-lg bg-blue-50 text-xs font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            <FaLinkedin size={14} />
            LinkedIn
          </a>

          <a
            href={member.email}
            className="flex h-9 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            <Mail size={15} />
          </a>

        </div>

      </div>

    </motion.div>

  ))}

</div>


{/* ========================================================= */}
{/* TEAM — 4 CARDS */}
{/* ========================================================= */}

<div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

  {[
    {
      name: "Shivam Pathankar",
      role: "Sales Head",
      image: "/team/shivam-pathankar.jpg",
      linkedin: "https://www.linkedin.com/",
      email: "mailto:shivam@easeontech.com",
    },
    {
      name: "Vrushabh Latkar",
      role: "Graphics Designer",
      image: "/team/vrushabh-latkar.jpg",
      linkedin: "https://www.linkedin.com/",
      email: "mailto:vrushabh@easeontech.com",
    },
    {
      name: "Gauri Kukutkar",
      role: "Sr. Software Developer",
      image: "/team/gauri-kukutkar.jpg",
      linkedin: "https://www.linkedin.com/",
      email: "mailto:gauri@easeontech.com",
    },
    {
      name: "Sampriti Ganvir",
      role: "Jr. Software Developer",
      image: "/team/sampriti-ganvir.jpg",
      linkedin: "https://www.linkedin.com/",
      email: "mailto:sampriti@easeontech.com",
    },
  ].map((member, index) => (

    <motion.div
      key={member.name}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      whileHover={{ y: -7 }}
      className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all hover:border-blue-100 hover:shadow-xl"
    >

      <div className="overflow-hidden bg-gray-50">

        <motion.img
          src={member.image}
          alt={member.name}
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.4 }}
          className="h-[250px] w-full object-cover object-top"
        />

      </div>

      <div className="p-5">

        <h3 className="font-bold text-gray-900">
          {member.name}
        </h3>

        <p className="mt-1 text-xs font-medium text-blue-600">
          {member.role}
        </p>

        <div className="mt-4 flex gap-2">

          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 flex-1 items-center justify-center gap-2 rounded-lg bg-blue-50 text-xs font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            <FaLinkedin size={14} />
            LinkedIn
          </a>

          <a
            href={member.email}
            className="flex h-9 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
          >
            <Mail size={15} />
          </a>

        </div>

      </div>

    </motion.div>

  ))}

</div>


    {/* ================================================= */}
    {/* BOTTOM STATEMENT */}
    {/* ================================================= */}

    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        delay: 0.4,
      }}
      className="mx-auto mt-10 max-w-2xl text-center"
    >

      <p className="text-xs leading-6 text-gray-400 sm:text-sm">
        Different skills. Different perspectives. One team building
        the future together.
      </p>

    </motion.div>

  </div>

</section>

</>
  );
}

export default Team;