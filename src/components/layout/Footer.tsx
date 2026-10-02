import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-njs-navy text-white py-16 px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <img 
            src="/images/footer-logo-transparent.png" 
            alt="NJS Logistics Logo" 
            className="h-16 w-auto object-contain scale-[1.2] origin-left"
          />
          <p className="text-gray-300 text-sm">
            NJS Logistics LLC is a modern freight forwarding and logistics company providing reliable, efficient and seamless cargo solutions across the UAE, GCC and worldwide destinations.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/NJS.Logistics" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-njs-orange hover:text-white transition-all text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/njs_logistics/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-njs-orange hover:text-white transition-all text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://wa.me/971556927191?text=Hello%20NJS%20Logistics%2C%20I%20would%20like%20to%20inquire%20about%20your%20services." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-njs-orange hover:text-white transition-all text-white" title="WhatsApp">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-njs-orange">Services</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/services/air" className="hover:text-white transition-colors">Air Freight</Link></li>
            <li><Link to="/services/sea" className="hover:text-white transition-colors">Sea Freight</Link></li>
            <li><Link to="/services/land" className="hover:text-white transition-colors">Land Freight</Link></li>
            <li><Link to="/services/customs" className="hover:text-white transition-colors">Customs Clearance</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-njs-orange">Company</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-njs-orange">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>+971 55 692 7191</li>
            <li>+971 55 945 2733</li>
            <li>info@njslogistics.com</li>
            <li>Dubai Industrial City</li>
            <li>South Zone, Jebel Ali Freezone, Dubai</li>
          </ul>
          <Link to="/contact" className="mt-6 px-6 py-3 bg-njs-orange hover:bg-orange-600 text-white font-medium rounded-full transition-colors w-full sm:w-auto inline-block text-center">
            Request a Quote
          </Link>
        </div>
      </div>
    </footer>
  );
}
