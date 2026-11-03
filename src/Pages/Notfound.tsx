
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Home,
  Search,
  Compass,
  Code2,
} from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[85vh] items-center overflow-hidden bg-[#071D46] px-5 py-20 text-white">
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-0 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[130px]" />

      <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left content */}
        <div className="relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm text-blue-200">
            <Compass size={16} />
            Lost in the digital space?
          </div>

          <h1 className="text-[100px] font-bold leading-none tracking-tighter sm:text-[140px] lg:text-[165px]">
            4<span className="text-[#51C9F0]">0</span>4
          </h1>

          <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />

          <h2 className="mt-8 max-w-xl text-3xl font-semibold leading-tight sm:text-4xl">
            Looks like you've taken a wrong turn.
          </h2>

          <p className="mt-5 max-w-lg text-base leading-8 text-blue-100/65">
            The page you're looking for doesn't exist, may have been moved,
            or is temporarily unavailable. Let's get you back on track.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-full bg-[#0866FF] px-7 py-4 font-medium text-white transition duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Home size={18} />
              Back to Home
              <ArrowUpRight size={17} />
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-3 rounded-full border border-white/20 px-7 py-4 font-medium text-white transition hover:bg-white/10"
            >
              <ArrowLeft size={17} />
              Go Back
            </button>
          </div>

          <div className="mt-14 flex items-center gap-3 text-sm text-blue-100/45">
            <Code2 size={17} />
            <span>Easeon Technologies</span>
            <span className="h-1 w-1 rounded-full bg-blue-300/50" />
            <span>Building what's next.</span>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto flex w-full max-w-[510px] items-center justify-center">
          <div className="absolute h-[350px] w-[350px] rounded-full border border-blue-300/10 sm:h-[430px] sm:w-[430px]" />
          <div className="absolute h-[270px] w-[270px] rounded-full border border-cyan-300/15 sm:h-[340px] sm:w-[340px]" />
          <div className="absolute h-[190px] w-[190px] rounded-full border border-blue-300/20 sm:h-[250px] sm:w-[250px]" />

          {/* Orbit dots */}
          <div className="absolute left-[12%] top-[22%] h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_20px_#51C9F0]" />
          <div className="absolute right-[12%] top-[35%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_#0866FF]" />
          <div className="absolute bottom-[17%] left-[25%] h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_20px_#51C9F0]" />

          {/* Central illustration */}
          <div className="relative flex h-[220px] w-[220px] items-center justify-center rounded-[42px] border border-blue-200/20 bg-gradient-to-br from-[#153E78] to-[#0A2450] shadow-[0_25px_100px_rgba(0,0,0,0.35)] sm:h-[270px] sm:w-[270px]">
            <div className="absolute inset-4 rounded-[32px] border border-white/5" />

            <div className="relative flex flex-col items-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 shadow-[0_0_45px_rgba(8,185,210,0.15)]">
                <Search size={37} strokeWidth={1.5} />
              </div>

              <p className="mt-6 text-5xl font-bold tracking-widest text-white/90">
                404
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-blue-200/50">
                Page unavailable
              </p>
            </div>
          </div>

          {/* Floating labels */}
          <div className="absolute -left-2 top-[15%] rounded-xl border border-white/10 bg-[#102B58] px-4 py-3 shadow-xl sm:-left-6">
            <p className="text-[10px] uppercase tracking-wider text-blue-200/50">
              Error code
            </p>
            <p className="mt-1 font-semibold text-cyan-300">404 Not Found</p>
          </div>

          <div className="absolute -bottom-2 right-0 rounded-xl border border-white/10 bg-[#102B58] px-4 py-3 shadow-xl sm:-right-5">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              <p className="text-xs text-blue-100/80">Let's find your way back</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
