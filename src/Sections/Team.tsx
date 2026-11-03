import {
  Mail,
} from "lucide-react";

import { FaLinkedin } from "react-icons/fa";

import { motion } from "framer-motion";
import Rahul from "../assets/Teams/Rahul.jpeg";
import Minal from "../assets/Teams/minal.jpeg";
import Gauri from "../assets/Teams/Gauri.jpeg";
import Sampriti from "../assets/Teams/Sampriti.jpeg";
import Vrushabh from "../assets/Teams/vrushabh.jpeg";

const Team = () => {
  return (
    <>
      {/* TEAM */}
<section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">

  {/* ANIMATED BACKGROUND */}

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


  {/* MAIN CONTAINER */}

  <div className="relative mx-auto max-w-7xl px-6 lg:px-10">


    {/* SECTION HEADER */}

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
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


    {/* LEADERSHIP TEAM */}

    <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-7 sm:grid-cols-2">

      {[
        {
          name: "Rahul Borkar",
          role: "Founder",
          image: Rahul,
          linkedin: "https://www.linkedin.com/",
          email: "mailto:rahul@easeontech.com",
        },
        {
          name: "Minal Sonsare",
          role: "Co-Founder & CEO",
          image: Minal,
          linkedin: "https://www.linkedin.com/",
          email: "mailto:minal@easeontech.com",
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
          className="group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
        >

          {/* IMAGE */}

          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50/40 p-3">

            <motion.img
              src={member.image}
              alt={member.name}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="h-full w-full object-contain"
            />

          </div>


          {/* DETAILS */}

          <div className="p-5 sm:p-6">

            <h3 className="text-lg font-bold text-gray-900">
              {member.name}
            </h3>

            <p className="mt-1 text-sm font-medium text-blue-600">
              {member.role}
            </p>

            <div className="mt-5 flex gap-2">

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-blue-50 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedin size={15} />
                LinkedIn
              </a>

              <a
                href={member.email}
                aria-label={`Email ${member.name}`}
                className="flex h-10 w-11 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <Mail size={16} />
              </a>

            </div>

          </div>

        </motion.div>

      ))}

    </div>


    {/* TEAM MEMBERS */}

    <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

      {[
        {
          name: "Vrushabh Latkar",
          role: "Graphics Designer",
          image: Vrushabh,
          linkedin: "https://www.linkedin.com/",
          email: "mailto:vrushabh@easeontech.com",
        },
        {
          name: "Gauri Kukutkar",
          role: "Sr. Software Developer",
          image: Gauri,
          linkedin: "https://www.linkedin.com/",
          email: "mailto:gauri@easeontech.com",
        },
        {
          name: "Sampriti Ganvir",
          role: "Jr. Software Developer",
          image: Sampriti,
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
          className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:border-blue-100 hover:shadow-xl"
        >

          {/* IMAGE */}

          <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50/40 p-3">

            <motion.img
              src={member.image}
              alt={member.name}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="h-full w-full object-contain"
            />

          </div>


          {/* DETAILS */}

          <div className="p-5">

            <h3 className="text-base font-bold text-gray-900">
              {member.name}
            </h3>

            <p className="mt-1 text-sm font-medium text-blue-600">
              {member.role}
            </p>

            <div className="mt-5 flex gap-2">

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-blue-50 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
              >
                <FaLinkedin size={15} />
                LinkedIn
              </a>

              <a
                href={member.email}
                aria-label={`Email ${member.name}`}
                className="flex h-10 w-11 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <Mail size={16} />
              </a>

            </div>

          </div>

        </motion.div>

      ))}

    </div>


    {/* BOTTOM STATEMENT */}

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="mx-auto mt-14 max-w-2xl text-center"
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