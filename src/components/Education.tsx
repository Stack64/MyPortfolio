"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { education } from '@/data/resume';
import { GraduationCap, MapPin, BookOpen, Quote, ExternalLink } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-zinc-900 text-white relative border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12 justify-center">
            <div className="h-px bg-zinc-800 flex-1"></div>
            <h2 className="text-3xl font-bold text-center text-gray-200">Education</h2>
            <div className="h-px bg-zinc-800 flex-1"></div>
          </div>

          <div className="bg-black p-8 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors shadow-lg relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/10 transition-colors"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-zinc-900 rounded-xl border border-zinc-800">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <a
                    href="https://www.cgc.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 text-2xl font-bold text-white mb-2 hover:text-emerald-400 transition-colors"
                  >
                    {education.institution}
                    <ExternalLink className="w-5 h-5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                  <p className="text-lg text-gray-400 mb-2">{education.degree}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" /> Mohali, India
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-2">
                <span className="px-4 py-2 bg-zinc-900 rounded-full text-sm font-mono text-gray-300 border border-zinc-800">
                  {education.duration}
                </span>
                <span className="text-sm font-semibold text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                  {education.gpa}
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8 pt-6 border-t border-zinc-800">
              {/* Relevant Coursework */}
              {education.courses && education.courses.length > 0 && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">Coursework</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {education.courses.map((course) => (
                      <span
                        key={course}
                        className="px-2.5 py-1 bg-zinc-900/50 text-gray-400 text-xs rounded border border-zinc-800 hover:border-zinc-700 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Quote Section */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col justify-center relative p-6 bg-zinc-900/30 rounded-xl border border-zinc-800/50"
              >
                <Quote className="absolute top-4 left-4 w-6 h-6 text-emerald-500/20 rotate-180" />
                <p className="text-gray-400 italic text-sm text-center relative z-10 px-4">
                  &ldquo;Scientists investigate that which already is; Engineers create that which has never been.&rdquo;
                </p>
                <p className="text-emerald-400/60 text-xs font-mono text-center mt-3">
                  — Albert Einstein
                </p>
                <Quote className="absolute bottom-4 right-4 w-6 h-6 text-emerald-500/20" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
