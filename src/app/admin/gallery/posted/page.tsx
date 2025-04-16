// src/app/admin/gallery/posted/page.tsx
'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Eye, Pencil, Trash2, Search, ChevronLeft, ChevronRight, ArrowUpDown 
} from 'lucide-react';
import Link from 'next/link';
import DashboardLayout from '@/components/admin/DashboardLayout';
export default function PostedGallery() {
  const [searchTerm, setSearchTerm] = useState('');

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
  
  // Sample gallery data
  const galleries = [
    { id: 1, title: 'Blockchain Conference 2025', images: 12, views: 235, date: '2025-04-12' },
    { id: 2, title: 'Team Building Event', images: 24, views: 189, date: '2025-04-08' },
    { id: 3, title: 'Product Launch', images: 18, views: 312, date: '2025-04-03' },
    { id: 4, title: 'Developer Meetup', images: 8, views: 176, date: '2025-03-28' },
    { id: 5, title: 'Annual Award Ceremony', images: 32, views: 421, date: '2025-03-15' },
  ];

  const filteredGalleries = galleries.filter(gallery => 
    gallery.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout isOpen={isOpen} toggleSidebar={toggleSidebar}>
    <motion.div 
      className="p-4 lg:p-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Posted Galleries</h1>
        <Link href="/admin/gallery/create">
          <Button className="bg-[#00113D] hover:bg-blue-900 text-white">
            Create New Gallery
          </Button>
        </Link>
      </div>
      
      <Card className="border-0 shadow-sm p-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search galleries..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {filteredGalleries.map((gallery) => (
          <Card key={gallery.id} className=" shadow-sm overflow-hidden">
            <div className="aspect-video relative">
              <img 
                src='/bg.jpg'  /* Use template: `/bg.jpg ${gallery.id}` */
                alt={gallery.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="dark:text-white font-medium truncate">{gallery.title}</h3>
                <p className="dark:text-gray-200 text-sm">{gallery.images} images</p>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm dark:text-gray-200 ">Views: {gallery.views}</p>
                <p className="text-sm dark:text-gray-200">Added: {gallery.date}</p>
              </div>
              <div className="flex space-x-1">
                <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-slate-700">
                  <Eye size={16} />
                </Button>
                <Button variant="ghost" size="sm" className="hover:bg-gray-100 dark:hover:bg-slate-700">
                  <Pencil size={16} />
                </Button>
                <Button variant="ghost" size="sm" className="hover:bg-gray-100 hover:text-red-500 dark:hover:bg-slate-700">
                  <Trash2 size={16} />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      
      <div className="flex items-center justify-between px-4 py-3 border rounded-lg shadow-sm">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{" "}
          <span className="font-medium">5</span> galleries
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
    </motion.div>
    </DashboardLayout>
  );
}