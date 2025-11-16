export default function StatsSection() {
  const stats = [
    {
      label: 'Reliability',
      value: '99.9%',
      description: 'Ensuring reliability and consistent performance around the clock.'
    },
    {
      label: 'Components',
      value: '500+',
      description: 'Multiple Components processed with precision and speed.'
    },
    {
      label: 'Response Time',
      value: '0.5m',
      description: 'Lightning-fast results delivered in half a minute or less.'
    },
    {
      label: 'Faster',
      value: '10x',
      description: 'Accelerated performance that outpaces traditional solutions.'
    }
  ];

  return (
    <section className="bg-[#0A0A0A] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Save Your Time With SlideMind
          </h2>
          <p className="text-xl text-[#BBBBBB]">
            Say goodbye to bugs, hello to instant builder
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3">
              <p className="text-sm text-neutral-400 uppercase tracking-wider">
                {stat.label}
              </p>
              <h3 className="text-6xl md:text-7xl font-bold text-white">
                {stat.value}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
