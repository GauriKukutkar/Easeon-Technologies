import {
  BrainCircuit,
  Cloud,
  Code2,
  // Database,
  Globe,
  Megaphone,
  Palette,
  Smartphone,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  title: string;
  path: string;
}

export interface SolutionItem {
  title: string;
  desc: string;
  path: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Company",
    path: "/about",
  },
  {
    title: "Product",
    path: "/Product",
  },
  // {
  //   title: "Career",
  //   path: "/career",
  // },
  {
    title: "Portfolio",
    path: "/Portfolio",
  },

];

export const solutions: SolutionItem[] = [
  {
    title: "Software Development",
    desc: "Custom enterprise software tailored to your business.",
    path: "/SoftwareDevelopment",
    icon: Code2,
  },
  {
    title: "Web Development",
    desc: "Modern websites, portals and web platforms.",
    path: "/WebDevelopment",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    desc: "Android & iOS apps with premium experiences.",
    path: "/MobileAppDevelopment",
    icon: Smartphone,
  },
  {
    title: "SaaS Development",
    desc: "Scalable cloud-based software products.",
    path: "/SaaSDevelopment",
    icon: Cloud,
  },
  {
    title: "AI Solutions",
    desc: "Automation, AI integration & intelligent systems.",
    path: "/AISolutions",
    icon: BrainCircuit,
  },
  {
    title: "UI / UX Design",
    desc: "Beautiful, intuitive and user-first interfaces.",
    path: "/UIUXDesign",
    icon: Palette,
  },
  {
    title: "Digital Marketing",
    desc: "SEO, branding and social media growth.",
    path: "/DigitalMarketing",
    icon: Megaphone,
  },
  {
    title: "Performance Marketing",
    desc: "Google Ads, Meta Ads & conversion optimization.",
    path: "/PerformanceMarketing",
    icon: TrendingUp,
  },
  // {
  //   title: "Cloud & DevOps",
  //   desc: "Infrastructure, CI/CD & cloud deployments.",
  //   path: "/solutions/cloud-devops",
  //   icon: Database,
  // },
];