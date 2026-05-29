"use client";
import { motion } from 'framer-motion';
import { experiences } from '@/data/resume';
import { Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="bg-black text-white relative py-32 overflow-hidden">
      {/* Subtle Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Professional Journey
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A timeline of building scalable backend systems and AI solutions.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-24">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ experience, index }: { experience: any; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}
    >
      {/* Visual Side */}
      <div className="w-full md:w-1/2 relative group">
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-80"
            style={{ backgroundImage: `url('${experience.backgroundImage}')` }}
          />
          {/* Dark Overlay Gradient - Reduced opacity for better visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80"></div>
          
          {/* Company Name Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-8">
             <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">{experience.company.split(' - ')[0]}</h3>
             <p className="text-sm text-gray-300 font-mono flex items-center gap-2">
               <span className="w-2 h-2 rounded-full" style={{ backgroundColor: experience.color }}></span>
               {experience.company.split(' - ')[1] || 'India'}
             </p>
          </div>
        </div>
        
        {/* Decorative Element - Colored Accent Border */}
        <div 
          className={`absolute -bottom-4 -right-4 w-full h-full border border-white/5 rounded-2xl -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2`}
          style={{ borderColor: `${experience.color}30` }}
        ></div>
      </div>

      {/* Content Side */}
      <div className="w-full md:w-1/2">
        <div className="flex items-center gap-3 mb-4">
           <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400 flex items-center gap-2">
             <Calendar className="w-3 h-3" /> {experience.duration}
           </span>
        </div>
        
        <h3 className="text-3xl font-bold mb-6 text-white leading-tight">
          {experience.role}
        </h3>

        <ul className="space-y-4">
          {experience.description.map((item: string, i: number) => (
            <li key={i} className="flex items-start gap-4 group/item">
              <span className="mt-1.5 min-w-[6px] h-1.5 rounded-full bg-zinc-700 group-hover/item:bg-white transition-colors duration-300"></span>
              <p className="text-gray-400 leading-relaxed text-sm group-hover/item:text-gray-300 transition-colors duration-300">
                {item}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8 pt-8 border-t border-white/5">
           <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: experience.color }}></span>
              Backend Architecture &bull; System Design &bull; Optimization
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
