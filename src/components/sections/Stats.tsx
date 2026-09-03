export default function Stats() {
  const stats = [
    { label: 'Years Experience', value: '15+' },
    { label: 'Global Destinations', value: '50+' },
    { label: 'Shipments Delivered', value: '10k+' },
    { label: 'Client Satisfaction', value: '99%' },
  ];

  return (
    <div className="bg-njs-orange text-white py-16 px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20">
        {stats.map((stat, index) => (
          <div key={index} className="text-center px-4">
            <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
            <div className="text-white/80 font-medium text-sm uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
