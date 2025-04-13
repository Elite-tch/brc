'use client'
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, Briefcase } from "lucide-react";

export default function ValueProposition() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="container text-[#00113D] mx-auto py-16 md:py-10 px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Complete Blockchain Ecosystem</h2>
        <p className="text-xl text-[#00113D]/70 max-w-3xl mx-auto">
          Discover how our platform brings together education, talent, and community to build the future of Web3.
        </p>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={fadeIn}>
        <Card className=" border-slate-700 pt-6 shadow-xl hover:shadow-2xl h-full  transition-colors">
            <CardHeader className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                <BookOpen size={28} className="text-blue-400" />
              </div>
              <CardTitle className="text-2xl">E-learning Platform</CardTitle>
            </CardHeader>
            <CardContent className=" text-center text-[#00113D]/70">
              <p>From blockchain fundamentals to advanced smart contract development, our comprehensive learning paths guide you through every stage of your blockchain journey. Expert-led courses designed for real-world application.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
        <Card className=" border-slate-700 pt-6 shadow-xl hover:shadow-2xl h-full  transition-colors">
            <CardHeader className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                <Briefcase size={28} className="text-blue-400" />
              </div>
              <CardTitle className="text-2xl">Talent Marketplace</CardTitle>
            </CardHeader>
            <CardContent className=" text-center text-[#00113D]/70">
              <p>Connect with verified blockchain talent or showcase your skills to innovative projects. Our curated marketplace matches the right skills with the right opportunities, accelerating growth for both talent and founders.</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className=" border-slate-700 pt-6 shadow-xl hover:shadow-2xl h-full  transition-colors">
            <CardHeader className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
                <Users size={28} className="text-blue-400" />
              </div>
              <CardTitle className="text-2xl">Community-Driven Approach</CardTitle>
            </CardHeader>
            <CardContent className=" text-center text-[#00113D]/70">
              <p>More than just a platform—we're a community of builders, thinkers, and innovators. Share insights, collaborate on projects, and grow your network with peers who share your passion for blockchain.</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
