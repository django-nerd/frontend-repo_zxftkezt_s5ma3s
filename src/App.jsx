import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Facilities from './components/Facilities.jsx';
import Roots from './components/Roots.jsx';
import Hierarchy from './components/Hierarchy.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Facilities />
        <Roots />
        <Hierarchy />
        <Contact />
      </main>
      <footer className="border-t border-black/5 bg-white/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Auro International School. All rights reserved.</p>
          <a href="#home" className="text-sm text-slate-700 hover:text-slate-900">Back to top</a>
        </div>
      </footer>
    </div>
  );
}
