"use client"

import { Card } from "@/components/ui/card"

export default function LeadershipPage() {
  // Leadership roles
  const leadershipRoles = [
    {
      title: "Board Member, Jobs Co-Convenor & Regional Ambassador",
      organization: "JITO Youth-Wing Pune",
      period: "Aug 2024 – Present",
      description:
        "Working as a Member of the Board of Directors and leading professional development initiatives for youth engagement.",
      responsibilities: [
        "Co-led professional development and job networking initiatives",
        "Organized events, coordinated teams, and engaged with the community for career support",
        "Serving as Member of the Board of Directors since Feb 2025",
      ],
      image: "jito.jpg",
    },
    {
      title: "Lead & Documentation Head",
      organization: "Association of Computer Machinery (ACM), VIIT Pune Chapter",
      period: "Aug 2022 – Jun 2024",
      description:
        "Led documentation, knowledge-sharing, and coordination of student technical initiatives.",
      responsibilities: [
        "Managed documentation workflows and technical records",
        "Supported student-led technical projects and events",
        "Enabled structured knowledge sharing across teams",
      ],
      image: "acm.jpg",
    },
    {
      title: "Founding Leadership Team & Content Head",
      organization: "Office of International Relations, VIIT Pune Chapter",
      period: "Jul 2022 – May 2024",
      description:
        "Part of the founding leadership team driving international academic collaborations.",
      responsibilities: [
        "Developed content for international programs and partnerships",
        "Coordinated outreach and communication initiatives",
        "Supported execution of international engagement programs",
      ],
      image: "oir.jpg",
    },
    {
      title: "Co-Lead",
      organization: "Unnat Bharat Abhiyan Program, NSS-VIIT",
      period: "Nov 2022 – Jun 2024",
      description:
        "Led rural outreach and community development initiatives under the UBA program.",
      responsibilities: [
        "Led rural education and community development projects",
        "Improved access to education and local resources",
        "Coordinated student volunteers and outreach activities",
      ],
      image: "unnat_bharat.jpg",
    },
    {
      title: "Campus Ambassador (Indigo Squad Member)",
      organization: "IIT Bombay – Mood Indigo",
      period: "Jul 2023 – Sept 2024",
      description:
        "Represented Asia’s largest cultural festival at the campus level.",
      responsibilities: [
        "Represented Mood Indigo on campus",
        "Assisted with coordination and engagement activities",
        "Promoted cultural and student participation initiatives",
      ],
      image: "mood_indigo.jpg",
    },
    {
      title: "Sponsorship Team Member",
      organization: "Gandharva, VIIT Pune",
      period: "Dec 2022 – Feb 2023",
      description:
        "Supported sponsorship outreach for the annual college cultural festival.",
      responsibilities: [
        "Assisted in sponsorship outreach initiatives",
        "Supported event coordination and execution",
      ],
      image: "gandharva.jpg",
    },
  ]

  // Volunteering / Social Impact
  const volunteeringRoles = [
    {
      title: "Board Member & Social Media Manager",
      organization: "JITO Health",
      description:
        "Driving digital outreach and awareness for community health initiatives.",
      responsibilities: [
        "Managing social media campaigns and initiatives",
        "Supporting community health programs and awareness drives",
      ],
      image: "jito_health.jpg",
    },
    {
      title: "Volunteer",
      organization: "BNY Employee Business Resource Groups – WIN, GenEdge & Impact",
      description:
        "Supporting inclusion, mentorship, and social-impact programs within the organization.",
      responsibilities: [],
      image: "ebrg.jpg",
    },
    {
      title: "Volunteer",
      organization: "Robin Hood Army",
      description:
        "Participated in education and food distribution drives for underprivileged communities.",
      responsibilities: [],
      image: "robin_hood.jpg",
    },
    {
      title: "Member",
      organization: "Google Women Techmakers",
      description: "Active participant in women-in-tech community initiatives.",
      responsibilities: [],
      image: "wtm.jpg",
    },
    {
      title: "Member",
      organization: "Women Who Code Pune",
      description: "Engaged in learning, networking, and mentorship programs.",
      responsibilities: [],
      image: "wwc.jpg",
    },
    {
      title: "Member",
      organization: "WomenTech Network",
      description: "Contributor to global women-in-technology initiatives.",
      responsibilities: [],
      image: "wtn.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-25">
        {/* Page Heading */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-2">
            Leadership & Volunteering
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
        </div>

        {/* Leadership Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-4">Leadership</h3>
          <div className="grid gap-12 md:grid-cols-2">
            {leadershipRoles.map((role, idx) => (
              <Card
                key={idx}
                className="group hover:shadow-xl transition-shadow border border-border rounded-2xl overflow-hidden"
              >
                {role.image && (
                  <div className="w-full aspect-3/2 overflow-hidden">
                    <img
                      src={role.image}
                      alt={role.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {role.title}
                      </h4>
                      <p className="text-lg text-muted-foreground font-semibold mt-1">
                        {role.organization}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground font-semibold">
                      {role.period}
                    </span>
                  </div>

                  <p className="text-muted-foreground">{role.description}</p>

                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">
                      Key Responsibilities:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {role.responsibilities.map((resp, i) => (
                        <li key={i}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Volunteering Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Volunteering & Tech Community
          </h3>
          <div className="grid gap-12 md:grid-cols-2">
            {volunteeringRoles.map((role, idx) => (
              <Card
                key={idx}
                className="group hover:shadow-xl transition-shadow border border-border rounded-2xl overflow-hidden"
              >
                {role.image && (
                  <div className="w-full aspect-3/2 overflow-hidden">
                    <img
                      src={role.image}
                      alt={role.title}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col gap-4">
                  <h4 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {role.title}
                  </h4>
                  <p className="text-lg text-muted-foreground font-semibold">
                    {role.organization}
                  </p>
                  <p className="text-muted-foreground">{role.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
