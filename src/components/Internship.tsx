import ScrollReveal from '@/components/ScrollReveal';
import { Shield, Server, Code, Layers, Bot, Award, Briefcase, Users, BookOpen } from 'lucide-react';

const areas = [
  { icon: Shield, title: 'Cybersecurity', description: 'Learn ethical hacking, penetration testing, and network defense strategies.' },
  { icon: Server, title: 'Server Management', description: 'Hands-on experience with Linux servers, FTP, RDP, and cloud infrastructure.' },
  { icon: Code, title: 'Web Development', description: 'Build real-world web applications using modern frameworks and best practices.' },
  { icon: Layers, title: 'SaaS Development', description: 'Design and develop multi-tenant SaaS platforms with scalable architectures.' },
  { icon: Bot, title: 'Automation & Bots', description: 'Create Telegram bots, scripts, and automation workflows for real use cases.' },
];

const benefits = [
  { icon: Briefcase, title: 'Live Project Experience', description: 'Work on actual production projects that are used by real clients and users.' },
  { icon: Users, title: 'Industry Exposure', description: 'Interact with professionals and understand real-world tech workflows.' },
  { icon: Award, title: 'Certificate of Completion', description: 'Receive a verified certificate upon successful program completion.' },
  { icon: BookOpen, title: 'Expert Mentorship', description: 'Get personalized guidance from experienced engineers throughout the program.' },
];

export default function Internship() {
  return (
    <section id="internship" className="py-20 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
              Internship Program
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Learn. Build. Deploy.
              </span>{' '}
              Grow.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Join UniAxis Technologies&apos; internship program and gain real-world experience working on live projects with industry professionals.
            </p>
          </div>
        </ScrollReveal>

        {/* Internship Areas */}
        <ScrollReveal>
          <h3 className="text-xl font-bold text-white mb-6 text-center">Internship Areas</h3>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-16">
          {areas.map((area, index) => (
            <ScrollReveal key={area.title} delay={index * 80}>
              <div className="group p-5 rounded-xl border border-white/10 bg-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300 text-center h-full">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-3 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all group-hover:scale-110">
                  <area.icon className="text-cyan-400" size={22} />
                </div>
                <h4 className="text-white font-semibold text-sm mb-2">{area.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{area.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Benefits */}
        <div className="p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-sm">
          <ScrollReveal>
            <h3 className="text-xl font-bold text-white mb-8 text-center">Program Benefits</h3>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 100}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="text-cyan-400" size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">{benefit.title}</h4>
                    <p className="text-gray-400 text-xs leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal delay={400}>
            <div className="mt-8 text-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:-translate-y-0.5"
              >
                Apply for Internship
              </a>
              <p className="text-gray-500 text-sm mt-3">Open for students and fresh graduates</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
