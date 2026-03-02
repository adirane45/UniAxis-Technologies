import { CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import SectionShell from '@/components/ui/SectionShell';
import { internshipHighlights, internshipTracks } from '@/content/siteData';

export default function Internship() {
  return (
    <SectionShell id="internship" className="border-t border-white/10">
      <SectionHeading
        eyebrow="Talent Pipeline"
        title="Internship program with production exposure"
        description="A structured track for students and early professionals to contribute to live systems while learning industry workflows."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <ul className="space-y-4">
            {internshipHighlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                <CheckCircle2 size={18} className="mt-0.5 text-cyan-200" />
                {item}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-md border border-cyan-300/40 bg-cyan-300/10 px-5 py-2.5 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-300/20"
          >
            Apply for Internship
          </a>
        </div>

        <div className="grid gap-3">
          {internshipTracks.map((track) => (
            <article key={track.title} className="rounded-xl border border-white/10 bg-slate-900/70 p-5">
              <h3 className="text-base font-semibold text-white">{track.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-md border border-white/15 px-2.5 py-1 text-xs text-slate-300">
                  {track.duration}
                </span>
                <span className="rounded-md border border-white/15 px-2.5 py-1 text-xs text-slate-300">
                  {track.mode}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
