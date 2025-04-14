// app/courses/[courseId]/page.tsx
'use client'
import Navbar from '@/components/HomePage/Navbar';
import { notFound } from 'next/navigation';
import { useEffect, useState, use } from 'react';
import { Video, FileText, Clock, Star, Check, Users, Bookmark, ChevronLeft, Play, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import { Toaster, toast } from 'sonner';

// This would ideally come from a database or API
const courseData = {
  video: {
    "blockchain-101": {
      id: "blockchain-101",
      title: "Fundamentals of Blockchain Technology",
      description: "A comprehensive introduction to blockchain concepts, architecture, and use cases.",
      longDescription: "This course provides a deep dive into blockchain technology, covering everything from the basic principles to advanced concepts. You'll learn about distributed ledger technology, consensus mechanisms, cryptographic foundations, and real-world applications across various industries.",
      duration: "4 hours",
      rating: "4.9",
      level: "Beginner",
      instructor: "Dr. Sarah Chen",
      instructorBio: "Blockchain researcher with 10+ years experience. Former lead architect at ChainTech.",
      videoId: "M9Jkl4d1xBE",
      
      price: "Free",
      students: "2,543",
      lastUpdated: "April 2025",
      modules: 6,
      completion: "Certificate of Completion",
      testimonial: "This course transformed my understanding of blockchain fundamentals.",
      curriculum: [
        {
          title: "Introduction to Blockchain",
          duration: "45 min",
          lessons: [
            "What is Blockchain?",
            "History of Distributed Ledgers",
            "Key Characteristics"
          ]
        },
        {
          title: "Cryptographic Foundations",
          duration: "1 hour",
          lessons: [
            "Hash Functions",
            "Public Key Cryptography",
            "Digital Signatures"
          ]
        },
        // More modules...
      ],
      requirements: [
        "Basic computer literacy",
        "Interest in technology",
        "No prior blockchain knowledge required"
      ],
      whatYouWillLearn: [
        "Understand core blockchain concepts",
        "Explain different consensus mechanisms",
        "Identify use cases for blockchain",
        "Evaluate blockchain solutions"
      ]
    },

    "solidity-dev": {
      id: "solidity-dev",
      title: "Solidity Development Masterclass",
      description: "Learn to build smart contracts with Solidity from the ground up.",
      longDescription: "Master the art of Solidity programming in this comprehensive course. You'll learn how to write, test, and deploy smart contracts on Ethereum and other EVM-compatible blockchains, with hands-on projects and real-world examples.",
      duration: "8 hours",
      rating: "4.7",
      level: "Intermediate",
      instructor: "Mark Johnson",
      instructorBio: "Smart contract developer and auditor. Lead developer at EthWorks.",
      videoId: "gyMwXuJrbJQ",
      price: "$49.99",
      students: "1,876",
      lastUpdated: "March 2025",
      modules: 10,
      completion: "Certificate of Completion",
      testimonial: "This course helped me land my first blockchain developer job!",
      curriculum: [
        {
          title: "Solidity Basics",
          duration: "1 hour",
          lessons: [
            "Understanding Smart Contracts",
            "Solidity Syntax Fundamentals",
            "Data Types and Variables"
          ]
        },
        {
          title: "Writing Your First Contract",
          duration: "1.5 hours",
          lessons: [
            "Contract Structure",
            "Functions and Modifiers",
            "Events and Logging"
          ]
        },
        // More modules...
      ],
      requirements: [
        "Basic programming knowledge",
        "Understanding of blockchain concepts",
        "Ethereum wallet setup"
      ],
      whatYouWillLearn: [
        "Write secure smart contracts",
        "Test and deploy to Ethereum",
        "Implement token standards",
        "Build DeFi applications"
      ]
    },

    "zk-proofs": {
      id: "zk-proofs",
      title: "Zero-Knowledge Proofs: Theory & Practice",
      description: "Explore the cutting-edge world of zero-knowledge cryptography.",
      longDescription: "Dive into the fascinating world of zero-knowledge proofs and their applications in blockchain privacy. This course covers the theoretical foundations and practical implementations of various ZK protocols including SNARKs, STARKs, and Bulletproofs.",
      duration: "6 hours",
      rating: "4.8",
      level: "Advanced",
      instructor: "Dr. Elena Rodriguez",
      instructorBio: "Cryptography researcher and ZK specialist with publications in leading cryptography conferences.",
      videoId: "fOGdb1CTu5c",
      price: "$79.99",
      students: "943",
      lastUpdated: "February 2025",
      modules: 8,
      completion: "Certificate of Completion",
      testimonial: "The best technical explanation of ZK proofs I've found anywhere.",
      curriculum: [
        {
          title: "Mathematical Foundations",
          duration: "1 hour",
          lessons: [
            "Group Theory Primer",
            "Elliptic Curve Cryptography",
            "Commitment Schemes"
          ]
        },
        {
          title: "ZK-SNARKs Deep Dive",
          duration: "2 hours",
          lessons: [
            "Understanding the Proving System",
            "Trusted Setup",
            "Implementation Challenges"
          ]
        },
        // More modules...
      ],
      requirements: [
        "Strong mathematical background",
        "Understanding of cryptographic primitives",
        "Prior blockchain development experience"
      ],
      whatYouWillLearn: [
        "Understand ZK proof systems",
        "Implement privacy-preserving applications",
        "Evaluate different ZK technologies",
        "Build on ZK rollups"
      ]
    },
    // Other video courses...
  },
  article: {
    "dapp-building": {
      id: "dapp-building",
      title: "Building Decentralized Applications",
      description: "Step-by-step guide to creating your first dApp with React and Web3.js.",
      longDescription: "In this comprehensive guide, you'll learn how to build a complete decentralized application from scratch. We'll cover everything from setting up your development environment to deploying your dApp on the Ethereum blockchain.",
      readTime: "15 min read",
      rating: "4.8",
      level: "Intermediate",
      author: "James Wilson",
      authorBio: "Senior dApp developer with 5+ years of experience in Ethereum development.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      publishDate: "March 15, 2025",
      price: "Free",
      content: [
        {
          type: "section",
          title: "Introduction to dApps",
          text: "Decentralized applications (dApps) are applications that run on a peer-to-peer network of computers rather than a single computer..."
        },
        {
          type: "section",
          title: "Setting Up the Development Environment",
          text: "To get started, you'll need Node.js installed on your machine. We recommend using the latest LTS version..."
        },
        // More content sections...
      ]
    },

    "tokenomics": {
      id: "tokenomics",
      title: "Tokenomics: Designing Sustainable Token Economies",
      description: "Learn the principles of creating effective token economic models for blockchain projects.",
      longDescription: "This in-depth article explores the fundamentals of tokenomics - the economics of blockchain tokens. You'll learn how to design token models that align incentives, create value, and ensure long-term sustainability.",
      readTime: "20 min read",
      rating: "4.9",
      level: "Intermediate",
      author: "Dr. Alex Chang",
      authorBio: "Economist specializing in token economics. Advisor to multiple successful crypto projects.",
      image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1802&q=80",
      publishDate: "April 2, 2025",
      price: "$9.99",
      content: [
        {
          type: "section",
          title: "Fundamentals of Token Design",
          text: "Token economics, or 'tokenomics', is the study of economic systems built around blockchain tokens. A well-designed token model..."
        },
        {
          type: "section",
          title: "Utility vs Security Tokens",
          text: "Understanding the distinction between utility and security tokens is crucial for both regulatory compliance and effective economic design..."
        },
        // More content sections...
      ]
    },

   "smart-contract-security": {
      id: "smart-contract-security",
      title: "Smart Contract Security Best Practices",
      description: "Essential security patterns and common vulnerabilities in smart contract development.",
      longDescription: "Security is paramount in smart contract development. This comprehensive guide covers the most critical vulnerabilities and attack vectors, along with battle-tested patterns to secure your contracts against exploits.",
      readTime: "25 min read",
      rating: "4.8",
      level: "Advanced",
      author: "Sarah Martinez",
      authorBio: "Smart contract auditor with over 50 security reviews of major protocols. Previously security researcher at ConsenSys Diligence.",
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      publishDate: "March 21, 2025",
      price: "$14.99",
      content: [
        {
          type: "section",
          title: "Common Vulnerabilities",
          text: "The immutable nature of blockchain makes security especially critical for smart contracts. Once deployed, vulnerabilities cannot be easily patched..."
        },
        {
          type: "section",
          title: "Reentrancy Attacks",
          text: "Reentrancy remains one of the most dangerous vulnerabilities, responsible for the infamous DAO hack and many others since then..."
        },
        // More content sections...
      ]
    },
    // Other articles...
  }
};

export default function CourseDetailPage({ params }: { params: Promise<{ courseId: string }> }) {
  const { courseId } = use(params); // Unwrap the params Promise

  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [lessonVideoModal, setLessonVideoModal] = useState<{
    isOpen: boolean;
    title: string;
    videoId: string;
  }>({
    isOpen: false,
    title: '',
    videoId: ''
  });

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    const allCourses = { ...courseData.video, ...courseData.article };
    const foundCourse = allCourses[courseId as keyof typeof allCourses];

    if (foundCourse) {
      setCourse(foundCourse);
    } else {
      notFound();
    }
    setLoading(false);
  }, [courseId]);

  if (loading) {
    return <div className="min-h-screen bg-gradient-to-b from-[#00113D]/95 to-[#000B29] text-slate-100 p-8">Loading...</div>;
  }

  if (!course) {
    return notFound();
  }

  const isVideoCourse = 'videoId' in course;

  const getBadgeColor = (level: string) => {
    const colors: Record<string, string> = {
      "Beginner": "dark:bg-[#FFF00A]/20 dark:text-[#FFF00A] dark:hover:bg-[#FFF00A]/30 text-slate-100 bg-[#00113D]",
      "Intermediate": "dark:bg-[#FFF00A]/20 dark:text-[#FFF00A] dark:hover:bg-[#FFF00A]/30 text-slate-100 bg-[#00113D]",
      "Advanced":"dark:bg-[#FFF00A]/20 dark:text-[#FFF00A] dark:hover:bg-[#FFF00A]/30 text-slate-100 bg-[#00113D]"
    };
    return colors[level] || "bg-slate-500/20 text-slate-400 hover:bg-slate-500/30";
  };

  const handleEnrollNow = () => {
    setIsEnrolled(true);
    toast.success(`Successfully Enrolled! You've been enrolled in "${course.title}". ${course.price === "Free" ? "Enjoy the course!" : "Thank you for your purchase!"}`);
  };

  const handleSaveForLater = () => {
    setIsSaved(!isSaved);
    toast(isSaved ? "Removed from Saved Courses" : "Added to Saved Courses", {
      description: isSaved ? "The course has been removed from your saved list." : "The course has been added to your saved list.",
      duration: 3000
    });
  };

  const openLessonVideo = (lessonTitle: string) => {
    setLessonVideoModal({
      isOpen: true,
      title: lessonTitle,
      videoId: course.videoId // Using the course's video for all lessons
    });
  };

  const closeLessonVideo = () => {
    setLessonVideoModal({
      isOpen: false,
      title: '',
      videoId: ''
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-[#00113D]/95 dark:to-[#000B29] text-[#00113D] dark:text-slate-100">
      <Navbar />
      <div className="container mx-auto px-4 pb-8 pt-24">
        <Button 
          onClick={() => router.back()} 
          variant="ghost" 
          className="mb-6 text-[#00113D]/80 dark:text-[#FFF00A] dark:hover:text-[#FFF00A]/80"
        >
          <ChevronLeft className="mr-2" /> Back to Courses
        </Button>

        {/* Course Header */}
        <div className="bg-white dark:bg-gradient-to-r from-[#00113D]/90 to-[#00113D]/95 rounded-lg p-6 mb-8 shadow-xl border border-[#00113D]/10 dark:border-[#FFF00A]/20">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <Badge className={`${getBadgeColor(course.level)} mb-4`}>
                {course.level}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#00113D] dark:text-white">{course.title}</h1>
              <p className="text-xl text-[#00113D]/70 dark:text-slate-300 mb-6">{course.longDescription || course.description}</p>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="text-[#FFF00A] fill-[#FFF00A]" size={18} />
                  <span>{course.rating}</span>
                  <span className="text-[#00113D]/50 dark:text-slate-400 ml-1">({course.students || '500+'} students)</span>
                </div>
                {isVideoCourse ? (
                  <div className="flex items-center gap-1">
                    <Video size={18} className="text-[#00113D] dark:text-[#FFF00A]" />
                    <span>{course.duration}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <FileText size={18} className="text-[#00113D] dark:text-[#FFF00A]" />
                    <span>{course.readTime}</span>
                  </div>
                )}
                {isVideoCourse && (
                  <div className="flex items-center gap-1">
                    <Check size={18} className="text-[#00113D] dark:text-[#FFF00A]" />
                    <span>{course.modules} modules</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button 
                  className={`px-6 py-3 text-lg ${isEnrolled 
                    ? 'bg-green-500 hover:bg-green-600 text-white' 
                    : 'bg-[#00113D] hover:bg-[#00113D]/90 text-[#FFF00A] border border-[#FFF00A]/20'}`}
                  onClick={handleEnrollNow}
                  disabled={isEnrolled}
                >
                  {isEnrolled ? 'Enrolled' : `Enroll Now - Free`}
                </Button>
                <Button 
                  variant="outline" 
                  className={`border-[#00113D] dark:border-[#FFF00A]/30 hover:bg-[#00113D]/5 dark:hover:bg-[#FFF00A]/10 px-6 py-3 text-lg ${isSaved 
                    ? 'bg-[#00113D]/5 text-[#00113D] dark:bg-[#FFF00A]/10 dark:text-[#FFF00A]' 
                    : 'text-[#00113D] dark:text-[#FFF00A]'}`}
                  onClick={handleSaveForLater}
                >
                  <Bookmark className={`mr-2 ${isSaved ? 'fill-[#00113D] dark:fill-[#FFF00A]' : ''}`} /> 
                  {isSaved ? 'Saved' : 'Save for Later'}
                </Button>
              </div>
            </div>

            <div className="lg:w-1/3">
              {isVideoCourse ? (
                <div className="aspect-video bg-black rounded-lg overflow-hidden border-2 border-[#FFF00A]/30">
                  {isVideoPlaying ? (
                    <iframe 
                      src={`https://www.youtube.com/embed/${course.videoId}?autoplay=1`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="w-full h-full relative cursor-pointer">
                      <img 
                        src={`https://img.youtube.com/vi/${course.videoId}/maxresdefault.jpg`}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <div 
                        className="absolute inset-0 flex items-center justify-center cursor-pointer"
                        onClick={() => setIsVideoPlaying(true)}
                      >
                        <div className="w-16 h-16 bg-[#00113D]/80 rounded-full flex items-center justify-center transition-transform transform hover:scale-110 border ">
                          <Play size={28} className="text-slate-100 ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="h-full rounded-lg overflow-hidden border-2 border-[#FFF00A]/30">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Course Tabs */}
        <div className="mb-8">
          <div className="border-b border-[#00113D]/20 dark:border-[#FFF00A]/20">
            <nav className="flex space-x-4 md:space-x-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === 'overview' 
                  ? 'border-[#FFF00A] text-[#00113D] dark:text-[#FFF00A]' 
                  : 'border-transparent text-[#00113D]/60 dark:text-slate-400 hover:text-[#00113D] dark:hover:text-slate-300'}`}
              >
                Overview
              </button>
              {isVideoCourse && (
                <button
                  onClick={() => setActiveTab('curriculum')}
                  className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === 'curriculum' 
                    ? 'border-[#FFF00A] text-[#00113D] dark:text-[#FFF00A]' 
                    : 'border-transparent text-[#00113D]/60 dark:text-slate-400 hover:text-[#00113D] dark:hover:text-slate-300'}`}
                >
                  Curriculum
                </button>
              )}
              <button
                onClick={() => setActiveTab('instructor')}
                className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === 'instructor' 
                  ? 'border-[#FFF00A] text-[#00113D] dark:text-[#FFF00A]' 
                  : 'border-transparent text-[#00113D]/60 dark:text-slate-400 hover:text-[#00113D] dark:hover:text-slate-300'}`}
              >
                {isVideoCourse ? 'Instructor' : 'Author'}
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === 'reviews' 
                  ? 'border-[#FFF00A] text-[#00113D] dark:text-[#FFF00A]' 
                  : 'border-transparent text-[#00113D]/60 dark:text-slate-400 hover:text-[#00113D] dark:hover:text-slate-300'}`}
              >
                Reviews
              </button>
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-[#00113D] dark:text-[#FFF00A]">About This {isVideoCourse ? 'Course' : 'Article'}</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-[#00113D]/70 dark:text-slate-300 mb-6">{course.longDescription}</p>
                  
                  {isVideoCourse && (
                    <>
                      <h3 className="text-xl font-semibold mb-4 text-[#00113D] dark:text-white">What You'll Learn</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                        {course.whatYouWillLearn?.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="text-[#00113D] dark:text-[#FFF00A] mt-1 flex-shrink-0" size={18} />
                            <span className="text-[#00113D]/80 dark:text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <h3 className="text-xl font-semibold mb-4 text-[#00113D] dark:text-white">Requirements</h3>
                      <ul className="mb-8 space-y-2">
                        {course.requirements?.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-[#00113D]/60 dark:text-[#FFF00A]/80">•</span>
                            <span className="text-[#00113D]/80 dark:text-slate-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {!isVideoCourse && (
                    <div className="space-y-6">
                      {course.content?.map((section: any, index: number) => (
                        <div key={index} className="mb-6">
                          <h3 className="text-xl font-semibold mb-3 text-[#00113D] dark:text-white">{section.title}</h3>
                          <p className="text-[#00113D]/70 dark:text-slate-300">{section.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && isVideoCourse && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-[#00113D] dark:text-[#FFF00A]">Course Curriculum</h2>
                <div className="border border-[#00113D]/20 dark:border-[#FFF00A]/20 rounded-lg overflow-hidden">
                  {course.curriculum?.map((module: any, index: number) => (
                    <div key={index} className="border-b border-[#00113D]/20 dark:border-[#FFF00A]/20 last:border-b-0">
                      <div className="p-4 bg-[#00113D]/5 dark:bg-[#00113D]/80">
                        <h3 className="font-semibold flex items-center justify-between text-[#00113D] dark:text-white">
                          <span>Module {index + 1}: {module.title}</span>
                          <span className="text-sm text-[#00113D]/60 dark:text-[#FFF00A]/80">{module.duration}</span>
                        </h3>
                      </div>
                      <div className="bg-white dark:bg-[#00113D]/30">
                        {module.lessons?.map((lesson: string, lessonIndex: number) => (
                          <div 
                            key={lessonIndex} 
                            className="p-4 border-t border-[#00113D]/10 dark:border-[#FFF00A]/10 flex items-center justify-between hover:bg-[#00113D]/5 dark:hover:bg-[#FFF00A]/5 cursor-pointer"
                            onClick={() => openLessonVideo(lesson)}
                          >
                            <div className="flex items-center gap-3">
                              <Play className="text-[#00113D] dark:text-[#FFF00A]" size={16} />
                              <span className="text-[#00113D]/80 dark:text-white">{lesson}</span>
                            </div>
                            <span className="text-sm text-[#00113D]/60 dark:text-[#FFF00A]/80">5 min</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'instructor' && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-[#00113D] dark:text-[#FFF00A]">{isVideoCourse ? 'Instructor' : 'Author'}</h2>
                <div className="flex items-start md:flex-row flex-col gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#00113D] to-[#00113D]/70 flex items-center justify-center text-2xl font-bold text-[#FFF00A]">
                    {isVideoCourse 
                      ? course.instructor?.charAt(0) + course.instructor?.split(' ')[1]?.charAt(0)
                      : course.author?.charAt(0) + course.author?.split(' ')[1]?.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#00113D] dark:text-white">
                      {isVideoCourse ? course.instructor : course.author}
                    </h3>
                    <p className="text-[#00113D]/70 dark:text-slate-300 mb-4">
                      {isVideoCourse ? course.instructorBio : course.authorBio}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="text-[#FFF00A] fill-[#FFF00A]" size={16} />
                        <span className="text-[#00113D]/80 dark:text-white">{course.rating} Instructor Rating</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={16} className="text-[#00113D] dark:text-[#FFF00A]" />
                        <span className="text-[#00113D]/80 dark:text-white">{course.students || '500+'} Students</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Student Reviews</h2>
                <div className="space-y-6">
                  <div className="dark:bg-slate-900/30 p-6 rounded-lg border border-slate-700">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-slate-700 text-slate-100 flex items-center justify-center">
                        JD
                      </div>
                      <div>
                        <h4 className="font-semibold">John Doe</h4>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className={`${i < 4 ? 'text-yellow-400 fill-yellow-400' : 'text-slate-500'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="dark:text-slate-300 text-[#000B29]/70">"{course.testimonial || 'This course was incredibly informative and well-structured. The instructor explained complex concepts in an easy-to-understand way.'}"</p>
                  </div>
                  
                  {/* Additional sample reviews */}
                  <div className="dark:bg-slate-900/30 p-6 rounded-lg border border-slate-700">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-slate-700 text-slate-100 flex items-center justify-center">
                        AL
                      </div>
                      <div>
                        <h4 className="font-semibold">Amanda Lee</h4>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              className={`${i < 5 ? 'text-yellow-400 fill-yellow-400' : 'text-slate-500'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="dark:text-slate-300 text-[#000B29]/70">"Absolutely loved this course! The content was up-to-date and relevant. I've already started applying what I learned in my projects."</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="dark:bg-slate-900/50 border shadow-xl border-slate-700 rounded-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold mb-4">Course Features</h3>
              <ul className="space-y-4 mb-6">
                {isVideoCourse ? (
                  <>
                    <li className="flex items-center gap-3">
                      <Video size={18} className="text-[#00113D] dark:text-slate-100" />
                      <span>{course.modules} Modules</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock size={18} className="text-[#00113D] dark:text-slate-100" />
                      <span>{course.duration} of Content</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FileText size={18} className="text-[#00113D] dark:text-slate-100" />
                      <span>{course.completion}</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center gap-3">
                      <FileText size={18} className="text-[#00113D] dark:text-slate-100" />
                      <span>{course.readTime}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock size={18} className="text-[#00113D] dark:text-slate-100" />
                      <span>Published {course.publishDate}</span>
                    </li>
                  </>
                )}
                <li className="flex items-center gap-3">
                  <Star size={18} className="text-yellow-400 fill-yellow-400" />
                  <span>{course.rating} Rating ({course.students || '500+'} students)</span>
                </li>
              </ul>

              <div className="space-y-4">
                <Button 
                  className={`w-full py-3 text-lg ${isEnrolled ?  'bg-green-500 hover:bg-green-600 text-white' 
                    : 'bg-[#00113D] hover:bg-[#00113D]/90 text-[#FFF00A] border border-[#FFF00A]/20'}`}
                  onClick={handleEnrollNow}
                  disabled={isEnrolled}
                >
                  {isEnrolled ? 'Enrolled' : `Enroll Now - Free`}
                </Button>
                <Button 
                  variant="outline" 
                  className={`border-[#00113D] w-full dark:border-[#FFF00A]/30 hover:bg-[#00113D]/5 dark:hover:bg-[#FFF00A]/10 px-6 py-3 text-lg ${isSaved 
                    ? 'bg-[#00113D]/5 text-[#00113D] dark:bg-[#FFF00A]/10 dark:text-[#FFF00A]' 
                    : 'text-[#00113D] dark:text-[#FFF00A]'}`}
                  onClick={handleSaveForLater}
                >
                 <Bookmark className={`mr-2 ${isSaved ? 'fill-[#00113D] dark:fill-[#FFF00A]' : ''}`} /> 
                  {isSaved ? 'Saved' : 'Save for Later'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video lesson modal */}
      {lessonVideoModal.isOpen && (
        <div className="fixed inset-0 bg-black/70 flex  items-center justify-center z-50 p-4 ">
          <div className="bg-slate-900 rounded-lg  w-full max-w-4xl">
            <div className="flex items-center justify-between  p-4 border-b border-slate-700">
              <h3 className="text-xl font-semibold">{lessonVideoModal.title}</h3>
              <button 
                onClick={closeLessonVideo} 
                className="text-slate-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              <div className="aspect-video">
                <iframe 
                  src={`https://www.youtube.com/embed/${lessonVideoModal.videoId}?autoplay=1`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            
          </div>
        </div>
      )}

      {/* Toast component needs to be included in your layout or _app file */}
    </div>
  );
}