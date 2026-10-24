"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 mb-20">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="text-primary font-mono text-sm mb-4">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h2>
        <p className="text-gray-400 mb-10 text-lg">
          I am currently seeking opportunities in software development, application engineering, 
          and silicon design (specifically targeting roles at companies like Cadence Design Systems). 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <form className="flex flex-col gap-4 max-w-md mx-auto text-left mb-12">
          <input 
            type="text" 
            placeholder="Name" 
            required
            className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-white/10 text-white focus:outline-none focus:border-primary transition-colors"
          />
          <input 
            type="email" 
            placeholder="Email" 
            required
            className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-white/10 text-white focus:outline-none focus:border-primary transition-colors"
          />
          <textarea 
            rows={4} 
            placeholder="Message" 
            required
            className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-white/10 text-white focus:outline-none focus:border-primary transition-colors resize-none"
          ></textarea>
          <button type="submit" className="w-full px-8 py-4 bg-transparent border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors">
            Say Hello
          </button>
        </form>
      </motion.div>
    </section>
  );
}
