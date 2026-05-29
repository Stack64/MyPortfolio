"use client";
import { useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { contactInfo } from '@/data/resume';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for mouse movement
  const springConfig = { damping: 20, stiffness: 100 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax for text
  const textX = useTransform(springX, [-500, 500], [-20, 20]);
  const textY = useTransform(springY, [-500, 500], [-20, 20]);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black text-white selection:bg-white/20">
      
      {/* 1. ARTISTIC BACKGROUND: "The Void & The Light" */}
      <div className="absolute inset-0 z-0">
        {/* Deep Atmospheric Base */}
        <div className="absolute inset-0 bg-black"></div>
        
        {/* Moving Spotlight / Aurora */}
        <motion.div 
          style={{ 
            x: springX, 
            y: springY,
          }}
          className="absolute top-1/2 left-1/2 w-[1000px] h-[1000px] bg-emerald-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 mix-blend-screen pointer-events-none"
        />

        {/* Secondary Ambient Light (Contrast) */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-900/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow animation-delay-2000"></div>

        {/* Texture: Film Grain */}
        <div className="absolute inset-0 opacity-[0.08] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] animate-grain pointer-events-none"></div>
      </div>

      {/* 2. MAIN COMPOSITION */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center">
        
        {/* Artistic Name Reveal */}
        <motion.div 
          style={{ x: textX, y: textY }}
          className="relative mb-8 mix-blend-difference"
        >
          <motion.h1 
            initial={{ opacity: 0, letterSpacing: "1em", filter: "blur(20px)" }}
            animate={{ opacity: 1, letterSpacing: "-0.02em", filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "circOut" }}
            className="text-[12vw] md:text-[10rem] font-bold leading-none tracking-tighter text-white select-none"
          >
            Sohail
          </motion.h1>
          <motion.h1 
            initial={{ opacity: 0, letterSpacing: "1em", filter: "blur(20px)" }}
            animate={{ opacity: 1, letterSpacing: "-0.02em", filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.2, ease: "circOut" }}
            className="text-[12vw] md:text-[10rem] font-bold leading-none tracking-tighter text-zinc-500 select-none"
          >
            Khan<span className="text-emerald-500">.</span>
          </motion.h1>
        </motion.div>

        {/* Minimal Role Descriptor */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-12"
        >
          <div className="hidden md:block h-px w-12 bg-zinc-700"></div>
          <p className="font-mono text-sm md:text-base text-zinc-400 tracking-[0.15em] uppercase text-center">
            Backend Engineer <span className="text-zinc-600 px-2">/</span> Spring Boot &amp; Kafka <span className="text-zinc-600 px-2">/</span> Distributed Systems
          </p>
          <div className="hidden md:block h-px w-12 bg-zinc-700"></div>
        </motion.div>

        {/* Elegant Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col gap-8 items-center"
        >
          <a 
            href="#projects" 
            className="group flex items-center gap-4 text-white hover:text-emerald-400 transition-colors duration-500"
          >
            <span className="text-lg font-medium tracking-wide border-b border-transparent group-hover:border-emerald-400 transition-all">View Selected Works</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-500" />
          </a>

          {/* Minimal Social Links */}
          <div className="flex gap-8 mt-4">
            <SocialLink href={contactInfo.github} icon={<Github className="w-5 h-5" />} />
            <SocialLink href={contactInfo.linkedin} icon={<Linkedin className="w-5 h-5" />} />
            <SocialLink href={`mailto:${contactInfo.email}`} icon={<Mail className="w-5 h-5" />} />
          </div>
        </motion.div>
      </div>

      {/* 3. SUBTLE FOOTER / MARQUEE */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-0 w-full py-8 border-t border-white/5 bg-gradient-to-t from-black to-transparent backdrop-blur-[2px]"
      >
        <div className="flex overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-700">
           <div className="flex gap-16 animate-infinite-scroll w-max hover:pause pl-4 items-center">
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="flex items-center gap-3 transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] cursor-pointer">
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-6 h-6 object-contain"
                />
                <span className="text-sm font-mono text-zinc-400 uppercase tracking-widest group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
};

const SocialLink = ({ href, icon }: { href: string, icon: any }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-zinc-500 hover:text-white transition-colors duration-300 transform hover:scale-110"
  >
    {icon}
  </a>
);

const techStack = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Spring", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" }
];

export default Hero;
