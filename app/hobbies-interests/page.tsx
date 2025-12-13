"use client"

import { Card } from "@/components/ui/card"
import {
  Camera,
  TrendingUp,
  Activity,
  Award,
  Palette,
  Sparkles,
  ExternalLink,
} from "lucide-react"

export default function HobbiesPage() {
  const hobbies = [
    {
      title: "Content Creation",
      description:
        "Building authentic social media content covering lifestyle moments, restaurant experiences, and corporate journeys, with an emphasis on meaningful audience engagement.",
      icon: <TrendingUp className="w-5 h-5" />,
      accentColor: "text-blue-600",
      borderColor: "border-blue-200",
      bgColor: "bg-blue-50",
      image: "content_creation.jpg",
      stats: ["1400+ Engaged Followers", "700k+ Monthly Views"],
      tags: ["Social Media", "Photography/Videography", "Brand Projects"],
      instagram: "https://www.instagram.com/lifeofvishakha",
    },
    {
      title: "Photography",
      description:
        "Capturing moments that tell compelling stories through photos and videos by focusing on human emotions, subtle details, and authentic experiences. The goal is to preserve real moments and translate them into visual narratives that feel personal, engaging, and timeless.",
      icon: <Camera className="w-5 h-5" />,
      accentColor: "text-rose-600",
      borderColor: "border-rose-200",
      bgColor: "bg-rose-50",
      image: "photography.jpg",
      tags: ["Portraits", "Travel", "Events"],
      portfolio:
        "https://drive.google.com/file/d/1IHihn262asyeONon_NI3cJl4twUC6Uq1/view?usp=sharing",
    },
    {
      title: "Sports",
      description: "Staying active, competitive, and having fun.",
      icon: <Activity className="w-5 h-5" />,
      accentColor: "text-green-600",
      borderColor: "border-green-200",
      bgColor: "bg-green-50",
      image: "sports.jpg",
      tags: ["Chess", "Football", "Skating", "Hiking", "Cricket"],
    },
    {
      title: "Art",
      description: "Expressing ideas through drawing, painting, and crafts.",
      icon: <Palette className="w-5 h-5" />,
      accentColor: "text-purple-600",
      borderColor: "border-purple-200",
      bgColor: "bg-purple-50",
      image: "art.jpg",
      tags: ["Painting", "Sketching"],
    },
  ]

  return (
    <div className="min-h-screen bg-[#f9f5eb] dark:bg-gray-900 text-gray-800 dark:text-gray-200 relative">
      <main className="relative pt-32 pb-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-0.5 bg-amber-400 dark:bg-amber-500"></div>
            <Sparkles className="w-6 h-6 text-amber-500 dark:text-amber-400" />
            <div className="w-12 h-0.5 bg-amber-400 dark:bg-amber-500"></div>
          </div>

          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Creative{" "}
            <span className="italic text-rose-600 dark:text-rose-400">
              Pursuits
            </span>
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Exploring creativity and passion through my hobbies, from photography
            and art to sports and strategy
          </p>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {hobbies.map((hobby, idx) => (
              <Card
                key={idx}
                className={`bg-white/90 dark:bg-gray-800/80 border ${hobby.borderColor} dark:border-gray-700 rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl transition-all`}
              >
                {/* Image */}
                <div className="w-full aspect-3/2">
                  <img
                    src={hobby.image}
                    alt={hobby.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Content */}
                <div className="px-6 py-4 flex flex-col flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className={`text-xl font-bold ${hobby.accentColor}`}>
                      {hobby.title}
                    </h3>
                    <div
                      className={`w-8 h-8 ${hobby.bgColor} dark:bg-gray-700 rounded-full flex items-center justify-center shadow-md`}
                    >
                      {hobby.icon}
                    </div>
                  </div>

                  {/* JUSTIFIED TEXT */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 flex-1 text-justify">
                    {hobby.description}
                  </p>

                  {/* Tags */}
                  {hobby.tags && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {hobby.tags.map((tag, i) => (
                        <span
                          key={i}
                          className={`px-2 py-0.5 text-xs rounded-full ${hobby.bgColor} dark:bg-gray-700 ${hobby.accentColor}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Stats */}
                  {hobby.stats && (
                    <div className="space-y-1 mt-2">
                      {hobby.stats.map((stat, i) => (
                        <p
                          key={i}
                          className="text-xs flex items-center gap-2 text-gray-700 dark:text-gray-200"
                        >
                          <Award className="w-4 h-4 text-amber-500" />
                          {stat}
                        </p>
                      ))}
                    </div>
                  )}

                  {/* Highlighted Links */}
                  {(hobby.instagram || hobby.portfolio) && (
                    <div className="flex gap-3 mt-4 flex-wrap">
                      {hobby.instagram && (
                        <a
                          href={hobby.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-full 
                                     bg-blue-50 text-blue-700 border border-blue-200
                                     hover:bg-blue-100 transition"
                        >
                          View Instagram
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}

                      {hobby.portfolio && (
                        <a
                          href={hobby.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-full 
                                     bg-rose-50 text-rose-700 border border-rose-200
                                     hover:bg-rose-100 transition"
                        >
                          View Photography Portfolio
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
