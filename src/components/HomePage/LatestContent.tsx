'use client';
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, ArrowRight, BookOpen, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LatestContent() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section className="container mx-auto py-16 md:px-8 px-4 md:pt-8 md:pb-14 text-[#00113D] bg-slate-100 dark:bg-[#00113D] dark:text-slate-50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay at the <span className="text-[#FFF00A] dark:text-[#FFF00A]">Cutting Edge</span></h2>
        <p className="text-xl text-[#00113D]/70 dark:text-slate-300 max-w-3xl mx-auto">
          Latest resources, courses, and community highlights to keep you ahead in the blockchain space.
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
          <Card className="dark:bg-[#00113D]/80 border-slate-200 dark:border-slate-700 h-full hover:border-[#00113D] dark:hover:border-[#FFF00A]/50 transition-colors">
            <div className="h-48 ">
              <img 
                src="/bg.jpg" 
                alt="Course thumbnail" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen size={16} className="text-[#00113D] dark:text-[#FFF00A]" />
                <span className="text-sm text-[#00113D] dark:text-[#FFF00A]">Featured Course</span>
              </div>
              <CardTitle className="text-xl">Advanced DeFi Protocol Development</CardTitle>
            </CardHeader>
            <CardContent className="text-[#00113D]/70 dark:text-slate-300">
              <p>Learn how to build, test, and deploy sophisticated DeFi protocols with enhanced security features.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#00113D] hover:bg-[#00113D]/90 dark:bg-[#FFF00A]/10 border dark:border-[#FFF00A]/30 gap-2 dark:hover:bg-[#FFF00A]/20 dark:text-[#FFF00A] text-white">Explore Course</Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="dark:bg-[#00113D]/80 border-slate-200 dark:border-slate-700 h-full hover:border-[#00113D] dark:hover:border-[#FFF00A]/50 transition-colors">
            <div className="h-48 ">
              <img 
               src="/bg1.jpg" 
                alt="Webinar thumbnail" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={16} className="text-[#00113D] dark:text-[#FFF00A]" />
                <span className="text-sm text-[#00113D] dark:text-[#FFF00A]">Upcoming Webinar</span>
              </div>
              <CardTitle className="text-xl">The Impact of Blockchain on Supply Chain Management</CardTitle>
            </CardHeader>
            <CardContent className="text-[#00113D]/70 dark:text-slate-300">
              <p>Join industry experts as they discuss real-world applications of blockchain in global supply chains.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#00113D] hover:bg-[#00113D]/90 dark:bg-[#FFF00A]/10 border dark:border-[#FFF00A]/30 gap-2 dark:hover:bg-[#FFF00A]/20 dark:text-[#FFF00A] text-white">Register Now</Button>
            </CardFooter>
          </Card>
        </motion.div>

        <motion.div variants={fadeIn}>
          <Card className="dark:bg-[#00113D]/80 border-slate-200 dark:border-slate-700 h-full dark:hover:border-[#FFF00A]/50 hover:border-[#00113D] transition-colors">
            <div className="h-48 ">
              <img 
                src="/bg2.jpg"  
                alt="Community highlight" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Trophy size={16} className="text-[#00113D] dark:text-[#FFF00A]" />
                <span className="text-sm text-[#00113D] dark:text-[#FFF00A]">Community Highlight</span>
              </div>
              <CardTitle className="text-xl">Hackathon Winners Secure $2M in Funding</CardTitle>
            </CardHeader>
            <CardContent className="text-[#00113D]/70 dark:text-slate-300">
              <p>Our recent hackathon winners have gone on to secure significant funding for their innovative blockchain solution.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#00113D] hover:bg-[#00113D]/90 dark:bg-[#FFF00A]/10 border dark:border-[#FFF00A]/30 gap-2 dark:hover:bg-[#FFF00A]/20 dark:text-[#FFF00A] text-white">Read Their Story</Button>
            </CardFooter>
          </Card>
        </motion.div>
      </motion.div>

      <div className="flex justify-center mt-12">
        <Button variant="outline" className="border-[#00113D] text-[#00113D] hover:bg-[#00113D]/10 dark:border-[#FFF00A] dark:text-[#FFF00A] dark:hover:bg-[#FFF00A]/10 gap-2">
          View All Resources
          <ArrowRight size={16} />
        </Button>
      </div>
    </section>
  );
}