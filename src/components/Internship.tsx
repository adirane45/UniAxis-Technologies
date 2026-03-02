import ScrollReveal from '@/components/ScrollReveal';
import { Shield, Server, Code, Layers, CheckCircle } from 'lucide-react';

const areas = [
  { icon: Shield, title: 'Cybersecurity' },
  { icon: Server, title: 'Server Management' },
  { icon: Code, title: 'Web Development' },
  { icon: Layers, title: 'SaaS Development' },
];

const highlights = [
  'Work on live projects',
  'Expert mentorship',
  'Practical exposure',
  'Certificate of completion',
];

export default function Internship() {
  return (
    <section id="internship" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <ScrollReveal>
            <div>
              <span className="inline-block px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[#1d4ed8] text-xs font-medium mb-5">
                Internship Program
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
                Build Real Skills on Real Projects
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Join UniAxis Technologies&apos; internship program and gain hands-on experience working on live projects with industry professionals.
              </p>

              {/* Highlights */}
              <ul className="space-y-3 mb-8">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle size={17} className="text-[#1d4ed8] flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0a1628] text-white rounded font-semibold hover:bg-[#1d4ed8] transition-colors duration-200 text-sm"
              >
                Apply for Internship
              </a>
              <p className="text-gray-400 text-xs mt-3">Open for students and fresh graduates</p>
            </div>
          </ScrollReveal>

          {/* Right: Internship Areas */}
          <ScrollReveal delay={100}>
            <div>
              <h3 className="text-lg font-bold text-[#0a1628] mb-6">We offer internships in:</h3>
              <div className="grid grid-cols-2 gap-4">
                {areas.map((area, index) => (
                  <div
                    key={area.title}
                    className="p-5 rounded border border-gray-100 bg-[#f8fafc] hover:border-blue-200 hover:bg-blue-50 transition-all duration-200"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <div className="w-10 h-10 rounded bg-blue-100 flex items-center justify-center mb-3">
                      <area.icon className="text-[#1d4ed8]" size={18} />
                    </div>
                    <h4 className="text-[#0a1628] font-semibold text-sm">{area.title}</h4>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
