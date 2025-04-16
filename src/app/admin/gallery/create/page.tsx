// src/app/admin/gallery/create/page.tsx
'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UploadCloud, Trash2, Image } from 'lucide-react';
import DashboardLayout from '@/components/admin/DashboardLayout';
import { motion } from 'framer-motion';
export default function CreateGallery() {
  const [images, setImages] = useState<{ id: number; name: string; preview: string }[]>([]);
  const [dragActive, setDragActive] = useState(false);

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

  // Simulate file upload
  const handleImageUpload = () => {
    const newImage = {
      id: images.length + 1,
      name: `image-${images.length + 1}.jpg`,
      preview: `/api/placeholder/300/200`
    };
    
    setImages([...images, newImage]);
  };
  
  const removeImage = (id: number) => {
    setImages(images.filter(image => image.id !== id));
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
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
      <h1 className="text-2xl font-bold mb-6">Create Gallery</h1>
      
      <Card className="border-0 shadow-sm my-6 pt-8">
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Gallery Title</Label>
              <Input id="title" placeholder="Enter gallery title" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Gallery Description</Label>
              <Textarea id="description" placeholder="Enter gallery description" rows={4} />
            </div>
          </form>
        </CardContent>
      </Card>
      
      <Card className="border-0 shadow-sm mb-6">
        <CardHeader>
          <CardTitle>Upload Images</CardTitle>
        </CardHeader>
        <CardContent>
          <div 
            className={`border-2 border-dashed ${dragActive ? 'border-[#FFF00A]' : 'border-gray-300 dark:border-gray-700'} rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-900/50 transition-colors`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrag}
            onClick={() => document.getElementById('gallery-images')?.click()}
          >
            <div className="flex flex-col items-center">
              <UploadCloud className="h-10 w-10 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500">Drag and drop or click to upload</p>
              <p className="text-xs text-gray-400 mt-1">PNG, JPG, GIF up to 10MB</p>
              <Input 
                type="file" 
                className="hidden" 
                id="gallery-images" 
                multiple 
                onChange={handleImageUpload}
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={(e) => {
                  e.stopPropagation();
                  document.getElementById('gallery-images')?.click();
                }}
              >
                Select Files
              </Button>
            </div>
          </div>
          
          {images.length > 0 && (
            <div className="mt-6">
              <h3 className="text-sm font-medium mb-4">Uploaded Images ({images.length})</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {images.map((image) => (
                  <div key={image.id} className="relative group">
                    <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-900">
                      <img 
                        src={image.preview} 
                        alt={image.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity rounded-lg">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-red-500"
                        onClick={() => removeImage(image.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 truncate">{image.name}</p>
                  </div>
                ))}
                <div 
                  className="aspect-square rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-700 flex items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-900/50 transition-colors"
                  onClick={() => document.getElementById('gallery-images')?.click()}
                >
                  <div className="flex flex-col items-center">
                    <Image className="h-6 w-6 text-gray-400 mb-1" />
                    <span className="text-xs text-gray-500">Add More</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      
      <div className="flex justify-end gap-4">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-blue-900 hover:bg-blue-900 text-white">Create Gallery</Button>
      </div>
      </motion.div>
    </DashboardLayout>
  );
}