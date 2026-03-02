import SectionHeading from '@/components/ui/SectionHeading';
import SectionShell from '@/components/ui/SectionShell';
import { companyPillars, valueItems } from '@/content/siteData';

export default function About() {
  return (
    <SectionShell id="about" className="border-t border-white/10">
      <SectionHeading
        eyebrow="Company"
        title="A focused technology studio with enterprise discipline"
        description="We partner with growing organizations to strengthen digital operations through robust infrastructure, secure engineering, and product strategy."
      />

      <div className="mb-8 flex flex-wrap gap-2">
        {companyPillars.map((pillar) => (
          <div
            key={pillar.label}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs text-slate-200"
          >
            <pillar.icon size={14} className="text-cyan-200" />
            {pillar.label}
          </div>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {valueItems.map((item) => (
          <article key={item.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
            <div className="mb-4 inline-flex rounded-lg border border-cyan-300/30 bg-cyan-300/10 p-2 text-cyan-200">
              <item.icon size={17} />
            </div>
            <h3 className="text-base font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-slate-300">{item.summary}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
