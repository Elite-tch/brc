// values.tsx
"use client";

import { motion } from "framer-motion";
import { BookOpen, Users, Lightbulb, Shield, HandHelping, MessageSquare, RefreshCw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

type ValueCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
};

function ValueCard({ icon, title, description, delay }: ValueCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
     
      className="w-full md:w-1/2 lg:w-1/3 p-3"
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg dark:shadow-[#FFF00A]/20 border-t-4 hover:border-t-[#FFF00A]"> 
        <CardHeader>
          <motion.div 
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-3 inline-flex p-3 rounded-lg bg-[#00113D]/10 dark:bg-[#FFF00A]/10 text-[#00113D] dark:text-[#FFF00A]"
          >
            {icon}
          </motion.div>
          <CardTitle className="text-xl font-bold text-[#00113D] dark:text-white">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base text-slate-600 dark:text-slate-300">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Values() {
  const values = [
    {
      icon: <BookOpen size={24} />,
      title: "Education & Empowerment",
      description: "We believe knowledge should be accessible to all. Our platform breaks down complex blockchain concepts into digestible learning paths, empowering everyone—regardless of background—to participate in the decentralized future."
    },
    {
      icon: <Users size={24} />,
      title: "Inclusivity and Collaboration",
      description: "Blockchain is global, and so is our community. We celebrate diverse perspectives and foster an environment where collaboration transcends geographical, cultural, and technical boundaries."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Innovation and Growth",
      description: "The blockchain space evolves rapidly. We embrace this change, continuously updating our resources and encouraging our community to experiment, learn from failure, and push the boundaries of what's possible."
    },
    {
      icon: <Shield size={24} />,
      title: "Integrity and Trust",
      description: "In a space built on trustless systems, human integrity remains essential. We prioritize transparency in our operations, authenticity in our communications, and reliability in our platform."
    },
    {
      icon: <HandHelping size={24} />,
      title: "Support and Mentorship",
      description: "No one succeeds alone. Our mentorship programs connect beginners with experienced practitioners, creating pathways for sustainable growth and collective advancement."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Community-driven Excellence",
      description: "Our community isn't just our audience—it's our greatest asset. We actively incorporate member feedback into everything we do, ensuring our platform evolves to meet real needs."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Adaptability and Resilience",
      description: "Blockchain technology faces both technical and regulatory challenges. We foster resilience, teaching our community to adapt to changing landscapes while staying true to the core principles of decentralization."
    }
  ];

  return (
    <section id="values" className="py-20 bg-slate-100 dark:bg-[#00113D]/80">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#00113D] dark:text-white">
            The Principles That <span className="text-[#FFF00A]">Guide Us</span>
          </h2>
          <div className="w-24 h-1 bg-[#FFF00A] mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our core values shape everything we do, from building our platform to nurturing our community.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap -mx-3">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}