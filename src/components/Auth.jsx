import { useState } from "react";
import { Lock, Mail, User } from "lucide-react";

export default function Auth() {
  const [mode, setMode] = useState("login");

  return (
    <section id="login" className="relative py-20 bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.1),transparent_35%)]" />
      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Welcome back</h2>
          <p className="mt-3 text-white/70">Log in to access your dashboard and continue your fitness journey.</p>
          <div className="mt-6 inline-flex rounded-full bg-white/10 p-1 border border-white/10">
            <button onClick={() => setMode("login")} className={`px-4 py-2 rounded-full text-sm ${mode === "login" ? "bg-white text-black" : "text-white/80"}`}>Login</button>
            <button onClick={() => setMode("signup")} className={`px-4 py-2 rounded-full text-sm ${mode === "signup" ? "bg-white text-black" : "text-white/80"}`}>Sign Up</button>
          </div>
        </div>

        <form className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 space-y-4">
          {mode === "signup" && (
            <div>
              <label className="text-sm text-white/70">Full Name</label>
              <div className="mt-1 flex items-center gap-2 rounded-lg bg-black/40 border border-white/10 p-3">
                <User size={18} className="text-white/60" />
                <input type="text" placeholder="John Doe" className="w-full bg-transparent outline-none placeholder:text-white/40" />
              </div>
            </div>
          )}
          <div>
            <label className="text-sm text-white/70">Email</label>
            <div className="mt-1 flex items-center gap-2 rounded-lg bg-black/40 border border-white/10 p-3">
              <Mail size={18} className="text-white/60" />
              <input type="email" placeholder="you@example.com" className="w-full bg-transparent outline-none placeholder:text-white/40" />
            </div>
          </div>
          <div>
            <label className="text-sm text-white/70">Password</label>
            <div className="mt-1 flex items-center gap-2 rounded-lg bg-black/40 border border-white/10 p-3">
              <Lock size={18} className="text-white/60" />
              <input type="password" placeholder="••••••••" className="w-full bg-transparent outline-none placeholder:text-white/40" />
            </div>
          </div>
          <button type="button" className="w-full rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-medium py-3 transition">{mode === "login" ? "Login" : "Create Account"}</button>
          <p className="text-xs text-white/60 text-center">By continuing, you agree to our Terms and Privacy Policy.</p>
        </form>
      </div>
    </section>
  );
}
