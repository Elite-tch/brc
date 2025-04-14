// team.tsx
"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Globe } from "lucide-react";
import Image from "next/image";

type TeamMemberProps = {
  name: string;
  role: string;
  bio: string;
  index: number;
};

function TeamMember({ name, role, bio, index }: TeamMemberProps) {
  return (
    <motion.div 
      className="w-full sm:w-1/2 lg:w-1/3 p-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      <div className="bg-white dark:bg-[#00113D]/60 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          <div className="aspect-w-4 aspect-h-3 relative h-64 w-full">
            <Image 
              src="/bg1.jpg" 
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#00113D] to-transparent opacity-60"></div>
          <div className="absolute bottom-0 left-0 p-4 w-full">
            <h3 className="text-xl font-bold text-white">{name}</h3>
            <p className="text-[#FFF00A] font-medium">{role}</p>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-slate-700 dark:text-slate-300 mb-4">{bio}</p>
          
          <div className="flex space-x-3 mt-4">
            <motion.a 
              href="#" 
              className="p-2 rounded-full bg-slate-100 dark:bg-[#00113D] text-[#00113D] dark:text-[#FFF00A] hover:bg-[#FFF00A] dark:hover:bg-[#FFF00A] hover:text-[#00113D] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a 
              href="#" 
              className="p-2 rounded-full bg-slate-100 dark:bg-[#00113D] text-[#00113D] dark:text-[#FFF00A] hover:bg-[#FFF00A] dark:hover:bg-[#FFF00A] hover:text-[#00113D] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Twitter size={18} />
            </motion.a>
            <motion.a 
              href="#" 
              className="p-2 rounded-full bg-slate-100 dark:bg-[#00113D] text-[#00113D] dark:text-[#FFF00A] hover:bg-[#FFF00A] dark:hover:bg-[#FFF00A] hover:text-[#00113D] transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Globe size={18} />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Team() {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "Founder & CEO",
      bio: "With 10+ years in blockchain development and a background in computer science education, Jane leads our strategic vision. Previously a lead developer at Ethereum Foundation, she's passionate about lowering barriers to entry in the blockchain space."
    },
    {
      name: "John Smith",
      role: "CTO",
      bio: "A former senior engineer at ConsenSys, John brings extensive experience in blockchain infrastructure and scalability solutions. He oversees our technical initiatives and mentorship programs."
    },
    {
      name: "Sarah Wilson",
      role: "Head of Education",
      bio: "With a PhD in Distributed Systems and experience teaching at MIT, Sarah designs our educational pathways and ensures technical accuracy across all learning materials."
    },
    {
      name: "Michael Chen",
      role: "Community Lead",
      bio: "Previously building developer communities at Polkadot, Michael fosters engagement and collaboration across our global community of blockchain enthusiasts."
    },
    {
      name: "Aisha Patel",
      role: "Head of Partnerships",
      bio: "Aisha leverages her background in fintech partnerships to forge relationships with industry leaders, creating opportunities for our community members."
    },
    {
      name: "David Kim",
      role: "Lead Developer",
      bio: "A full-stack developer with extensive experience in Web3, David leads the development of our platform and marketplace infrastructure."
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
            Meet the <span className="text-[#FFF00A]">Builders</span>
          </h2>
          <div className="w-24 h-1 bg-[#FFF00A] mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our diverse team brings together expertise from blockchain development, education, and community building.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap -mx-4">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}