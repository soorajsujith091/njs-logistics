import { ShieldCheck, Truck, Headphones, Globe2, Zap, MapPin } from 'lucide-react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const reasons = [
  { icon: Headphones, title: 'Customer-Focused Service', desc: 'Clear communication and dedicated support.' },
  { icon: Globe2, title: 'End-to-End Coordination', desc: 'We handle every detail from start to finish.' },
  { icon: Truck, title: 'Multiple Freight Options', desc: 'Air, Sea, and Land solutions.' },
  { icon: ShieldCheck, title: 'Clear Communication', desc: 'Complete transparency on your shipments.' },
  { icon: Zap, title: 'Flexible Solutions', desc: 'Adaptable logistics for your unique needs.' },
  { icon: MapPin, title: 'Dubai-Based Operations', desc: 'Strategic location for global movement.' }
];

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.why-header > *', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });

    gsap.from('.why-card', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.why-grid',
        start: 'top 85%',
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 px-6 bg-[#f3f2ee]">
      <div className="max-w-[1440px] mx-auto">
        <div className="why-header text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-njs-navy mb-4">Why Choose NJS Logistics?</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Dependable service at every stage of the supply chain.</p>
        </div>
        
        <div className="why-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div key={idx} className="why-card bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-black/5 group">
                <div className="w-14 h-14 bg-blue-50 text-njs-navy rounded-2xl flex items-center justify-center mb-6 group-hover:bg-njs-orange group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-njs-navy mb-3">{reason.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
