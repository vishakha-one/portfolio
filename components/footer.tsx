"use client"

import { Mail, LinkedinIcon } from "lucide-react"

export default function FooterMinimal() {
  const currentYear = new Date().getFullYear()
  const lastUpdated = "December 2025"

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground py-8 text-center">
      
      {/* Social icons */}
      <div className="flex justify-center gap-6 mb-4">
        
        <a
          href="mailto:vishakhavchangedia@gmail.com"
          aria-label="Email"
          className="group p-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 hover:border-white transition"
        >
          <Mail className="w-5 h-5 text-primary-foreground group-hover:text-white transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/vishakhachangedia"
          target="_blank"
          aria-label="LinkedIn"
          // rel="noopener noreferrer"
          className="group p-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 hover:border-white transition"
        >
          <LinkedinIcon className="w-5 h-5 text-primary-foreground group-hover:text-white transition" />
        </a>
      </div>

      {/* Line */}
      <p className="text-sm font-medium mb-2">
        Growing, experimenting, and creating with purpose.
      </p>

      {/* Copyright */}
      <p className="text-xs opacity-90">
        © {currentYear} Vishakha • Last updated: {lastUpdated}
      </p>
    </footer>
  )
}
