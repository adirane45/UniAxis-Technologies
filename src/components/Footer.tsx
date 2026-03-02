import { Linkedin, Mail, MapPin, Github } from 'lucide-react';
import { navItems } from '@/content/siteData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/70 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-2.5">
              <div className="grid h-8 w-8 place-items-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-xs font-bold text-cyan-200">
                UA
              </div>
              <span className="text-sm font-semibold tracking-[0.15em] text-slate-100">
                UN IAXIS TECHNOLOGIES
              </span>
            </div>
            <p className="max-w-sm text-sm leading-7 text-slate-300">
              Engineering secure infrastructure and digital products for businesses that need reliability, speed, and scale.
            </p>
            <div className="mt-6 flex gap-2">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-md border border-white/10 bg-white/5 p-2.5 text-slate-300 transition-colors hover:border-cyan-300/40 hover:text-cyan-100">
                <Linkedin size={15} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-md border border-white/10 bg-white/5 p-2.5 text-slate-300 transition-colors hover:border-cyan-300/40 hover:text-cyan-100">
                <Github size={15} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.18em] text-slate-400">Navigation</h3>
            <ul className="space-y-2.5">
              {navItems.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-slate-300 transition-colors hover:text-cyan-100">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs uppercase tracking-[0.18em] text-slate-400">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 flex-shrink-0 text-cyan-200" />
                <span className="text-sm text-slate-300">Jalgaon, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="flex-shrink-0 text-cyan-200" />
                <a href="mailto:support@uniaxis.tech" className="text-sm text-slate-300 transition-colors hover:text-cyan-100">
                  support@uniaxis.tech
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} UniAxis Technologies. All rights reserved.
          </p>
          <p>
            Architecture-first digital engineering studio.
          </p>
        </div>
      </div>
    </footer>
  );
}
