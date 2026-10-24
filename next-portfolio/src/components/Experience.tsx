"use client";

import { motion } from "framer-motion";
import { Code2, Cpu } from "lucide-react";

export default function Experience() {
  const softwareSkills = ["Java", "React.js", "JavaScript", "Spring Boot", "HTML", "CSS", "MySQL", "MongoDB"];
  const hardwareSkills = ["VLSI Design", "Verilog", "SystemVerilog", "C++", "Icarus Verilog", "GTKWave"];

  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4 text-white">
            <span className="text-primary font-mono text-xl">02.</span> Experience & Skills
            <div className="h-[1px] bg-gray-800 flex-grow ml-4" />
          </h2>
          
          <div className="bg-orange-500/10 border border-orange-500/30 rounded-2xl p-8 hover:border-orange-500 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)] transition-all duration-300">
            <h3 className="text-2xl font-bold mb-2 text-white">Full Stack Developer Intern <span className="text-orange-400">@ Besant Technologies</span></h3>
            <p className="text-orange-200 font-mono text-sm mb-6">Bangalore</p>
            <ul className="list-disc list-outside ml-4 space-y-2 text-gray-300">
              <li>Architected comprehensive frontend and backend solutions for enterprise applications.</li>
              <li>Integrated RESTful APIs ensuring seamless communication between client and server.</li>
              <li>Collaborated within Agile environments to deliver robust, scalable software features.</li>
            </ul>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-background border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6 text-primary">
              <Code2 className="w-6 h-6" />
              <h4 className="text-xl font-semibold text-white">Software Engineering</h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {softwareSkills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm font-mono text-gray-300 border border-white/5 hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-background border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6 text-primary">
              <Cpu className="w-6 h-6" />
              <h4 className="text-xl font-semibold text-white">Hardware & EDA</h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {hardwareSkills.map(skill => (
                <span key={skill} className="px-3 py-1 bg-secondary rounded-full text-sm font-mono text-gray-300 border border-white/5 hover:border-primary/50 hover:text-primary transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
