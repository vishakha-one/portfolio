"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Skills() {
  const skillCategories = [
    {
      title: "Technical Skills",
      skills: [
        "Python",
        "JavaScript",
        "React JS",
        "SQL",
        "Hadoop",
        "Kafka",
        "Data Visualization",
        "Dashboarding",
        "HTML",
        "CSS",
        "MongoDB"
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "GitHub",
        "JIRA",
        "Confluence",
        "AWS",
        "Docker",
        "Linux",
        "Advanced Excel",
        "Google Cloud",
        "MS Access",
        "Autosys",
        "MS Power BI",
        "GitLab",
        "Bitbucket",
        "CI/CD"
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        "Critical Thinking",
        "Communication",
        "Problem Solving",
        "Adaptability",
        "Innovation",
        "Goal-Oriented"
      ],
    },
    {
      title: "Leadership & Management",
      skills: [
        "Team Leadership",
        "Project Management",
        "Strategic Planning",
        "Cross-functional Collaboration",
        "Decision Making"
      ],
    },
  ];

  const certifications = [
    {
      name: "Advanced SQL for Data Scientists",
      link: "https://drive.google.com/file/d/1zCmkCWtqRAsTv_Z1k0SfLT8sqrVqhQhs/view?usp=drive_link",
    },
    {
      name: "Learning Hadoop",
      link: "https://drive.google.com/file/d/15ozulq3fpVO7XhP_Jd8lX8CmLddoTVPC/view?usp=sharing",
    },
    {
      name: "Power BI: Integrating AI and Machine Learning",
      link: "https://drive.google.com/file/d/1xkKYfFA_9UYTqi_9s5JvHyVLouIf4RXU/view?usp=sharing",
    },
    {
      name: "Master Microsoft Power BI",
      link: "https://drive.google.com/file/d/12uwg2-mBxdLOolowPVB51YxOvRJ1R5EF/view?usp=sharing",
    },
    {
      name: "Master SQL for Data Science",
      link: "https://drive.google.com/file/d/1LfezbRbUxJpN3fb5TWc_TCy2PvnCHBZT/view?usp=sharing",
    },
    {
      name: "Innovating with Data and Google Cloud",
      link: "https://drive.google.com/file/d/1tFWAjG58OWP5K5nCwcKhvob_debRrdsh/view?usp=sharing",
    },
    {
      name: "LinkedIn Power BI Data Modeling with DAX",
      link: "https://drive.google.com/file/d/1CgfhoT6MpVz0O3j5PbclBtbqawqnQz5F/view?usp=sharing",
    },
    {
      name: "Simplilearn Agile Certified Practitioner",
      link: "https://drive.google.com/file/d/1qZgFZP_lMoneX6wKj4rExxMqTtl3aoii/view?usp=sharing",
    },
        {
      name: "Learning FullStack JavaScript Development (MongoDB, Node, React)",
      link: "https://drive.google.com/file/d/1QIRcX4NJP-ILoNaJlUfi_rc6HOWxfz4C/view?usp=sharing",
    },
    {
      name: "McKinsey Forward Program",
      link: "#",
    },
  ];

  return (
    <div className="pt-25 py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Skills Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-2">Skills</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-border hover:border-primary/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-primary mb-4 pb-3 border-b border-border">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-background border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    <p className="text-sm font-medium text-foreground">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
            Certifications
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-8"></div>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, idx) => (
              <Card
                key={idx}
                className="p-4 border border-border hover:shadow-lg transition-shadow flex flex-col items-start gap-3"
              >
                <p className="text-sm font-semibold text-primary">
                  {cert.name}
                </p>

                <Button size="sm" variant="outline" asChild>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </Button>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
