import { Car, HeartPulse, ShoppingCart, Cpu, Factory, Leaf } from 'lucide-react';

export default function Industries() {
  const industries = [
    { icon: <Car className="w-8 h-8" />, title: 'Automotive', desc: 'Secure transport for vehicles and parts.' },
    { icon: <HeartPulse className="w-8 h-8" />, title: 'Healthcare', desc: 'Temperature-controlled medical logistics.' },
    { icon: <ShoppingCart className="w-8 h-8" />, title: 'Retail & FMCG', desc: 'Fast-moving consumer goods distribution.' },
    { icon: <Cpu className="w-8 h-8" />, title: 'Technology', desc: 'Safe handling of sensitive electronics.' },
    { icon: <Factory className="w-8 h-8" />, title: 'Industrial', desc: 'Heavy machinery and equipment moving.' },
    { icon: <Leaf className="w-8 h-8" />, title: 'Agriculture', desc: 'Fresh produce and perishable goods.' },
  ];

  return (
    <div className="bg-white py-24 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-njs-navy mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tailored logistics solutions designed to meet the specific requirements of your industry, ensuring safe and efficient delivery every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-[#f3f2ee] hover:bg-njs-navy transition-colors duration-300 cursor-pointer">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-njs-orange mb-6 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-njs-navy mb-3 group-hover:text-white transition-colors duration-300">{item.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
