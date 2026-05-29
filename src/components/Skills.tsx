"use client";
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { skills } from '@/data/resume';
import { Terminal, Server, Database, Cpu, Cloud, Code2, Layout, Network, Activity } from 'lucide-react';

const Skills = () => {
  // Each category maps to an icon + accent within the emerald/amber theme
  const categoryConfig: Record<string, { icon: LucideIcon, color: string, gradient: string }> = {
    "Languages": {
      icon: Terminal,
      color: "text-emerald-400",
      gradient: "from-emerald-500/20 to-teal-500/5"
    },
    "Backend Technologies": {
      icon: Server,
      color: "text-emerald-300",
      gradient: "from-emerald-500/25 to-teal-600/5"
    },
    "Frontend": {
      icon: Layout,
      color: "text-teal-300",
      gradient: "from-teal-500/20 to-emerald-500/5"
    },
    "Messaging & Distributed Systems": {
      icon: Network,
      color: "text-amber-400",
      gradient: "from-amber-500/20 to-orange-500/5"
    },
    "Databases": {
      icon: Database,
      color: "text-amber-300",
      gradient: "from-amber-500/20 to-yellow-600/5"
    },
    "AI / Computer Vision": {
      icon: Cpu,
      color: "text-lime-400",
      gradient: "from-lime-500/20 to-emerald-500/5"
    },
    "Cloud & DevOps": {
      icon: Cloud,
      color: "text-teal-400",
      gradient: "from-teal-500/20 to-cyan-600/5"
    },
    "Observability & Testing": {
      icon: Activity,
      color: "text-emerald-400",
      gradient: "from-emerald-500/20 to-green-600/5"
    }
  };

  return (
    <section id="skills" className="py-32 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A curated stack of technologies for building high-performance, scalable systems.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:auto-rows-fr gap-6 max-w-7xl mx-auto">
          {Object.entries(skills).map(([category, items], index) => {
            const config = categoryConfig[category] || { icon: Code2, color: "text-gray-400", gradient: "from-gray-500/20 to-gray-500/5" };
            const Icon = config.icon;

            return (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`
                  group relative h-full min-h-[260px] p-8 rounded-3xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm overflow-hidden
                  ${category === "Backend Technologies" ? "lg:col-span-2 lg:row-span-1" : ""}
                `}
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-3 rounded-2xl bg-zinc-900 border border-white/10 group-hover:border-white/20 transition-colors ${config.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors">
                      {category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <motion.span 
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className={`
                          px-3 py-1.5 text-sm font-medium rounded-lg 
                          bg-white/5 border border-white/5 text-gray-400
                          hover:bg-white/10 hover:text-white hover:border-white/10
                          transition-all cursor-default
                        `}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
