import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] grid place-items-center bg-gradient-to-b from-black via-zinc-900 to-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8b1y06l9vPPK1H7M/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white/90 px-4 py-1 text-sm border border-white/20 mb-6">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          New: Smart workout plans powered by AI
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          Transform your body. Elevate your routine.
        </h1>
        <p className="mt-4 text-white/80 text-lg md:text-xl">
          A modern fitness platform with personalized plans, progress tracking, and a clean dashboard to keep you consistent.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href="#login" className="inline-flex items-center justify-center rounded-full bg-emerald-500 text-white px-6 py-3 font-medium shadow-lg shadow-emerald-500/30 hover:bg-emerald-400 transition-colors">
            Start Training
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-6 py-3 font-medium border border-white/20 hover:bg-white/20 transition-colors">
            Contact Us
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </section>
  );
}
