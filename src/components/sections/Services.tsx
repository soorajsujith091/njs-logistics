import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Air Freight',
    image: '/images/service-air.png',
    description: 'Flexible air cargo solutions for urgent, high-value and time-sensitive shipments.',
    link: '/services#air'
  },
  {
    title: 'Sea Freight',
    image: '/images/service-sea.png',
    description: 'Cost-effective ocean freight solutions for both consolidated and full-container shipments.',
    link: '/services#sea'
  },
  {
    title: 'Land Freight',
    image: '/images/service-land.png',
    description: 'Reliable road transportation for cargo movement across the UAE and regional destinations.',
    link: '/services#land'
  },
  {
    title: 'Customs Clearance',
    image: '/images/service-customs.png',
    description: 'Professional support with customs procedures, shipment documentation and import/export clearance.',
    link: '/services#customs'
  },
  {
    title: 'Warehousing & Storage',
    image: '/images/service-warehouse.png',
    description: 'Practical storage and cargo-handling solutions supporting efficient inventory and distribution.',
    link: '/services#warehousing'
  },
  {
    title: 'Door-to-Door Delivery',
    image: '/images/service-door.png',
    description: 'Coordinated pickup, transportation, clearance and final delivery through one streamlined service.',
    link: '/services#door'
  },
  {
    title: 'Cargo Consolidation',
    image: '/images/transport-logistics-products.jpg',
    description: 'Efficient consolidation of multiple shipments to simplify transportation and optimise shipping costs.',
    link: '/services#consolidation'
  },
  {
    title: 'Import & Export Logistics',
    image: '/images/logistics-means-transport-together-with-technological-futuristic-holograms.jpg',
    description: 'End-to-end coordination for international cargo moving into and out of the UAE.',
    link: '/services#import-export'
  }
];

export default function Services() {
  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <p className="text-sm font-semibold tracking-wider text-gray-500 uppercase mb-2">Complete Logistics Solutions</p>
          <h2 className="text-3xl md:text-4xl font-bold text-njs-navy max-w-lg leading-tight">
            We will select the optimal transport for any request
          </h2>
        </div>
        <div className="flex gap-4">
          <p className="text-sm text-gray-600 max-w-xs text-balance">
            Transport company that transports cargo anywhere in the world. We offer the most convenient way of transportation based on the requirements for speed and cost.
          </p>
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-black/5">
            <ArrowUpRight className="w-8 h-8 text-gray-300" />
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="group relative rounded-3xl overflow-hidden h-[300px] cursor-pointer">
            <img 
              src={service.image} 
              alt={service.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <h3 className="text-white text-xl font-bold leading-tight">{service.title}</h3>
              
              <div className="flex items-end justify-between translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-gray-200 text-xs max-w-[150px] leading-snug">{service.description}</p>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0 ml-2">
                  <ArrowUpRight className="w-4 h-4 text-njs-navy" />
                </div>
              </div>
            </div>
            
            {/* Default visible arrow */}
            <div className="absolute bottom-6 right-6 w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
