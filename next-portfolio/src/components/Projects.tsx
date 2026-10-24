"use client";

import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "NeuralNest",
      desc: "Conceptualized an AI-driven RTL autopilot system seamlessly connecting software, AI, and hardware design paradigms for enhanced chip development.",
      tech: ["AI/ML", "RTL Design", "System Architecture"]
    },
    {
      title: "Web Applications Suite",
      desc: "Developed a comprehensive Student Management System and an Online Shopping App featuring secure authentication and robust data handling.",
      tech: ["Java", "React.js", "Spring Boot"]
    },
    {
      title: "ML Systems - Performance Prediction",
      desc: "Built a Student Performance Prediction model analyzing historical datasets to forecast academic outcomes with high accuracy.",
      tech: ["Python", "scikit-learn", "Pandas"]
    }
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-4 text-white">
            <span className="text-primary font-mono text-xl">03.</span> Featured Projects
            <div className="h-[1px] bg-gray-800 flex-grow ml-4" />
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-secondary/50 border border-white/10 rounded-2xl p-6 flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(6,182,212,0.3)] transition-all duration-300"
              >
                <div className="flex justify-between items-center mb-6 text-gray-400 group-hover:text-primary transition-colors">
                  <FolderGit2 className="w-10 h-10" />
                  <ExternalLink className="w-5 h-5 cursor-pointer hover:text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-200 mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-6 flex-grow leading-relaxed">{project.desc}</p>
                
                <div className="flex flex-wrap gap-3 mt-auto font-mono text-xs text-gray-500">
                  {project.tech.map(t => <span key={t}>{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
