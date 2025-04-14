'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Clock, HelpCircle, BookOpen, Users, Calendar } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Navbar from '@/components/HomePage/Navbar';
const ContactPage = () => {
  const [inquiryType, setInquiryType] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ inquiryType, ...formData });
  };

  const supportOptions = [
    {
      icon: <HelpCircle className="w-6 h-6 dark:text-[#FFF00A]" />,
      title: "Frequently Asked Questions",
      description: "Find immediate answers to common questions about our platform, courses, and community."
    },
    {
      icon: <BookOpen className="w-6 h-6 dark:text-[#FFF00A]" />,
      title: "Knowledge Base",
      description: "Detailed guides for navigating every aspect of the Blockchain Revolution ecosystem."
    },
    {
      icon: <Users className="w-6 h-6 dark:text-[#FFF00A]" />,
      title: "Community Support",
      description: "Post your question in our dedicated support forum for assistance from both our team and experienced community members."
    },
    {
      icon: <MessageSquare className="w-6 h-6 dark:text-[#FFF00A]" />,
      title: "Direct Support",
      description: "For urgent matters, contact our support team directly at support@blockchainrevolution.com or through our live chat during business hours."
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
   <div>
    <Navbar/>
    <div className="min-h-screen bg-slate-100 dark:bg-[#00113D] px-4 py-12 sm:px-6 pt-32 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-[#00113D] dark:text-[#FFF00A] mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            How can we help you? We're here to answer your questions and provide the support you need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <Card className="border dark:border-slate-100 border-[#00113D]/40 ">
              <CardHeader>
                <CardTitle className="text-2xl text-[#00113D] dark:text-[#FFF00A] pt-6">Contact Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Select the nature of your inquiry:
                    </label>
                    <Select onValueChange={setInquiryType}>
                      <SelectTrigger className="w-full dark:border-slate-100 border-[#00113D] focus:ring-0 focus:ring-offset-0 focus-visible:ring-0">
                        <SelectValue placeholder="Select an inquiry type" />
                      </SelectTrigger>
                      <SelectContent className='bg-slate-100 dark:bg-[#00113D]'>
                        <SelectItem value="general" className=''>General Information</SelectItem>
                        <SelectItem value="course">Course Assistance</SelectItem>
                        <SelectItem value="marketplace">Talent Marketplace Support</SelectItem>
                        <SelectItem value="founder">Founder Resources</SelectItem>
                        <SelectItem value="partnership">Partnership Inquiries</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="media">Media & Press</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="bg-[#00113D] text-slate-100 hover:bg-[#00113D]/90 dark:bg-[#FFF00A] dark:hover:bg-[#FFF00A]/90 dark:text-[#00113D] font-medium"
                  >
                    Submit Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Support Options */}
          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <Card className="border dark:border-slate-100 border-[#00113D]/40">
              <CardHeader>
                <CardTitle className="text-2xl text-[#00113D] dark:text-[#FFF00A] pt-6">Support Resources</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                {supportOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="mt-1">
                      {option.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-[#00113D] dark:text-white">{option.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{option.description}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

         
          </motion.div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default ContactPage;