"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen pt-24 pb-12 flex items-center bg-linear-to-br from-background via-background to-secondary/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-sm font-semibold text-foreground">
                Engineering • People • Growth
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Hi, I’m <span className="text-primary">Vishakha</span>
            </h1>

            <div className="space-y-4 max-w-xl text-justify">
              <p className="text-lg text-muted-foreground">
                An engineer who enjoys solving problems, simplifying chaos,
                and building solutions that create real impact.
              </p>

              <p className="text-lg text-muted-foreground">
                I work at the intersection of data and systems. At BNY, I automate
                workflows and drive AI initiatives, while my research and leadership
                work reflect a focus on purposeful innovation.
              </p>

              <p className="text-lg text-muted-foreground">
                Driven by curiosity, thoughtful leadership, and continuous improvement,
                I believe engineering paired with empathy can transform how people
                and organizations work.
              </p>
            </div>

            <Button size="lg" onClick={() => router.push("/contact")}>
              Get in Touch
            </Button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border border-primary/30 bg-primary/10 shadow-lg">
              <Image
                src="/profile_photo.jpg"
                alt="Vishakha profile photo"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
