// app/courses/[courseId]/page.tsx
'use client'

import { notFound } from 'next/navigation';
import { useEffect, useState, use } from 'react';
import { Video, FileText, Clock, Star, Check, Users, Bookmark, ChevronLeft, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';

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
      price: "$49.99",
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
      image: "https://images.unsplash.com/photo-1526378800651-c32d758db29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
      publishDate: "March 15, 2025",
      price: "$24.99",
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
      "Beginner": "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30",
      "Intermediate": "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30",
      "Advanced": "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30"
    };
    return colors[level] || "bg-slate-500/20 text-slate-400 hover:bg-slate-500/30";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#00113D]/95 to-[#000B29] text-slate-100">
      <div className="container mx-auto px-4 py-8">
        <Button 
          onClick={() => router.back()} 
          variant="ghost" 
          className="mb-6 text-blue-400 hover:text-blue-300"
        >
          <ChevronLeft className="mr-2" /> Back to Courses
        </Button>

        {/* Course Header */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-6 mb-8 border border-slate-700">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <Badge className={`${getBadgeColor(course.level)} mb-4`}>
                {course.level}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-slate-300 mb-6">{course.longDescription || course.description}</p>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-400 fill-yellow-400" size={18} />
                  <span>{course.rating}</span>
                  <span className="text-slate-400 ml-1">({course.students || '500+'} students)</span>
                </div>
                {isVideoCourse ? (
                  <div className="flex items-center gap-1">
                    <Video size={18} />
                    <span>{course.duration}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <FileText size={18} />
                    <span>{course.readTime}</span>
                  </div>
                )}
                {isVideoCourse && (
                  <div className="flex items-center gap-1">
                    <Check size={18} />
                    <span>{course.modules} modules</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-lg">
                  Enroll Now - {course.price}
                </Button>
                <Button variant="outline" className="border-slate-600 hover:bg-slate-800/50 px-6 py-3 text-lg">
                  <Bookmark className="mr-2" /> Save for Later
                </Button>
              </div>
            </div>

            <div className="lg:w-1/3">
              {isVideoCourse ? (
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  {isVideoPlaying ? (
                    <iframe 
                      src={`https://www.youtube.com/embed/${course.videoId}?autoplay=1`}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div 
                      className="w-full h-full bg-gradient-to-r from-blue-900 to-purple-900 relative cursor-pointer"
                      onClick={() => setIsVideoPlaying(true)}
                    >
                      <img 
                        src={`https://img.youtube.com/vi/${course.videoId}/maxresdefault.jpg`}
                        alt={course.title}
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-blue-600/90 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all">
                          <Play size={28} className="text-white ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="h-full rounded-lg overflow-hidden">
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
          <div className="border-b border-slate-700">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === 'overview' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-slate-300'}`}
              >
                Overview
              </button>
              {isVideoCourse && (
                <button
                  onClick={() => setActiveTab('curriculum')}
                  className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === 'curriculum' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-slate-300'}`}
                >
                  Curriculum
                </button>
              )}
              <button
                onClick={() => setActiveTab('instructor')}
                className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === 'instructor' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-slate-300'}`}
              >
                {isVideoCourse ? 'Instructor' : 'Author'}
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-4 px-1 font-medium text-sm border-b-2 ${activeTab === 'reviews' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-slate-300'}`}
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
                <h2 className="text-2xl font-bold mb-6">About This {isVideoCourse ? 'Course' : 'Article'}</h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300 mb-6">{course.longDescription}</p>
                  
                  {isVideoCourse && (
                    <>
                      <h3 className="text-xl font-semibold mb-4">What You'll Learn</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                        {course.whatYouWillLearn?.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <Check className="text-green-400 mt-1 flex-shrink-0" size={18} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                      <ul className="mb-8 space-y-2">
                        {course.requirements?.map((item: string, index: number) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-slate-400">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {!isVideoCourse && (
                    <div className="space-y-6">
                      {course.content?.map((section: any, index: number) => (
                        <div key={index} className="mb-6">
                          <h3 className="text-xl font-semibold mb-3">{section.title}</h3>
                          <p className="text-slate-300">{section.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && isVideoCourse && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
                <div className="border border-slate-700 rounded-lg overflow-hidden">
                  {course.curriculum?.map((module: any, index: number) => (
                    <div key={index} className="border-b border-slate-700 last:border-b-0">
                      <div className="p-4 bg-slate-900/50">
                        <h3 className="font-semibold flex items-center justify-between">
                          <span>Module {index + 1}: {module.title}</span>
                          <span className="text-sm text-slate-400">{module.duration}</span>
                        </h3>
                      </div>
                      <div className="bg-slate-900/20">
                        {module.lessons?.map((lesson: string, lessonIndex: number) => (
                          <div key={lessonIndex} className="p-4 border-t border-slate-800 flex items-center justify-between hover:bg-slate-800/30">
                            <div className="flex items-center gap-3">
                              <Play className="text-blue-400" size={16} />
                              <span>{lesson}</span>
                            </div>
                            <span className="text-sm text-slate-400">5 min</span>
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
                <h2 className="text-2xl font-bold mb-6">{isVideoCourse ? 'Instructor' : 'Author'}</h2>
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-2xl font-bold">
                    {isVideoCourse 
                      ? course.instructor?.split(' ').map((n: any[]) => n[0]).join('')
                      : course.author?.split(' ').map((n: any[]) => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {isVideoCourse ? course.instructor : course.author}
                    </h3>
                    <p className="text-slate-300 mb-4">
                      {isVideoCourse ? course.instructorBio : course.authorBio}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="text-yellow-400 fill-yellow-400" size={16} />
                        <span>{course.rating} Instructor Rating</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        <span>{course.students || '500+'} Students</span>
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
                  <div className="bg-slate-900/30 p-6 rounded-lg border border-slate-700">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center">
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
                    <p className="text-slate-300">"{course.testimonial || 'This course was incredibly informative and well-structured. The instructor explained complex concepts in an easy-to-understand way.'}"</p>
                  </div>
                  {/* More reviews would go here */}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold mb-4">Course Features</h3>
              <ul className="space-y-4 mb-6">
                {isVideoCourse ? (
                  <>
                    <li className="flex items-center gap-3">
                      <Video size={18} className="text-blue-400" />
                      <span>{course.modules} Modules</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock size={18} className="text-blue-400" />
                      <span>{course.duration} of Content</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <FileText size={18} className="text-blue-400" />
                      <span>{course.completion}</span>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-center gap-3">
                      <FileText size={18} className="text-blue-400" />
                      <span>{course.readTime}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock size={18} className="text-blue-400" />
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
                <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg">
                  Enroll Now - {course.price}
                </Button>
                <Button variant="outline" className="w-full border-slate-600 hover:bg-slate-800/50 py-3 text-lg">
                  <Bookmark className="mr-2" /> Save for Later
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}