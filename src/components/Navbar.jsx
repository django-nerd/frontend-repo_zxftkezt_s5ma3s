import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const nav = (
    <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-6">
      <li><a href="#facilities" className="text-gray-700 hover:text-blue-700">Facilities</a></li>
      <li><a href="#roots" className="text-gray-700 hover:text-blue-700">Our Roots</a></li>
      <li><a href="#hierarchy" className="text-gray-700 hover:text-blue-700">Hierarchy</a></li>
      <li><a href="#contact" className="text-gray-700 hover:text-blue-700">Contact</a></li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">Bharat
          </span> International School
        </a>
        <nav className="hidden md:block">{nav}</nav>
        <button className="rounded-lg p-2 ring-1 ring-gray-200 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 md:hidden">
          {nav}
        </div>
      )}
    </header>
  );
}
