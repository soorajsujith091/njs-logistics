import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#f3f2ee]">
      <div className="max-w-[1440px] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold text-njs-navy mb-6">Ready to Move Your Business Forward?</h1>
          <p className="text-xl text-gray-500 mb-12">Talk to NJS Logistics about your next shipment.</p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-njs-orange">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-njs-navy">Phone</p>
                <p className="text-gray-600">+971 55 692 7191</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-njs-orange">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-njs-navy">Email</p>
                <p className="text-gray-600">info@njslogistics.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-njs-orange">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-njs-navy">Website</p>
                <p className="text-gray-600">www.njslogistics.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-njs-orange">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-semibold text-njs-navy">Location</p>
                <p className="text-gray-600">Dubai Industrial City<br/>Warehouse: South Zone, Jebel Ali Freezone<br/>Dubai - United Arab Emirates</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-black/5 h-fit">
          <h2 className="text-2xl font-bold text-njs-navy mb-6">Request a Quote</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-njs-orange/50 bg-gray-50" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-njs-orange/50 bg-gray-50" placeholder="Your Company" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-njs-orange/50 bg-gray-50" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-njs-orange/50 bg-gray-50" placeholder="+971 50 123 4567" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-njs-orange/50 bg-gray-50 text-gray-600">
                <option>Air Freight</option>
                <option>Sea Freight</option>
                <option>Land Freight</option>
                <option>Customs Clearance</option>
                <option>Door-to-Door Delivery</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-njs-orange/50 bg-gray-50" placeholder="Tell us about your shipment..."></textarea>
            </div>
            
            <button className="w-full bg-njs-orange hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition-colors mt-4">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
