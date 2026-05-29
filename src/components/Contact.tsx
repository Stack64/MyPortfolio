"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { contactInfo } from '@/data/resume';
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-black to-zinc-900 text-white relative overflow-hidden border-t border-zinc-800">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.1),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.1),_transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing backend engineering, distributed systems, and AI technologies. 
            Feel free to reach out if you'd like to chat or collaborate on interesting projects.
          </p>
          
          <motion.a 
            href={`mailto:${contactInfo.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
          >
            <Mail className="w-5 h-5" /> Say Hello
          </motion.a>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
          {[
            { 
              icon: <Linkedin className="w-6 h-6" />, 
              label: "LinkedIn", 
              value: "Connect with me", 
              href: contactInfo.linkedin,
              color: "hover:text-emerald-500 hover:border-emerald-500/50"
            },
            { 
              icon: <Github className="w-6 h-6" />, 
              label: "GitHub", 
              value: "Check my repos", 
              href: contactInfo.github,
              color: "hover:text-amber-500 hover:border-amber-500/50"
            },
            { 
              icon: <Phone className="w-6 h-6" />, 
              label: "Phone", 
              value: contactInfo.phone, 
              href: `tel:${contactInfo.phone.replace(/-/g, '')}`,
              color: "hover:text-green-500 hover:border-green-500/50"
            }
          ].map((item, index) => (
            <motion.a 
              key={index}
              href={item.href}
              target={item.label !== "Phone" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col items-center p-8 bg-zinc-900/50 rounded-2xl border border-zinc-800 transition-all duration-300 group ${item.color}`}
            >
              <div className="mb-4 p-4 bg-zinc-900 rounded-full group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-sm text-gray-500 mb-1">{item.label}</span>
              <span className="font-semibold text-lg flex items-center gap-2">
                {item.value}
                {item.label !== "Phone" && <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
              </span>
            </motion.a>
          ))}
        </div>

        <footer className="text-center border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm max-w-4xl mx-auto">
          <p>© {new Date().getFullYear()} Mohd Sohail Khan. All rights reserved.</p>
          <p className="flex items-center gap-2 mt-2 md:mt-0">
            Designed &amp; built with <span className="text-white font-medium hover:text-emerald-400 transition-colors">Next.js &amp; Tailwind</span>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
