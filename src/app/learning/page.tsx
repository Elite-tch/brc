'use client'
import { useState, useEffect } from 'react'
import { Search, Filter, PlayCircle, BookOpen, Star, Clock, User, ArrowRight, Users } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'
import Footer from '@/components/HomePage/Footer'
import Navbar from '@/components/HomePage/Navbar'
type Course = {
  id: string
  title: string
  instructor: string
  type: 'video' | 'article'
  level: 'beginner' | 'intermediate' | 'advanced'
  category: string
  rating: number
  students: number
  duration: string
  thumbnail: string
  description: string
  price?: number
  free: boolean
}

export default function LearningPage() {
  const router = useRouter()
  const [courses, setCourses] = useState<Course[]>([])
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    type: 'all',
    level: 'all',
    category: 'all'
  })

  // Sample courses data
  useEffect(() => {
    const sampleCourses: Course[] = [
      {
        id: '1',
        title: 'Solidity Masterclass: Build Ethereum Smart Contracts',
        instructor: 'Alex Rivera',
        type: 'video',
        level: 'intermediate',
        category: 'Development',
        rating: 4.8,
        students: 12500,
        duration: '12 hours',
        thumbnail: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
        description: 'Become proficient in Ethereum\'s primary smart contract language. Build, test, and deploy secure contracts with industry best practices.',
        price: 89.99,
        free: false
      },
      {
        id: '2',
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
        price: 99.99,
        free: false
      },
      {
        id: '3',
        title: 'Blockchain Fundamentals: Complete Beginner Guide',
        instructor: 'Jamal Washington',
        type: 'article',
        level: 'beginner',
        category: 'Fundamentals',
        rating: 4.7,
        students: 23000,
        duration: '6 hours',
        thumbnail:"https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
        description: 'Your complete introduction to blockchain technology, cryptocurrency, and Web3 concepts.',
        free: true
      },
      {
        id: '4',
        title: 'NFT Development from Scratch',
        instructor: 'Sarah Chen',
        type: 'video',
        level: 'intermediate',
        category: 'Development',
        rating: 4.6,
        students: 9500,
        duration: '10 hours',
        thumbnail: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        description: 'Learn to create, mint and sell your own NFT collections on Ethereum and other blockchains.',
        price: 79.99,
        free: false
      },
      {
        id: '5',
        title: 'Understanding Crypto Wallets and Security',
        instructor: 'David Park',
        type: 'article',
        level: 'beginner',
        category: 'Security',
        rating: 4.5,
        students: 15000,
        duration: '4 hours',
        thumbnail:"https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
        description: 'Complete guide to securing your cryptocurrency and understanding different wallet types.',
        free: true
      }
    ]
    setCourses(sampleCourses)
    setFilteredCourses(sampleCourses)
  }, [])

  // Filter and search functionality
  useEffect(() => {
    let results = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           course.description.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesType = filters.type === 'all' || course.type === filters.type
      const matchesLevel = filters.level === 'all' || course.level === filters.level
      const matchesCategory = filters.category === 'all' || course.category === filters.category
      
      return matchesSearch && matchesType && matchesLevel && matchesCategory
    })
    
    setFilteredCourses(results)
  }, [searchTerm, filters, courses])

  const handleEnroll = (courseId: string) => {
    router.push(`/learnings/${courseId}`)
  }

  const categories = [...new Set(courses.map(course => course.category))]
  const levels = ['beginner', 'intermediate', 'advanced']
  const types = ['video', 'article']

  return (
    <div>
      <Navbar/>
      <div className="min-h-screen bg-slate-50 dark:bg-[#00113D] border-b border-blue-900">
      {/* Hero Section */}
      <div className="dark:bg-gradient-to-r from-[#00113D] to-[#003366] text-[#00113D] dark:text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6 pt-16">Your Roadmap to Blockchain Mastery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Whether you're taking your first steps into blockchain or looking to specialize in advanced concepts, 
            our structured learning paths guide you through every stage of your journey.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 flex justify-between ">
        <div className="flex md:flex-row flex-wrap gap-4 mb-8">
            <div>
              <Select onValueChange={(value) => setFilters({...filters, type: value})}>
                <SelectTrigger className="w-fit">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Filter by type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {types.map(type => (
                    <SelectItem key={type} value={type} className='bg-slate-100'>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Select onValueChange={(value) => setFilters({...filters, level: value})}>
                <SelectTrigger className="w-fit">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Filter by level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  {levels.map(level => (
                    <SelectItem key={level} value={level} className='bg-slate-100'>
                      {level.charAt(0).toUpperCase() + level.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Select onValueChange={(value) => setFilters({...filters, category: value})}>
                <SelectTrigger className="w-fit">
                  <Filter className="mr-2 h-4 w-4" />
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category} className='bg-slate-100'>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="relative  md:w-fit ">
            <Search className="absolute left-3 top-5 w-5 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search courses..."
              className="pl-10 py-4 text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
         
        </div>

        {/* Courses Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#00113D] dark:text-slate-100 mb-8">Featured Courses</h2>
          
          {filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600 dark:text-gray-300">No courses match your filters. Try adjusting your search criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map(course => (
                <Card key={course.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img 
                        src={course.thumbnail} 
                        alt={course.title}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="dark:bg-[#FFF00A] dark:bg-[#FFF00A]/20 text-slate-100 bg-[#00113D] dark:text-[#FFF00A]">
                          {course.type === 'video' ? 'Video Course' : 'Article'}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="text-sm">
                        {course.level}
                      </Badge>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                    <CardDescription className="mb-4 line-clamp-2">
                      {course.description}
                    </CardDescription>
                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300 mb-4">
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-4">{course.instructor}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{course.duration}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div>
                      
                        <span className="font-bold text-green-600">FREE</span>
                    
                   
                    </div>
                    <Button 
                      onClick={() => handleEnroll(course.id)}
                      className="bg-[#00113D] hover:bg-[#00113D]/90 dark:bg-[#FFF00A]/10 dark:text-[#FFF00A] border-[#FFF00A]/30 text-slate-100 dark:hover:bg-[#FFF00A]/20 "
                    >
                      {course.type === 'video' ? 'Enroll Now' : 'Read Article'} <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Learning Paths Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#00113D] dark:text-slate-100 mb-8">Learning Paths</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border ">
              <CardHeader>
                <CardTitle className="text-xl pt-4">Blockchain Fundamentals Path</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Build a solid foundation in blockchain technology, cryptography, consensus mechanisms, and the broader cryptocurrency ecosystem.
                </p>
                <Badge variant="outline" className="dark:bg-[#FFF00A]/20 text-slate-100 bg-[#00113D] dark:text-[#FFF00A]">
                  Beginner Friendly
                </Badge>
              </CardContent>
            </Card>
            
            <Card className="border ">
              <CardHeader>
                <CardTitle className="text-xl pt-4">Developer Pathways</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-4 space-y-1">
                  <li>Ethereum Development</li>
                  <li>Smart Contract Security</li>
                  <li>Cross-Chain Engineering</li>
                  <li>ZK Proof Implementation</li>
                </ul>
                <Badge variant="outline" className="dark:bg-[#FFF00A]/20 text-slate-100 bg-[#00113D] dark:text-[#FFF00A]">
                  Intermediate/Advanced
                </Badge>
              </CardContent>
            </Card>
            
            <Card className="border ">
              <CardHeader>
                <CardTitle className="text-xl pt-4">Business & Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-4 space-y-1">
                  <li>Blockchain Business Models</li>
                  <li>Tokenomics & Crypto Economics</li>
                  <li>Regulatory Compliance</li>
                  <li>DAO Governance</li>
                </ul>
                <Badge variant="outline" className="dark:bg-[#FFF00A]/20 text-slate-100 bg-[#00113D] dark:text-[#FFF00A]">
                  All Levels
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Learning Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#00113D] dark:text-slate-100 mb-8">Not Just Courses—A Learning Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <div className="dark:bg-[#FFF00A] dark:bg-[#FFF00A]/20 text-slate-100 bg-[#00113D] dark:text-[#00113D] mt-4 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <CardTitle>Project-Based Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Apply concepts immediately with guided projects that mirror real-world challenges.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="dark:bg-[#FFF00A] dark:bg-[#FFF00A]/20 text-slate-100 bg-[#00113D] dark:text-[#00113D] mt-5 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <CardTitle>Community Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Share your work with peers and mentors for constructive feedback.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="dark:bg-[#FFF00A] dark:bg-[#FFF00A]/20 text-slate-100 bg-[#00113D] dark:text-[#00113D] mt-5 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <CardTitle>Industry-Aligned Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Content developed with input from active practitioners and updated regularly.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="dark:bg-[#FFF00A] dark:bg-[#FFF00A]/20 text-slate-100 bg-[#00113D] dark:text-[#00113D] mt-5 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <CardTitle>Learn At Your Pace</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Combine synchronous and asynchronous elements to fit your schedule.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  )
}