import { motion } from "framer-motion";
import {
  ArrowDownRight,
  BriefcaseBusiness,
  Lightbulb,
  Code2,
  Search,
} from "lucide-react";

import Founder from "../assets/Teams/Rahul.jpeg";

const FounderStory = () => {
  return (

    <> 
    <section className="relative overflow-hidden bg-white py-24 sm:py-32 lg:py-40">

      {/* ================================================= */}
      {/* BACKGROUND GRID */}
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

      {/* ================================================= */}
      {/* BACKGROUND GLOWS */}
      {/* ================================================= */}

      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-40 h-[400px] w-[400px] rounded-full bg-blue-100/50 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 bottom-20 h-[350px] w-[350px] rounded-full bg-cyan-100/40 blur-[110px]"
      />


      {/* ================================================= */}
      {/* MAIN CONTAINER */}
      {/* ================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">


        {/* ================================================= */}
        {/* SECTION LABEL */}
        {/* ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-14"
        >

          <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-blue-600">
            05 / The Story Behind It
          </p>

        </motion.div>


        {/* ================================================= */}
        {/* MAIN GRID */}
        {/* ================================================= */}

        <div className="grid items-start gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">


          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
            }}
            className="lg:sticky lg:top-32"
          >

            <div className="mx-auto max-w-md">


              {/* ================================================= */}
              {/* FOUNDER IMAGE */}
              {/* ================================================= */}

              <div className="relative">

                {/* Animated decorative frame */}

                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-3 rounded-[34px] border border-blue-100"
                />

                {/* Image */}

                <div className="relative aspect-[4/5] overflow-hidden rounded-[30px] bg-slate-100">

                  <img
                    src={Founder}
                    alt="Rahul Borkar, Founder of Easeon Technologies"
                    className="h-full w-full object-cover"
                  />

                  {/* Image overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#06101d]/45 via-transparent to-transparent" />

                </div>


                {/* ================================================= */}
                {/* FOUNDER BADGE */}
                {/* ================================================= */}

                <div className="absolute -bottom-6 left-6 right-6 rounded-2xl border border-white/80 bg-white/95 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.12)] backdrop-blur-xl">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-lg font-semibold tracking-tight text-[#101828]">
                        Rahul Borkar
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        Founder, Easeon Technologies
                      </p>

                    </div>

                    <div className="text-right">

                      <p className="text-2xl font-bold tracking-tight text-blue-600">
                        9+
                      </p>

                      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-gray-400">
                        Years
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              {/* ================================================= */}
              {/* FOUNDER VISUAL STORY */}
              {/* ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                }}
                className="mt-14"
              >

                {/* ============================================= */}
                {/* DARK STORY BLOCK */}
                {/* ============================================= */}

                <div className="relative overflow-hidden rounded-[30px] bg-[#07101c] p-7 sm:p-8">

                  {/* Grid */}

                  <div
                    className="pointer-events-none absolute inset-0 opacity-[0.07]"
                    style={{
                      backgroundImage: `
                        linear-gradient(#ffffff 1px, transparent 1px),
                        linear-gradient(90deg, #ffffff 1px, transparent 1px)
                      `,
                      backgroundSize: "38px 38px",
                    }}
                  />

                  {/* Animated glow */}

                  <motion.div
                    animate={{
                      x: [0, 35, 0],
                      y: [0, -25, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-blue-600/25 blur-[80px]"
                  />

                  {/* Content */}

                  <div className="relative z-10">

                    <div className="flex items-center justify-between">

                      <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-400">
                        The beginning
                      </p>

                      <span className="text-[9px] font-medium uppercase tracking-[0.2em] text-white/30">
                        2016 → Now
                      </span>

                    </div>


                    <h3 className="mt-7 max-w-sm text-2xl font-semibold leading-[1.1] tracking-[-0.03em] text-white sm:text-3xl">

                      Experience became

                      <span className="text-blue-400">
                        {" "}curiosity.
                      </span>

                    </h3>


                    <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">
                      And curiosity slowly became the desire to
                      build something that could make a real
                      difference.
                    </p>


                    {/* Bottom line */}

                    <div className="mt-8 flex items-center gap-3">

                      <div className="h-px flex-1 bg-white/10" />

                      <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-white/30">
                        Easeon Technologies
                      </span>

                    </div>

                  </div>

                </div>


                {/* ============================================= */}
                {/* THREE STATS */}
                {/* ============================================= */}

                <div className="mt-4 grid grid-cols-3 gap-3">


                  {/* 09+ */}

                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="rounded-2xl border border-blue-100 bg-[#f8fbff] p-4"
                  >

                    <p className="text-2xl font-semibold tracking-tight text-[#101828]">
                      09+
                    </p>

                    <p className="mt-2 text-[8px] font-bold uppercase leading-4 tracking-[0.15em] text-gray-400">
                      Years
                      <br />
                      Experience
                    </p>

                  </motion.div>


                  {/* Infinity */}

                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="rounded-2xl border border-blue-100 bg-[#f8fbff] p-4"
                  >

                    <p className="text-2xl font-semibold tracking-tight text-blue-600">
                      ∞
                    </p>

                    <p className="mt-2 text-[8px] font-bold uppercase leading-4 tracking-[0.15em] text-gray-400">
                      Continuous
                      <br />
                      Learning
                    </p>

                  </motion.div>


                  {/* Vision */}

                  <motion.div
                    whileHover={{
                      y: -5,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="rounded-2xl border border-blue-100 bg-[#f8fbff] p-4"
                  >

                    <p className="text-2xl font-semibold tracking-tight text-[#101828]">
                      01
                    </p>

                    <p className="mt-2 text-[8px] font-bold uppercase leading-4 tracking-[0.15em] text-gray-400">
                      Clear
                      <br />
                      Vision
                    </p>

                  </motion.div>

                </div>


                {/* ============================================= */}
                {/* CLOSING LINE */}
                {/* ============================================= */}

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
                    duration: 0.7,
                    delay: 0.35,
                  }}
                  className="mt-6 flex items-center gap-3 px-2"
                >

                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

                  <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-gray-400">
                    Built from experience. Driven by curiosity.
                  </p>

                </motion.div>

              </motion.div>

            </div>

          </motion.div>


          {/* ================================================= */}
          {/* RIGHT SIDE — STORY */}
          {/* ================================================= */}

          <div>


            {/* ================================================= */}
            {/* HEADING */}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
              }}
            >

              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500">
                Before Easeon
              </p>

              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1] tracking-[-0.045em] text-[#101828] sm:text-5xl lg:text-6xl">

                Nine years of experience

                <br />

                <span className="text-gray-300">
                  before building something of his own.
                </span>

              </h2>

            </motion.div>


            {/* ================================================= */}
            {/* STORY */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
              }}
              className="mt-10 max-w-2xl"
            >

              {/* Opening */}

              <p className="text-base leading-8 text-gray-500 sm:text-lg">
                For nearly nine years, Rahul worked as a manager,
                learning how businesses operate, how teams solve
                problems and where technology can make a meaningful
                difference.
              </p>


              {/* Paragraph 2 */}

              <p className="mt-6 text-sm leading-7 text-gray-500">
                Over time, those experiences became more than
                professional lessons. They became observations —
                patterns that kept appearing across different
                businesses and different situations.
              </p>


              {/* ================================================= */}
              {/* HIGHLIGHT */}
              {/* ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.97,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="my-9 rounded-2xl border-l-2 border-blue-500 bg-blue-50/60 px-6 py-5"
              >

                <p className="text-lg font-medium leading-7 tracking-tight text-[#101828]">
                  “Technology should not simply add another
                  layer to a business. It should make the
                  business easier to run.”
                </p>

              </motion.div>


              {/* Paragraph 3 */}

              <p className="text-sm leading-7 text-gray-500">
                That belief led to years of research,
                conversations and time spent understanding
                problems from the ground up. There were ideas
                that changed, assumptions that failed and
                plenty of moments where the answer wasn't obvious.
              </p>


              {/* Paragraph 4 */}

              <p className="mt-6 text-sm leading-7 text-gray-500">
                Instead of rushing to build something,
                the focus remained on understanding what was
                actually worth solving and how technology could
                become a meaningful part of the solution.
              </p>


              {/* Paragraph 5 */}

              <p className="mt-6 text-sm leading-7 text-gray-500">
                Eventually, the goal became clear — take
                everything learned from those years and use
                it to build technology that solves real problems.
              </p>

            </motion.div>


            {/* ================================================= */}
            {/* CHAPTER TIMELINE */}
            {/* ================================================= */}

            {/* <div className="relative mt-14">

              <div className="absolute bottom-8 left-[22px] top-8 w-px bg-blue-100" />


              <div className="space-y-8">

                <motion.div
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="relative flex gap-5"
                >

                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_10px_30px_rgba(37,99,235,0.25)]">

                    <BriefcaseBusiness size={17} />

                  </div>

                  <div className="pt-1">

                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-blue-600">
                      Chapter 01
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-[#101828]">
                      9 years of learning from the field
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
                      Management, people, businesses,
                      challenges and countless lessons.
                    </p>

                  </div>

                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                  }}
                  className="relative flex gap-5"
                >

                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-600">

                    <Lightbulb size={17} />

                  </div>

                  <div className="pt-1">

                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-blue-600">
                      Chapter 02
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-[#101828]">
                      Research before building
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
                      Time spent understanding real problems
                      before deciding what should be built.
                    </p>

                  </div>

                </motion.div>



                <motion.div
                  initial={{
                    opacity: 0,
                    x: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                  className="relative flex gap-5"
                >

                  <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#101828] text-white">

                    <Rocket size={17} />

                  </div>

                  <div className="pt-1">

                    <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-blue-600">
                      Chapter 03
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-[#101828]">
                      Turning experience into a product
                    </h3>

                    <p className="mt-2 max-w-xl text-sm leading-6 text-gray-400">
                      The beginning of Easeon and the transition
                      from solving individual problems to building
                      products.
                    </p>

                  </div>

                </motion.div>

              </div>

            </div> */}

            {/* ================================================= */}
            {/* CLOSING QUOTE */}
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
              className="mt-14 border-l-2 border-blue-500 pl-6"
            >

              <p className="text-xl font-medium leading-8 tracking-tight text-[#101828] sm:text-2xl">
                “The product didn't start with a piece of code.
                It started with years of watching, listening
                and understanding.”
              </p>

              <div className="mt-5 flex items-center gap-2 text-xs text-gray-400">

                <span>
                  Rahul Borkar
                </span>

                <ArrowDownRight
                  size={14}
                  className="text-blue-500"
                />

                <span>
                  Founder, Easeon Technologies
                </span>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>



{/* ================================================= */}
{/* MINAL SON SARE - CO-FOUNDER STORY */}
{/* ================================================= */}
<section className="relative w-full overflow-x-clip bg-white -mt-40 py-20 sm:py-24 lg:py-28">

  <motion.section
    className="w-full"
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.8 }}
  >

    {/* CENTERED CONTENT CONTAINER */}
    <div className="mx-auto w-full max-w-[1350px] px-5 sm:px-8 lg:px-12 xl:px-16">

      <div className="grid w-full min-w-0 items-center gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-10">

        {/* LEFT - PROFILE / VISUAL */}
        <div className="min-w-0">
      <div className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#0B3B8F] via-[#0866FF] to-[#08B9D2] p-8 text-white sm:p-10">

        <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/15" />
        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/15" />

        <div className="relative z-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
            <Lightbulb size={27} />
          </div>

          <p className="mt-14 text-[10px] font-bold uppercase tracking-[0.3em] text-white/60">
            The Thinking Behind The Technology
          </p>

          <h3 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Ideas need
            <br />
            more than
            <br />
            imagination.
          </h3>

          <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
            They need research, technical understanding,
            practical decisions and the determination
            to make them work.
          </p>

          <div className="mt-12 border-t border-white/20 pt-6">
            <p className="text-2xl font-semibold">
              Minal Sonsare
            </p>
            <p className="mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/65">
              Co-founder · Easeon Technologies
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="rounded-2xl border border-blue-100 bg-[#F3F8FF] p-5">
          <Code2 size={23} className="text-blue-600" />
          <p className="mt-4 text-sm font-bold text-[#101828]">
            Technical Thinking
          </p>
          <p className="mt-1 text-xs leading-5 text-gray-500">
            From concepts to functionality.
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-100 bg-[#F0FCFE] p-5">
          <Search size={23} className="text-cyan-600" />
          <p className="mt-4 text-sm font-bold text-[#101828]">
            Research & Analysis
          </p>
          <p className="mt-1 text-xs leading-5 text-gray-500">
            Understanding needs and opportunities.
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT - HER STORY */}
    <div className="min-w-0">

      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-cyan-600">
        The Co-founder's Journey
      </p>

      <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-[#101828] sm:text-4xl lg:text-5xl">
        Beyond the idea.
        <span className="block text-blue-600">
          Into the details that matter.
        </span>
      </h3>

      <p className="mt-7 text-sm leading-8 text-gray-500 sm:text-base">
        Minal Sonsare brought a distinct combination of
        technical understanding, analytical thinking and
        practical perspective to the journey of Easeon.
        Her involvement was not limited to understanding
        the market; she was deeply involved in the thinking
        and discussions behind the products themselves.
      </p>

      <p className=" text-sm leading-8 text-gray-500">
        From evaluating technical requirements and discussing
        product functionality to thinking through features,
        workflows and user requirements, her contribution
        played a major role in translating ideas into
        practical digital solutions. Alongside the technical side, she invested in market
        research, competitor analysis and understanding
        customer expectations. She brought a straightforward
        approach to every discussion, questioned assumptions
        and focused on what actually made sense for the
        business and its users.
      </p>

      <p className="mt-5 text-sm leading-8 text-gray-500">
       
      </p>

      {/* SPECIAL PRODUCT HIGHLIGHT */}
      <div className="mt-9 overflow-hidden rounded-2xl border border-blue-100 bg-[#F5F9FF]">

        <div className="flex items-center justify-between gap-3 border-b border-blue-100 px-6 py-5">
          <div>
            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-blue-600">
              Product Development Contribution
            </p>
            <h4 className="mt-2 text-xl font-semibold text-[#101828]">
              Relax Mode
            </h4>
          </div>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
            <BriefcaseBusiness size={21} />
          </div>
        </div>

        <div className="p-6">
          <p className="text-sm leading-7 text-gray-500">
            Relax Mode reflects an important part of Minal's
            contribution to Easeon's product journey. Her
            involvement covered understanding the salon
            industry's requirements, researching market
            opportunities and contributing to technical
            and functional product discussions.
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-500">
            Her perspective helped connect business needs
            with product functionality, ensuring that
            discussions were not just about what could
            be built, but also about how the solution
            should work in practice.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "Technical Understanding",
              "Feature Planning",
              "Market Research",
              "Product Analysis",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-blue-100 bg-white px-3 py-2 text-[10px] font-semibold text-blue-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CLOSING THOUGHT */}
      <div className="mt-9 border-l-[3px] border-cyan-500 pl-6">
        <p className="text-lg font-medium leading-8 tracking-tight text-[#101828] sm:text-xl">
          "Being part of building something means
          questioning it, understanding it, improving it
          and making sure it works beyond the idea."
        </p>

        <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">
          Minal Sonsare · Co-founder
        </p>
      </div>

        </div>

      </div>

    </div>
  </motion.section>
</section>


</ >

  );
};

export default FounderStory;