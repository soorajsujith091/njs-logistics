import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f3f2ee]/90 backdrop-blur-md transition-all">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between relative">
        <Link to="/" className="flex items-center gap-2 z-50">
          <img 
            src="/images/header-logo-transparent.png" 
            alt="NJS Logistics Logo" 
            className="h-12 w-auto object-contain scale-[1.3] origin-left"
          />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 bg-white/60 px-6 py-2 rounded-full border border-black/5">
          <Link to="/" className="text-sm font-medium hover:text-njs-orange transition-colors">Home</Link>
          <Link to="/services" className="text-sm font-medium hover:text-njs-orange transition-colors">Services</Link>
          <Link to="/about" className="text-sm font-medium hover:text-njs-orange transition-colors">About us</Link>
          <Link to="/careers" className="text-sm font-medium hover:text-njs-orange transition-colors">Careers</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-njs-orange transition-colors">Contact us</Link>
        </nav>
        
        <div className="flex items-center gap-3 z-50">
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-black/10 hover:bg-njs-orange hover:text-white hover:border-njs-orange transition-all text-njs-navy">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-black/10 hover:bg-njs-orange hover:text-white hover:border-njs-orange transition-all text-njs-navy">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-black/10 hover:bg-njs-orange hover:text-white hover:border-njs-orange transition-all text-njs-navy">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <button 
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white border border-black/10 hover:bg-gray-50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5 text-njs-navy" /> : <Menu className="w-5 h-5 text-njs-navy" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-20 bg-[#f3f2ee] border-t border-black/5 shadow-xl transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 py-8 gap-6">
          <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-njs-navy hover:text-njs-orange transition-colors">Home</Link>
          <Link to="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-njs-navy hover:text-njs-orange transition-colors">Services</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-njs-navy hover:text-njs-orange transition-colors">About us</Link>
          <Link to="/careers" onClick={() => setIsOpen(false)} className="text-lg font-medium text-njs-navy hover:text-njs-orange transition-colors">Careers</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-njs-navy hover:text-njs-orange transition-colors">Contact us</Link>
          
          <div className="flex items-center gap-4 pt-6 border-t border-black/10 md:hidden">
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-black/10 hover:bg-njs-orange hover:text-white transition-all text-njs-navy">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-black/10 hover:bg-njs-orange hover:text-white transition-all text-njs-navy">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="flex items-center justify-center w-10 h-10 rounded-full bg-white border border-black/10 hover:bg-njs-orange hover:text-white transition-all text-njs-navy">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
