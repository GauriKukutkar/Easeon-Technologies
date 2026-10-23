
import { motion } from "framer-motion";
import Rocket from "../assets/images/rocket.png";

const CTA = () => {


return (
    <>
   <section className="relative overflow-hidden py-24">

  {/* Animated Background Blur */}

  <motion.div
    animate={{
      x: [0, 30, 0],
      y: [0, -20, 0],
      scale: [1, 1.15, 1],
    }}
    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -left-20 -top-10 h-80 w-80 rounded-full bg-blue-100 blur-[120px]"
  />

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    <div className="relative overflow-hidden rounded-[40px] border border-blue-100 bg-gradient-to-r from-white to-blue-50 p-10 md:p-16 shadow-xl">

      <div className="grid lg:grid-cols-2 items-center gap-16">

        {/* ================= LEFT ================= */}

        <div>

          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .5 }}
            className="inline-block text-sm font-semibold uppercase tracking-[0.3em] text-blue-600"
          >
            LET'S BUILD TOGETHER
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .2 }}
            className="mt-5 text-4xl md:text-5xl font-bold leading-tight text-gray-900"
          >
            Ready to Build
            <br />
            Something Extraordinary?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .4 }}
            className="mt-6 max-w-xl text-lg leading-8 text-gray-500"
          >
            Transform your ideas into scalable software,
            AI-powered solutions and high-performing
            digital experiences.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .6 }}
            className="mt-10 flex flex-wrap gap-5"
          >

            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl">
              Start Your Project
            </button>

            <button className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-800 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600">
              View Portfolio →
            </button>

          </motion.div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="relative flex justify-center items-center min-h-[420px]">

          {/* Blue Glow */}

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [.4, .7, .4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute h-72 w-72 rounded-full bg-blue-200 blur-[90px]"
          />

          {/* Floating Particles */}

          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                left: `${15 + i * 6}%`,
                bottom: "15%",
              }}
              animate={{
                y: [0, -80],
                opacity: [1, 0],
                scale: [1, .4],
              }}
              transition={{
                duration: 2 + i * .2,
                repeat: Infinity,
                delay: i * .2,
              }}
              className="absolute h-2 w-2 rounded-full bg-blue-400"
            />
          ))}

          {/* Rocket */}

          <motion.img
            src={Rocket}
            alt="Rocket"
            animate={{
              y: [0, -15, 0],
              rotate: [-3, 3, -3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-20 w-[260px] md:w-[320px] lg:w-[360px] drop-shadow-[0_30px_60px_rgba(37,99,235,0.25)]"
          />

          {/* Rocket Flame */}

          <motion.div
            animate={{
              scaleY: [1, .6, 1],
              opacity: [.8, .3, .8],
            }}
            transition={{
              duration: .8,
              repeat: Infinity,
            }}
            className="absolute bottom-[72px] h-24 w-10 rounded-full bg-gradient-to-b from-cyan-300 via-blue-500 to-transparent blur-2xl"
          />

        </div>

      </div>

    </div>

  </div>

</section>


    </>
  );
};

export default CTA;