'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import SectionShell from '@/components/ui/SectionShell';
import { contactItems } from '@/content/siteData';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  return (
    <SectionShell id="contact" className="border-t border-white/10">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s scope your next build"
        description="Share your requirement and we’ll respond with a practical roadmap, effort estimate, and next steps."
      />

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <aside className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <ul className="space-y-4">
            {contactItems.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                <div className="rounded-lg border border-cyan-300/30 bg-cyan-300/10 p-2 text-cyan-200">
                  <item.icon size={16} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="mt-1 block text-sm text-slate-100 hover:text-cyan-100">
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-slate-200">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </aside>

        {submitted ? (
          <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-8 text-center">
            <CheckCircle2 className="mx-auto text-emerald-300" size={40} />
            <h3 className="mt-4 text-xl font-semibold text-white">Message sent</h3>
            <p className="mt-2 text-sm text-emerald-50/90">Thanks for reaching out. We’ll reply shortly with next steps.</p>
            <button
              onClick={() => {
                setSubmitted(false);
                setForm({ name: '', email: '', phone: '', message: '' });
              }}
              className="mt-6 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-slate-400">Name *</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="John Doe"
                  className={`w-full rounded-md border bg-slate-900/80 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none ${errors.name ? 'border-red-400' : 'border-white/15 focus:border-cyan-300/70'}`}
                />
                {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
              </div>

              <div>
                <label className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-slate-400">Email *</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="john@example.com"
                  className={`w-full rounded-md border bg-slate-900/80 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none ${errors.email ? 'border-red-400' : 'border-white/15 focus:border-cyan-300/70'}`}
                />
                {errors.email && <p className="mt-1 text-xs text-red-300">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-slate-400">Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full rounded-md border border-white/15 bg-slate-900/80 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300/70 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-slate-400">Message *</label>
              <textarea
                value={form.message}
                onChange={(e) => handleChange('message', e.target.value)}
                placeholder="Tell us what you want to build..."
                rows={5}
                className={`w-full resize-none rounded-md border bg-slate-900/80 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none ${errors.message ? 'border-red-400' : 'border-white/15 focus:border-cyan-300/70'}`}
              />
              {errors.message && <p className="mt-1 text-xs text-red-300">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-200 disabled:opacity-70"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-slate-700/40 border-t-slate-900" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </SectionShell>
  );
}
