import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowUpRight, Calculator } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.hero-content > *', {
      y: 30,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2,
    })
    .from('.hero-card', {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'back.out(1.7)',
    }, '-=0.5');
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="px-4 md:px-8 pb-6">
      <div className="relative w-full mx-auto rounded-3xl md:rounded-[2.5rem] overflow-hidden min-h-[750px] md:min-h-[650px] lg:min-h-[85vh] bg-njs-navy shadow-2xl flex flex-col">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/images/magnific_move-this-aeroplane-to-fl_rgNqoO3xtc (1).mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-njs-navy/80 to-transparent mix-blend-multiply" />
        
        {/* Content */}
        <div className="relative flex-grow flex flex-col justify-between p-6 sm:p-10 md:p-16 lg:p-20">
          <div className="hero-content max-w-3xl text-white mt-4 md:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white mb-4 md:mb-6 tracking-wider">
              Driven by Trust.<br />
              Delivered with Care.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 md:mb-8 text-balance">
              Reliable freight and logistics solutions designed to connect your business with opportunities across borders.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-10">
              {['Freight', 'Logistics', 'Customs', 'Warehousing'].map(service => (
                <span key={service} className="px-3 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium">
                  {service}
                </span>
              ))}
            </div>
          </div>
          
          {/* Bottom overlapping cards */}
          <div className="flex flex-col md:flex-row gap-4 items-end justify-between">
            <div className="hero-card bg-white p-4 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full md:w-auto shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-njs-navy/10 rounded-full flex items-center justify-center shrink-0">
                  <Calculator className="w-6 h-6 text-njs-navy" />
                </div>
                <div>
                  <p className="font-semibold text-njs-navy text-sm">Ready to Ship?</p>
                  <p className="text-xs text-gray-500">Get a fast, accurate estimate.</p>
                </div>
              </div>
              <button className="w-full sm:w-auto sm:ml-2 bg-njs-orange hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors flex justify-center items-center gap-2">
                Request Quote <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="hero-card bg-white p-4 rounded-3xl flex items-center gap-4 sm:gap-6 w-full md:w-auto shadow-lg">
              <div className="w-16 sm:w-20 h-16 rounded-xl overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=200&auto=format&fit=crop" alt="Cargo" className="w-full h-full object-cover" />
              </div>
              <div className="pr-2 sm:pr-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-njs-navy">150+</h3>
                <p className="text-xs text-gray-500 max-w-[100px] leading-tight mt-1">Countries in our network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
