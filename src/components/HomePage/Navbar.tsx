'use client';
import { Button } from "@/components/ui/button";
import { Zap, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeToggle } from "../ThemeMode";
import { usePathname } from 'next/navigation'; // Add this import

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname(); // Get current path
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Learning", href: "/learning" },
    { name: "Contact", href: "/contact" },
    { name: "Gallery", href: "/gallery" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#00113D]/95 backdrop-blur-md shadow-lg text-slate-100" : "bg-slate-50 shadow-lg text-[#00113D]"}`}>
      <nav className="container mx-auto pr-4 flex justify-between items-center">
        {/* Logo with brand colors */}
        <Link href="/" className="flex bg-slate-50 py-2 px-4 items-center gap-2 group">
          <img src="/logo.png" className="md:w-32 w-24"/>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className={`relative group font-medium transition-colors ${
                pathname === item.href 
                  ? "text-[#FFF00A] underline underline-offset-4 decoration-2" 
                  : "hover:text-[#FFF00A]"
              }`}
            >
              {item.name}
              {pathname !== item.href && (
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFF00A] group-hover:w-full transition-all duration-300"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <Button className="hidden xs:inline-flex bg-[#FFF00A] hover:bg-[#FFF00A]/90 text-[#00113D]">
            Sign Up
          </Button>
          <ThemeToggle/>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <Button variant="outline" className="border-[#FFF00A]">
            Log In
          </Button>
          <Button className="bg-[#FFF00A] hover:bg-[#FFF00A]/90 text-[#00113D] font-bold shadow-lg hover:shadow-[#FFF00A]/30">
            Sign Up
          </Button>
          <ThemeToggle/>
        </div>
       
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-[#00113D] text-slate-100 shadow-xl rounded-b-lg py-4 px-6 animate-in fade-in slide-in-from-top-5">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`py-3 px-4 rounded-lg transition-colors font-medium ${
                    pathname === item.href
                      ? "bg-[#FFF00A] text-[#00113D]"
                      : "hover:bg-[#FFF00A] hover:text-[#00113D]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-[#FFF00A]/20">
                <Button variant="outline" className="border-[#FFF00A]">
                  Log In
                </Button>
                <Button className="bg-[#FFF00A] hover:bg-[#FFF00A]/90 text-[#00113D] font-bold">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}