import ScrollReveal from '@/components/ScrollReveal';
import { Target, Eye, Zap, Shield, Users, TrendingUp } from 'lucide-react';

const features = [
  { icon: Shield, title: 'Security First', description: 'Enterprise-grade security baked into every solution we deliver.' },
  { icon: Zap, title: 'Agile Delivery', description: 'Fast, iterative development with regular milestones and transparent communication.' },
  { icon: Users, title: 'Expert Team', description: 'Certified professionals with deep expertise across all technology domains.' },
  { icon: TrendingUp, title: 'Scalable Solutions', description: 'Future-proof architectures designed to grow with your business.' },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#0d2137]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Who We Are at{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                UniAxis Technologies
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A Jalgaon-based technology startup on a mission to democratize enterprise-grade IT solutions for businesses of all sizes across India.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Text content */}
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Founded in Jalgaon, Maharashtra, UniAxis Technologies is a forward-thinking IT company delivering cutting-edge technology solutions. We specialize in IT infrastructure, cybersecurity, custom SaaS development, and web solutions.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our team of passionate engineers and developers work closely with clients to understand their unique challenges and craft tailored digital solutions. From securing networks to building enterprise SaaS platforms, we cover the full technology spectrum.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {['IT Infrastructure', 'Cybersecurity', 'SaaS Development', 'Web Solutions', 'Automation'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Vision & Mission cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ScrollReveal delay={100}>
              <div className="p-6 rounded-xl border border-cyan-500/20 bg-white/5 backdrop-blur-sm hover:border-cyan-500/40 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                  <Eye className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-white font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  To be the most trusted technology partner for businesses, empowering them with secure and innovative digital solutions.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="p-6 rounded-xl border border-cyan-500/20 bg-white/5 backdrop-blur-sm hover:border-cyan-500/40 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                  <Target className="text-cyan-400" size={24} />
                </div>
                <h3 className="text-white font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Deliver enterprise-grade IT solutions that are accessible, reliable, and affordable for businesses across Maharashtra and India.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Why Choose Us */}
        <ScrollReveal>
          <h3 className="text-2xl font-bold text-white text-center mb-8">Why Choose Us?</h3>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 100}>
              <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 group text-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all">
                  <feature.icon className="text-cyan-400" size={22} />
                </div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
