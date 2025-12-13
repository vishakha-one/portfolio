"use client"

import { Card } from "@/components/ui/card"

export default function Education() {
  const education = [
    {
      school: "Vishwakarma Institute of Information Technology, Pune",
      degree: "B.Tech Computer Engineering",
      years: "2021 – 2024",
      gpa: "CGPA: 9.26/10",
      coursework: [
        "Probability and Statistics",
        "Advanced Data Structures",
        "Software Engineering & Project Management",
        "Data Science & Machine Learning",
        "Business Intelligence & Data Analytics",
        "Agile Methodology and DevOps",
        "Engineering Economics and FinTech",
        "Software Design and Architecture",
        "Project Management: Planning, Execution, Evaluation & Control",
        "Social Media Analytics",
      ],
      achievements: [
        "Batch Representative",
        "Event Management",
        "Leadership"
      ],
    },
    {
      school: "All India Shri Shivaji Memorial Society's Polytechnic, Pune",
      degree: "Diploma – Computer Engineering",
      years: "2018 – 2021",
      gpa: "Percentage: 96.23%",
      coursework: [
        "Data Structures",
        "Database Management Systems",
        "Operating Systems",
        "Mobile Application Development",
      ],
      achievements: [
        "Department Top 5",
        "Class Representative",
      ],
    },
    {
      school: "St. Francis De Sales School, Pune",
      degree: "Secondary",
      years: "2008 – 2018",
      gpa: "Percentage: 87.20%",
      coursework: [],
      achievements: [
        "Foundational Development",
        "Student Council Prefect",
        "Anchoring & Cultural Activities",
        "Extracurricular Participation"
      ],
    },
  ]

  const splitArray = (arr: string[]) => {
    const mid = Math.ceil(arr.length / 2)
    return [arr.slice(0, mid), arr.slice(mid)]
  }

  return (
    <div className="pt-25 pb-20 bg-muted/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-2">Education</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col items-center">

          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-linear-to-b from-primary via-accent to-primary opacity-30"></div>

          <div className="space-y-16 w-full">
            {education.map((edu, index) => {
              const [leftColumn, rightColumn] = splitArray(edu.coursework)
              return (
                <div key={index} className="relative flex justify-center">
                  <div className="w-full md:w-7/12 relative">
                    <Card className="p-8 border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 group cursor-pointer h-full">

                      {/* Header Section */}
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-lg text-foreground font-semibold">{edu.school}</p>
                          <p className="text-sm text-primary font-semibold mt-1">{edu.gpa}</p>
                        </div>

                        <div className="text-sm text-muted-foreground font-semibold ml-4 whitespace-nowrap">
                          {edu.years}
                        </div>
                      </div>

                      {/* Coursework */}
                      {edu.coursework.length > 0 && (
                        <div className="mt-6 w-full">
                          <p className="text-sm font-semibold text-foreground mb-2">Relevant Coursework:</p>
                          <div className="grid md:grid-cols-2 gap-x-8 gap-y-1 text-sm text-muted-foreground w-full">
                            <ul className="list-disc list-outside space-y-1">
                              {leftColumn.map((item, i) => (
                                <li key={i} className="ml-4">{item}</li>
                              ))}
                            </ul>
                            <ul className="list-disc list-outside space-y-1">
                              {rightColumn.map((item, i) => (
                                <li key={i} className="ml-4">{item}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}

                      {/* Achievements */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {edu.achievements.map((achievement, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 rounded-full bg-secondary/50 text-foreground border border-border"
                          >
                            {achievement}
                          </span>
                        ))}
                      </div>

                    </Card>
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </div>
  )
}
