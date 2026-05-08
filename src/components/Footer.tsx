import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, FileText, ExternalLink } from 'lucide-react';
import { CONTACT, RESUME_URL } from '../data/portfolio';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: CONTACT.social.github,
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: CONTACT.social.linkedin,
      icon: Linkedin,
    },
    {
      name: 'Email',
      url: `mailto:${CONTACT.email}`,
      icon: Mail,
    },
  ];

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Skills', path: '/skills' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  const stack = ['React', 'TypeScript', 'Tailwind', 'Cloudflare Pages', 'OpenTofu'];

  return (
    <footer className="bg-bg-elevated border-t border-neutral-700 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Identity column */}
          <div className="bg-bg-surface border border-neutral-700 rounded-xl p-6">
            <div className="font-mono text-sm text-accent-500 mb-3">
              $ cat whoami.txt
            </div>
            <div className="font-mono text-primary-500 text-lg font-bold mb-2">
              <span className="text-accent-500">&gt;</span>_ Ramiro Krapp
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              DevOps Engineer building reliable infrastructure across AWS and GCP.
            </p>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-3 py-2 rounded-md border border-primary-500/40 text-primary-500 hover:bg-primary-500 hover:text-bg-surface transition-colors font-mono text-sm"
            >
              <FileText size={14} />
              <span>./download_cv.sh</span>
            </a>
          </div>

          {/* Navigation column */}
          <div className="bg-bg-surface border border-neutral-700 rounded-xl p-6">
            <div className="font-mono text-sm text-accent-500 mb-3">
              $ ls routes/
            </div>
            <ul className="space-y-2 font-mono text-sm">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="inline-flex items-center space-x-2 text-neutral-300 hover:text-primary-500 hover:-translate-y-1.5 transition-all duration-200 ease-out group will-change-transform [&:hover]:[filter:drop-shadow(0_4px_8px_rgba(0,255,65,0.35))]"
                  >
                    <span className="text-accent-500 group-hover:text-primary-500 transition-colors">&gt;</span>
                    <span>{link.label.toLowerCase()}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect column */}
          <div className="bg-bg-surface border border-neutral-700 rounded-xl p-6">
            <div className="font-mono text-sm text-accent-500 mb-3">
              $ ssh connect@krapp.dev
            </div>
            <div className="space-y-3 mb-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-neutral-300 hover:text-primary-500 transition-colors group font-mono text-sm"
                  >
                    <IconComponent size={16} className="group-hover:scale-110 transition-transform" />
                    <span>{link.name}</span>
                    <ExternalLink size={12} className="opacity-0 group-hover:opacity-60 transition-opacity ml-auto" />
                  </a>
                );
              })}
            </div>
            <div className="pt-3 border-t border-neutral-700">
              <div className="flex items-center space-x-2 font-mono text-xs text-neutral-400">
                <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
                <span>online · ART (UTC-3)</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-neutral-700"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-mono text-xs">
            <div className="flex items-center space-x-2 text-neutral-400">
              <span className="text-accent-500">$</span>
              <span>echo &quot;© {currentYear} Ramiro Krapp · MIT&quot;</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-neutral-500">
              <span>built with:</span>
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-neutral-800 rounded text-primary-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
