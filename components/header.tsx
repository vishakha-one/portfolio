"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";  
import Image from "next/image";
 // ✅ NEW IMPORT

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();                // ✅ GET CURRENT PATH

  const isDark = resolvedTheme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/home" },
    { label: "Education", href: "/education" },
    { label: "Experience", href: "/experience" },
    { label: "Projects", href: "/projects" },
    { label: "Skills & Certifications", href: "/skills" },
    { label: "Leadership & Volunteering", href: "/leadership-volunteering" },
    { label: "Hobbies & Interests", href: "/hobbies-interests" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm border-gray-300"
          : "bg-transparent border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          <Image
            src="/logo.png"
            alt="Vishakha Logo"
            width={90}
            height={90}
            className="pointer-events-none select-none"
          />


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  px-3 py-2 text-sm font-medium transition-colors whitespace-pre-line text-center
                  ${pathname === item.href 
                    ? "text-primary font-semibold"   // ✅ ACTIVE LINK
                    : "text-foreground hover:text-primary"
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">

            {/* Theme toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="rounded-full p-2"
              aria-label="Toggle theme"
              title={isDark ? "Switch to Light" : "Switch to Dark"}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </Button>

            {/* Resume */}
            <a href="https://drive.google.com/file/d/1wU4CqlyW5ToYDkXV3i4DhOJTNbz4bhiz/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="hidden sm:flex gap-2">
                Resume
              </Button>
            </a>

            {/* Mobile menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 mt-2 rounded-xl border border-border bg-background/95 shadow-lg backdrop-blur-md">
            <div className="space-y-2 p-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    block px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-pre-line text-center
                    ${pathname === item.href
                      ? "text-primary font-semibold bg-primary/5"
                      : "text-foreground hover:bg-secondary"
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )} 
      </div>
    </header>
  );
}
