// src/components/DashboardLayout.tsx
'use client';
import Navbar from '../HomePage/Navbar';
import React, { ReactNode } from 'react';
import Sidebar from '@/components/admin/sidebar';


interface DashboardLayoutProps {
  children: ReactNode;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ 
  children, 
  isOpen, 
  toggleSidebar 
}) => {
  return (
   
      <div>
<Navbar/>
        <div className="flex md:flex-row flex-col  h-screen bg-slate-100 dark:bg-[#00113D] ">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}  />
        
        <div className="flex-1 overflow-auto">
          <main>{children}</main>
        </div>
      </div>
      </div>
   
  );
};

export default DashboardLayout;