import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { Mail, Github, Linkedin } from 'lucide-react';
import { CONTACT } from '../data/portfolio';

export const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      color: 'text-blue-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'ramiro-krapp',
      href: CONTACT.social.linkedin,
      color: 'text-blue-400',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: CONTACT.social.github,
      icon: Github,
      color: 'hover:text-gray-400',
    },
    {
      name: 'LinkedIn',
      url: CONTACT.social.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-500',
    },
    {
      name: 'Email',
      url: `mailto:${CONTACT.email}`,
      icon: Mail,
      color: 'hover:text-blue-500',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      <TerminalHeader
        command="ping contact.server"
        description="Establishing connection to communication endpoint"
      />

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bg-elevated border border-neutral-700 rounded-xl p-6"
          >
            <h3 className="font-mono text-lg font-semibold text-primary-500 mb-6">
              Contact Methods
            </h3>
            <div className="space-y-4">
              {contactMethods.map((method) => {
                const IconComponent = method.icon;
                const isLink = method.href && method.href !== '#';
                const content = (
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 bg-bg-surface rounded-lg ${method.color}`}>
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <div className="font-medium text-neutral-200">{method.label}</div>
                      <div className="text-sm text-neutral-400">{method.value}</div>
                    </div>
                  </div>
                );
                return isLink ? (
                  <a
                    key={method.label}
                    href={method.href}
                    className="block hover:bg-bg-surface rounded-lg p-2 -m-2 transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={method.label}>{content}</div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-bg-elevated border border-neutral-700 rounded-xl p-6"
          >
            <h3 className="font-mono text-lg font-semibold text-primary-500 mb-6">
              Availability Status
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-500 rounded-full animate-pulse" />
                <span className="font-mono text-sm text-neutral-200">Open to opportunities</span>
              </div>
              <div className="text-sm text-neutral-400">
                <div className="mb-2">Response time: Within 24 hours</div>
                <div>Time zone: ART (UTC-3)</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-bg-elevated border border-neutral-700 rounded-xl p-6"
          >
            <h3 className="font-mono text-lg font-semibold text-primary-500 mb-6">
              Connect With Me
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center p-4 bg-bg-surface rounded-lg text-neutral-400 ${link.color} transition-all duration-200 hover:scale-105 hover:shadow-card`}
                  >
                    <IconComponent size={24} className="mb-2" />
                    <span className="text-xs font-mono">{link.name}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-bg-elevated">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bg-surface border border-neutral-700 rounded-xl p-8 font-mono"
          >
            <div className="text-accent-500 mb-4">
              $ echo "Thanks for stopping by"
            </div>
            <div className="space-y-2 text-neutral-200">
              <p>If you want to chat, my emails are always open!</p>
              <p className="text-primary-500">
                I'll answer faster if you contact via email. I rarely open LinkedIn.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-700 text-sm text-neutral-400">
              <span>Connection established. Awaiting your message... :D</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
