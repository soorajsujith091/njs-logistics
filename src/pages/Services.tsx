import { ArrowRight, Plane, Anchor, Truck, Package, Globe, Shield, Warehouse } from 'lucide-react';
import TrustStrip from '../components/sections/TrustStrip';

export default function Services() {
  return (
    <div className="min-h-screen bg-[#f3f2ee]">
      <div className="bg-njs-navy text-white pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/aerial-view-cargo-ship-cargo-container-harbor.jpg')] bg-cover bg-center mix-blend-multiply" />
        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Complete Logistics Solutions</h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Tailored logistics services matching the exact requirements of every shipment.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-24 space-y-32">
        
        {/* Air Freight */}
        <section id="air" className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 rounded-[2rem] overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
            <img src="/images/service-air.png" alt="Air Freight" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6 text-njs-orange">
              <Plane className="w-8 h-8" />
              <span className="font-semibold tracking-wider uppercase">Air Freight</span>
            </div>
            <h2 className="text-3xl font-bold text-njs-navy mb-6">When Every Hour Matters</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our air freight solutions are designed for shipments that require speed, security and dependable coordination. NJS Logistics manages cargo movement from pickup and documentation through airport handling and final delivery, helping businesses move time-sensitive shipments efficiently.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Import & Export Air Freight', 'Airport-to-Airport Services', 'Door-to-Door Air Cargo', 'Consolidated Air Freight', 'Shipment Documentation', 'Cargo Pickup & Delivery', 'Special Cargo Coordination'].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-black/5 shadow-sm">
                  <ArrowRight className="w-5 h-5 text-njs-orange shrink-0" />
                  <span className="font-medium text-njs-navy text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sea Freight */}
        <section id="sea" className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6 text-njs-orange">
              <Anchor className="w-8 h-8" />
              <span className="font-semibold tracking-wider uppercase">Sea Freight</span>
            </div>
            <h2 className="text-3xl font-bold text-njs-navy mb-6">Reliable Ocean Freight for Global Trade</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              For businesses moving larger volumes of cargo, NJS Logistics provides flexible sea freight solutions designed around shipment size, schedule and destination. Whether it is a full container or a smaller consolidated shipment, we coordinate the process from origin through destination.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Full Container Load (FCL)', 'Less than Container Load (LCL)', 'Import & Export Shipments', 'Port-to-Port Services', 'Door-to-Door Solutions', 'Cargo Consolidation', 'Shipping Documentation', 'Container Transportation'].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-black/5 shadow-sm">
                  <ArrowRight className="w-5 h-5 text-njs-orange shrink-0" />
                  <span className="font-medium text-njs-navy text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
            <img src="/images/service-sea.png" alt="Sea Freight" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Land Freight */}
        <section id="land" className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 rounded-[2rem] overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
            <img src="/images/service-land.png" alt="Land Freight" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6 text-njs-orange">
              <Truck className="w-8 h-8" />
              <span className="font-semibold tracking-wider uppercase">Land Freight</span>
            </div>
            <h2 className="text-3xl font-bold text-njs-navy mb-6">Connecting Cargo by Road</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              NJS Logistics provides flexible road freight solutions for commercial cargo across the UAE and selected regional destinations. Our focus is on safe transportation, efficient route coordination and dependable delivery from pickup point to final destination.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Full Truck Load — FTL', 'Less than Truck Load — LTL', 'Local UAE Transportation', 'GCC Road Freight Coordination', 'Container Transportation', 'Commercial Cargo Movement', 'Pickup & Delivery Services', 'Cross-Border Shipment Coordination'].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-black/5 shadow-sm">
                  <ArrowRight className="w-5 h-5 text-njs-orange shrink-0" />
                  <span className="font-medium text-njs-navy text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Door to Door */}
        <section id="door" className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6 text-njs-orange">
              <Package className="w-8 h-8" />
              <span className="font-semibold tracking-wider uppercase">Door-To-Door Delivery</span>
            </div>
            <h2 className="text-3xl font-bold text-njs-navy mb-6">From Pickup to Final Destination</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Our door-to-door service brings multiple logistics activities together under one coordinated solution. From collecting the cargo and preparing shipment documentation to transportation, customs processing and final delivery, NJS Logistics helps simplify the entire journey.
            </p>
            <div className="bg-njs-orange p-6 rounded-2xl">
              <p className="text-xl font-semibold text-white">
                One Shipment. One Point of Contact. One Smooth Process.
              </p>
            </div>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-2xl h-[400px]">
            <img src="/images/service-door.png" alt="Door to Door Delivery" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Customs Clearance */}
        <section id="customs" className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 rounded-[2rem] overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
            <img src="/images/service-customs.png" alt="Customs Clearance" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6 text-njs-orange">
              <Shield className="w-8 h-8" />
              <span className="font-semibold tracking-wider uppercase">Customs Clearance</span>
            </div>
            <h2 className="text-3xl font-bold text-njs-navy mb-6">Making Cross-Border Movement Simpler</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Customs procedures and documentation are important parts of international logistics. NJS Logistics supports customers with the coordination of import and export clearance requirements, helping shipments move through customs efficiently.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {['Import Customs Clearance', 'Export Customs Clearance', 'Shipment Documentation', 'Customs Documentation Coordination', 'Import & Export Paperwork', 'Cargo Release Coordination', 'Port & Airport Clearance Support', 'Cross-Border Documentation'].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-black/5 shadow-sm">
                  <ArrowRight className="w-5 h-5 text-njs-orange shrink-0" />
                  <span className="font-medium text-njs-navy text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Warehousing */}
        <section id="warehousing" className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6 text-njs-orange">
              <Warehouse className="w-8 h-8" />
              <span className="font-semibold tracking-wider uppercase">Warehousing & Storage</span>
            </div>
            <h2 className="text-3xl font-bold text-njs-navy mb-6">Flexible Support Beyond Transportation</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              NJS Logistics provides warehousing and cargo-handling solutions to support businesses requiring temporary storage, shipment preparation and distribution assistance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Short-Term Cargo Storage', 'Receiving & Dispatch', 'Cargo Handling', 'Inventory Coordination', 'Packing & Repacking', 'Labelling & Palletising', 'Shipment Preparation', 'Distribution Support'].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-black/5 shadow-sm">
                  <ArrowRight className="w-5 h-5 text-njs-orange shrink-0" />
                  <span className="font-medium text-njs-navy text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
            <img src="/images/service-warehouse.png" alt="Warehousing" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* Cargo Consolidation */}
        <section id="consolidation" className="scroll-mt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 rounded-[2rem] overflow-hidden shadow-2xl h-[400px]">
            <img src="/images/transport-logistics-products.jpg" alt="Cargo Consolidation" className="w-full h-full object-cover" />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-6 text-njs-orange">
              <Globe className="w-8 h-8" />
              <span className="font-semibold tracking-wider uppercase">Cargo Consolidation</span>
            </div>
            <h2 className="text-3xl font-bold text-njs-navy mb-6">Smarter Shipping Through Consolidation</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              When cargo is sourced from multiple suppliers or locations, consolidation can make the shipping process easier and more economical. NJS Logistics can coordinate the collection of multiple shipments, combine them at a suitable point and arrange onward transportation.
            </p>
            <div className="bg-white p-6 rounded-3xl border border-black/5 shadow-sm">
              <h3 className="text-lg font-bold text-njs-navy mb-4">Benefits</h3>
              <div className="space-y-3">
                {['Simplified Shipment Management', 'Better Cargo Coordination', 'Reduced Handling Complexity', 'Efficient Use of Transport Capacity'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <ArrowRight className="w-4 h-4 text-njs-orange shrink-0" />
                    <span className="font-medium text-njs-navy text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
      </div>
      
      <TrustStrip />
    </div>
  );
}
