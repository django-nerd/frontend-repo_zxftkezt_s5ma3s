import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Facilities from './components/Facilities';
import Roots from './components/Roots';
import Hierarchy from './components/Hierarchy';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Facilities />
      <Roots />
      <Hierarchy />

      <footer id="contact" className="border-t border-gray-100 bg-gray-50/50 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
          <div>
            <h3 className="text-lg font-semibold">Bharat International School</h3>
            <p className="text-sm text-gray-600">Where tradition meets tomorrow.</p>
          </div>
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} Bharat International School. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
