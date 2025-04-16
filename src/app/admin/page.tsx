// src/app/dashboard/page.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Clock, Award, Trash } from 'lucide-react';
import { 
  Card, CardContent, CardHeader, CardTitle, CardDescription 
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

import DashboardLayout from '@/components/admin/DashboardLayout';
// Sample data for charts
const userActivityData = [
  { name: 'Jan', users: 400, courses: 240 },
  { name: 'Feb', users: 300, courses: 139 },
  { name: 'Mar', users: 200, courses: 980 },
  { name: 'Apr', users: 278, courses: 390 },
  { name: 'May', users: 189, courses: 480 },
  { name: 'Jun', users: 239, courses: 380 },
  { name: 'Jul', users: 349, courses: 430 },
];

const categoryData = [
  { name: 'DeFi', count: 65 },
  { name: 'NFTs', count: 45 },
  { name: 'Smart Contracts', count: 80 },
  { name: 'Cryptography', count: 35 },
  { name: 'Tokenomics', count: 55 },
];

const DashboardPage: React.FC = () => {
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

  return (
    <DashboardLayout isOpen={isOpen} toggleSidebar={toggleSidebar}>
      <motion.div 
        className="p-4 lg:p-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
        
        {/* Stats Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between ">
                <CardTitle className="text-sm font-medium pt-3">Total Users</CardTitle>
                <Users className="h-4 w-4 text-[#FFF00A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,348</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between ">
                <CardTitle className="text-sm font-medium pt-3">Active Courses</CardTitle>
                <BookOpen className="h-4 w-4 text-[#FFF00A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">249</div>
                <p className="text-xs text-muted-foreground">+4% from last month</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between ">
                <CardTitle className="text-sm font-medium pt-3">Avg. Completion Time</CardTitle>
                <Clock className="h-4 w-4 text-[#FFF00A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.3h</div>
                <p className="text-xs text-muted-foreground">-2h from last month</p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between ">
                <CardTitle className="text-sm font-medium pt-3">Certifications</CardTitle>
                <Award className="h-4 w-4 text-[#FFF00A]" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">587</div>
                <p className="text-xs text-muted-foreground">+18% from last month</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
        
        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <motion.div variants={item}>
            <Card>
              <CardHeader className='pt-8'>
                <CardTitle>User Growth & Course Creation</CardTitle>
                <CardDescription>Monthly activity over the last 7 months</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={userActivityData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="users" 
                      stroke="#00113D" 
                      activeDot={{ r: 8 }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="courses" 
                      stroke="#FFF00A" 
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={item}>
            <Card>
              <CardHeader className='pt-8'>
                <CardTitle>Course Categories</CardTitle>
                <CardDescription>Distribution by blockchain topics</CardDescription>
              </CardHeader>
              <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={categoryData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#00113D" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
};

export default DashboardPage;