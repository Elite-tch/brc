// impact.tsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Users, Briefcase, DollarSign, Rocket } from "lucide-react";

type MetricCardProps = {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
};

function MetricCard({ icon, value, label, delay }: MetricCardProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, delay }
    }
  };

  return (
    <motion.div 
      ref={ref}
      className="w-full sm:w-1/2 lg:w-1/4 p-4"
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div className="bg-white dark:bg-[#00113D]/60 rounded-xl p-6 h-full shadow-lg border-b-4 border-[#FFF00A]">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 p-3 rounded-full bg-[#00113D]/10 dark:bg-[#FFF00A]/10 text-[#00113D] dark:text-[#FFF00A]">
            {icon}
          </div>
          <motion.h3 
            className="text-3xl md:text-4xl font-bold mb-2 text-[#00113D] dark:text-[#FFF00A]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: delay + 0.3 }}
          >
            {value}
          </motion.h3>
          <p className="text-slate-600 dark:text-slate-300">{label}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Impact() {
  const metrics = [
    {
      icon: <Users size={28} />,
      value: "15,000+",
      label: "Active community members across 75+ countries"
    },
    {
      icon: <Briefcase size={28} />,
      value: "85%",
      label: "Of course graduates report career advancement"
    },
    {
      icon: <DollarSign size={28} />,
      value: "$15M+",
      label: "In cumulative funding secured by founders through our network"
    },
    {
      icon: <Rocket size={28} />,
      value: "200+",
      label: "Blockchain projects launched with talent from our marketplace"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-[#00113D]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#00113D] dark:text-white">
            Our <span className="text-[#FFF00A]">Impact</span> By the Numbers
          </h2>
          <div className="w-24 h-1 bg-[#FFF00A] mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            We're proud of what our community has accomplished together.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap -mx-4">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              icon={metric.icon}
              value={metric.value}
              label={metric.label}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}