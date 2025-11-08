import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Admissions & Enquiry</h2>
            <p className="mt-3 text-slate-600">Reach out to our admissions team. We typically respond within one business day.</p>
            <ul className="mt-6 space-y-3 text-slate-700">
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-slate-900" /> admissions@auro.school</li>
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-slate-900" /> +91 98765 43210</li>
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-slate-900" /> Auro Campus, Knowledge City, India</li>
            </ul>
          </div>
          <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Full Name</label>
                <input required type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" placeholder="you@example.com" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input type="tel" className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" placeholder="Optional" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Grade Applying</label>
                <select className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900">
                  <option>Pre-Primary</option>
                  <option>Primary</option>
                  <option>Middle School</option>
                  <option>High School</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea rows={4} className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900" placeholder="Tell us about the student and your query" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-slate-800">Send Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}
