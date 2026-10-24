"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const links = ["About", "Experience", "Projects", "Contact"];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-background/80 backdrop-blur-md border-b border-white/5"
    >
      <Link href="/" className="text-xl font-bold tracking-tighter text-white">
        Mathi<span className="text-primary">.</span>
      </Link>
      <div className="hidden md:flex gap-8">
        {links.map((link) => (
          <Link 
            key={link} 
            href={`#${link.toLowerCase()}`}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            {link}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
