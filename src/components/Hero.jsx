import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] sm:h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/nq8F3rj8m9fJf5fE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/70 via-white/30 to-white/90" />
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
              Auro International School
            </h1>
            <p className="mt-4 text-slate-700 text-base sm:text-lg">
              Futuristic learning with Indian roots — where AI, arts, and ancient wisdom shape global citizens.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#facilities" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-2.5 text-sm font-medium shadow hover:bg-slate-800 transition-colors">
                Explore Facilities
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white text-slate-900 px-5 py-2.5 text-sm font-medium hover:bg-slate-50">
                Admissions Enquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
