import { Library, FlaskConical, Dumbbell, Music, Trees, Shirt, BusFront, Wifi } from 'lucide-react';

const facilities = [
  { icon: Library, title: 'Digital Library', desc: 'Extensive resources and e-journals with quiet pods.' },
  { icon: FlaskConical, title: 'Innovation Labs', desc: 'AI, robotics, and design thinking studios.' },
  { icon: Dumbbell, title: 'Sports Complex', desc: 'Indoor arena, track, swimming, and yoga pavilion.' },
  { icon: Music, title: 'Performing Arts', desc: 'Music, dance, theater with professional guidance.' },
  { icon: Trees, title: 'Green Campus', desc: 'Organic gardens and sustainability projects.' },
  { icon: Shirt, title: 'House System', desc: 'Leadership through four vibrant houses.' },
  { icon: BusFront, title: 'Transport', desc: 'Safe GPS-enabled buses across the city.' },
  { icon: Wifi, title: 'Smart Classrooms', desc: 'Interactive boards and high-speed Wi‑Fi.' },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">World-class Facilities</h2>
          <p className="mt-2 text-slate-600">Designed for curiosity, wellbeing, and future-ready skills.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-slate-900 text-white grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-medium text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
