'use client';

import { ArrowRight, MoveDownRight } from 'lucide-react';
import { heroStats } from '@/content/siteData';

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[380px] w-[780px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute -left-16 bottom-12 h-56 w-56 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-cyan-200" />
              Built in Jalgaon, deployed globally
            </p>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Modern tech systems for ambitious teams.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              UniAxis Technologies engineers resilient infrastructure, secure digital products, and automation layers that move businesses faster.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <button
                onClick={() => handleScroll('#services')}
                className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200"
              >
                Explore Capabilities
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => handleScroll('#contact')}
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Talk to Our Team
                <MoveDownRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/10 bg-slate-950/70 px-4 py-4">
                <p className="text-2xl font-semibold text-cyan-200">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
