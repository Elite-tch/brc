// src/app/courses/create/page.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Trash, Upload } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import DashboardLayout from '@/components/admin/DashboardLayout';

// Form schema
const formSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters.",
  }),
  authorName: z.string().min(2, {
    message: "Author name is required.",
  }),
  contentType: z.enum(["article", "video"]),
  imageUrl: z.string().optional(),
  videoUrl: z.string().optional(),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  duration: z.string().min(1, {
    message: "Duration is required.",
  }),
  level: z.enum(["beginner", "intermediate", "advanced"]),
  price: z.string().min(1, {
    message: "Price is required.",
  }),
});

interface CurriculumItem {
  id: string;
  title: string;
  description: string;
}

const CreateCoursePage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [curriculum, setCurriculum] = useState<CurriculumItem[]>([
    { id: '1', title: 'Introduction to Blockchain', description: 'Basic concepts and history' }
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      authorName: "",
      contentType: "article",
      description: "",
      duration: "",
      level: "beginner",
      price: "",
    },
  });

  const contentType = form.watch("contentType");

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ ...values, curriculum });
    // Here you would typically send this data to your backend
    alert("Course submitted successfully!");
  };

  const addCurriculumItem = () => {
    setCurriculum([
      ...curriculum,
      { 
        id: Math.random().toString(36).substr(2, 9),
        title: '', 
        description: ''
      }
    ]);
  };

  const updateCurriculumItem = (id: string, field: keyof CurriculumItem, value: string) => {
    setCurriculum(curriculum.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const removeCurriculumItem = (id: string) => {
    setCurriculum(curriculum.filter(item => item.id !== id));
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

  return (
    <DashboardLayout isOpen={isOpen} toggleSidebar={toggleSidebar}>
      <motion.div 
        className="px-4 lg:px-8 md:pt-32 pt-4 pb-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1 
          className="text-2xl font-bold mb-6"
          variants={item}
        >
          Create New Course
        </motion.h1>
        
        <motion.div variants={item} className='border-0'>
          <Card className='border-0 shadow-md'>
            <CardHeader>
              <CardTitle>Course Information</CardTitle>
              <CardDescription>
                Fill in the details to create a new blockchain course
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Course Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Introduction to Smart Contracts" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="authorName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Author Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="contentType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Content Type</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select content type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className='bg-white dark:text-[#00113D]'>
                              <SelectItem value="article">Article</SelectItem>
                              <SelectItem value="video">Video</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {contentType === "article" ? (
                      <FormField
                        control={form.control}
                        name="imageUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Cover Image</FormLabel>
                            <FormControl>
                              <div className="flex items-center space-x-4">
                                <Input 
                                  type="file" 
                                  accept="image/*"
                                  className="flex-1"
                                  onChange={(e) => {
                                    // Here you'd typically handle file upload
                                    const file = e.target.files?.[0];
                                    if (file) {
                                      // For demo purposes, just storing the file name
                                      field.onChange(file.name);
                                    }
                                  }}
                                />
                                <Button type="button" size="icon" variant="outline">
                                  <Upload className="h-4 w-4" />
                                </Button>
                              </div>
                            </FormControl>
                            <FormDescription>
                              Upload a cover image for your article
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ) : (
                      <FormField
                        control={form.control}
                        name="videoUrl"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Video URL</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="https://youtube.com/..." 
                                {...field} 
                              />
                            </FormControl>
                            <FormDescription>
                              Enter YouTube or Vimeo URL
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Provide a detailed description of your course..."
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <FormField
                      control={form.control}
                      name="duration"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Duration (hours)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="2.5" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="level"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Difficulty Level</FormLabel>
                          <Select 
                            onValueChange={field.onChange} 
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className='bg-white dark:text-[#00113D]'>
                              <SelectItem value="beginner">Beginner</SelectItem>
                              <SelectItem value="intermediate">Intermediate</SelectItem>
                              <SelectItem value="advanced">Advanced</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="price"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Price (USD)</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="29.99" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  {/* Curriculum Section */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium">Curriculum</h3>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm"
                        onClick={addCurriculumItem}
                      >
                        <Plus className="h-4 w-4 mr-2" /> Add Section
                      </Button>
                    </div>
                    
                    {curriculum.map((item, index) => (
                      <div key={item.id} className="p-4 border rounded-lg space-y-4">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">Section {index + 1}</h4>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeCurriculumItem(item.id)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-4">
                          <div>
                            <FormLabel className="text-sm">Title</FormLabel>
                            <Input
                              value={item.title}
                              onChange={(e) => updateCurriculumItem(item.id, 'title', e.target.value)}
                              placeholder="Section title"
                            />
                          </div>
                          
                          <div>
                            <FormLabel className="text-sm">Description</FormLabel>
                            <Textarea
                              value={item.description}
                              onChange={(e) => updateCurriculumItem(item.id, 'description', e.target.value)}
                              placeholder="Section description"
                              className="min-h-[80px]"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit" className="bg-blue-900 text-white hover:bg-blue-900">
                      Create Course
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};

export default CreateCoursePage;