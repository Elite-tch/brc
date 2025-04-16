// src/components/Sidebar.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Menu, X, Home, BookOpen, ChevronDown, ChevronUp, 
  PlusCircle, CheckCircle, Image, FileText, LogOut
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const [courseOpen, setCourseOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  const toggleCourseDropdown = () => {
    setCourseOpen(!courseOpen);
  };

  const toggleGalleryDropdown = () => {
    setGalleryOpen(!galleryOpen);
  };

  const toggleBlogDropdown = () => {
    setBlogOpen(!blogOpen);
  };

  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden p-4 bg-[#00113D] text-white flex justify-between items-center">
        <h1 className="text-xl font-bold">Blockchain Revolution</h1>
        <Button variant="ghost" onClick={toggleSidebar} className="text-white hover:bg-blue-900">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Sidebar */}
      <motion.div 
        className={cn(
          "fixed lg:static border-r border-blue-900 top-0 left-0 h-screen z-40 w-64 bg-[#00113D] text-white",
          "transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Sidebar Header */}
        <div className="p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold hidden md:block">Admin Dashboard</h1>
          <Button variant="ghost" onClick={toggleSidebar} className="lg:hidden text-white hover:bg-blue-900">
            <X size={24} />
          </Button>
        </div>

        {/* Sidebar Links */}
        <nav className="p-4 flex flex-col h-[calc(100%-80px)]">
          <ul className="space-y-2 flex-grow">
            <motion.li whileHover={{ scale: 1.02 }}>
              <Link href="/admin" passHref>
                <div className="flex items-center p-3 rounded-lg hover:bg-blue-900 transition-colors cursor-pointer">
                  <Home size={20} className="mr-3" />
                  <span>Overview</span>
                </div>
              </Link>
            </motion.li>
            
            {/* Courses Section */}
            <motion.li whileHover={{ scale: 1.02 }}>
              <div 
                className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-900 cursor-pointer transition-colors"
                onClick={toggleCourseDropdown}
              >
                <div className="flex items-center">
                  <BookOpen size={20} className="mr-3" />
                  <span>Courses</span>
                </div>
                {courseOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              
              {/* Course Dropdown */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: courseOpen ? "auto" : 0,
                  opacity: courseOpen ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="pl-10 space-y-2 mt-2">
                  <motion.li whileHover={{ scale: 1.02 }}>
                    <Link href="/admin/course/create" passHref>
                      <div className="flex items-center p-2 rounded-lg hover:bg-blue-900 transition-colors cursor-pointer">
                        <PlusCircle size={18} className="mr-2" />
                        <span>Create Course</span>
                      </div>
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ scale: 1.02 }}>
                    <Link href="/admin/course/posted" passHref>
                      <div className="flex items-center p-2 rounded-lg hover:bg-blue-900 transition-colors cursor-pointer">
                        <CheckCircle size={18} className="mr-2" />
                        <span>Posted Courses</span>
                      </div>
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
            </motion.li>
            
            {/* Gallery Section */}
            <motion.li whileHover={{ scale: 1.02 }}>
              <div 
                className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-900 cursor-pointer transition-colors"
                onClick={toggleGalleryDropdown}
              >
                <div className="flex items-center">
                  <Image size={20} className="mr-3" />
                  <span>Gallery</span>
                </div>
                {galleryOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              
              {/* Gallery Dropdown */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: galleryOpen ? "auto" : 0,
                  opacity: galleryOpen ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="pl-10 space-y-2 mt-2">
                  <motion.li whileHover={{ scale: 1.02 }}>
                    <Link href="/admin/gallery/create" passHref>
                      <div className="flex items-center p-2 rounded-lg hover:bg-blue-900 transition-colors cursor-pointer">
                        <PlusCircle size={18} className="mr-2" />
                        <span>Create Gallery</span>
                      </div>
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ scale: 1.02 }}>
                    <Link href="/admin/gallery/posted" passHref>
                      <div className="flex items-center p-2 rounded-lg hover:bg-blue-900 transition-colors cursor-pointer">
                        <CheckCircle size={18} className="mr-2" />
                        <span>Posted Gallery</span>
                      </div>
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
            </motion.li>
            
            {/* Blog Section */}
            <motion.li whileHover={{ scale: 1.02 }}>
              <div 
                className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-900 cursor-pointer transition-colors"
                onClick={toggleBlogDropdown}
              >
                <div className="flex items-center">
                  <FileText size={20} className="mr-3" />
                  <span>Blog</span>
                </div>
                {blogOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </div>
              
              {/* Blog Dropdown */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: blogOpen ? "auto" : 0,
                  opacity: blogOpen ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="pl-10 space-y-2 mt-2">
                  <motion.li whileHover={{ scale: 1.02 }}>
                    <Link href="/admin/blog/create" passHref>
                      <div className="flex items-center p-2 rounded-lg hover:bg-blue-900 transition-colors cursor-pointer">
                        <PlusCircle size={18} className="mr-2" />
                        <span>Create Blog</span>
                      </div>
                    </Link>
                  </motion.li>
                  <motion.li whileHover={{ scale: 1.02 }}>
                    <Link href="/admin/blog/posted" passHref>
                      <div className="flex items-center p-2 rounded-lg hover:bg-blue-900 transition-colors cursor-pointer">
                        <CheckCircle size={18} className="mr-2" />
                        <span>Posted Blogs</span>
                      </div>
                    </Link>
                  </motion.li>
                </ul>
              </motion.div>
            </motion.li>
          </ul>
          
          {/* Logout Button */}
          <div className="mt-auto">
            <motion.div whileHover={{ scale: 1.02 }}>
              <Link href="/" passHref>
                <div className="flex items-center p-3 rounded-lg bg-opacity-20  hover:bg-opacity-30 transition-colors cursor-pointer">
                  <LogOut size={20} className="mr-3" />
                  <span>Logout</span>
                </div>
              </Link>
            </motion.div>
          </div>
        </nav>
      </motion.div>
    </>
  );
};

export default Sidebar;