'use client'
import { useParams } from 'next/navigation'
import { PlayCircle, BookOpen, Star, Clock, User, ArrowLeft,  CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Navbar from '@/components/HomePage/Navbar'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

// Mock data - in a real app you'd fetch this from your database
const courses = {
  '1': {
    title: 'Solidity Masterclass: Build Ethereum Smart Contracts',
    instructor: 'Alex Rivera',
    type: 'video',
    level: 'intermediate',
    category: 'Development',
    rating: 4.8,
    students: 12500,
    duration: '12 hours',
    thumbnail: 'https://images.unsplash.com/photo-1620341784631-168a7b1c6f1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Become proficient in Ethereum\'s primary smart contract language. Build, test, and deploy secure contracts with industry best practices.',
    content: {
      videoId: 'gyMwXuJrbJQ', // Replace with actual YouTube ID
      sections: [
        {
          title: 'Introduction to Solidity',
          lessons: [
            'Setting up your development environment',
            'Basic syntax and structure',
            'Data types and variables'
          ]
        },
        {
          title: 'Smart Contract Fundamentals',
          lessons: [
            'Writing your first contract',
            'Understanding gas costs',
            'Contract deployment'
          ]
        }
      ]
    },
    price: 89.99,
    free: false
  },
  '2': {
    title: 'Decentralized Finance (DeFi) Deep Dive',
    instructor: 'Mei Lin',
    type: 'video',
    level: 'advanced',
    category: 'Finance',
    rating: 4.9,
    students: 8700,
    duration: '15 hours',
    thumbnail: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Understand the protocols, mechanisms, and economic models that power the DeFi ecosystem.',
    content: {
      videoId: 'gyMwXuJrbJQ', // Replace with actual YouTube ID
      sections: [
        {
          title: 'DeFi Core Concepts',
          lessons: [
            'Liquidity pools',
            'Automated Market Makers',
            'Yield farming'
          ]
        }
      ]
    },
    price: 99.99,
    free: false
  },
  '3': {
    title: 'Blockchain Fundamentals: Complete Beginner Guide',
    instructor: 'Jamal Washington',
    type: 'article',
    level: 'beginner',
    category: 'Fundamentals',
    rating: 4.7,
    students: 23000,
    duration: '6 hours',
    thumbnail: 'https://images.unsplash.com/photo-1621570072950-6ac4f4850e69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Your complete introduction to blockchain technology, cryptocurrency, and Web3 concepts.',
    content: {
      article: [
        '## What is Blockchain?',
        'Blockchain is a distributed ledger technology that...',
        '## How Cryptocurrencies Work',
        'Cryptocurrencies use cryptographic principles to...'
      ].join('\n\n')
    },
    price: 0,
    free: true
  },
  '4': {
    title: 'Blockchain Fundamentals: Complete Beginner Guide',
    instructor: 'Jamal Washington',
    type: 'article',
    level: 'beginner',
    category: 'Fundamentals',
    rating: 4.7,
    students: 23000,
    duration: '6 hours',
    thumbnail: 'https://images.unsplash.com/photo-1621570072950-6ac4f4850e69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Your complete introduction to blockchain technology, cryptocurrency, and Web3 concepts.',
    content: {
      article: [
        '## What is Blockchain?',
        'Blockchain is a distributed ledger technology that...',
        '## How Cryptocurrencies Work',
        'Cryptocurrencies use cryptographic principles to...'
      ].join('\n\n')
    },
    price: 0,
    free: true
  },

  '5': {
    title: 'Decentralized Finance (DeFi) Deep Dive',
    instructor: 'Mei Lin',
    type: 'video',
    level: 'advanced',
    category: 'Finance',
    rating: 4.9,
    students: 8700,
    duration: '15 hours',
    thumbnail: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Understand the protocols, mechanisms, and economic models that power the DeFi ecosystem.',
    content: {
      videoId: 'gyMwXuJrbJQ', // Replace with actual YouTube ID
      sections: [
        {
          title: 'DeFi Core Concepts',
          lessons: [
            'Liquidity pools',
            'Automated Market Makers',
            'Yield farming'
          ]
        }
      ]
    },
    price: 99.99,
    free: false
  },

  '6': {
    title: 'Decentralized Finance (DeFi) Deep Dive',
    instructor: 'Mei Lin',
    type: 'video',
    level: 'advanced',
    category: 'Finance',
    rating: 4.9,
    students: 8700,
    duration: '15 hours',
    thumbnail: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: 'Understand the protocols, mechanisms, and economic models that power the DeFi ecosystem.',
    content: {
      videoId: 'gyMwXuJrbJQ', // Replace with actual YouTube ID
      sections: [
        {
          title: 'DeFi Core Concepts',
          lessons: [
            'Liquidity pools',
            'Automated Market Makers',
            'Yield farming'
          ]
        }
      ]
    },
    price: 99.99,
    free: false
  },
}




export default function CoursePage() {
  const params = useParams()
  const courseId = params.id as string
  const course = courses[courseId as keyof typeof courses]

  if (!course) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#00113D] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#00113D] dark:text-[#FFF00A] mb-4">Course not found</h1>
          <Link href="/learning">
            <Button className="bg-[#00113D] hover:bg-[#00113D]/90 dark:bg-[#FFF00A] dark:hover:bg-[#FFF00A]/90 dark:text-[#00113D]">
              Back to Courses
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
   <div>
    <Navbar />
     <div className="min-h-screen bg-slate-50 dark:bg-[#00113D]">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-[#00113D] to-[#003366] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pt-14">
          <Link href="/learning">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Courses
            </Button>
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-2/3">
              <Badge variant="secondary" className="bg-[#FFF00A] text-[#00113D] mb-4">
                {course.type === 'video' ? 'Video Course' : 'Article'}
              </Badge>
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg mb-6">{course.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-2" />
                  <span>{course.rating} ({course.students.toLocaleString()} students)</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <Badge variant="outline" className="text-sm">
                  {course.level}
                </Badge>
              </div>
              
              {!course.free && (
                <div className="text-2xl font-bold mb-6">Free</div>
              )}
              
              <Button className="dark:bg-[#FFF00A]/10 dark:text-[#FFF00A]  border-[#FFF00A]/30 dark:hover:bg-[#FFF00A]/20 text-slate-100 bg-[#00113D] font-bold py-6 px-8 text-lg">
                {course.free ? 'Start Learning' : 'Enroll Now'}
              </Button>
            </div>
            
            <div className="md:w-1/3">
              <img 
                src={course.thumbnail} 
                alt={course.title}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#00113D] dark:text-[#FFF00A] mb-6">Course Content</h2>
            
            {course.type === 'video' ? (
              <div className="mb-12">
                <div className="aspect-w-16 aspect-h-9 mb-8">
                  <iframe 
                    src={`https://www.youtube.com/embed/${'videoId' in course.content ? course.content.videoId : ''}`}
                    className="w-full h-[450px] rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                
                <div className="space-y-6">
                  {course.type === 'video' && 'sections' in course.content && course.content.sections?.map((section: { title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; lessons: any[] }, index: Key | null | undefined) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                      <ul className="space-y-3">
                        {section.lessons.map((lesson: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, lessonIndex: Key | null | undefined) => (
                          <li key={lessonIndex} className="flex items-center">
                            <PlayCircle className="w-5 h-5 text-[#FFF00A] mr-3" />
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="prose dark:prose-invert max-w-none">
                {'article' in course.content && course.content.article.split('\n\n').map((paragraph: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="border border-[#FFF00A] ">
              <CardHeader>
                <h3 className="text-lg font-semibold pt-4">What You'll Learn</h3>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Understand core blockchain concepts</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Build practical projects</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Master industry best practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="mt-6 border border-gray-200 dark:border-gray-700">
              <CardHeader>
                <h3 className="text-lg font-semibold pt-4">Course Details</h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Category</h4>
                  <p>{course.category}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Level</h4>
                  <p>{course.level.charAt(0).toUpperCase() + course.level.slice(1)}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Duration</h4>
                  <p>{course.duration}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
   </div>
  )
}