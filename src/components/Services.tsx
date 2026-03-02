import ScrollReveal from '@/components/ScrollReveal';
import {
  Server, Shield, Wifi, Camera, Monitor,
  Globe, Code, Cloud, Gauge
} from 'lucide-react';

const infraServices = [
  { icon: Server, title: 'FTP Server Installation & Configuration', description: 'Complete FTP server setup with secure user management, access controls, and performance optimization for reliable file transfers.' },
  { icon: Shield, title: 'RDP Setup & Secure Access', description: 'Remote Desktop Protocol configuration with hardened security, multi-factor authentication, and encrypted connections.' },
  { icon: Wifi, title: 'Firewall & Network Security', description: 'Comprehensive firewall deployment and network hardening to protect your infrastructure from modern cyber threats.' },
  { icon: Camera, title: 'CCTV Installation & Configuration', description: 'Professional IP camera installation with remote monitoring, motion detection, and cloud storage integration.' },
  { icon: Monitor, title: 'PC Maintenance & Troubleshooting', description: 'Preventive maintenance, hardware diagnostics, software optimization, and fast resolution of technical issues.' },
];

const webServices = [
  { icon: Globe, title: 'Website Designing', description: 'Beautiful, modern UI/UX designs that captivate visitors and reflect your brand identity across all devices.' },
  { icon: Code, title: 'Website Development', description: 'Full-stack web development using modern frameworks including React, Next.js, and Node.js for scalable applications.' },
  { icon: Cloud, title: 'Deployment & Hosting Setup', description: 'Cloud deployment, CI/CD pipelines, domain configuration, and managed hosting on AWS, GCP, or VPS servers.' },
  { icon: Gauge, title: 'Performance Optimization', description: 'Website speed optimization, Core Web Vitals improvements, CDN setup, and database query optimization.' },
];

interface ServiceCardProps {
  icon: React.ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
  delay?: number;
}

function ServiceCard({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div className="group p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 h-full">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-all duration-300 group-hover:scale-110">
          <Icon className="text-cyan-400" size={22} />
        </div>
        <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-300 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </ScrollReveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Technology Services
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From securing your network infrastructure to building your digital presence — we deliver end-to-end technology solutions.
            </p>
          </div>
        </ScrollReveal>

        {/* IT Infrastructure Services */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-8 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500" />
              <h3 className="text-xl font-bold text-white">IT Infrastructure Services</h3>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/30 to-transparent" />
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {infraServices.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 80} />
          ))}
        </div>

        {/* Web Solutions */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-2 h-8 rounded-full bg-gradient-to-b from-blue-400 to-cyan-500" />
              <h3 className="text-xl font-bold text-white">Web Solutions</h3>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent" />
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {webServices.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
