import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, GraduationCap, Heart, Users } from 'lucide-react';

export default function Careers() {
  const benefits = [
    { icon: <Heart className="w-6 h-6" />, title: 'Health & Wellbeing', desc: 'Comprehensive medical coverage for you and your family.' },
    { icon: <GraduationCap className="w-6 h-6" />, title: 'Continuous Growth', desc: 'Opportunities for professional development and training.' },
    { icon: <Users className="w-6 h-6" />, title: 'Diverse Culture', desc: 'Work with a global team in an inclusive environment.' },
    { icon: <Briefcase className="w-6 h-6" />, title: 'Career Progression', desc: 'Clear paths for advancement within the company.' },
  ];

  return (
    <div className="min-h-screen bg-[#f3f2ee]">
      {/* Banner */}
      <div className="bg-njs-navy text-white pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/hero-freight.png')] bg-cover bg-center mix-blend-multiply" />
        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight">Join Our Team</h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Build your career with a modern logistics company that values dedication and teamwork.
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-24">
        
        {/* Culture & Benefits */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-njs-navy mb-4">Why Work With Us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At NJS Logistics, our people are our greatest asset. We provide an environment where you can learn, grow, and make a real impact on global supply chains.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-black/5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-njs-navy/5 rounded-2xl flex items-center justify-center text-njs-orange mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-njs-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-black/5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-njs-navy mb-4">Open Positions</h2>
              <p className="text-gray-600 text-lg">Find the perfect role for your skills and experience.</p>
            </div>
          </div>

          {/* Empty State / General Application */}
          <div className="bg-[#f3f2ee] rounded-3xl p-8 md:p-12 text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <Briefcase className="w-8 h-8 text-njs-orange" />
            </div>
            <h3 className="text-2xl font-bold text-njs-navy mb-4">Don't see a perfect fit?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
              We are always on the lookout for talented individuals to join our growing team. Send us your resume, and we'll contact you if a suitable position opens up.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-njs-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-colors shadow-lg"
            >
              Contact Us to Apply
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}
