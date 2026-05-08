import { motion } from 'framer-motion';
import { TerminalHeader } from '../components/TerminalHeader';
import { Typewriter } from '../components/Typewriter';
import { Calendar, Code, Network, GraduationCap } from 'lucide-react';

export const About = () => {
  const timeline = [
    {
      year: 'May 2025 - Present',
      title: 'Software Developer',
      company: 'Mercado Libre',
      description:
        'Fury Connectivity team. Multi-cloud network infrastructure across AWS and GCP. Maintaining VPCs, Transit Gateways, routing tables, and NAT gateways across regions. Provisioning with Terraform. Building internal networking tooling APIs in Go and Python.',
      icon: Network,
    },
    {
      year: 'Sep 2024 - Apr 2025',
      title: 'Ssr DevOps Engineer',
      company: 'GoCloud',
      description:
        'CI/CD pipelines with GitLab CI for Java, PHP/Laravel, NestJS, NextJS, and Vite + React projects. Dockerization and production deploys to Kubernetes and OpenShift. SonarQube setup for code quality. Infrastructure for internal testing environments on EC2 and K8s.',
      icon: Code,
    },
    {
      year: 'Jun 2023 - Sep 2024',
      title: 'DevOps Engineer',
      company: 'Provincia Seguros',
      description:
        'CI/CD with Azure DevOps and Jenkins for Java and Vue projects. Docker and Docker Compose containerization. Application deploys to Kubernetes. SonarQube quality gates. E2E testing with Cypress. Fullstack dev with Spring Boot, FastAPI, Flask. BPM demos with Camunda and Bonitasoft. Git training for trainees.',
      icon: Code,
    },
    {
      year: 'May 2023 - Sep 2023',
      title: 'Software Developer',
      company: 'Hello World SRL',
      description:
        'Website development with Flask and Bootstrap for the Nerdearla event, with GitHub Actions CI/CD for automated builds and deployments. Built a Raspberry Pi robot in Python that scanned attendee QR codes and generated personalized speeches via API.',
      icon: Code,
    },
    {
      year: 'Dec 2022 - Mar 2023',
      title: 'Software Developer IoT',
      company: 'Juegos Mentales',
      description:
        'Microcontroller programming in C++ on NodeMCU ESP8266 and ESP32. MQTT broker setup with Mosquitto for real-time communication. Web control system for managing escape room puzzles, lighting, sound, and participant progress.',
      icon: Code,
    },
    {
      year: 'Mar 2024 - Dec 2024',
      title: 'Diplomatura en DevOps',
      company: 'Mundos E',
      description: 'DevOps program covering CI/CD, containers, cloud infrastructure, and automation practices.',
      icon: GraduationCap,
    },
    {
      year: '2016 - 2022',
      title: 'Tecnicatura en Electrónica',
      company: 'Instituto Tecnológico San Bonifacio',
      description: 'Electronics technician program with a strong foundation in hardware, circuits, and embedded systems.',
      icon: Calendar,
    },
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      <TerminalHeader
        command="cat about.txt"
        description="Displaying professional background"
      />

      {/* Bio */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="bg-bg-surface border border-neutral-700 rounded-xl p-8 shadow-card">
                <div className="font-mono text-lg mb-6">
                  <span className="text-accent-500">$</span>
                  <span className="text-primary-500"> cat</span>
                  <span className="text-neutral-400"> bio.txt</span>
                </div>
                <div className="space-y-4 text-neutral-200 leading-relaxed">
                  <Typewriter
                    text="Hi, I'm Ramiro, DevOps Engineer based in Buenos Aires."
                    delay={30}
                    className="text-primary-500 font-semibold block mb-4"
                  />
                  <p>
                    Im a normal guy, i like DevOps, Linux, and cooking for my girlfriend.
                    Currently working at GoCloud.
                  </p>
                  <p>
                    Over 3+ years I've built CI/CD pipelines for Java, PHP, Node, and React projects, dockerized
                    and deployed services to Kubernetes and OpenShift, and provisioned infrastructure with
                    Terraform across AWS and GCP. I'm equally at home configuring Jenkins, GitLab CI,
                    GitHub Actions, or Azure DevOps.
                  </p>
                  <p>
                    My background spans IoT (microcontrollers, MQTT, embedded C++), web (FastAPI,
                    Flask, HTML/CSS/Javascript), and platform engineering                 </p>
                  <p className="text-primary-500 font-medium">
                    For me, DevOps is about making thing easier and less of a headache, just like it's explained in{' '}
                    <a
                      href="https://www.oreilly.com/library/view/the-devops-handbook/9781457191381/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-dotted underline-offset-2 hover:text-primary-300 transition-colors"
                    >
                      The DevOps Handbook
                    </a>
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-primary-500 font-semibold mb-4 text-lg">
                  Quick Stats
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Experience</span>
                    <span className="text-primary-500 font-mono">3+ years</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Cloud Platforms</span>
                    <span className="text-primary-500 font-mono">AWS · GCP</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Currently</span>
                    <span className="text-primary-500 font-mono">@MercadoLibre</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400">Based in</span>
                    <span className="text-primary-500 font-mono">CABA, Argentina</span>
                  </div>
                </div>
              </div>

              <div className="bg-bg-elevated border border-neutral-700 rounded-xl p-6">
                <h3 className="font-mono text-primary-500 font-semibold mb-4 text-lg">
                  Specializations
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Multi-Cloud Networking',
                    'CI/CD Pipelines',
                    'Infrastructure as Code',
                    'Kubernetes',
                    'Container Platforms',
                    'Internal Tooling',
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-neutral-800 text-neutral-200 text-sm rounded-md border border-neutral-700 hover:border-primary-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Career Timeline
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              From IoT and embedded systems to multi-cloud platform engineering
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-700 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const IconComponent = item.icon;
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={`${item.year}-${item.title}`}
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                  >
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center border-4 border-bg-page shadow-glow z-10">
                      <IconComponent size={16} className="text-bg-surface" />
                    </div>

                    <div className={`ml-16 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="bg-bg-elevated border border-neutral-700 rounded-lg p-6 hover:border-primary-500/50 transition-colors shadow-card">
                        <div className="font-mono text-accent-500 text-sm mb-2">{item.year}</div>
                        <h3 className="font-semibold text-xl text-neutral-200 mb-1">{item.title}</h3>
                        <div className="text-primary-500 font-medium mb-3">@ {item.company}</div>
                        <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
