import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Code2, FileText } from 'lucide-react';
import { Grid3DBackground } from '../components/Grid3D';
import { Typewriter } from '../components/Typewriter';
import { HERO_CONTENT, SKILLS, CONTACT, RESUME_URL } from '../data/portfolio';

export const Home = () => {
  // Duplicate the list so wrapping at -halfWidth lands seamlessly on the start of the duplicate
  const marqueeSkills = [...SKILLS, ...SKILLS];

  const marqueeRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0); // px/s — drives both inertia after flick and baseline auto-scroll
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const lastMoveTimeRef = useRef(0);
  const lastMoveXRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const BASELINE_SPEED = 50; // px/s — the slow autoscroll when nothing else is happening
    const FRICTION = 1.2; // exponential decay rate per second; lower = more slippery (ice)
    const HANDOFF_VELOCITY = BASELINE_SPEED; // when |v| drops below this, blend back to baseline
    let frameId = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05); // clamp huge dt after tab blur
      last = now;
      const el = marqueeRef.current;
      if (el && !isDraggingRef.current) {
        const halfWidth = el.scrollWidth / 2;
        if (halfWidth > 0) {
          let v = velocityRef.current;
          if (Math.abs(v) > HANDOFF_VELOCITY) {
            // Inertia phase: glide and decay
            velocityRef.current = v * Math.exp(-FRICTION * dt);
          } else {
            // Smoothly settle into the baseline leftward scroll
            v = -BASELINE_SPEED;
            velocityRef.current = 0;
          }
          let next = offsetRef.current + v * dt;
          while (next <= -halfWidth) next += halfWidth;
          while (next > 0) next -= halfWidth;
          offsetRef.current = next;
          el.style.transform = `translate3d(${next}px,0,0)`;
        }
      }
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    startXRef.current = e.clientX - offsetRef.current;
    velocityRef.current = 0; // stop any ongoing glide
    lastMoveTimeRef.current = performance.now();
    lastMoveXRef.current = e.clientX;
    isDraggingRef.current = true;
    setIsDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !marqueeRef.current) return;
    const now = performance.now();
    const dt = now - lastMoveTimeRef.current;
    if (dt > 0) {
      const instant = ((e.clientX - lastMoveXRef.current) / dt) * 1000; // px/s
      // EMA so a single jittery sample doesn't dominate the release velocity
      velocityRef.current = velocityRef.current * 0.3 + instant * 0.7;
    }
    lastMoveTimeRef.current = now;
    lastMoveXRef.current = e.clientX;

    const halfWidth = marqueeRef.current.scrollWidth / 2;
    let next = e.clientX - startXRef.current;
    if (halfWidth > 0) {
      while (next <= -halfWidth) next += halfWidth;
      while (next > 0) next -= halfWidth;
    }
    offsetRef.current = next;
    marqueeRef.current.style.transform = `translate3d(${next}px,0,0)`;
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId);
    }
    isDraggingRef.current = false;
    setIsDragging(false);
    // velocityRef is intentionally left as-is — the tick loop will pick it up and glide
  };

  return (
    <div className="min-h-screen bg-bg-page relative overflow-hidden">
      <Grid3DBackground />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="font-mono text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide">
              <span className="text-accent-500 mr-3">$</span>
              <span className="text-primary-500">whoami</span>
            </div>

            <div className="font-mono text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary-500">
              <Typewriter text="Ramiro Krapp" delay={80} />
            </div>

            <div className="font-mono text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-200">
              DevOps Engineer
              <span className="terminal-cursor ml-2" />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center px-8 py-4 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-bg-surface transition-all duration-200 font-semibold tracking-wide rounded-lg shadow-glow hover:shadow-card-hover"
              >
                <Code2 className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                View Projects
              </Link>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center px-8 py-4 border-2 border-neutral-600 bg-neutral-800 text-neutral-200 hover:border-primary-500 hover:text-primary-500 transition-all duration-200 font-semibold tracking-wide rounded-lg"
              >
                <FileText className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Download CV
              </a>
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 border-2 border-neutral-600 bg-neutral-800 text-neutral-200 hover:border-primary-500 hover:text-primary-500 transition-all duration-200 font-semibold tracking-wide rounded-lg"
              >
                <ExternalLink className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Contact
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24 relative z-10 bg-bg-surface/50 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bg-elevated border border-neutral-700 rounded-xl p-8 shadow-card"
          >
            <div className="font-mono text-sm text-accent-500 mb-6">
              $ cat about.txt | head
            </div>
            <div className="space-y-4 font-mono text-base md:text-lg text-neutral-200 leading-relaxed">
              <p>
                <span className="text-primary-500 mr-2">&gt;</span>
                Hi, I'm Ramiro. DevOps Engineer based in CABA, Argentina.
              </p>
              <p>
                <span className="text-primary-500 mr-2">&gt;</span>
                Currently working at <span className="text-primary-500">@GoCloud</span>.
              </p>
              <p>
                <span className="text-primary-500 mr-2">&gt;</span>
                3+ years building CI/CD pipelines, Kubernetes platforms, and cloud infrastructure that scales.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-neutral-700 flex justify-center">
              <Link
                to="/about"
                className="inline-flex items-center px-4 py-2.5 rounded-md border border-primary-500/40 text-primary-500 hover:bg-primary-500 hover:text-bg-surface transition-colors font-mono text-sm"
              >
                [ nvim about.txt ]
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured technologies */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-4">
              Featured Technologies
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              The full stack I work with across cloud, containers, IaC, embedded, and beyond
            </p>
          </motion.div>
        </div>

        {/* Marquee strip — full bleed, fades on edges, click-and-drag to scrub */}
        <div
          className="relative overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0, black 6%, black 94%, transparent 100%)',
          }}
        >
          <div
            ref={marqueeRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            className={`flex w-max select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ touchAction: 'pan-y', willChange: 'transform' }}
          >
            {marqueeSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex flex-col items-center justify-center bg-bg-elevated border border-neutral-700 rounded-lg mx-3 px-6 py-4 min-w-[140px] hover:border-primary-500/50 transition-colors group pointer-events-none"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  draggable={false}
                  className="w-10 h-10 mb-2 filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none"
                />
                <div className="font-mono text-sm text-neutral-200 font-medium whitespace-nowrap">
                  {skill.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/skills"
              className="inline-flex items-center text-primary-500 hover:text-primary-400 font-mono font-semibold group"
            >
              <span className="mr-2">View all skills</span>
              <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative z-10 bg-gradient-to-b from-transparent to-bg-elevated/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bg-elevated border border-primary-500/20 p-12 rounded-2xl shadow-glow"
          >
            <h2 className="font-mono text-3xl md:text-4xl font-bold text-primary-500 mb-6">
              Let's build something reliable.
            </h2>
            <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
              From CI/CD pipelines to multi-cloud connectivity. Happy to talk about infrastructure,
              automation, and the systems that make engineering teams ship faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-bg-surface font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 shadow-glow hover:shadow-card-hover"
              >
                Get in Touch
              </Link>
              <a
                href={CONTACT.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-600 text-neutral-200 hover:border-primary-500 hover:text-primary-500 font-semibold rounded-lg transition-all duration-200"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
