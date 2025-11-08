import { Library, FlaskConical, Trees, Globe2, Dumbbell, Bus, ShieldCheck, Sparkles } from 'lucide-react';

const facilities = [
  { icon: Library, title: 'Knowledge Centre', desc: 'Digitized library with multilingual archives, VR study pods, and AI research assistants.' },
  { icon: FlaskConical, title: 'Innovation Labs', desc: 'Robotics, biotech, and clean-energy labs with project-based learning.' },
  { icon: Trees, title: 'Green Campus', desc: 'Eco-parks, organic gardens, and rainwater harvesting, aligned with ancient sustainability practices.' },
  { icon: Globe2, title: 'Global Exchange', desc: 'International partnerships, Model UN, and cultural immersion programs.' },
  { icon: Dumbbell, title: 'Sports & Wellness', desc: 'Olympic-size facilities, yoga shalas, meditation domes, and performance coaching.' },
  { icon: Bus, title: 'Smart Transport', desc: 'GPS-enabled fleet, EV charging, and safe-guard routing with parent app.' },
  { icon: ShieldCheck, title: 'Safety First', desc: '24/7 security, health centre, and emergency readiness with smart monitoring.' },
  { icon: Sparkles, title: 'Arts & Culture', desc: 'Classical dance, music, and theatre fused with digital storytelling labs.' },
];

export default function Facilities() {
  return (
    <section id="facilities" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-col items-start gap-2">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Facilities</h2>
          <p className="max-w-2xl text-gray-600">A world-class ecosystem designed to nurture curiosity, character, and global citizenship.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex rounded-xl bg-blue-600/10 p-3 text-blue-700 ring-1 ring-blue-200">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
