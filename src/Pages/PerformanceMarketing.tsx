
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Target,
  MousePointerClick,
  TrendingUp,
  BarChart3,
  Search,
  Users,
  Wallet,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Paid Advertising",
    desc: "Strategic ad campaigns designed to reach potential customers and generate action.",
  },
  {
    icon: Search,
    title: "Google Ads",
    desc: "Connect with high-intent audiences through search, display and video campaigns.",
  },
  {
    icon: Users,
    title: "Social Media Ads",
    desc: "Reach the right people through targeted campaigns across social platforms.",
  },
  {
    icon: BarChart3,
    title: "Conversion Optimization",
    desc: "Improve landing pages, campaign journeys and conversion opportunities.",
  },
];

const process = [
  ["01", "Research", "Understand your audience, market and campaign objectives."],
  ["02", "Target", "Build audience segments and select the right advertising channels."],
  ["03", "Launch", "Create and launch focused advertising campaigns."],
  ["04", "Optimize", "Analyze results and refine campaigns for better performance."],
];

export default function PerformanceMarketing() {
  return (
    <main className="overflow-hidden bg-white text-[#10213E]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071D46] text-white">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute -bottom-40 left-1/3 h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-32 xl:px-16">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
              <Target size={16} />
              Performance Marketing
            </div>

            <h1 className="max-w-xl text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              Every click should
              <span className="block text-[#51C9F0]">move you closer</span>
              to growth.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-blue-100/75">
              Turn advertising investment into measurable opportunities with
              focused campaigns, smarter targeting and continuous optimization.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#0866FF] px-7 py-4 font-medium text-white transition hover:bg-blue-500"
              >
                Plan Your Campaign <ArrowUpRight size={18} />
              </Link>

              <a
                href="#performance-services"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-white transition hover:bg-white/10"
              >
                Explore Services <ArrowRight size={17} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-blue-100/70">
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-300" /> Data-driven</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-300" /> Goal-focused</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} className="text-cyan-300" /> Measurable</span>
            </div>
          </div>

          {/* CAMPAIGN DASHBOARD VISUAL */}
          <div className="relative mx-auto w-full max-w-[530px]">
            <div className="absolute -inset-6 rounded-[40px] bg-blue-500/20 blur-2xl" />

            <div className="relative rounded-[26px] border border-white/15 bg-[#102B58] p-5 shadow-2xl sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-200/60">Performance dashboard</p>
                  <h3 className="mt-2 text-xl font-semibold">Campaign Insights</h3>
                </div>
                <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
                  <TrendingUp size={23} />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#071D46] p-4">
                  <MousePointerClick size={19} className="text-cyan-300" />
                  <p className="mt-3 text-xs text-blue-100/50">Clicks</p>
                  <p className="mt-1 text-2xl font-semibold">12.8K</p>
                  <p className="mt-1 text-xs text-green-300">Illustrative metric</p>
                </div>
                <div className="rounded-xl bg-[#071D46] p-4">
                  <Target size={19} className="text-cyan-300" />
                  <p className="mt-3 text-xs text-blue-100/50">Conversions</p>
                  <p className="mt-1 text-2xl font-semibold">840</p>
                  <p className="mt-1 text-xs text-green-300">Illustrative metric</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl bg-[#071D46] p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Campaign activity</p>
                  <span className="text-xs text-blue-200/50">Sample view</span>
                </div>
                <div className="mt-6 flex h-36 items-end gap-2">
                  {[32, 50, 42, 68, 55, 80, 64, 92, 73, 100, 85, 96].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-md bg-gradient-to-t from-blue-700 to-cyan-400"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="mt-3 flex justify-between text-[10px] text-blue-100/40">
                  <span>WEEK 01</span>
                  <span>WEEK 02</span>
                  <span>WEEK 03</span>
                  <span>WEEK 04</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <Wallet size={21} className="text-cyan-300" />
                <div>
                  <p className="text-sm font-medium">Smarter ad spending</p>
                  <p className="mt-1 text-xs text-blue-100/50">Focus on campaign efficiency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto grid max-w-[1280px] gap-8 px-5 py-20 sm:px-8 md:grid-cols-2 md:items-end lg:px-12 lg:py-24 xl:px-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Marketing with measurable goals</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            Less guesswork. More meaningful results.
          </h2>
        </div>
        <p className="max-w-xl text-base leading-8 text-slate-600 md:justify-self-end">
          Performance marketing focuses on outcomes that matter to your business.
          We plan, execute and improve campaigns using audience insights and
          performance data.
        </p>
      </section>

      {/* SERVICES */}
      <section id="performance-services" className="bg-[#F3F7FD] py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">What we do</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Campaigns built around your business goals.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-blue-100 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={23} />
                  </div>
                  <p className="mt-7 text-sm font-semibold text-blue-500">0{index + 1}</p>
                  <h3 className="mt-2 text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
        <div className="mb-12 max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">How we work</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
            A smarter process for stronger campaigns.
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {process.map(([number, title, desc], index) => (
            <div key={number} className="relative border-t-2 border-blue-100 pt-6">
              <span className="text-sm font-semibold text-blue-600">{number}</span>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">{desc}</p>
              {index !== 3 && (
                <ArrowRight className="absolute right-0 top-6 hidden text-blue-300 lg:block" size={19} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071D46] py-20 text-white lg:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-12 xl:px-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Make every campaign count</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Ready to turn your marketing budget into opportunity?
            </h2>
            <p className="mt-4 leading-7 text-blue-100/70">
              Let's plan a campaign that works towards your business objectives.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#0866FF] px-7 py-4 font-medium text-white transition hover:bg-blue-500"
          >
            Discuss Your Campaign <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
