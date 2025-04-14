// hero.tsx
"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#00113D] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#00113D] dark:text-white md:w-3/5 text-center pt-16 mx-auto pb-12">
              Our Journey to <span className="text-[#FFF00A]">Revolutionize</span> Blockchain Education
            </h1>
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
           
            <p className="text-lg text-slate-700 dark:text-slate-200 mb-8 leading-relaxed">
              Blockchain Revolution Community was born from a simple observation: while blockchain technology promised to transform industries, there was a massive gap between enthusiastic learners and real-world applications.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-200 mb-8 leading-relaxed">
              Founded in 2022 by a team of blockchain developers, educators, and industry veterans, we set out to create more than just another learning platform. Our vision was a comprehensive ecosystem where knowledge, talent, and opportunities converge.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-200 mb-8 leading-relaxed">
              Today, we've grown into a global community of over 15,000 members, united by our passion for blockchain innovation and our commitment to democratizing access to this transformative technology.
            </p>
            <motion.div
              className="mt-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="#values" 
                className="flex items-center gap-2 text-[#00113D] dark:text-[#FFF00A] font-medium"
              >
                <span>Discover our values</span>
                <ChevronDown className="animate-bounce" size={20} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-[#FFF00A] dark:border-[#FFF00A]/80">
              <Image 
                src="/bg2.jpg" 
                alt="Blockchain community collaboration" 
                width={800} 
                height={600} 
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00113D]/60 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute -z-10 top-0 right-0 w-1/2 h-1/2 bg-[#FFF00A]/10 rounded-bl-full"></div>
      <div className="absolute -z-10 bottom-0 left-0 w-1/3 h-1/3 bg-[#00113D]/5 dark:bg-[#FFF00A]/5 rounded-tr-full"></div>
    </section>
  );
}