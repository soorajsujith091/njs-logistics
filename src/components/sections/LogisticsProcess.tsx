import { ArrowDown } from 'lucide-react';

const steps = [
  { title: 'Pickup', desc: 'Secure collection from origin' },
  { title: 'Documentation', desc: 'Seamless paperwork handling' },
  { title: 'Transportation', desc: 'Fast, secure movement' },
  { title: 'Customs', desc: 'Expert clearance support' },
  { title: 'Final Delivery', desc: 'Safe arrival at destination' }
];

export default function LogisticsProcess() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1440px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-njs-navy mb-4">From Pickup to Final Destination</h2>
        <p className="text-xl text-gray-500 mb-16 font-medium">One Shipment. One Point of Contact. One Smooth Process.</p>
        
        <div className="flex flex-col md:flex-row justify-between items-center relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -z-10 -translate-y-1/2" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center bg-white p-4 z-10 w-full md:w-auto relative mb-8 md:mb-0">
              <div className="w-16 h-16 bg-njs-navy text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg border-4 border-white">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-njs-navy mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 max-w-[150px]">{step.desc}</p>
              
              {/* Mobile Arrow */}
              {idx < steps.length - 1 && (
                <div className="md:hidden mt-6 text-gray-300">
                  <ArrowDown className="w-8 h-8" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
