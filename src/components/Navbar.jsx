import { Dumbbell, LayoutDashboard, LogIn, Mail, Home } from "lucide-react";

export default function Navbar({ currentView, onNavigate }) {
  const linkClasses = (view) =>
    `inline-flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
      currentView === view
        ? "bg-white/10 text-white"
        : "text-white/80 hover:text-white hover:bg-white/10"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3 text-white">
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 shadow-lg shadow-emerald-500/30">
              <Dumbbell size={20} />
            </div>
            <span className="font-semibold tracking-tight">PulseFit</span>
          </div>
          <nav className="flex items-center gap-2">
            <button className={linkClasses("home")} onClick={() => onNavigate("home")}>
              <Home size={18} /> Home
            </button>
            <button
              className={linkClasses("dashboard")}
              onClick={() => onNavigate("dashboard")}
            >
              <LayoutDashboard size={18} /> Dashboard
            </button>
            <button className={linkClasses("auth")} onClick={() => onNavigate("auth")}>
              <LogIn size={18} /> Login
            </button>
            <button className={linkClasses("contact")} onClick={() => onNavigate("contact")}>
              <Mail size={18} /> Contact
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
