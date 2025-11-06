import { Activity, Calendar, Flame, Target } from "lucide-react";

const Stat = ({ icon: Icon, label, value, change }) => (
  <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-5">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 grid place-items-center rounded-xl bg-white/10">
          <Icon size={20} className="text-emerald-400" />
        </div>
        <div>
          <p className="text-white/60 text-sm">{label}</p>
          <p className="text-xl font-semibold text-white">{value}</p>
        </div>
      </div>
      <span className={`text-sm ${change.startsWith("+") ? "text-emerald-400" : "text-red-400"}`}>{change}</span>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <section className="relative py-20 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(400px_200px_at_10%_10%,rgba(16,185,129,0.12),transparent),radial-gradient(600px_300px_at_90%_0%,rgba(59,130,246,0.1),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Your Dashboard</h2>
          <p className="text-white/70 mt-2">A quick snapshot of your activity and upcoming sessions.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-5">
          <Stat icon={Activity} label="Weekly Workouts" value="5 Sessions" change="+1" />
          <Stat icon={Flame} label="Calories Burned" value="3,240 kcal" change="+6%" />
          <Stat icon={Target} label="Goal Progress" value="74%" change="+4%" />
          <Stat icon={Calendar} label="Next Session" value="Thu, 6:00 PM" change="" />
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold mb-4">This Week Plan</h3>
            <ul className="space-y-3 text-white/80">
              <li>Mon — Push Day (Chest/Triceps)</li>
              <li>Tue — Cardio + Core</li>
              <li>Thu — Pull Day (Back/Biceps)</li>
              <li>Sat — Legs + Conditioning</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <h3 className="font-semibold mb-4">Recent Achievements</h3>
            <ul className="space-y-3 text-white/80">
              <li>5K run in under 25 minutes</li>
              <li>New PR: Deadlift 315 lb</li>
              <li>Completed 4-week Hypertrophy Block</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
