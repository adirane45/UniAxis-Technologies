import ScrollReveal from '@/components/ScrollReveal';
import {
  Server, Shield, Wifi, Camera, Monitor,
  Globe, Code, Cloud, Gauge
} from 'lucide-react';

const infraServices = [
  { icon: Server, title: 'FTP Installation & Configuration', description: 'Complete FTP server setup with secure user management, access controls, and performance optimization for reliable file transfers.' },
  { icon: Shield, title: 'Secure RDP Setup', description: 'Remote Desktop Protocol configuration with hardened security, multi-factor authentication, and encrypted connections.' },
  { icon: Wifi, title: 'Firewall Setup & Network Hardening', description: 'Comprehensive firewall deployment and network hardening to protect your infrastructure from modern cyber threats.' },
  { icon: Camera, title: 'CCTV Installation', description: 'Professional IP camera installation with remote monitoring, motion detection, and cloud storage integration.' },
  { icon: Monitor, title: 'PC Maintenance', description: 'Preventive maintenance, hardware diagnostics, software optimization, and fast resolution of technical issues.' },
];

const webServices = [
  { icon: Globe, title: 'Website Design', description: 'Beautiful, modern UI/UX designs that captivate visitors and reflect your brand identity across all devices.' },
  { icon: Code, title: 'Website Development', description: 'Full-stack web development using modern frameworks including React, Next.js, and Node.js for scalable applications.' },
  { icon: Cloud, title: 'Deployment & Hosting', description: 'Cloud deployment, CI/CD pipelines, domain configuration, and managed hosting on AWS, GCP, or VPS servers.' },
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
      <div className="group p-6 rounded border border-gray-100 bg-white hover:border-blue-200 hover:shadow-md transition-all duration-200 h-full">
        <div className="w-11 h-11 rounded bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-200">
          <Icon className="text-[#1d4ed8]" size={20} />
        </div>
        <h3 className="text-[#0a1628] font-semibold mb-2 text-sm">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
      </div>
    </ScrollReveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[#1d4ed8] text-xs font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
              Comprehensive Technology Services
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From securing your network infrastructure to building your digital presence — we deliver end-to-end technology solutions.
            </p>
          </div>
        </ScrollReveal>

        {/* IT Infrastructure Services */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-lg font-bold text-[#0a1628] whitespace-nowrap">IT Infrastructure</h3>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {infraServices.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 60} />
          ))}
        </div>

        {/* Web Solutions */}
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-6">
            <h3 className="text-lg font-bold text-[#0a1628] whitespace-nowrap">Web Solutions</h3>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {webServices.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 60} />
          ))}
        </div>
      </div>
    </section>
  );
}
