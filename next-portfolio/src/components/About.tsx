"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4 text-white">
            <span className="text-primary font-mono text-xl">01.</span> About Me
            <div className="h-[1px] bg-gray-800 flex-grow ml-4" />
          </h2>
          
          <div className="text-lg text-gray-400 leading-relaxed space-y-6">
            <p>
              I am a 24-year-old developer bridging the gap between low-level silicon and scalable web frameworks. 
              I hold a <span className="text-white font-medium">B.E. in Electronics and Communication Engineering (2025)</span> and 
              specialize in both software engineering and digital logic design.
            </p>
            <p>
              My passion lies in understanding systems from the ground up—whether it's writing RTL code for custom hardware 
              or developing full-stack web applications that serve thousands of users. I thrive at the intersection of 
              hardware architecture and modern software development.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
