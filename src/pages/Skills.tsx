import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { Cloud, Container, Code, Database, Terminal as TerminalIcon, Activity, Network, Cpu } from 'lucide-react';
import { SKILLS_BY_CATEGORY } from '../data/portfolio';

export const Skills = () => {
  const categories = [
    {
      id: 'cloud',
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: SKILLS_BY_CATEGORY.cloud,
      color: 'text-blue-500',
    },
    {
      id: 'containers',
      title: 'Containers & Orchestration',
      icon: Container,
      skills: SKILLS_BY_CATEGORY.containers,
      color: 'text-blue-400',
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure as Code',
      icon: TerminalIcon,
      skills: SKILLS_BY_CATEGORY.infrastructure,
      color: 'text-purple-500',
    },
    {
      id: 'networking',
      title: 'Web Servers & Reverse Proxies',
      icon: Network,
      skills: SKILLS_BY_CATEGORY.networking,
      color: 'text-cyan-500',
    },
    {
      id: 'devops',
      title: 'DevOps & Automation',
      icon: Code,
      skills: SKILLS_BY_CATEGORY.devops,
      color: 'text-green-500',
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Observability',
      icon: Activity,
      skills: SKILLS_BY_CATEGORY.monitoring,
      color: 'text-yellow-500',
    },
    {
      id: 'programming',
      title: 'Programming & Frameworks',
      icon: Code,
      skills: SKILLS_BY_CATEGORY.programming,
      color: 'text-orange-500',
    },
    {
      id: 'database',
      title: 'Databases',
      icon: Database,
      skills: SKILLS_BY_CATEGORY.database,
      color: 'text-red-500',
    },
    {
      id: 'embedded',
      title: 'Embedded & IoT',
      icon: Cpu,
      skills: SKILLS_BY_CATEGORY.embedded,
      color: 'text-pink-500',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      <TerminalHeader
        command="ls -la skills/"
        description="Exploring technical expertise"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Technical Expertise
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Tooling and stacks I have worked with
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {categories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-bg-surface border border-neutral-700 rounded-xl overflow-hidden"
                >
                  <div className="bg-bg-elevated border-b border-neutral-700 p-6">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-neutral-800 ${category.color}`}>
                        <IconComponent size={24} />
                      </div>
                      <h3 className="font-mono text-xl font-semibold text-primary-500">
                        {category.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.4 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.03 }}
                          className="bg-bg-elevated border border-neutral-700 p-3 rounded-lg hover:border-primary-500/50 transition-all duration-300 group flex items-center space-x-3"
                        >
                          <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-6 h-6 filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0"
                          />
                          <span className="font-mono text-sm font-medium text-neutral-200 truncate">
                            {skill.name}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
