import ScrollReveal from '@/components/ScrollReveal';
import { ExternalLink, Users, Bell, Building, Bot, Download, Repeat, Zap } from 'lucide-react';

const projects = [
  {
    id: 1,
    badge: 'SaaS Platform',
    badgeColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
    title: 'Campus Ping',
    subtitle: 'Smart University Noticeboard System',
    description: 'A cutting-edge multi-tenant SaaS platform revolutionizing university communication. Campus Ping provides institutions with a centralized digital noticeboard system with role-based access, real-time updates, and comprehensive department management.',
    features: [
      { icon: Users, text: 'Role-based dashboards (Admin, Faculty, Students)' },
      { icon: Bell, text: 'Real-time notice publishing & push notifications' },
      { icon: Building, text: 'Multi-department management system' },
      { icon: Zap, text: 'Multi-tenant SaaS architecture' },
    ],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    gradient: 'from-cyan-500/20 to-blue-600/20',
    borderGlow: 'hover:border-cyan-500/50 hover:shadow-cyan-500/10',
    accentColor: 'text-cyan-400',
  },
  {
    id: 2,
    badge: 'Telegram Bot',
    badgeColor: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
    title: 'Mirror Leech',
    subtitle: 'Advanced Telegram Bot for High-Speed Transfers',
    description: 'A powerful Telegram bot engineered for seamless cloud-to-cloud file transfers and high-speed downloads. Mirror Leech automates complex file transfer workflows with support for multiple cloud storage providers and torrent protocols.',
    features: [
      { icon: Repeat, text: 'Cloud-to-cloud transfers (GDrive, S3, Mega)' },
      { icon: Download, text: 'High-speed downloads & file mirroring' },
      { icon: Bot, text: 'Full automation with Telegram commands' },
      { icon: Zap, text: 'Multi-thread parallel processing' },
    ],
    tech: ['Python', 'Telegram API', 'aria2c', 'Google Drive API', 'Docker'],
    gradient: 'from-blue-500/20 to-purple-600/20',
    borderGlow: 'hover:border-blue-500/50 hover:shadow-blue-500/10',
    accentColor: 'text-blue-400',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#0d2137]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
              Major Projects
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Products We&apos;ve{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Built & Deployed
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our flagship projects that demonstrate our expertise in building scalable, production-ready software solutions.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 150}>
              <div className={`group relative p-8 rounded-2xl border border-white/10 bg-gradient-to-br ${project.gradient} backdrop-blur-sm hover:border-opacity-100 ${project.borderGlow} transition-all duration-300 hover:shadow-xl h-full flex flex-col`}>
                {/* Top badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-medium ${project.badgeColor}`}>
                    {project.badge}
                  </span>
                  <ExternalLink size={18} className="text-gray-500 group-hover:text-gray-300 transition-colors" />
                </div>

                {/* Project number */}
                <div className={`text-6xl font-black ${project.accentColor} opacity-20 leading-none mb-2`}>
                  0{project.id}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                <p className={`${project.accentColor} font-medium text-sm mb-4`}>{project.subtitle}</p>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6 flex-1">
                  {project.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      <feature.icon size={16} className={`${project.accentColor} mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-300 text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400 text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
