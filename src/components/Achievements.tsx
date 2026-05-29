"use client";

import React from "react";
import { motion } from "framer-motion";
import { achievements } from "@/data/resume";
import {
  Trophy,
  Star,
  Code,
  Terminal,
} from "lucide-react";

const Achievements = () => {
  const getIcon = (title: string) => {
    if (title.includes("ICPC")) return <Code className="w-6 h-6" />;
    if (title.includes("Scholarship")) return <Star className="w-6 h-6" />;
    if (title.includes("Programming")) return <Terminal className="w-6 h-6" />;
    return <Trophy className="w-6 h-6" />;
  };

  return (
    <section
      id="achievements"
      className="py-32 bg-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.03),_transparent_70%)]"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Milestones that define my journey in engineering and innovation.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-zinc-900/30 border border-white/5 p-6 rounded-2xl hover:bg-white/5 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-xl bg-zinc-900 border border-white/10 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: item.color }}
                >
                  {getIcon(item.title)}
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
