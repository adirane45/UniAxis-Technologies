import ScrollReveal from '@/components/ScrollReveal';
import { ExternalLink, Users, Bell, Building, Bot, Download, Repeat, Zap } from 'lucide-react';

const projects = [
  {
    id: 1,
    badge: 'SaaS Platform',
    title: 'Campus Ping',
    subtitle: 'Smart University Noticeboard SaaS System',
    description: 'A scalable SaaS platform designed to streamline university communication and digital notice management.',
    features: [
      { icon: Users, text: 'Role-based dashboards (Admin, Faculty, Students)' },
      { icon: Bell, text: 'Real-time notice publishing & push notifications' },
      { icon: Building, text: 'Multi-department management system' },
      { icon: Zap, text: 'Multi-tenant SaaS architecture' },
    ],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    id: 2,
    badge: 'Telegram Bot',
    title: 'Mirror Leech Telegram Bot',
    subtitle: 'Advanced File Transfer & Mirroring Bot',
    description: 'Automated file transfer and mirroring bot designed for fast, efficient file management.',
    features: [
      { icon: Repeat, text: 'Cloud-to-cloud transfers (GDrive, S3, Mega)' },
      { icon: Download, text: 'High-speed downloads & file mirroring' },
      { icon: Bot, text: 'Full automation with Telegram commands' },
      { icon: Zap, text: 'Multi-thread parallel processing' },
    ],
    tech: ['Python', 'Telegram API', 'aria2c', 'Google Drive API', 'Docker'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[#1d4ed8] text-xs font-medium mb-4">
              Major Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
              Products We&apos;ve Built &amp; Deployed
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Explore our flagship projects that demonstrate our expertise in building scalable, production-ready software solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 100}>
              <div className="group p-8 rounded border border-gray-200 bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-200 h-full flex flex-col">
                {/* Top badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[#1d4ed8] text-xs font-medium">
                    {project.badge}
                  </span>
                  <ExternalLink size={16} className="text-gray-400 group-hover:text-[#1d4ed8] transition-colors" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#0a1628] mb-1">{project.title}</h3>
                <p className="text-[#1d4ed8] font-medium text-sm mb-3">{project.subtitle}</p>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{project.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {project.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      <feature.icon size={15} className="text-[#1d4ed8] mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded border border-gray-200 bg-gray-50 text-gray-500 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Learn More */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="text-[#1d4ed8] text-sm font-medium hover:text-[#0a1628] transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
