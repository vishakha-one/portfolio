"use client"

import { Card } from "@/components/ui/card"
import { Mail, LinkedinIcon } from "lucide-react"

export default function Contact() {
  const contactMethods = [
    {
      label: "Email",
      value: "vishakhavchangedia@gmail.com",
      href: "mailto:vishakhavchangedia@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/vishakhavchangedia",
      href: "https://www.linkedin.com/in/vishakhachangedia",
    },
  ]

  return (
    <div className="pt-25 py-20 bg-muted/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-2">
            Get in Touch
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
        </div>

        {/* Contact Information */}
        <Card className="p-6 rounded-xl border border-border/70 bg-card">
          <p className="text-lg text-muted-foreground mb-6 text-center">
            Feel free to reach out through any of the contacts below:
          </p>

          <div className="grid gap-4">
            {contactMethods.map(({ label, value, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors text-primary shrink-0">
                    {label === "Email" && <Mail className="w-5 h-5" />}
                    {label === "LinkedIn" && <LinkedinIcon className="w-5 h-5" />}
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">
                      {label}
                    </p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Card>

      </div>
    </div>
  )
}
