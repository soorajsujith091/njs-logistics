import TrustStrip from '../components/sections/TrustStrip';
import GlobalPresence from '../components/sections/GlobalPresence';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-njs-navy text-white pt-24 pb-16 px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">About NJS Logistics</h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Delivering reliable, efficient, and seamless cargo solutions across the UAE and worldwide destinations.
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto mt-6 leading-relaxed">
            Our services cover Air Freight, Sea Freight, Land Freight, Customs Clearance, Warehousing, Cargo Consolidation and Door-to-Door Delivery, giving our customers one reliable point of contact for their logistics requirements.
          </p>
        </div>
      </div>
      
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div className="bg-[#f3f2ee] p-10 rounded-3xl">
            <h2 className="text-3xl font-bold text-njs-navy mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To provide reliable, efficient and customer-focused logistics solutions that move every shipment safely and smoothly from origin to destination.
            </p>
          </div>
          <div className="bg-[#f3f2ee] p-10 rounded-3xl">
            <h2 className="text-3xl font-bold text-njs-navy mb-6">Our Vision</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To become a trusted logistics partner in the UAE and beyond by building strong relationships and delivering dependable service at every stage of the supply chain.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-njs-navy mb-10 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 text-njs-orange rounded-xl flex items-center justify-center shrink-0 font-bold text-xl">R</div>
              <div>
                <h3 className="text-xl font-bold text-njs-navy mb-2">Reliability</h3>
                <p className="text-gray-600 leading-relaxed">We take responsibility for every shipment entrusted to us.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 text-njs-orange rounded-xl flex items-center justify-center shrink-0 font-bold text-xl">I</div>
              <div>
                <h3 className="text-xl font-bold text-njs-navy mb-2">Integrity</h3>
                <p className="text-gray-600 leading-relaxed">We believe in transparent communication and professional business practices.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 text-njs-orange rounded-xl flex items-center justify-center shrink-0 font-bold text-xl">E</div>
              <div>
                <h3 className="text-xl font-bold text-njs-navy mb-2">Efficiency</h3>
                <p className="text-gray-600 leading-relaxed">We work to simplify logistics and keep cargo moving without unnecessary delays.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 text-njs-orange rounded-xl flex items-center justify-center shrink-0 font-bold text-xl">C</div>
              <div>
                <h3 className="text-xl font-bold text-njs-navy mb-2">Customer Focus</h3>
                <p className="text-gray-600 leading-relaxed">Every solution begins with understanding our customer's needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TrustStrip />
      <GlobalPresence />
    </div>
  );
}
