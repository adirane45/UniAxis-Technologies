import { Mail, MapPin, Globe, Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a1628] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded bg-white flex items-center justify-center font-bold text-[#0a1628] text-sm">
                U
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                UniAxis <span className="text-blue-400">Technologies</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Empowering businesses with secure, scalable technology solutions. Your trusted IT partner in Jalgaon, Maharashtra.
            </p>
            <div className="flex gap-3">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Twitter size={15} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Linkedin size={15} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Github size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Projects', href: '#projects' },
                { label: 'Internship Program', href: '#internship' },
                { label: 'About Us', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Jalgaon, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-blue-400 flex-shrink-0" />
                <a href="mailto:support@uniaxis.tech" className="text-gray-400 hover:text-white transition-colors text-sm">
                  support@uniaxis.tech
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={15} className="text-blue-400 flex-shrink-0" />
                <a href="https://www.uniaxis.tech" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  www.uniaxis.tech
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} UniAxis Technologies. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Built in Jalgaon, Maharashtra, India
          </p>
        </div>
      </div>
    </footer>
  );
}
