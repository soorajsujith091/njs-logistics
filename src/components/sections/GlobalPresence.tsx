export default function GlobalPresence() {
  const locations = ['UAE', 'KSA', 'China', 'Thailand', 'Japan', 'Malaysia', 'Mali', 'Ethiopia', 'Tanzania'];
  
  return (
    <section className="py-24 px-6 bg-njs-navy text-white relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Global Operations</h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg">
            Headquartered in Dubai, UAE, NJS Logistics operates a robust network designed to move your business forward across the globe.
          </p>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl mb-10">
            <h3 className="text-njs-orange font-semibold mb-2">Primary Warehouse</h3>
            <p className="text-sm text-gray-200">South Zone, Jebel Ali Freezone,<br/>Dubai, United Arab Emirates</p>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4">
          {locations.map((loc) => (
            <div key={loc} className="px-6 py-3 rounded-full border border-white/30 bg-white/5 backdrop-blur-sm text-sm font-medium hover:bg-white hover:text-njs-navy transition-colors cursor-default">
              {loc}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
