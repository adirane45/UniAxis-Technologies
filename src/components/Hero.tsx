'use client';

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Subtle geometric tech pattern */}
      <div className="absolute inset-0 bg-tech-pattern" />

      {/* Very subtle blue tint on right side */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-blue-50/40 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
        {/* Location badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-[#1d4ed8] text-sm font-medium mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1d4ed8]" />
          Jalgaon, Maharashtra, India
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0a1628] leading-tight mb-6">
          Secure IT Infrastructure &amp;{' '}
          <span className="text-[#1d4ed8]">
            Smart Digital Solutions
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-600 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Professional IT services, cybersecurity solutions, SaaS products, and real-world internship programs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => handleScroll('#services')}
            className="px-8 py-3.5 bg-[#0a1628] text-white rounded font-semibold hover:bg-[#1d4ed8] transition-colors duration-200"
          >
            Our Services
          </button>
          <button
            onClick={() => handleScroll('#contact')}
            className="px-8 py-3.5 border-2 border-[#0a1628] text-[#0a1628] rounded font-semibold hover:bg-[#0a1628] hover:text-white transition-colors duration-200"
          >
            Contact Us
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: '50+', label: 'Projects Delivered' },
            { value: '30+', label: 'Happy Clients' },
            { value: '10+', label: 'Team Members' },
            { value: '24/7', label: 'Support' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-5 rounded border border-gray-100 bg-white shadow-sm">
              <div className="text-2xl font-bold text-[#1d4ed8]">{stat.value}</div>
              <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-gray-400 text-xs">Scroll down</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-gray-300 to-transparent" />
      </div>
    </section>
  );
}
