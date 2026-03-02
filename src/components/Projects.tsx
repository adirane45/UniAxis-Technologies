import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import SectionShell from '@/components/ui/SectionShell';
import { projectItems } from '@/content/siteData';

export default function Projects() {
  return (
    <SectionShell id="projects" className="border-t border-white/10">
      <SectionHeading
        eyebrow="Selected Work"
        title="Shipped products with measurable outcomes"
        description="From SaaS systems to automation platforms, we build solutions that stay maintainable and performant in production."
      />

      <div className="space-y-4">
        {projectItems.map((project) => (
          <article
            key={project.name}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-200">{project.type}</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{project.name}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">{project.summary}</p>
              </div>
              <ArrowUpRight className="text-slate-500" size={20} />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <ul className="space-y-3">
                {project.metrics.map((metric) => (
                  <li key={metric} className="flex items-center gap-3 text-sm text-slate-200">
                    <span className="h-2 w-2 rounded-full bg-cyan-200" />
                    {metric}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/15 bg-slate-900/70 px-3 py-1.5 text-xs text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
          ))}
      </div>
    </SectionShell>
  );
}
