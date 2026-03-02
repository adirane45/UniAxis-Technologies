import SectionHeading from '@/components/ui/SectionHeading';
import SectionShell from '@/components/ui/SectionShell';
import { serviceItems } from '@/content/siteData';

export default function Services() {
  return (
    <SectionShell id="services" className="border-t border-white/10">
      <SectionHeading
        eyebrow="Capabilities"
        title="Architecture-led services for secure scale"
        description="Each engagement combines engineering depth with operational accountability so your systems stay dependable under growth."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {serviceItems.map((service) => (
          <article
            key={service.title}
            className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-cyan-300/40 hover:bg-white/[0.07]"
          >
            <div className="mb-4 inline-flex rounded-lg border border-cyan-300/30 bg-cyan-300/10 p-2 text-cyan-200">
              <service.icon size={18} />
            </div>
            <p className="mb-2 text-xs uppercase tracking-[0.16em] text-slate-400">{service.category}</p>
            <h3 className="text-lg font-semibold text-white">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-300">{service.summary}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/10 to-indigo-500/15 p-6">
        <p className="text-sm leading-7 text-cyan-100">
          Engagement model: Discovery → Architecture Blueprint → Delivery Sprints → Reliability Support.
        </p>
      </div>
    </SectionShell>
  );
}
