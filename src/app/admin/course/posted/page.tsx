// src/app/courses/posted/page.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Eye, Edit, Trash, BookOpen } from 'lucide-react';
import DashboardLayout from '@/components/admin/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';

// Sample data for posted courses
const postedCourses = [
  {
    id: '1',
    title: 'Introduction to Blockchain',
    type: 'article',
    status: 'published',
    students: 128,
    rating: 4.8,
    date: '2025-04-01',
    level: 'beginner'
  },
  {
    id: '2',
    title: 'Smart Contract Development',
    type: 'video',
    status: 'published',
    students: 87,
    rating: 4.6,
    date: '2025-03-25',
    level: 'intermediate'
  },
  {
    id: '3',
    title: 'DeFi Fundamentals',
    type: 'article',
    status: 'published',
    students: 64,
    rating: 4.9,
    date: '2025-03-15',
    level: 'beginner'
  },
  {
    id: '4',
    title: 'Advanced Tokenomics',
    type: 'video',
    status: 'draft',
    students: 0,
    rating: 0,
    date: '2025-04-10',
    level: 'advanced'
  },
  {
    id: '5',
    title: 'NFT Marketplace Development',
    type: 'video',
    status: 'published',
    students: 42,
    rating: 4.2,
    date: '2025-03-30',
    level: 'intermediate'
  }
];

const PostedCoursesPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const handleDeleteCourse = (id: string) => {
    // Here you would handle course deletion
    console.log(`Delete course with id: ${id}`);
    alert(`Course ${id} would be deleted in a real application`);
  };

  const getLevelBadge = (level: string) => {
    switch(level) {
      case 'beginner':
        return <Badge className="bg-green-500">Beginner</Badge>;
      case 'intermediate':
        return <Badge className="bg-blue-500">Intermediate</Badge>;
      case 'advanced':
        return <Badge className="bg-purple-500">Advanced</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'published':
        return <Badge className="bg-emerald-500">Published</Badge>;
      case 'draft':
        return <Badge variant="outline">Draft</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <DashboardLayout isOpen={isOpen} toggleSidebar={toggleSidebar}>
      <motion.div 
        className="p-4 lg:p-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="flex justify-between items-center mb-6">
          <motion.h1 
            className="text-2xl font-bold"
            variants={item}
          >
            Posted Courses
          </motion.h1>
          <motion.div variants={item}>
            <Button className="bg-[#00113D] text-white hover:bg-blue-900">
              <BookOpen className="mr-2 h-4 w-4" /><Link href='/admin/course/create'> Create New Course </Link> 
            </Button>
          </motion.div>
        </div>

        <motion.div variants={item}>
          <Card className='shadow-md border-0'>
            <CardHeader>
              <CardTitle>Your Published Courses</CardTitle>
              <CardDescription>
                Manage your courses and track their performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[300px]">Course</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Level</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Students</TableHead>
                    <TableHead className="text-right">Rating</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {postedCourses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell className="font-medium">
                        <div className="flex flex-col">
                          <span>{course.title}</span>
                          <span className="text-xs text-gray-500">
                            <Clock className="h-3 w-3 inline mr-1" />
                            {new Date(course.date).toLocaleDateString()}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {course.type === 'video' ? 
                          <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">Video</Badge> : 
                          <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-300">Article</Badge>
                        }
                      </TableCell>
                      <TableCell>{getLevelBadge(course.level)}</TableCell>
                      <TableCell>{getStatusBadge(course.status)}</TableCell>
                      <TableCell className="text-right">{course.students}</TableCell>
                      <TableCell className="text-right">
                        {course.rating > 0 ? course.rating : '-'}
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-more-horizontal">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-white text-[#00113D] ">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem className="cursor-pointer">
                              <Eye className="mr-2 h-4 w-4" /> View
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                              <Edit className="mr-2 h-4 w-4" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem 
                              className="cursor-pointer text-red-600"
                              onClick={() => handleDeleteCourse(course.id)}
                            >
                              <Trash className="mr-2 h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default PostedCoursesPage;