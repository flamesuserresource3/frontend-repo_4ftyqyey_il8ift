import { Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-20 bg-zinc-950 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_80%_20%,rgba(16,185,129,0.12),transparent),radial-gradient(500px_150px_at_20%_80%,rgba(59,130,246,0.1),transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
            <p className="mt-3 text-white/70">Have questions about plans, classes, or your account? Send us a message and our team will get back to you.</p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-white/80"><Mail size={18}/> support@pulsefit.app</div>
              <div className="flex items-center gap-3 text-white/80"><MessageSquare size={18}/> Live chat available 9am–6pm</div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 space-y-4">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-3 outline-none placeholder:text-white/40" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input type="email" required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-3 outline-none placeholder:text-white/40" placeholder="jane@example.com" />
            </div>
            <div>
              <label className="text-sm text-white/70">Message</label>
              <textarea rows={4} required className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-3 outline-none placeholder:text-white/40" placeholder="Tell us more..." />
            </div>
            <button className="w-full rounded-lg bg-white text-black font-medium py-3 hover:bg-white/90 transition">Send Message</button>
            {sent && <p className="text-emerald-400 text-sm">Thanks! We'll be in touch soon.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
