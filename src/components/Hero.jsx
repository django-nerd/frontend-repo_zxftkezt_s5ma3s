import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90 pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <span className="mb-3 inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700">International School</span>
        <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
          Futuristic Learning
          <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 bg-clip-text text-transparent">Rooted in Indian Values</span>
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-700 sm:text-lg">
          A global campus blending cutting-edge technology with the wisdom of Indian traditions. Explore immersive labs, green spaces, and world-class programs.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#facilities" className="rounded-lg bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">Explore Facilities</a>
          <a href="#roots" className="rounded-lg bg-white/70 px-5 py-3 text-blue-700 ring-1 ring-blue-200 backdrop-blur hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-300">Our Ethos</a>
        </div>
      </div>
    </section>
  );
}
