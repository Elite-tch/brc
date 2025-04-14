'use client'
import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, FileText, Clock, Star, ChevronRight, Play, Check, ArrowRight, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

// This would typically be in a separate file
// Components for the course detail pages


export default function LearningPlatform() {
  const router = useRouter();
  const [videoPlaying, setVideoPlaying] = useState<string | null>(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };
  
  const courses = {
    video: [
      {
        id: "blockchain-101",
        title: "Fundamentals of Blockchain Technology",
        description: "A comprehensive introduction to blockchain concepts, architecture, and use cases.",
        duration: "4 hours",
        rating: "4.9",
        level: "Beginner",
        instructor: "Dr. Sarah Chen",
        videoId: "M9Jkl4d1xBE", // YouTube video ID 
       
        students: "2,543",
        lastUpdated: "April 2025",
        modules: 6,
        completion: "Certificate of Completion",
        testimonial: "This course transformed my understanding of blockchain fundamentals."
      },
      {
        id: "solidity-dev",
        title: "Solidity Smart Contract Development",
        description: "Learn to write, test and deploy secure smart contracts on Ethereum.",
        duration: "6 hours",
        rating: "4.8",
        level: "Intermediate",
        instructor: "Alex Rodriguez",
        videoId: "gyMwXuJrbJQ", // YouTube video ID
       
        students: "1,874",
        lastUpdated: "March 2025",
        modules: 8,
        completion: "Certificate & GitHub Portfolio",
        testimonial: "The practical exercises helped me build real-world smart contract skills."
      },
      {
        id: "zk-proofs",
        title: "Zero-Knowledge Proofs Masterclass",
        description: "Deep dive into ZK proofs and their applications in blockchain privacy.",
        duration: "5 hours",
        rating: "4.7",
        level: "Advanced",
        instructor: "Prof. Maya Johnson",
        videoId: "QJ010l-pBpE", // YouTube video ID
       
        students: "943",
        lastUpdated: "February 2025",
        modules: 7,
        completion: "Advanced Certificate & Digital Badge",
        testimonial: "Complex concepts explained in an intuitive way. Highly recommended!"
      }
    ],
    article: [
      {
        id: "dapp-building",
        title: "Building Decentralized Applications",
        description: "Step-by-step guide to creating your first dApp with React and Web3.js.",
        readTime: "15 min read",
        rating: "4.8",
        level: "Intermediate",
        author: "James Wilson",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
        publishDate: "March 15, 2025",
       
      },
      {
        id: "tokenomics",
        title: "Tokenomics: Designing Sustainable Blockchain Economies",
        description: "Learn the principles of creating balanced token economic models.",
        readTime: "12 min read",
        rating: "4.9",
        level: "Intermediate",
        author: "Elena Petrova",
        image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1802&q=80",
        publishDate: "February 28, 2025",
        
      },
      {
        id: "smart-contract-security",
        title: "Security Best Practices for Smart Contracts",
        description: "Avoid common vulnerabilities and implement robust security measures.",
        readTime: "20 min read",
        rating: "4.7",
        level: "Advanced",
        author: "Daniel Wang",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
        publishDate: "April 3, 2025",
       
      }
    ]
  };

  const handleEnroll = (courseId: string) => {
    router.push(`/courses/${courseId}`);
  };
  const handlePlayVideo = (videoId: string | null) => {
    router.push(`/courses/${videoId}`);
  };

  const getBadgeColor = (level: string) => {
    const colors: Record<string, string> = {
      "Beginner": "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30",
      "Intermediate": "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30",
      "Advanced": "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30"
    };
    return colors[level] || "bg-slate-500/20 text-slate-400 hover:bg-slate-500/30";
  };

  return (
    <section className="py-0 md:py-10 bg-white dark:bg-gradient-to-b dark:from-[#00113D]/95 dark:to-[#00113D]/95 text-[#00113D] dark:text-slate-100 px-4 md:px-8">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-16"
        >
          <div className="flex mb-8">
            <div className="text-center w-full mx-auto">
              <Badge className="mb-4 bg-blue-500/20 py-1 text-blue-400 hover:bg-blue-500/30">E-learning Platform</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#00113D] dark:text-slate-100">Learn Blockchain From Fundamentals to Advanced</h2>
              <p className="text-xl text-[#00113D]/70 dark:text-slate-300 max-w-4xl mx-auto">
                Our comprehensive learning paths guide you through every stage of your blockchain journey. Expert-led courses designed for real-world application.
              </p>
            </div>
          </div>
        </motion.div>

        <Tabs defaultValue="video" className="w-full">
          <div className="flex justify-between md:items-center flex-col md:flex-row gap-4 mb-6 md:mb-6">
            <TabsList className=" w-fit flex  items-center  gap-4">
              <TabsTrigger value="video" className="flex items-center px-3 w-fit gap-2 py-5 shadow-2xl border border-[#00113D] dark:border-blue-900">
                <Video size={20} />
                <span>Video Courses</span>
              </TabsTrigger>
              <TabsTrigger value="article" className="flex items-center px-3 w-fit gap-2 py-5 shadow-2xlborder border-[#00113D] dark:border-blue-900">
                <FileText size={20} />
                <span>Articles & Tutorials</span>
              </TabsTrigger>
            </TabsList>
            <Button className="mt-2 md:mt-0  gap-2 self-start md:self-auto shadow-2xl border border-[#00113D] dark:border-blue-900">
              View All Courses
              <ChevronRight size={16} />
            </Button>
          </div>

          <TabsContent value="video" className=""> 
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {courses.video.map((course, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="dar:bg-gradient-to-b dark:from-[#001A5C]/50 dark:to-[#000B29]/90 border-slate-700 h-full hover:border-blue-400/50 transition-all hover:shadow-lg hover:shadow-blue-900/20 overflow-hidden">
                    <div className="h-56 bg-gradient-to-r from-blue-900 to-purple-900 relative group">
                      {videoPlaying === course.videoId ? (
                        <iframe 
                          src={`https://www.youtube.com/embed/${course.videoId}?autoplay=1`}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:opacity-75 transition-opacity" />
                          <img 
                            src={`https://img.youtube.com/vi/${course.videoId}/maxresdefault.jpg`}
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                          <div 
                            className="absolute inset-0 flex items-center justify-center cursor-pointer"
                            onClick={() => handlePlayVideo(course.videoId)}
                          >
                            <div className="w-16 h-16   rounded-full flex items-center justify-center  transition-transform transform group-hover:scale-110">
                              <Play size={28} className="text-white ml-1" />
                            </div>
                          </div>
                          <div className="absolute bottom-3 left-3 flex items-center gap-2">
                            <Badge className={`${getBadgeColor(course.level)} text-sm font-medium`}>
                              {course.level}
                            </Badge>
                            <Badge className="bg-black/50 text-white border-none text-sm">
                              {course.duration}
                            </Badge>
                          </div>
                        </>
                      )}
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="dark:text-blue-400 text-blue-500">{course.instructor}</span>
                        <div className="flex items-center gap-1">
                          <Star size={16} className="text-yellow-400 fill-yellow-400" />
                          <span className="text-yellow-400">{course.rating}</span>
                          <span className="dark:text-slate-400 text-xs text-[#00113D]/70">({course.students} students)</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="dark:text-slate-300 text-[#00113D]/70 mb-4">{course.description}</p>
                      <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm mb-4">
                        <div className="flex items-center gap-1 dark:text-slate-300 text-[#00113D]/70">
                          <Clock size={14} />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 dark:text-slate-300 text-[#00113D]/70">
                          <Check size={14} />
                          <span>{course.modules} modules</span>
                        </div>
                        <div className="flex items-center gap-1 text-[#00113D]/70 dark:text-slate-300">
                          <FileText size={14} />
                          <span>{course.completion}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-end">
                       
                        <div className="text-xs text-[#00113D]/70 dark:text-slate-400">Updated {course.lastUpdated}</div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        onClick={() => handleEnroll(course.id)}
                        className="w-full dark:bg-blue-900/20  border border-blue-700/30 gap-2 dark:hover:bg-blue-900/30 bg-[#00113D] hover:bg-[#00113D]/90 text-white"
                      >
                        Enroll Now
                        <ArrowRight size={16} />
                      </Button>
                    </CardFooter>
                    
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="article">
            <motion.div 
              className="grid md:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {courses.article.map((article, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card className="dark:bg-gradient-to-b dark:from-[#001A5C]/50 dark:to-[#000B29]/90 border-slate-700 h-full hover:border-blue-400/50 transition-all hover:shadow-lg hover:shadow-blue-900/20 overflow-hidden">
                    <div className="h-56 overflow-hidden relative group">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 group-hover:opacity-75 transition-opacity" />
                      <img 
                        src={article.image}
                        alt={article.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2">
                        <Badge className={`${getBadgeColor(article.level)} text-sm font-medium`}>
                          {article.level}
                        </Badge>
                        <Badge className="bg-black/50 text-white border-none text-sm">
                          {article.readTime}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="dark:text-blue-400 text-blue-500">{article.author}</span>
                        <div className="flex items-center gap-1">
                          <Star size={16} className="text-yellow-400 fill-yellow-400" />
                          <span className="text-yellow-400">{article.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{article.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="dark:text-slate-300 text-[#00113D]/70 mb-4">{article.description}</p>
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-1 text-[#00113D] dark:text-slate-300">
                          <Clock size={14} />
                          <span>{article.readTime}</span>
                        </div>
                        <span className="dark:text-slate-400 text-[#00113D]">Published {article.publishDate}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        onClick={() => handleEnroll(article.id)}
                        className="w-full dark:bg-blue-900/20 bg-[#00113D] text-slate-100  border border-blue-700/30 hover:bg-[#00113D]/90 gap-2"
                      >
                        Read Article
                        <ArrowRight size={16} />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>

       
        <motion.div 
          className="mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="p-8 rounded-lg border border-blue-700/30 dark:bg-gradient-to-r dark:from-blue-900/30 dark:to-purple-900/30">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Become a Certified Blockchain Developer</h3>
                <p className="dark:text-slate-300 text-[#00113D]/70 mb-6">
                  Complete our comprehensive learning paths and earn industry-recognized certifications that showcase your blockchain expertise to potential employers and clients.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge className="py-1.5 px-3 bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30">
                    Ethereum Developer
                  </Badge>
                  <Badge className="py-1.5 px-3 bg-purple-500/20 text-purple-400 hover:bg-purple-500/30">
                    Smart Contract Security
                  </Badge>
                  <Badge className="py-1.5 px-3 bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30">
                    DeFi Architect
                  </Badge>
                  <Badge className="py-1.5 px-3 bg-red-500/20 text-red-400 hover:bg-red-500/30">
                    Zero-Knowledge Expert
                  </Badge>
                </div>
              </div>
              <div className="md:w-1/3">
                <Button size="lg" className="w-full dark:bg-gradient-to-r dark:from-blue-600 dark:to-purple-600 dark:hover:from-blue-700 dark:hover:to-purple-700 bg-[#00113D] text-slate-100  shadow-lg shadow-blue-900/20">
                  Explore Certification Paths
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

       
      </div>
    </section>
  );
}