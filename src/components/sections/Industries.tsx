import { Car, HeartPulse, ShoppingCart, Cpu, Factory, Leaf, ArrowRight } from 'lucide-react';

export default function Industries() {
  const industries = [
    { icon: <Car className="w-8 h-8" />, title: 'Automotive', desc: 'Secure transport for vehicles and parts.', image: '/images/transport-logistics-products.jpg' },
    { icon: <HeartPulse className="w-8 h-8" />, title: 'Healthcare', desc: 'Temperature-controlled medical logistics.', image: '/images/logistics-means-transport-together-with-technological-futuristic-holograms.jpg' },
    { icon: <ShoppingCart className="w-8 h-8" />, title: 'Retail & FMCG', desc: 'Fast-moving consumer goods distribution.', image: '/images/service-door.png' },
    { icon: <Cpu className="w-8 h-8" />, title: 'Technology', desc: 'Safe handling of sensitive electronics.', image: '/images/service-warehouse.png' },
    { icon: <Factory className="w-8 h-8" />, title: 'Industrial', desc: 'Heavy machinery and equipment moving.', image: '/images/service-land.png' },
    { icon: <Leaf className="w-8 h-8" />, title: 'Agriculture', desc: 'Fresh produce and perishable goods.', image: '/images/aerial-view-cargo-ship-cargo-container-harbor.jpg' },
  ];

  return (
    <div className="bg-white py-24 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="industry-header text-center mb-16">
          <h2 className="text-4xl font-bold text-njs-navy mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored logistics solutions designed to meet the specific requirements of your industry, ensuring safe and efficient delivery every time.
          </p>
        </div>

        <div className="industry-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((item, index) => (
            <div key={index} className="industry-card group relative p-8 md:p-10 rounded-[2rem] bg-njs-navy overflow-hidden cursor-pointer h-[350px] flex flex-col justify-end shadow-lg hover:shadow-2xl transition-all duration-500 border border-black/5 hover:-translate-y-2">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              
              {/* Fade from bottom for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-njs-orange mb-6 group-hover:bg-njs-orange group-hover:text-white group-hover:-translate-y-1 transition-all duration-500 shadow-md">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-njs-orange transition-colors duration-300">{item.title}</h3>
                
                {/* Fixed accordion animation for all browsers */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="overflow-hidden min-h-0">
                    <p className="text-gray-300 mb-6 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {item.desc}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center text-sm font-semibold text-white group-hover:text-njs-orange transition-colors duration-300 mt-2">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
