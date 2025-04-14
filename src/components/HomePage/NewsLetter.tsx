'use client';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState('');
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className=" shadow-2xl md:px-8 px-4 dark:bg-gradient-to-r dark:from-blue-900/30 dark:to-purple-900/30 py-6 md:py-14 text-[#00113D] bg-slate-50 dark:bg-[#00113D] dark:text-slate-50">
      <div className="container mx-auto">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Revolution</h2>
          <p className="text-xl dark:text-slate-300 mb-8 text-[#00113D]/70">
            Get exclusive blockchain insights, early access to new courses, and community opportunities delivered straight to your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border-slate-700 text-slate-200 outline-none !focus:ring-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="bg-[#00113D] hover:bg-[#00113D]/95 text-slate-100 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-[#00113D]/70 dark:text-slate-400 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}