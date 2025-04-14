'use client';
import { motion } from "framer-motion";
import { Users, BookOpen, Briefcase, Trophy } from "lucide-react";

export default function CommunityMetrics() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const metrics = [
    { icon: <Users size={28} className="dark:text-[#FFF00A]" />, number: "15,000+", label: "Active Community Members" },
    { icon: <BookOpen size={28} className="dark:text-[#FFF00A]" />, number: "200+", label: "Specialized Blockchain Courses" },
    { icon: <Briefcase size={28} className="dark:text-[#FFF00A]" />, number: "500+", label: "Successful Talent Placements" },
    { icon: <Trophy size={28} className="dark:text-[#FFF00A]" />, number: "75+", label: "Projects Launched Through Our Platform" }
  ];

  return (
    <section className="text-[#00113D] bg-slate-50 dark:bg-[#00113D] dark:text-slate-50 py-16 md:py-14 md:px-8 px-4">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Building the Future Together</h2>
          <p className="text-xl text-[#00113D]/70 dark:text-slate-300 max-w-3xl mx-auto">
            Join thousands of blockchain enthusiasts who are already part of our thriving ecosystem.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {metrics.map((metric, index) => (
            <motion.div 
              key={index} 
              variants={fadeIn}
              className="dark:bg-[#00113D]/95 shadow-md rounded-lg p-8 text-center border border-slate-600 dark:hover:border-[#FFF00A]/50 hover:border-[#00113D]/20 transition-colors"
            >
              <div className="mb-4 flex justify-center">{metric.icon}</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2 dark:text-[#FFF00A]">{metric.number}</h3>
              <p className="dark:text-slate-300 text-[#00113D]/70">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>       
      </div>
    </section>
  );
}