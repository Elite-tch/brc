'use client';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  

  return (
    <section className="container mx-auto text-[#00113D] bg-slate-50 dark:bg-[#00113D] dark:text-slate-50  ">
      <div className="flex flex-col lg:flex-row md:gap-12 ">
        <motion.div 
          className="flex-1 pb-12 pt-24 md:py-24 md:pl-8 px-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Badge className="my-4 py-1 bg-blue-500/20 text-blue-400  hover:bg-blue-500/30">Join 15,000+ members</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Connecting Knowledge, Talent, and Opportunities in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF00A] to-[#FFF00A]/70">Blockchain</span>
          </h1>
          <p className="text-[#00113D]/70 dark:text-slate-300 mb-8 max-w-2xl">
            Blockchain Revolution Community is the premier platform empowering developers and builders with the education, connections, and opportunities needed to thrive in Web3. Join thousands of members already transforming the future of decentralized technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" variant="outline" className="bg-[#FFF00A] hover:bg-[#00113D] gap-2 hover:text-slate-100 dark:text-[#00113D] dark:hover:text-slate-100">
              Join Our Community
              <ArrowRight size={16} />
            </Button>
            <Button size="lg" variant="outline" className="bg-[#00113D] text-slate-100 hover:bg-[#FFF00A] hover:text-[#00113D] gap-2">
              Explore Learning Paths   <ArrowRight size={16} />
            </Button>
            
          </div>
        </motion.div>
        <motion.div 
          className="flex-1 md:relative pb-8  md:py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="md:relative h-full w-full">
            <div className="md:absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 md:rounded-lg backdrop-blur-sm border border-white/10">
              <img 
                src="/bg.jpg" 
                alt="Blockchain technology visualization" 
                className="w-full h-full object-cover rounded-lg mix-blend-overlay"
              />
            </div>
            <div className="absolute md:-bottom-6 hidden md:block right-0 -bottom-80 w-48 h-48 bg-gradient-to-tr from-blue-600/30 to-purple-600/30  backdrop-blur-sm border border-white/10 z-10">
              <img 
                src="/bg2.jpg" 
                alt="Blockchain code" 
                className="w-full h-full object-cover mix-blend-overlay"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

