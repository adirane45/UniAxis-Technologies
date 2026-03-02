import ScrollReveal from '@/components/ScrollReveal';
import { Shield, Zap, Users, TrendingUp } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Security First', description: 'Enterprise-grade security baked into every solution we deliver.' },
  { icon: Zap, title: 'Agile Delivery', description: 'Fast, iterative development with regular milestones and transparent communication.' },
  { icon: Users, title: 'Expert Team', description: 'Certified professionals with deep expertise across all technology domains.' },
  { icon: TrendingUp, title: 'Scalable Solutions', description: 'Future-proof architectures designed to grow with your business.' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[#1d4ed8] text-xs font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
              UniAxis Technologies
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-14">
          {/* Left: Text content */}
          <ScrollReveal>
            <div className="space-y-5">
              <p className="text-gray-600 leading-relaxed">
                UniAxis Technologies is a Jalgaon-based technology startup delivering secure IT infrastructure solutions, SaaS platforms, and digital transformation services.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Our goal is to provide reliable, scalable, and secure technology solutions for businesses and institutions.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Founded in Jalgaon, Maharashtra, we specialize in IT infrastructure, cybersecurity, custom SaaS development, and web solutions — covering the full technology spectrum.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {['IT Infrastructure', 'Cybersecurity', 'SaaS Development', 'Web Solutions'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[#1d4ed8] text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Location info */}
          <ScrollReveal delay={100}>
            <div className="p-6 rounded border border-gray-200 bg-white">
              <h3 className="text-[#0a1628] font-semibold mb-4 text-sm">Company Details</h3>
              <dl className="space-y-3">
                <div className="flex gap-3">
                  <dt className="text-gray-400 text-sm w-20 flex-shrink-0">Location</dt>
                  <dd className="text-gray-600 text-sm">Jalgaon, Maharashtra, India</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-gray-400 text-sm w-20 flex-shrink-0">Email</dt>
                  <dd className="text-sm">
                    <a href="mailto:support@uniaxis.tech" className="text-[#1d4ed8] hover:underline">support@uniaxis.tech</a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-gray-400 text-sm w-20 flex-shrink-0">Website</dt>
                  <dd className="text-sm">
                    <a href="https://www.uniaxis.tech" target="_blank" rel="noopener noreferrer" className="text-[#1d4ed8] hover:underline">www.uniaxis.tech</a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="text-gray-400 text-sm w-20 flex-shrink-0">Industry</dt>
                  <dd className="text-gray-600 text-sm">Information Technology</dd>
                </div>
              </dl>
            </div>
          </ScrollReveal>
        </div>

        {/* Why Choose Us */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 80}>
              <div className="p-6 rounded border border-gray-100 bg-white hover:border-blue-200 hover:shadow-sm transition-all duration-200">
                <div className="w-10 h-10 rounded bg-blue-50 flex items-center justify-center mb-4">
                  <feature.icon className="text-[#1d4ed8]" size={18} />
                </div>
                <h4 className="text-[#0a1628] font-semibold mb-2 text-sm">{feature.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
