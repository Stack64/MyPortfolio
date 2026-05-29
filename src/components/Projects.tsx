"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/resume';
import { Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg font-light">
            Architecting scalable backend systems and immersive digital experiences.
          </p>
        </motion.div>

        <div className="space-y-32 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectShowcase key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectShowcase = ({ project, index }: { project: any; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={cn(
        "flex flex-col md:flex-row gap-12 md:gap-24 items-center",
        !isEven ? "md:flex-row-reverse" : ""
      )}
    >
      {/* Visual Side - Abstract Code Art */}
      <div className="w-full md:w-1/2 relative group">
        <div 
          className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          style={{ backgroundImage: `linear-gradient(to right, ${project.color}20, ${project.color}10)` }}
        />
        
        <div className="relative aspect-[4/3] bg-zinc-900/50 rounded-2xl border border-white/10 overflow-hidden backdrop-blur-sm shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
          {/* Abstract Code Window */}
          <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
            <AbstractCodeWindow color={project.color} title={project.title} />
          </div>
          
          {/* Noise Texture */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-400">
              0{index + 1}
            </span>
            <span className="h-px w-12 bg-zinc-800" />
          </div>
          
          <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
            {project.title}
          </h3>
          
          <p className="text-lg text-zinc-400 leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech: string, i: number) => (
              <span 
                key={i} 
                className="px-3 py-1.5 text-sm font-medium text-zinc-300 bg-zinc-900/50 border border-zinc-800 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>

          <ul className="space-y-3">
            {project.details?.slice(0, 3).map((detail: string, i: number) => (
              <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm md:text-base">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-600 shrink-0" style={{ backgroundColor: project.color }} />
                <span className="leading-relaxed">{detail}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4 flex items-center gap-6">
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white font-medium hover:text-zinc-300 transition-colors"
            >
              <Github className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
              <span>View Source</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AbstractCodeWindow = ({ color, title }: { color: string; title: string }) => {
  return (
    <div className="w-full max-w-sm bg-[#0D0D0D] rounded-xl border border-white/5 shadow-2xl overflow-hidden transform rotate-[-2deg] transition-transform duration-700 group-hover:rotate-0">
      {/* Window Header */}
      <div className="h-8 bg-white/5 flex items-center px-4 gap-2 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="ml-4 text-[10px] text-zinc-500 font-mono">Application.java</div>
      </div>

      {/* Code Content */}
      <div className="p-6 space-y-3 font-mono text-xs md:text-sm">
        <div className="flex gap-2">
          <span className="text-amber-400">@Service</span>
        </div>

        <div className="flex gap-2 flex-wrap">
          <span className="text-emerald-400">public class</span>
          <span className="text-teal-300">{`${title.split(' ')[0]}Service`}</span>
          <span className="text-zinc-500">{'{'}</span>
        </div>

        <div className="pl-4 flex gap-2 flex-wrap">
          <span className="text-emerald-400">public</span>
          <span className="text-amber-300">boolean</span>
          <span className="text-teal-300">process</span>
          <span className="text-zinc-300">()</span>
          <span className="text-zinc-500">{'{'}</span>
        </div>

        <div className="pl-8 space-y-2">
          <div className="flex gap-2">
            <span className="text-zinc-500">{`// ${title}`}</span>
          </div>
          <div className="flex gap-2">
            <span className="text-zinc-300">repository.save(event);</span>
          </div>
          <div className="flex gap-2">
            <span className="text-emerald-400">return</span>
            <span className="text-amber-300">true</span>
            <span className="text-zinc-300">;</span>
          </div>
        </div>

        <div className="pl-4 text-zinc-500">{'}'}</div>
        <div className="text-zinc-500">{'}'}</div>
      </div>

      {/* Glow Effect */}
      <div 
        className="absolute bottom-0 right-0 w-32 h-32 blur-[60px] opacity-20 pointer-events-none"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

export default Projects;
