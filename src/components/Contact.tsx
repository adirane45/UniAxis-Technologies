'use client';

import { useState, FormEvent } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Mail, MapPin, Globe, Send, CheckCircle } from 'lucide-react';

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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full border border-blue-200 bg-blue-50 text-[#1d4ed8] text-xs font-medium mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-4">
              Contact Us
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Ready to transform your business with technology? Get in touch for a free consultation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <ScrollReveal>
              <div className="p-6 rounded border border-gray-200 bg-white">
                <h3 className="text-[#0a1628] font-semibold mb-5 text-sm">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#1d4ed8]" size={16} />
                    </div>
                    <div>
                      <p className="text-[#0a1628] text-sm font-medium">📧 Email</p>
                      <a href="mailto:support@uniaxis.tech" className="text-gray-500 hover:text-[#1d4ed8] text-sm transition-colors">
                        support@uniaxis.tech
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#1d4ed8]" size={16} />
                    </div>
                    <div>
                      <p className="text-[#0a1628] text-sm font-medium">📍 Location</p>
                      <p className="text-gray-500 text-sm">Jalgaon, Maharashtra</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <Globe className="text-[#1d4ed8]" size={16} />
                    </div>
                    <div>
                      <p className="text-[#0a1628] text-sm font-medium">🌐 Website</p>
                      <a href="https://www.uniaxis.tech" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#1d4ed8] text-sm transition-colors">
                        www.uniaxis.tech
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal delay={100}>
              <div className="rounded overflow-hidden border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59778.20296946647!2d75.51388!3d21.00935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90f3f7a7d4e2b%3A0x8a69b09a06b7a3a5!2sJalgaon%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="UniAxis Technologies Location - Jalgaon, Maharashtra"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ScrollReveal delay={150}>
              {submitted ? (
                <div className="p-8 rounded border border-green-200 bg-green-50 text-center">
                  <CheckCircle className="text-green-600 mx-auto mb-4" size={40} />
                  <h3 className="text-[#0a1628] text-xl font-bold mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-500 mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', message: '' }); }}
                    className="px-5 py-2 border border-[#0a1628] text-[#0a1628] rounded text-sm hover:bg-[#0a1628] hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 rounded border border-gray-200 bg-white space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1.5">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="John Doe"
                        className={`w-full px-4 py-2.5 rounded border ${errors.name ? 'border-red-400' : 'border-gray-300'} text-[#0a1628] placeholder-gray-400 text-sm focus:outline-none focus:border-[#1d4ed8] transition-colors`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="john@example.com"
                        className={`w-full px-4 py-2.5 rounded border ${errors.email ? 'border-red-400' : 'border-gray-300'} text-[#0a1628] placeholder-gray-400 text-sm focus:outline-none focus:border-[#1d4ed8] transition-colors`}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded border border-gray-300 text-[#0a1628] placeholder-gray-400 text-sm focus:outline-none focus:border-[#1d4ed8] transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your project or requirements..."
                      rows={5}
                      className={`w-full px-4 py-2.5 rounded border ${errors.message ? 'border-red-400' : 'border-gray-300'} text-[#0a1628] placeholder-gray-400 text-sm focus:outline-none focus:border-[#1d4ed8] transition-colors resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#0a1628] text-white rounded font-semibold hover:bg-[#1d4ed8] transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
