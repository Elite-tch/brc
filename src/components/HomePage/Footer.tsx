import { Globe,  Twitter,  Zap } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className=" pt-16 pb-8 text-slate-100 bg-[#00113D] px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex justify-between mb-12 md:flex-row ">
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Partners</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Learning Paths</a></li>
             <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Events & Webinars</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-slate-800">
          <div className="mt-4 md:mt-0 text-slate-500 text-sm">
            © {new Date().getFullYear()} Blockchain Revolution Community. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}