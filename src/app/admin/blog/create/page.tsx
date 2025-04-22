// src/app/admin/blog/create/page.tsx
'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  UploadCloud, 
  Bold, Italic, List, Link as LinkIcon, 
  Image as ImageIcon, Video, FileText 
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from '@/components/admin/DashboardLayout';
export default function CreateBlog() {
  const [selectedTab, setSelectedTab] = useState("editor");
  const [content, setContent] = useState('');
  const [mediaItems, setMediaItems] = useState<{type: string; name: string; preview: string}[]>([]);

  const handleInsertMedia = (type: 'image' | 'video') => {
    // Simulate media upload
    const newItem = {
      type,
      name: type === 'image' ? `image-${mediaItems.length + 1}.jpg` : `video-${mediaItems.length + 1}.mp4`,
      preview: `/api/placeholder/300/200?text=${type}`
    };
    
    setMediaItems([...mediaItems, newItem]);
  };
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


  return (
    <DashboardLayout isOpen={isOpen} toggleSidebar={toggleSidebar}>
    <motion.div 
      className="px-4 lg:px-8 md:pt-32 pt-4 pb-8"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <h1 className="text-2xl font-bold mb-6">Create Blog Post</h1>
      
      <Card className="border-0 shadow-sm mb-6">
       
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Blog Title</Label>
              <Input id="title" placeholder="Enter blog title" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <select 
                  id="category" 
                  className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:outline-none  focus:ring-0"
                >
                  <option value="" className='text-black'>Select a category</option>
                  <option value="blockchain" className='text-black'>Blockchain</option>
                  <option value="cryptocurrency" className='text-black'>Cryptocurrency</option>
                  <option value="defi" className='text-black'>DeFi</option>
                  <option value="nft" className='text-black'>NFT</option>
                  <option value="technology" className='text-black'>Technology</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input id="tags" placeholder="blockchain, crypto, web3, etc." />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="excerpt">Short Excerpt</Label>
              <Textarea id="excerpt" placeholder="Enter a short summary of your blog post" rows={2} />
            </div>
            
            <div className="space-y-2">
              <Label>Featured Image</Label>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center cursor-pointer  transition-colors">
                <div className="flex flex-col items-center">
                  <UploadCloud className="h-10 w-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-500">Upload featured image</p>
                  <p className="text-xs text-gray-400 mt-1">PNG, JPG, GIF up to 5MB</p>
                  <Input type="file" className="hidden" id="featured-image" />
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-4"
                    onClick={() => document.getElementById('featured-image')?.click()}
                  >
                    Select Image
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
      
      <Card className="border-0 shadow-sm mb-6">
        <CardHeader>
          <CardTitle>Blog Content</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="editor" value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="editor">Editor</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>
            
            <TabsContent value="editor">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 border-b pb-2">
                  <Button variant="ghost" size="sm">
                    <Bold size={18} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Italic size={18} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <List size={18} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <LinkIcon size={18} />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedTab("media")}>
                    <ImageIcon size={18} />
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedTab("media")}>
                    <Video size={18} />
                  </Button>
                </div>
                
                <Textarea 
                  placeholder="Write your blog content here..."
                  className="min-h-[300px]"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="media">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Button 
                    variant="outline"
                    onClick={() => handleInsertMedia('image')}
                  >
                    <ImageIcon size={18} className="mr-2" />
                    Add Image
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => handleInsertMedia('video')}
                  >
                    <Video size={18} className="mr-2" />
                    Add Video
                  </Button>
                </div>
                
                <div className="border rounded-lg p-4">
                  {mediaItems.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {mediaItems.map((item, index) => (
                        <div key={index} className="relative group">
                          <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-900">
                            <img 
                              src={item.preview} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                            {item.type === 'video' && (
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-black bg-opacity-50 rounded-full p-2">
                                  <Video size={24} className="text-white" />
                                </div>
                              </div>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mt-1 truncate">{item.name}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <FileText className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">No media items added yet</p>
                      <p className="text-sm text-gray-400">Click the buttons above to add images or videos</p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="preview">
              <div className="border rounded-lg p-6 min-h-[300px]">
                {content ? (
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    {content.split('\n').map((paragraph, idx) => (
                      <p key={idx}>{paragraph}</p>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <FileText className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">No content to preview</p>
                    <p className="text-sm text-gray-400">Write some content in the editor tab to see a preview</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <Card className="border-0 shadow-sm mb-6">
        <CardHeader>
          <CardTitle>SEO Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="seo-title">SEO Title</Label>
              <Input id="seo-title" placeholder="Enter SEO title" />
              <p className="text-xs text-gray-500">Recommended length: 50-60 characters</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="meta-description">Meta Description</Label>
              <Textarea id="meta-description" placeholder="Enter meta description" rows={2} />
              <p className="text-xs text-gray-500">Recommended length: 120-158 characters</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="flex justify-end gap-4">
        <Button variant="outline">Save as Draft</Button>
        <Button className="bg-blue-900 hover:bg-blue-900 text-white">Publish Blog Post</Button>
      </div>
    </motion.div>
   </DashboardLayout>
  );
}