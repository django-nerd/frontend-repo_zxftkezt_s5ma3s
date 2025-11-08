export default function Roots() {
  return (
    <section id="roots" className="bg-gradient-to-b from-amber-50 to-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Indian Roots. Global Wings.</h2>
            <p className="mt-4 text-gray-700">
              Our ethos is guided by the principles of Gurukul—respect, discipline, and holistic growth—reimagined for the 21st century. Sanskrit shlokas, yoga, mindfulness, and community service blend seamlessly with AI literacy, design thinking, and environmental stewardship.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-gray-700 sm:grid-cols-2">
              <li className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">Morning Suryanamaskar & Mindfulness</li>
              <li className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">Sanskrit & Indian Languages Program</li>
              <li className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">Value Education & Seva Projects</li>
              <li className="rounded-lg bg-white p-3 shadow-sm ring-1 ring-gray-100">Local Heritage Expeditions</li>
            </ul>
          </div>
          <div className="relative h-72 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-100 via-emerald-100 to-amber-100 p-1 md:h-96">
            <div className="h-full w-full rounded-2xl bg-white/60 backdrop-blur">
              <div className="flex h-full items-center justify-center p-6 text-center text-sm text-gray-600">
                Blending classical traditions with modern pedagogy, creating confident, compassionate global citizens.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
