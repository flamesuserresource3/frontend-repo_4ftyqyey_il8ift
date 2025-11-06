import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Auth from "./components/Auth";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";

function App() {
  const [view, setView] = useState("home");

  useEffect(() => {
    // Enable smooth scrolling for hash links
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navbar currentView={view} onNavigate={(v) => setView(v)} />
      <main className="pt-16">
        {view === "home" && (
          <>
            <Hero />
            <Dashboard />
            <Contact />
          </>
        )}
        {view === "dashboard" && <Dashboard />}
        {view === "auth" && (
          <>
            <Hero />
            <Auth />
          </>
        )}
        {view === "contact" && <Contact />}
      </main>
      <footer className="border-t border-white/10 bg-black text-white/60">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-sm">© {new Date().getFullYear()} PulseFit. All rights reserved.</p>
          <div className="text-xs">Built for modern training — consistency over intensity.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
