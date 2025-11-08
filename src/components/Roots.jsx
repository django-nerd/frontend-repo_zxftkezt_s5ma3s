export default function Roots() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Indian roots. Global wings.</h2>
            <p className="mt-4 text-slate-600">Our ethos blends Sanskrit, yoga, classical arts, and seva with cutting-edge technology and design thinking. Students grow rooted yet global — compassionate, creative, and future-ready.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
              <li className="rounded-lg border border-slate-200 bg-white px-4 py-3">Morning Yoga & Mindfulness</li>
              <li className="rounded-lg border border-slate-200 bg-white px-4 py-3">Sanskrit & Indian Languages</li>
              <li className="rounded-lg border border-slate-200 bg-white px-4 py-3">Music, Dance & Visual Arts</li>
              <li className="rounded-lg border border-slate-200 bg-white px-4 py-3">Community Service & Eco-Clubs</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-amber-200 via-rose-200 to-sky-200" />
          </div>
        </div>
      </div>
    </section>
  );
}
