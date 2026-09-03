import Hero from '../components/hero/Hero';
import TrustStrip from '../components/sections/TrustStrip';
import Services from '../components/sections/Services';
import LogisticsProcess from '../components/sections/LogisticsProcess';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import GlobalPresence from '../components/sections/GlobalPresence';
import Stats from '../components/sections/Stats';
import Industries from '../components/sections/Industries';

export default function Home() {
  return (
    <div className="bg-[#f3f2ee] min-h-screen">
      <Hero />
      <TrustStrip />
      <div className="max-w-[1440px] mx-auto px-6 py-20 bg-white rounded-t-[3rem] -mt-10 relative z-20">
        <Services />
      </div>
      <Stats />
      <LogisticsProcess />
      <Industries />
      <WhyChooseUs />
      <GlobalPresence />
    </div>
  );
}
