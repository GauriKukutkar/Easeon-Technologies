
import { motion } from "framer-motion";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiLaravel, SiPhp, SiPython, SiLangchain, SiFlutter, SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiDocker, SiGithub, SiVercel } from "react-icons/si";
// import {
//   SiReact,
//   SiNextdotjs,
//   SiTypescript,
//   SiTailwindcss,
//   SiNodedotjs,
//   SiExpress,
//   SiLaravel,
//   SiPhp,
//   SiPython,
//   SiOpenai,
//   SiLangchain,
//   SiFlutter,
//   SiReact,
//   SiMongodb,
//   SiMysql,
//   SiPostgresql,
//   SiFirebase,
//   SiAmazon,
//   SiDocker,
//   SiGithub,
//   SiVercel,
// } from "react-icons/si";


const TechStack = () => {
    const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },

  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express", icon: SiExpress, color: "#444" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },

  { name: "Python", icon: SiPython, color: "#3776AB" },
//   { name: "OpenAI", icon: SiOpenai, color: "#10A37F" },
  { name: "LangChain", icon: SiLangchain, color: "#0EA5E9" },

  { name: "Flutter", icon: SiFlutter, color: "#02569B" },

  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },

//   { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
];

return (
    <>
    
    <section className="relative overflow-hidden bg-white py-28">

  {/* Background */}

  <motion.div
    animate={{
      scale: [1, 1.15, 1],
      x: [0, 20, 0],
      y: [0, -20, 0],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-100 blur-[130px] opacity-50"
  />

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <motion.span
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-600"
    >
      TECHNOLOGIES WE USE
    </motion.span>

    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: .2 }}
      className="mt-4 text-5xl font-bold text-gray-900"
    >
      Powering Solutions
      <br />
      with Modern Technologies
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: .4 }}
      viewport={{ once: true }}
      className="mt-6 max-w-2xl text-lg text-gray-500 leading-8"
    >
      We leverage cutting-edge frameworks, cloud platforms and AI tools to
      build secure, scalable and future-ready digital products.
    </motion.p>

    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

      {technologies.map((tech, index) => {

        const Icon = tech.icon;

        return (

          <motion.div

            key={tech.name}

            initial={{
              opacity:0,
              y:40,
            }}

            whileInView={{
              opacity:1,
              y:0,
            }}

            viewport={{ once:true }}

            transition={{
              delay:index*.05,
              duration:.5,
            }}

            whileHover={{
              y:-12,
              scale:1.06,
            }}

            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:border-blue-200 hover:shadow-xl"

          >

            <motion.div

              animate={{
                rotate:[0,5,-5,0],
              }}

              transition={{
                duration:5,
                repeat:Infinity,
                delay:index*.2,
              }}

              className="flex justify-center"

            >

              <Icon
                size={44}
                color={tech.color}
              />

            </motion.div>

            <h3 className="mt-5 text-center font-semibold text-gray-900">
              {tech.name}
            </h3>

            <motion.div

              initial={{ width:0 }}

              whileHover={{
                width:"100%",
              }}

              className="mx-auto mt-4 h-[3px] rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"

            />

          </motion.div>

        );

      })}

    </div>

  </div>

</section>

    </>
  );
};

export default TechStack;