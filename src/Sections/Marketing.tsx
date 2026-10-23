
import {
  Link2,
  Tags,
  Target,
  TrendingUp,
  Bot,
  Mail,
  MessageCircle,
  FileText,
  LayoutTemplate,
  BarChart3,
  GitCompareArrows,
  Users,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  SiGoogleads,
  SiGoogleanalytics,
  SiMeta,
//   SiLinkedin,
//   SiMailchimp,
  SiYoutube,
//   SiWordpress,
  SiSemrush,
  SiHubspot,
//   SiCanva,
} from "react-icons/si";

const Marketing = () => {

    const marketingServices = [
  {
    name: "Google Ads",
    icon: SiGoogleads,
    color: "#4285F4",
  },
  {
    name: "Meta Ads",
    icon: SiMeta,
    color: "#1877F2",
  },
  {
    name: "Advanced SEO",
    icon: SiSemrush,
    color: "#FF642D",
  },
  {
    name: "Google Analytics 4",
    icon: SiGoogleanalytics,
    color: "#F9AB00",
  },
//   {
//     name: "Firebase Analytics",
//     icon: SiFirebase,
//     color: "#FFCA28",
//   },
  {
    name: "UTM Tracking",
    icon: Link2,
    color: "#2563EB",
  },
  {
    name: "Google Tag Manager",
    icon: Tags,
    color: "#4285F4",
  },
  {
    name: "Conversion Tracking",
    icon: Target,
    color: "#DC2626",
  },
  {
    name: "Conversion Rate Optimization",
    icon: TrendingUp,
    color: "#16A34A",
  },
  {
    name: "Marketing Automation",
    icon: Bot,
    color: "#7C3AED",
  },
  {
    name: "Email Marketing",
    icon: Mail,
    color: "#F97316",
  },
  {
    name: "WhatsApp Marketing",
    icon: MessageCircle,
    color: "#22C55E",
  },
//   {
//     name: "LinkedIn Ads",
//     icon: SiLinkedin,
//     color: "#0A66C2",
//   },
  {
    name: "YouTube Ads",
    icon: SiYoutube,
    color: "#FF0000",
  },
  {
    name: "Content Marketing",
    icon: FileText,
    color: "#2563EB",
  },
  {
    name: "Landing Page Optimization",
    icon: LayoutTemplate,
    color: "#0EA5E9",
  },
  {
    name: "HubSpot CRM",
    icon: SiHubspot,
    color: "#FF7A59",
  },
  {
    name: "Performance Reporting",
    icon: BarChart3,
    color: "#2563EB",
  },
  {
    name: "A/B Testing",
    icon: GitCompareArrows,
    color: "#8B5CF6",
  },
  {
    name: "Lead Generation",
    icon: Users,
    color: "#0891B2",
  },
];


return (
    <>
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/40 to-white py-28">

  {/* Floating Blur */}

  <motion.div
    animate={{
      scale: [1, 1.15, 1],
      x: [0, 30, 0],
      y: [0, -20, 0],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute right-0 top-0 h-80 w-80 rounded-full bg-blue-100 blur-[130px] opacity-50"
  />

  <div className="max-w-7xl mx-auto px-6 lg:px-10">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-blue-600">
        PERFORMANCE MARKETING
      </span>

      <h2 className="mt-4 text-5xl font-bold text-gray-900">
        Marketing Services
        <br />
        That Drive Growth
      </h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 120 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-5 h-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
      />

      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
        We combine paid advertising, SEO, analytics and creative marketing
        strategies to generate quality leads, increase conversions and
        accelerate business growth.
      </p>
    </motion.div>

    {/* Services */}

    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">

      {marketingServices.map((service, index) => {

        const Icon = service.icon;

        return (

          <motion.div
            key={service.name}
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
              delay: index * 0.08,
              duration: 0.5,
            }}
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:border-blue-200 hover:shadow-2xl"
          >

            {/* Glow */}

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.35, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-100 blur-2xl"
            />

            {/* Icon */}

            <motion.div
              whileHover={{
                rotate: 15,
                scale: 1.15,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="flex justify-center"
            >
              <Icon
                size={44}
                color={service.color}
              />
            </motion.div>

            {/* Title */}

            <h3 className="mt-5 text-center font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {service.name}
            </h3>

            {/* Hover Line */}

            <motion.div
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
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

export default Marketing;