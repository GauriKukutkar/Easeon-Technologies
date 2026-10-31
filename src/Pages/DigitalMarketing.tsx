
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  Share2,
  Mail,
  Target,
  TrendingUp,
  BarChart3,
  MousePointerClick,
  Megaphone,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO & Organic Growth",
    desc: "Improve search visibility and help the right audience discover your business.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    desc: "Build brand awareness and meaningful engagement across social platforms.",
  },
  {
    icon: Target,
    title: "Online Advertising",
    desc: "Reach relevant audiences through strategically planned digital campaigns.",
  },
  {
    icon: Mail,
    title: "Content & Email Marketing",
    desc: "Communicate your value through useful content and targeted campaigns.",
  },
];

const channels = [
  { name: "Search", detail: "Be discovered when customers are looking.", icon: Search },
  { name: "Social", detail: "Build relationships with your audience.", icon: Share2 },
  { name: "Content", detail: "Turn useful information into brand value.", icon: Megaphone },
  { name: "Analytics", detail: "Understand performance and improve decisions.", icon: BarChart3 },
];

export default function DigitalMarketing() {
  return (
    <main className="overflow-hidden bg-white text-[#10213E]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#071D46] text-white">
        <div className="absolute -right-32 -top-32 h-[480px] w-[480px] rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute -bottom-40 left-1/3 h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[100px]" />

        <div className="relative mx-auto grid max-w-[1280px] items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-32 xl:px-16">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
              <Megaphone size={16} />
              Digital Marketing
            </div>

            <h1 className="max-w-xl text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              Make your brand
              <span className="block text-[#51C9F0]">impossible to</span>
              overlook.
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-blue-100/75">
              Connect with the right audience, strengthen your online presence
              and turn digital opportunities into meaningful business growth.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-[#0866FF] px-7 py-4 font-medium text-white transition hover:bg-blue-500"
              >
                Grow Your Business <ArrowUpRight size={18} />
              </Link>
              <a
                href="#marketing-services"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-4 text-white transition hover:bg-white/10"
              >
                Explore Services <ArrowRight size={17} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm text-blue-100/70">
              <span className="flex items-center gap-2"><Check size={16} className="text-cyan-300" /> Audience focused</span>
              <span className="flex items-center gap-2"><Check size={16} className="text-cyan-300" /> Strategy led</span>
              <span className="flex items-center gap-2"><Check size={16} className="text-cyan-300" /> Performance aware</span>
            </div>
          </div>

          {/* CAMPAIGN VISUAL */}
          <div className="relative mx-auto w-full max-w-[530px]">
            <div className="absolute -inset-6 rounded-[40px] bg-blue-500/20 blur-2xl" />

            <div className="relative rounded-[26px] border border-white/15 bg-[#102B58] p-5 shadow-2xl sm:p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-200/60">Campaign overview</p>
                  <h3 className="mt-2 text-xl font-semibold">Digital Reach</h3>
                </div>
                <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-300">
                  <TrendingUp size={23} />
                </div>
              </div>

              <div className="mt-7 rounded-2xl bg-[#071D46] p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-blue-100/60">Campaign performance</span>
                  <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs text-green-300">Live preview</span>
                </div>
                <div className="mt-6 flex h-36 items-end gap-2">
                  {[35, 48, 42, 65, 53, 75, 63, 88, 72, 100, 82, 94].map((height, i) => (
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

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <Search size={19} className="text-cyan-300" />
                  <p className="mt-3 text-sm font-medium">Search Visibility</p>
                  <p className="mt-1 text-xs text-blue-100/50">Organic discovery</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <MousePointerClick size={19} className="text-cyan-300" />
                  <p className="mt-3 text-sm font-medium">Engagement</p>
                  <p className="mt-1 text-xs text-blue-100/50">Audience interaction</p>
                </div>
              </div>

              <div className="absolute -left-5 top-1/3 hidden rounded-xl border border-white/15 bg-[#173B70] p-4 shadow-xl sm:block">
                <Target size={23} className="text-cyan-300" />
                <p className="mt-2 text-xs text-white">Right audience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto grid max-w-[1280px] gap-8 px-5 py-20 sm:px-8 md:grid-cols-2 md:items-center lg:px-12 lg:py-24 xl:px-16">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Visibility with direction</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            Your audience is online. Make sure they find you.
          </h2>
        </div>
        <p className="max-w-xl text-base leading-8 text-slate-600 md:justify-self-end">
          Digital marketing is not just about being present everywhere. It is
          about choosing the right channels, sharing the right message and
          building a consistent connection with your customers.
        </p>
      </section>

      {/* SERVICES */}
      <section id="marketing-services" className="bg-[#F3F7FD] py-20 lg:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Our capabilities</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Everything your digital presence needs.</h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="group rounded-2xl border border-blue-100 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5">
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

      {/* CHANNELS */}
      <section className="mx-auto max-w-[1280px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Connected strategy</p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">A connected approach to digital growth.</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Bring your channels together with a clear message and a consistent
              experience at every customer touchpoint.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((channel) => {
              const Icon = channel.icon;
              return (
                <div key={channel.name} className="flex gap-4 rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:shadow-lg">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={21} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{channel.name}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{channel.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#071D46] py-20 text-white lg:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-12 xl:px-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Ready to get noticed?</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              Let's put your brand in front of the right people.
            </h2>
            <p className="mt-4 leading-7 text-blue-100/70">
              Build a digital marketing strategy that moves your business forward.
            </p>
          </div>
          <Link to="/contact" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#0866FF] px-7 py-4 font-medium text-white transition hover:bg-blue-500">
            Let's Talk <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
