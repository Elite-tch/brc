// partners.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Partner logo component with hover effect
function PartnerLogo({ delay }: { delay: number }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className=" rounded-lg  h-28 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300"
        animate={isHovered ? { y: -5 } : { y: 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative w-full h-full">
          <Image 
            src="/bg.jpg" 
            alt="Partner logo" 
            fill
            className="object-contain w-full transition-all duration-300"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Partners() {
  // Create an array for 12 partner logos
  const partnerLogos = Array.from({ length: 12 }, (_, i) => i);

  return (
    <section className="py-20 bg-slate-100 dark:bg-[#00113D]/80">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#00113D] dark:text-white">
            Building the <span className="text-[#FFF00A]">Ecosystem</span> Together
          </h2>
          <div className="w-24 h-1 bg-[#FFF00A] mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Blockchain Revolution Community partners with leading technology providers, educational institutions, and industry pioneers to expand opportunities for our members and advance blockchain adoption globally.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap -mx-4">
          {partnerLogos.map((_, index) => (
            <PartnerLogo key={index} delay={0.05 * index} />
          ))}
        </div>
      </div>
    </section>
  );
}