// src/app/admin/blog/posted/page.tsx
'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Eye, Pencil, Trash2, Search, ChevronLeft, ChevronRight, ArrowUpDown,
  Filter, MoreVertical
} from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DashboardLayout from '@/components/admin/DashboardLayout';
export default function PostedBlogs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  
  // Sample blog data
  const blogs = [
    { 
      id: 1, 
      title: 'The Future of Blockchain Technology', 
      status: 'Published', 
      category: 'Blockchain',
      author: 'John Doe',
      views: 2456,
      comments: 28,
      date: '2025-04-15' 
    },
    { 
      id: 2, 
      title: 'Understanding Cryptocurrency Markets', 
      status: 'Published', 
      category: 'Cryptocurrency',
      author: 'Jane Smith',
      views: 1879,
      comments: 15,
      date: '2025-04-10' 
    },
    { 
      id: 3, 
      title: 'DeFi Revolution: Changing Finance', 
      status: 'Draft', 
      category: 'DeFi',
      author: 'John Doe',
      views: 0,
      comments: 0,
      date: '2025-04-08' 
    },
    { 
      id: 4, 
      title: 'NFT Marketplaces and Their Impact', 
      status: 'Published', 
      category: 'NFT',
      author: 'Sarah Johnson',
      views: 3214,
      comments: 42,
      date: '2025-04-05' 
    },
    { 
      id: 5, 
      title: 'Smart Contracts Explained', 
      status: 'Published', 
      category: 'Blockchain',
      author: 'Mike Wilson',
      views: 1652,
      comments: 19,
      date: '2025-03-30' 
    },
  ];
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


  const filteredBlogs = blogs
    .filter(blog => 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(blog => filter === 'all' || blog.status.toLowerCase() === filter.toLowerCase());

  return (
    <DashboardLayout isOpen={isOpen} toggleSidebar={toggleSidebar}>
    <motion.div 
      className="px-4 lg:px-8 md:pt-32 pt-4 pb-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Posted Blogs</h1>
        <Link href="/admin/blog/create" className='bg-[#00113D] text-white hover:bg-blue-900 rounded'>
          <Button className="border-0 text-white">
            Create New Blog
          </Button>
        </Link>
      </div>
      
      <Card className="border-0  shadow-sm p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Search blogs..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full sm:w-auto">
                  <Filter size={18} className="mr-2" />
                  {filter === 'all' ? 'All Status' : filter}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='bg-slate-100 text-black'>
                <DropdownMenuItem onClick={() => setFilter('all')}>All Status</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilter('published')}>Published</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setFilter('draft')}>Draft</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Card>
      
      <Card className=" shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  <div className="flex items-center">
                    Title
                    <ArrowUpDown size={16} className="ml-1" />
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  <div className="flex items-center">
                    Category
                    <ArrowUpDown size={16} className="ml-1" />
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  <div className="flex items-center">
                    Status
                    <ArrowUpDown size={16} className="ml-1" />
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  <div className="flex items-center">
                    Author
                    <ArrowUpDown size={16} className="ml-1" />
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  <div className="flex items-center">
                    Views
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  <div className="flex items-center">
                    Date
                    <ArrowUpDown size={16} className="ml-1" />
                  </div>
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
              {filteredBlogs.length > 0 ? (
                filteredBlogs.map((blog) => (
                  <tr key={blog.id}>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded  mr-3">
                            <img  src='/bg1.jpg' className='w-full h-full rounded'/>
                        </div>

                        <div className="text-sm font-medium">{blog.title}</div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">{blog.category}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                      <span className={`px-2 py-1 rounded text-xs ${
                        blog.status === 'Published' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {blog.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">{blog.author}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">{blog.views.toLocaleString()}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">{blog.date}</td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                      <div className="flex space-x-1">
                        <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-slate-700" title="View">
                          <Eye size={16} />
                        </Button>
                        <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-slate-700" title="Edit">
                          <Pencil size={16} />
                        </Button>
                        <Button variant="ghost" size="sm" className="hover:bg-gray-100 hover:text-red-500 dark:hover:bg-slate-700" title="Delete">
                          <Trash2 size={16} />
                        </Button>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-slate-700">
                              <MoreVertical size={16} />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className='bg-slate-100 text-black'>
                            <DropdownMenuItem>Duplicate</DropdownMenuItem>
                            <DropdownMenuItem>Archive</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="px-4 py-8 text-center text-sm text-gray-500" colSpan={7}>
                    No blogs found matching your search criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 dark:border-slate-700">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredBlogs.length}</span> of{" "}
            <span className="font-medium">{filteredBlogs.length}</span> results
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" disabled>
              <ChevronLeft size={16} />
            </Button>
            <Button variant="outline" size="sm" disabled>
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
    </DashboardLayout>
  );
}